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
        <div class="menu__nested-menu">
            <div class="menu__img-container" @click="openNestedMenu()">
              <img :src="avatarUrl" />
            </div>
            <ul class="menu__nested-menu-list" v-if="nestedMenuIsOpen">
              <li>
                <router-link to="/myprofile/repos">Repositories</router-link>
              </li>
              <li>
                <router-link to="/myprofile/following">Following</router-link>
              </li>
            </ul>
        </div>
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

  data() {
    return {
      nestedMenuIsOpen: false,
    }
  },

  methods: {
    exit() {
      if (confirm("Вы уверены, что хотите выйти?")) {
        localStorage.removeItem("token");
        this.$router.push({
          name: "auth",
        });
      }
    },
    openNestedMenu() {
      this.nestedMenuIsOpen = !this.nestedMenuIsOpen
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

	&__nested-menu {
    cursor: pointer;
    position: relative;

    ul {
      display: block;
    }
	}


	&__nested-menu-list {
    position: absolute;
    top: calc(100% + 10px);
    left: calc(-50% - 17.5px);
    z-index: 2;
    background-color: #fff;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.04);
    border-radius: 5px;
    overflow: hidden;

    li {
      a {
        display: block;
        padding: 10px;
        @media (hover: hover) and (pointer: fine) {
          &:hover {
            margin: 0;
            background-color: #fafbfc;
          }
        }
      }
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
