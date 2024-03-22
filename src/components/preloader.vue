<template>
  <div class="preloader">
    <ul v-for="paragraph in count" :key="paragraph">
      <li v-for="row in 3" :key="row">
        <div class="preloader__item"></div>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "preloader",

  props: {
    count: {
      type: Number,
      default: 1,
    },
  },
});
</script>

<style lang="scss" scoped>
.preloader {
  width: 70%;

  ul {
    margin: 0 0 20px 0;
    li {
      margin: 0 0 5px 0;
    }
    li:nth-child(2n + 1) {
      width: 60%;
    }
  }

  &__item {
    height: 18px;
    background: rgb(217, 217, 217);
    background: linear-gradient(
      90deg,
      rgba(217, 217, 217, 1) 0%,
      rgba(234, 234, 234, 1) 100%
    );
    border-radius: 3px;
    animation: gradient 10s ease infinite;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
}
</style>
