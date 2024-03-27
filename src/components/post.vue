<template>
  <div class="post">
    <div class="post__header">
      <userDetails :userName="postData.ownerLogin" :avatarUrl="postData.ownerAvatar">
      </userDetails>
    </div>

    <div class="post__content">
      <slot name="content"></slot>
    </div>

    <div class="toggler" v-if="postData.issuesIsTrue">
      <toggler @onToggle="toggle"></toggler>
    </div>
    <div class="post__issues" v-if="shown">
      <div class="post__preloader" v-if="issuesLoading"><preloader /></div>
      <div class="post__err-message" v-else-if="issuesError" v-html="issuesError"></div>
      <ul v-else-if="postData.issuesContent">
        <li v-for="issue in postData.issuesContent" :key="issue.id">
          <b>{{ issue.user.login }}</b> {{ issue.title }}
        </li>
      </ul>
    </div>
    <p class="post__date">{{ getFormattedDate(postData.createdAt) }}</p>
  </div>
</template>

<script>
import { defineComponent } from "vue";

import { mapState, mapActions, mapGetters } from "vuex";

import userDetails from "../components/userDetails";
import toggler from "../components/toggler";
import preloader from "../components/preloader";

export default defineComponent({
  name: "post",

  components: {
    userDetails,
    toggler,
    preloader,
  },

  props: {
    postData: {
      required: true,
      type: Object,
    },
  },

  data() {
    return {
      shown: false,
      issuesError: "",
      issuesLoading: false,
    };
  },

  computed: {
    ...mapState({
      likedPosts: (state) => state.likedPosts,
    }),
    ...mapGetters({
      getRepoById: "getRepoById",
    }),
  },
  methods: {
    ...mapActions({
      fetchIssues: "likedPosts/fetchIssues",
    }),

    async getIssues() {
      this.issuesLoading = true;
      try {
        const { id, ownerLogin, name } = this.postData;
        await this.fetchIssues({ id, owner: ownerLogin, name });
      } catch (e) {
        this.issuesError = "Не удалось получить вопросы к этому посту";
      } finally {
        this.issuesLoading = false;
      }
    },

    getFormattedDate(str) {
      const date = new Date(str);

      const options = { day: "numeric", month: "short" };
      const formattedDate = date.toLocaleString("en-US", options);

      return formattedDate.toLocaleUpperCase();
    },

    toggle(isOpened) {
      this.shown = isOpened;
      this.getIssues();
    },
  },
});
</script>

<style lang="scss" scoped>
.post {
  &__header {
    margin: 0 0 15px 0;
  }

  &__issues {
    margin: 10px 0 0 0;

    li {
      margin: 0 0 5px 0;
    }

    b {
      font-weight: 600;
    }
  }

  &__date {
    margin: 10px 0 0 0;
    color: #00000066;
  }
}

.toggler {
  margin: 15px 0 0 0;
}
</style>
