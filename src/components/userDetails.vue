<template>
  <div class="user-details">
    <div class="user-details__avatar">
      <img :src="avatarUrl" :alt="userName" />
    </div>
    <div>
      <p class="user-details__name">{{ userName }}</p>
      <p class="user-details__role" v-if="userRole">{{ userRole }}</p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "userDetails",
  props: {
    avatarUrl: {
      type: String,
    },
    userName: {
      type: String,
    },
    userRole: {
      type: String,
      default: "",
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
    width: 45px;
    height: 45px;
    min-width: 45px;
    min-height: 45px;
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

  &__name {
    font-size: 18px;
    font-weight: 600;

    @media (max-width: 576px) {
      font-size: 16px;
    }
  }
  &__role {
    font-size: 12px;
    color: #9E9E9E;
  }
}
</style>
