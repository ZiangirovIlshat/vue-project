<template>
  <div class="loader">
    <div
      class="loader__spinner"
      :style="{
        width: size + 'px',
        height: size + 'px',
        border: '2px solid ' + color,
        'border-bottom-color': 'transparent',
      }"
    ></div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "loader",
  props: {
    color: {
      type: String,
      default: "#31AE54",
    },
    size: {
      type: String,
      default: "28",
    },
  },
});
</script>

<style lang="scss" scoped>
.loader {
  display: inline-block;

  &__spinner {
    animation: rotation 1s linear infinite;
    border-radius: 50%;

    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
}
</style>
