<template>
  <div class="slider-item">
    <header class="slider-item__header">
      <div class="slider-item__progress-bar">
        <progressbar
          :active="active && !loading"
          @animationFinished="handleAnimationFinished"
        />
      </div>
      <div class="slider-item__user-details">
        <userDetails
          :userName="sliderData.ownerLogin"
          :avatarUrl="sliderData.ownerAvatar"
        >
        </userDetails>
      </div>
    </header>
    <div class="slider-item__body">
      <div
        class="slider-item__prelouder-wrapper"
        v-if="active === false && !sliderData.content"
      >
        <preloader :count="3" />
      </div>
      <template v-else>
        <div class="slider-item__loader" v-if="loading"><loader /></div>
        <div class="slider-item__content" v-else-if="error"></div>
        <div
          class="slider-item__content"
          v-else-if="sliderData.content"
          v-html="sliderData.content"
        ></div>
      </template>
    </div>
    <p class="slider-item__err-message">{{errMessage}}</p>
    <footer class="slider-item__footer">
      <xButton
        :loading="sliderData.following.loading === true"
        :type="sliderData.following.status ? 'gray' : 'green'"
        @click="$emit(sliderData.following.status ? 'removeStar' : 'setStar', sliderData.id)"
      >
      {{sliderData.following.status ? "unfollow" : "follow"}}
      </xButton>
    </footer>
  </div>
</template>

<script>
import { defineComponent } from "vue";

import progressbar from "../components/progressBar";
import userDetails from "../components/userDetails";
import xButton from "../components/xButton";
import preloader from "../components/preloader";
import loader from "../components/loader";

export default defineComponent({
  name: "sliderItem",

  components: {
    progressbar,
    xButton,
    userDetails,
    preloader,
    loader,
  },

  emits: ["removeStar", "setStar", "animationFinished"],

  props: {
    active: Boolean,
    loading: Boolean,
    error: String,
    sliderData: Object,
  },

  data() {
    return {
      isLiked: false,
      errMessage: "",
      isLoading: false,
    }
  },

  methods: {
    handleAnimationFinished() {
      this.$emit("animationFinished");
    },
  },
});
</script>

<style lang="scss" scoped>
.slider-item {
  display: flex;
  flex-direction: column;
  height: 100%;

  &__header {
    padding: 8px 8px 13px 8px;
  }

  &__progress-bar {
    margin: 0 0 10px 0;
  }

  &__body {
    flex: 1;
    padding: 18px;
    overflow-y: scroll;
    overflow-x: hidden;

    &::-webkit-scrollbar {
      width: 5px;
      height: 5px;
    }
    &::-webkit-scrollbar-track {
      background: #fff;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #afafaf;
      border-radius: 2px;
    }
  }

  &__err-message {
    color: #8B0000;
    font-size: 12px;
    text-align: center;
  }

  &__loader {
    display: flex;
    justify-content: center;
    margin: 40px 0 0 0;
  }


  &__footer {
    padding: 24px 0 32px 0;
    display: flex;
    justify-content: center;
    border-top: 1px solid #cacaca;
  }
}
</style>
