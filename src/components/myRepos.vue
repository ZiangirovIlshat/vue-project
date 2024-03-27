<template>
  <div class="my-repos">
      <div class="my-repos__loading" v-if="repos.loading"><loader /></div>
      <div class="my-repos__error" v-else-if="repos.error" v-html="repos.error"></div>
      <div class="my-repos__data" v-else-if="repos.data">
        <div v-for="item in repos.data" :key="item.id">
          <div class="my-repos__repo-item">
            <h3>{{item.name}}</h3>
            <p>{{item.description}}</p>
            <postDetails :stars="item.stargazers_count" :fork="item.forks_count" />
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  import { defineComponent } from "vue";

  import { mapState, mapActions, mapGetters } from "vuex";

  import loader from "../components/loader.vue";
  import postDetails from "../components/postDetails.vue";

  export default defineComponent({
    components: {
      loader,
      postDetails,
    },

    computed: {
      ...mapState({
        repos: (state) => state.repos,
      }),
    },

    methods: {
      ...mapActions({
        fetchRepos: "repos/fetchRepos",
      }),

      getDataForPost(item) {
        return {
            
        }
      }
    },

    created() {
      this.fetchRepos()
    }
  });
</script>

<style lang="scss" scoped>
  .my-repos {

		&__loading {
		}

		&__error {
		}

		&__data {
		}

		&__repo-item {
      padding: 32px;
      border: 1px solid #f1f1f1;
      border-radius: 10px;
      box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.04);
      margin: 0 0 20px 0;

      h3 {
        margin: 0 0 12px 0;
        font-size: 26px;
      }

      p {
        margin: 0 0 50px 0;
      }
		}
  }
</style>