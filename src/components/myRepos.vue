<template>
  <div class="my-repos">
      <div class="my-repos__loading" v-if="repos.loading"><loader /></div>
      <div class="my-repos__error" v-else-if="repos.error" v-html="repos.error"></div>
      <div class="my-repos__data" v-else-if="repos.data">
        <div class="my-repos__no-data" v-if="repos.data.length === 0">
          <p>У вас нет активных репозиториев</p>
        </div>
        <div v-for="item in repos.data" :key="item.id">
          <div class="my-repos__repo-item">
            <h3>{{item.name}}</h3>
            <p v-html="item.description"></p>
            <postDetails :stars="item.stargazers_count" :fork="item.forks_count" />
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  import { defineComponent, computed, onMounted } from "vue";
  import { useStore } from "vuex";

  import loader from "../components/loader.vue";
  import postDetails from "../components/postDetails.vue";

  export default defineComponent({
    components: {
      loader,
      postDetails,
    },

    setup() {
      const store = useStore();

      const user = computed(() => store.state.user);
      const repos = computed(() => store.state.repos);

      const fetchRepos = () => {
        store.dispatch("repos/fetchRepos", user.value.data.login);
      };

      onMounted(() => {
        fetchRepos();
      });

      return {
        user,
        repos,
      };
    },
  });
</script>

<style lang="scss" scoped>
  .my-repos {

    &__loading {
      display: flex;
      justify-content: center;
      margin: 40px 0 0 0;
    }

		&__error {
      font-size: 20px;
      text-align: center;
		}

		&__repo-item {
      padding: 32px;
      border: 1px solid #f1f1f1;
      border-radius: 10px;
      box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.04);
      margin: 0 0 20px 0;

      @media(max-width: 768px) {
        padding: 20px;
      }

      h3 {
        margin: 0 0 12px 0;
        font-size: 26px;
        font-weight: 700;

        @media(max-width: 768px) {
          font-size: 22px;
        }
      }

      p {
        margin: 0 0 50px 0;

        @media(max-width: 768px) {
          margin: 0 0 14px 0;
        }
      }
		}
  }
</style>