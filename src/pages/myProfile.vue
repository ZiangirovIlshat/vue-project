<template>
  <topline>
    <template #headline>
      <logo />
      <mainMenu :avatarUrl="user.data.avatar_url"/>
    </template>
  </topline>
  <div class="my-profile">
    <div class="my-profile__container">
      <div class="my-profile__wrapper">
        <div class="my-profile__column">
          <h1>My profile</h1>
          <authUserDetails :data="user.data"/>
        </div>
        <div class="my-profile__column">
          <div class="my-profile__column-head">
            <h2 v-if="$route.params.page === 'repos'">Repositories</h2>
            <h2 v-if="$route.params.page === 'following'">Following</h2>
            <span>{{user.data.public_repos}}</span>
          </div>
          <myRepos/>
          <!-- <myFollowing/> -->
        </div>
      </div>
    </div>
  </div>
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

    props: {
      
    },

    data() {
      return {
        page: "Repositories",
      }
    },

    computed: {
      ...mapState({
        user: (state) => state.user,
      }),
    },
    methods: {

    },

    created() {
      this.page = this.$route.params.page
    }
  });
</script>

<style lang="scss" scoped>
  .my-profile {
    border-top: 1px solid #d3d3d3;

		&__container {
      max-width: 1220px;
      padding: 0 10px;
      margin: 0 auto;
    }

    &__wrapper {
      display: flex;
      max-width: 100%;
    }

    &__column {
      padding: 40px 0 0 0;
      box-sizing: border-box;
    }

    h1 {
      font-size: 26px;
      font-weight: 700;
      margin: 0 0 20px 0;
    }

    h2 {
      font-size: 26px;
      font-weight: 700;
      margin: 0 0 30px 0;
    }

    h3 {
      font-size: 26px;
      font-weight: 700;
      margin: 0 0 12px 0;
    }

    &__column:nth-child(1) {
      flex: 0 0 30%;
    }

		&__column:nth-child(2) {
      flex: 0 0 70%;
      border-left: 1px solid #d3d3d3;
      padding-left: 75px;
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
