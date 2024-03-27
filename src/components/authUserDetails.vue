<template>
  <div class="user-details">
    <div class="user-details__avatar">
      <img :src="data.avatar_url" :alt="data.login" />
    </div>
    <div>
        <p class="user-details__name">{{ data.login }}</p>
        <p><b>54</b> repost <b>834</b> <a href="">watchers</a></p>
        <p>{{data.name}}</p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "userDetails",

  props: {
    data: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      reposts: ['repos_url'],
      views: [],
    }
  },

  methods: {
    async getData() {
      try {
        
      } catch {

      }
    }
  },
});
</script>

<style lang="scss" scoped>
.user-details {
  display: flex;
  align-items: center;
  gap: 15px;

  &__avatar {
    width: 90px;
    height: 90px;
    min-width: 90px;
    min-height: 90px;
    overflow: hidden;
    border-radius: 50%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    @media (max-width: 576px) {
      width: 35px;
      height: 35px;
      min-width: 35px;
      min-height: 35px;
    }
  }

  p {
    margin: 3px 0;

    a {
      color: #31ae54;
      text-decoration: underline;
    }

    &:nth-child(3) {
      color: #9e9e9e;
    }
  }

  &__name {
    font-size: 18px;
    font-weight: 600;

    @media (max-width: 576px) {
      font-size: 16px;
    }
  }
}
</style>
