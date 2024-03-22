<template>
  <div
    class="progressbar"
    :class="{ __active: active }"
    @animationend="handleAnimationEnd"
  >
    <div class="progressbar__indicator"></div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "progressbar",
  props: {
    active: Boolean,
  },
  methods: {
    handleAnimationEnd() {
      this.$emit("animationFinished");
    },
  },
});
</script>

<style lang="scss" scoped>
.progressbar {
  height: 2px;
  border-radius: 1px;
  background-color: #31ae544d;
  overflow: hidden;
  position: relative;

  &.__active {
    .progressbar__indicator {
      width: 100%;

      animation-duration: 10s;
      animation-name: progressBar;
    }

    @keyframes progressBar {
      from {
        width: 0;
      }

      to {
        width: 100%;
      }
    }
  }

  &__indicator {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 0;
    background-color: #31ae54;
  }
}
</style>
