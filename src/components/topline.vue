<template>
  <header class="header">
    <div class="header__container">
      <div class="header__headline">
        <slot name="headline"></slot>
      </div>
      <slot name="myProfile"></slot>
      <div class="header__content" v-if="$slots.content">
        <slot name="content"></slot>
      </div>
    </div>
  </header>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "topline",
});
</script>

<style lang="scss" scoped>
.header {
  background-color: #fafafa;
  padding: 33px 0;

  @media (max-width: 576px) {
    padding: 30px 0 8px 0;
  }

  &__container {
    max-width: 1240px;
    padding: 0 20px;
    margin: 0 auto;
  }

  &__headline {
    display: flex;
    gap: 20px;
    justify-content: space-between;
    align-items: center;
  }

  &__content {
    margin: 43px 0 0 0;
  }
}
</style>
