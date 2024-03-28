<template>
  <topline>
    <template #headline>
      <logo />
    </template>
  </topline>
  <div class="not-found">
    <p>Ошибка 404</p>
    <p>Страница не существует.</p>
    <p><router-link to="/">На главную</router-link></p>
  </div>
</template>

<script>
  import { defineComponent } from "vue";

  import topline from "../components/topline";
  import logo from "../components/logo";
  export default {
    components: {
      topline,
      logo,
    }
  }
</script>

<style lang="scss" scoped>
 .not-found {
    margin: 40px 0 0 0;
    p {
      text-align: center;
    }
    p:nth-child(1) {
      font-size: 25px;
      font-weight: 700;
    }
    p:nth-child(1) {
      font-size: 20px;
    }

    a {
      color: #31ae54;
      text-decoration: underline;
    }
  }
</style>
