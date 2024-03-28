<template>
  <topline>
    <template #headline>
      <logo />
      <mainMenu :avatarUrl="user.data.avatar_url"/>
    </template>
    <template #myProfile v-if="screenWidth <= 992">
      <p class="header-user-detail-wrapper">
        <authUserDetails :data="user.data"/>
      </p>
    </template>
  </topline>
  <main class="main">
    <div class="my-profile">
      <div class="my-profile__container">
        <div class="my-profile__wrapper">
          <div class="my-profile__column user-detail-wrapper" v-if="screenWidth >= 992">
            <h1>My profile</h1>
            <authUserDetails :data="user.data"/>
          </div>
          <div class="my-profile__column content-wrapper">
            <div class="my-profile__column-head" v-if="screenWidth > 992">
              <h2 v-if="page === 'repos'">Repositories</h2>
              <h2 v-if="page === 'following'">Following</h2>
              <span v-if="page === 'repos'">{{user.data.public_repos}}</span>
              <span v-if="page === 'following'">{{user.data.following}}</span>
            </div>
            <myRepos v-if="page === 'repos'"/>
            <myFollowing v-if="page === 'following'"/>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
  import { defineComponent } from "vue";

  import { mapState, mapActions, mapGetters } from "vuex";

  import topline from "../components/topline.vue";
  import logo from "../components/logo.vue";
  import mainMenu from "../components/mainMenu.vue";
  import authUserDetails from "../components/authUserDetails.vue";
  import myFollowing from "../components/myFollowing.vue";
  import myRepos from "../components/myRepos.vue";

  export default defineComponent({
    name: "myProfile",

    components: {
      topline,
      mainMenu,
      logo,
      authUserDetails,
      myFollowing,
      myRepos,
    },

    watch: {
      '$route.params.page'(newPage) {
        this.page = newPage;
      }
    },

    data() {
      return {
        page: "Repositories",
        screenWidth: window.innerWidth,
      }
    },

    computed: {
      ...mapState({
        user: (state) => state.user,
      }),
    },

    methods: {
      updateScreenWidth() {
        this.screenWidth = window.innerWidth;
      },
    },

    created() {
      this.page = this.$route.params.page ? this.$route.params.page : "repos"
      window.addEventListener('resize', this.updateScreenWidth);
    },
    destroyed() {
      window.removeEventListener('resize', this.updateScreenWidth);
    },
  });
</script>

<style lang="scss" scoped>
  .header-user-detail-wrapper {
    margin: 40px 0 0 0;
  }

  .my-profile {
    border-top: 1px solid #d3d3d3;
    overflow: hidden;

		&__container {
      max-width: 1240px;
      padding: 0 20px;
      margin: 0 auto;
    }

    &__wrapper {
      display: flex;
      min-height: 100%;
    }

    h1 {
      font-size: 26px;
      font-weight: 700;
      margin: 0 0 20px 0;
      word-wrap: break-word;
    }

    h2 {
      font-size: 26px;
      font-weight: 700;
      margin: 0 0 30px 0;
      word-wrap: break-word;
    }

    h3 {
      font-size: 26px;
      font-weight: 700;
      margin: 0 0 12px 0;
      word-wrap: break-word;
    }

    &__column {
      padding: 40px 0 0 0;
      box-sizing: border-box;
      min-height: calc(100vh - 107px);

      @media(max-width: 992px) {
        min-height: auto;
      }


      &.user-detail-wrapper {
        flex: 0 0 30%;
        padding-right: 10px;

        position: sticky;
        top: 20px
      }

      &.content-wrapper {
        flex: 0 0 70%;
        border-left: 1px solid #d3d3d3;
        padding-left: 75px;

        @media(max-width: 992px) {
          flex: 0 0 100%;
          padding: 0;
          border: 0;
          margin: 24px 0 0 0;
        }
      }
    }

    &__column-head {
      display: flex;
      justify-content: space-between;
      
      span {
        font-size: 18px;
        font-weight: 700;
        color: #9e9e9e;
      }
    }
}

</style>
