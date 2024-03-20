<template>
  <button
    class="x-button"
    :class="[type, { __loading: loading }]"
    @click="this.$emit('handleClick')"
  >
    <span class="x-button__btn-text">
      <loader v-if="loading" :color="'#fff'" :size="24" />
      <slot v-else />
    </span>
  </button>
</template>

<script>
import { defineComponent } from "vue";

import loader from "../components/loader";

export default defineComponent({
  name: "xButton",

  components: {
    loader,
  },

  emits: ["handleClick"],

  props: {
    type: {
      type: String,
      default: "green",
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="scss" scoped>
.x-button {
  color: #fff;
  padding: 12px 52px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2;
  border: none;

  @media (max-width: 576px) {
    padding: 5px 25px;
    border-radius: 3px;
  }

  &.green {
    background-color: #31ae54;
  }

  &.gray {
    background-color: #9e9e9e;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      &.green {
        background-color: #9e9e9e;
      }

      &.gray {
        background-color: #31ae54;
      }
    }
  }

  &.__loading {
    padding: 8px 52px;
    background-color: #9e9e9e;
    @media (hover: hover) and (pointer: fine) {
      &:hover {
        background-color: #9e9e9e;
      }
    }
  }

  &__btn-text {
    display: flex;
    align-items: center;
    gap: 5px;
  }
}
</style>
