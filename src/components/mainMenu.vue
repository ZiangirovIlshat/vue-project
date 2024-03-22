<template>
  <nav class="menu">
    <ul>
      <li>
        <router-link to="/">
          <svg class="menu__icon" viewBox="0 0 24 24" width="24" height="24">
            <use href="../assets/sprite.svg#home" x="0" y="0"></use>
          </svg>
        </router-link>
      </li>
      <li>
        <router-link to="/">
          <div class="menu__img-container">
            <img :src="avatarUrl" />
          </div>
        </router-link>
      </li>
      <li>
        <a @click="exit()">
          <svg class="menu__icon" viewBox="0 0 24 24" width="24" height="24">
            <use href="../assets/sprite.svg#exit" x="0" y="0"></use>
          </svg>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { defineComponent } from "vue";

import standartUserAvatar from "../assets/standartAvatar.png";

export default defineComponent({
  name: "mainMenu",
  props: {
    avatarUrl: {
      type: String,
      default: standartUserAvatar,
    },
  },

  methods: {
    exit() {
      if (confirm("Вы уверены, что хотите выйти?")) {
        localStorage.removeItem("token");
        this.$router.push({
          name: "auth",
        });
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.menu {
  ul {
    display: flex;
    align-items: center;
    gap: 25px;
  }

  a {
    cursor: pointer;
  }

  &__img-container {
    width: 35px;
    height: 35px;
    overflow: hidden;
    border-radius: 50%;

    @media (max-width: 576px) {
      width: 24px;
      height: 24px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__icon {
    width: 24px;
    height: 24px;

    @media (max-width: 576px) {
      width: 18px;
      height: 18px;
    }
  }
}
</style>
