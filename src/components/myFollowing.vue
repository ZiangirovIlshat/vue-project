<template>
  <div class="my-following">
    <div class="my-following__loading" v-if="following.loading"><loader /></div>
    <div class="my-following__error" v-else-if="following.error" v-html="following.error"></div>
    <div class="my-following__data" v-else-if="following.data">
      <div class="my-following__no-data" v-if="following.data.length === 0">
          <p>У вас нет активных подписок</p>
        </div>
      <div v-for="item in following.data" :key="item.id">
        <!-- <pre>
          {{item.type}}
        </pre> -->
        <div class="my-following__item">
          <userDetails :avatarUrl="item.avatar_url" :userName="item.login" :userRole="item.type" />
          <xButton>follow</xButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { defineComponent } from "vue";

  import { mapState, mapActions, mapGetters } from "vuex";

  import loader from "../components/loader.vue";
  import userDetails from "../components/userDetails.vue";
  import xButton from "../components/xButton.vue";

  export default defineComponent({
    components: {
      loader,
      userDetails,
      xButton,
    },

    computed: {
      ...mapState({
        user: (state) => state.user,
        following: (state) => state.following,
      }),
    },

    methods: {
      ...mapActions({
        fetchFollowing: "following/fetchFollowing",
      }),
    },

    created() {
      this.fetchFollowing()
    }
  });
</script>

<style lang="scss" scoped>
.my-following {

  &__loading {
  }

  &__error {
  }

  &__data {
  }

  &__no-data {
  }

  &__item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

</style>
