<template>
  <div class="user-details">
    <div class="user-details__avatar">
      <img :src="data.avatar_url" :alt="data.login" />
    </div>
    <div>
        <p class="user-details__name">{{ data.login }}</p>
        <div class="user-details__stat-data">
          <p><b>54</b> repost</p>
          <p><b>834</b> <a href="">watchers</a></p>
        </div>
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
  position: sticky;
  top: 20px;

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
      width: 62px;
      height: 62px;
      min-width: 62px;
      min-height: 62px;
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
    word-wrap: break-word;

    @media (max-width: 576px) {
      font-size: 16px;
    }
  }

  &__stat-data {
    display: flex;
    flex-wrap: wrap;

    p {
      margin: 0 10px 0 0;
    }
  }
} 
</style>
