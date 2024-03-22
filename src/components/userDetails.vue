<template>
  <div class="user-details">
    <div class="user-details__avatar">
      <img :src="avatarUrl" :alt="userName" />
    </div>
    <p class="user-details__name">{{ userName }}</p>
  </div>
</template>

<script>
import { defineComponent } from "vue";

import standartUserAvatar from "../assets/standartAvatar.png";

export default defineComponent({
  name: "userDetails",
  props: {
    avatarUrl: {
      type: String,
      default: standartUserAvatar,
    },
    userName: {
      required: true,
      type: String,
      validator: function (value) {
        return value.length > 3 && value.length < 50;
      },
    },
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
}
</style>
