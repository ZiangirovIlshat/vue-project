<template>
  <div class="my-following">
    <div class="my-following__loading" v-if="following.loading"><loader /></div>
    <div class="my-following__error" v-else-if="following.error" v-html="following.error"></div>
    <div class="my-following__data" v-else-if="following.data">
      <div class="my-following__no-data" v-if="following.data.length === 0">
          <p>У вас нет активных подписок</p>
        </div>
      <div v-for="item in following.data" :key="item.id">
        <div class="my-following__item">
          <userDetails :avatarUrl="item.avatar_url" :userName="item.login" :userRole="item.type" />
          <xButton>follow</xButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

import loader from "../components/loader.vue";
import userDetails from "../components/userDetails.vue";
import xButton from "../components/xButton.vue";

export default defineComponent({
  components: {
    loader,
    userDetails,
    xButton,
  },

  setup() {
    const store = useStore();
    const user = computed(() => store.state.user);
    const following = computed(() => store.state.following);

    const fetchFollowing = () => {
      store.dispatch("following/fetchFollowing");
    };

    fetchFollowing();

    return {
      user,
      following,
    };
  },
});
</script>

<style lang="scss" scoped>
.my-following {

  &__loading {
    display: flex;
    justify-content: center;
    margin: 40px 0 0 0;
  }

	&__error {
    font-size: 20px;
    text-align: center;
	}

  &__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 32px 0;
  }
}

</style>
