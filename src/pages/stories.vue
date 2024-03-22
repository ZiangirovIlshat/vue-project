<template>
  <div class="stories">
    <header class="stories__header">
      <logoLight />
      <button class="stories__close-btn" @click="close()">
        <svg class="menu__icon" viewBox="0 0 24 24" width="24" height="24">
          <use href="../assets/sprite.svg#close" x="0" y="0"></use>
        </svg>
      </button>
    </header>

    <div class="stories__loader" v-if="posts.loading"><loader /></div>

    <div class="slider" v-else>
      <button 
        class="slider__buttons prev"
        v-if="activeSlide > 0"
        @click="prevBtnClick()"
      >
        <svg class="menu__icon" viewBox="0 0 24 24" width="24" height="24">
          <use href="../assets/sprite.svg#prev" x="0" y="0"></use>
        </svg>
      </button>
      <div class="slider__row">
        <ul class="slider__items" ref="sliderRow">
          <li
            v-for="(postData, index) in getUnstarredOnly"
            :key="postData.id"
            @click="switchSlider(index)"
          >
            <div
              class="slider__slide-wrapper"
              :class="{ __active: activeSlide === index }"
            >
              <sliderItem
                :active="activeSlide === index"
                :loading="activeSlide === index && activeSlideLoading"
                :sliderData="getDataForActiveSlide(postData)"
                @animationFinished="switchToNextSlider"
              />
            </div>
          </li>
        </ul>
      </div>
      <button
        class="slider__buttons next"
        v-if="activeSlide < (getUnstarredOnly - 1)"
        @click="nextBtnClick()"
      >
        <svg class="menu__icon" viewBox="0 0 24 24" width="24" height="24">
          <use href="../assets/sprite.svg#next" x="0" y="0"></use>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

import { mapState, mapActions, mapGetters } from "vuex";

import logoLight from "../components/logoLight";
import sliderItem from "../components/sliderItem";
import loader from "../components/loader";

export default defineComponent({
  name: "stories",

  components: {
    logoLight,
    sliderItem,
    loader,
  },

  data() {
    return {
      activeSlide: 0,
      activeSlideLoading: false,
      sliderItemError: "",
    };
  },

  computed: {
    ...mapState({
      posts: (state) => state.posts,
    }),
    ...mapGetters(["getUnstarredOnly"])
  },
  methods: {
    ...mapActions({
      fetchPosts: "posts/fetchPosts",
      fetchReadme: "posts/fetchReadme",
    }),

    getDataForActiveSlide(obj) {
      return {
        id: obj.id,
        ownerLogin: obj.owner.login,
        ownerAvatar: obj.owner.avatar_url,
        name: obj.name,
        content: obj.readme,
        error: this.sliderItemError,
      };
    },

    switchToNextSlider() {
      if(this.activeSlide === (this.getUnstarredOnly.length - 1)) this.activeSlide = -1
      this.activeSlide++
      this.moveSlider()
    },

    prevBtnClick() {
      this.activeSlide--;
      this.moveSlider();
    },

    nextBtnClick() {
      this.activeSlide++;
      this.moveSlider();
    },

    switchSlider(index) {
      if (index !== this.activeSlide) {
        this.activeSlide = index;
        this.moveSlider();
      }
    },

    moveSlider() {
      this.$refs.sliderRow.style = `transform: translate(-${338 * this.activeSlide}px);`;
      this.getActiveSlideData();
    },

    async getActiveSlideData() {
      this.activeSlideLoading = true;
      try {
        const { id, owner, name } = this.getUnstarredOnly[this.activeSlide];
        await this.fetchReadme({ id, owner: owner.login, name });
      } catch {
        this.sliderItemError = "readme файл не обнаружен";
      } finally {
        this.activeSlideLoading = false;
      }
    },

    close() {
      this.$router.go(-1);
    },
  },

  created() {
    this.activeSlide = Number(this.$route.params.initialSlide);
    this.fetchPosts().then(() => {
      this.moveSlider();
    });
  },
});
</script>

<style lang="scss" scoped>
.stories {
  background-color: #101010;
  min-height: 100vh;

  @media (max-width: 576px) {
    max-height: 100vh;
  }

  &__header {
    max-width: 1220px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 45px 10px 0 10px;

    @media (max-width: 576px) {
      padding: 20px 10px 0 10px;
    }
  }

  &__close-btn {
    cursor: pointer;

    svg {
      @media (max-width: 576px) {
        width: 18px;
        height: 18px;
      }
    }
  }

  &__loader {
    display: flex;
    justify-content: center;
    margin: 40px 0 0 0;
  }
}

.slider {
  position: relative;

  &__buttons {
    content: "";
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: calc(50% - 22px);
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background-color: #fff;
    border: 1px solid;
    cursor: pointer;
    z-index: 2;

    svg {
      fill: #404040;
    }

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        svg {
          fill: #31ae54;
        }
      }
    }
  }

  &__row {
    overflow: hidden;
    margin-top: 90px;

    @media (max-width: 576px) {
      margin-top: 20px;
    }
  }

  &__items {
    margin-left: calc(50% - 187.5px);
    display: flex;
    align-items: center;
    gap: 38px;
    transition: 0.3s;

    @media (max-width: 576px) {
      margin-left: calc(50% - 40vw);
    }
  }

  &__slide-wrapper {
    height: 538px;
    width: 300px;
    border-radius: 15px;
    overflow: hidden;
    opacity: 0.7;

    &.__active {
      height: 667px;
      width: 375px;
      opacity: 1;

      @media (max-width: 576px) {
        height: 80vh;
        width: 80vw;
      }
    }

    background: #fff;
  }
}

.prev {
  left: calc(50% - 240px);
  @media (max-width: 576px) {
    left: calc(50% - 50vw);
  }
}
.next {
  right: calc(50% - 240px);
  @media (max-width: 576px) {
    right: calc(50% - 50vw);
  }
}
</style>
