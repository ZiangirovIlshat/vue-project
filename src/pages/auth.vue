<template>
  <div class="auth-page">
    <div class="auth-page__body">
      <div class="auth-page__text-content">
        <logo />
        <p>More than just one repository.<br>This is our digital world.</p>
        <xButton @click="getCode">
          Authorize with github
          <svg viewBox="0 0 24 24" width="24" height="24">
            <use href="../assets/sprite.svg#git" x="0" y="0"></use>
          </svg>
        </xButton>
        <p class="auth-page__err-message" v-if="errMessage">{{errMessage}}</p>
      </div>
      <div class="auth-page__img">
        <template v-if="screenWidth >= 768">
          <img src="../assets/device.png" alt="Gitogram">
        </template>
        <template v-if="screenWidth < 768 && screenWidth > 576">
          <img src="../assets/device-tablet.png" alt="Gitogram">
        </template>
        <template v-if="screenWidth <= 576">
          <img src="../assets/device-mobile.png" alt="Gitogram">
        </template>
      </div>
    </div>
    <footer class="auth-page__footer">
      <p>© Gitogram from Loftschool</p>
    </footer>
  </div>
</template>

<script>

import { defineComponent } from "vue";

import env from "../../env.js";

import logo from "../components/logo";
import xButton from "../components/xButton";

export default {
  name: "auth",

  components: {
    logo,
    xButton,
  },

  data() {
    return {
      screenWidth: window.innerWidth,
      errMessage: "",
    }
  },

  methods: {
    updateScreenWidth() {
      this.screenWidth = window.innerWidth;
    },
    getCode() {
      const url = new URL("https://github.com/login/oauth/authorize")
      url.searchParams.set("client_id", env.clientId);
      url.searchParams.set("scope", "repo:status read:user");

      window.location.href = url.href
    },

    async getToken() {
      const code = new URLSearchParams(window.location.search).get("code");
      if (code) {
        try {
          const url = "https://webdev-api.loftschool.com/github"
          const response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              clientId : env.clientId,
              code,
              clientSecret: env.clientSecret
            })
          });
          const { token } = await response.json();
          localStorage.setItem("token", token);
          this.$router.replace({ name: "home" });
        } catch {
          this.errMessage = "Ошибка при попытке авторизации"
          return
        }
      }
    }
  },

  created() {
    this.getToken()
    window.addEventListener('resize', this.updateScreenWidth);
  },
  destroyed() {
    window.removeEventListener('resize', this.updateScreenWidth);
  },
}
</script>

<style lang="scss" scoped>
.auth-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  
  &__body {
    flex: 1 0 100%;
    padding: 0 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
  }

  &__text-content {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 0 0 80px 0;
    padding: 10px 0;
    p {
      margin: 12px 0 30px 0;
    }

    @media(max-width: 576px) {
      order: 1;
      flex: auto;
      margin: 0;
    }
  }

  &__img {
    padding: 10px 0;

    @media(max-width: 768px) {
      padding: 10px 0 0 0;
    }

    @media(max-width: 576px) {
      padding: 10px 0;
      order: 0;
      flex: auto;
    }
  }

  &__err-message {
    color: #8B0000;
    padding: 10px 0;
  }

  &__footer {
    width: 100%;
    text-align: center;

    padding: 32px 0;
    font-size: 16px;
    color: #999999;

    border-top: 1px solid #c5c5c7;

    @media(max-width: 576px) {
      padding: 15px 0;
    }
  }
}
</style>
