<template>
  <div class="wrapper">
    <router-view></router-view>
  </div>
</template>

<script>
  import { defineComponent } from "vue";
  import { mapActions } from "vuex";

  export default defineComponent({
    methods: {
      ...mapActions({
        fetchUser: "user/fetchUser",
      }),
    },

    created() {
      
    }
  })
</script>

<style lang="scss">
  @charset "utf-8";
  *:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *)) {
    all: unset;
    display: revert;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  a, button {
    cursor: revert;
  }
  ol, ul, menu {
    list-style: none;
  }
  img {
    max-inline-size: 100%;
    max-block-size: 100%;
  }
  table {
    border-collapse: collapse;
  }
  input, textarea {
    -webkit-user-select: auto;
  }
  textarea {
    white-space: revert;
  }
  meter {
    -webkit-appearance: revert;
    appearance: revert;
  }
  :where(pre) {
    all: revert;
  }
  ::placeholder {
    color: unset;
  }
  ::marker {
    content: initial;
  }
  :where([hidden]) {
    display: none;
  }
  :where([contenteditable]:not([contenteditable="false"])) {
    -moz-user-modify: read-write;
    -webkit-user-modify: read-write;
    overflow-wrap: break-word;
    -webkit-line-break: after-white-space;
    -webkit-user-select: auto;
  }
  :where([draggable="true"]) {
    -webkit-user-drag: element;
  }
  :where(dialog:modal) {
    all: revert;
  }
  #app {
    font-size: 14px;
    font-family: "Inter", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-variation-settings: "slnt" 0;

    b, strong {
      font-weight: 700;
    }

    i, em {
      font-style: italic;
    }

    mark {
      background-color: yellow;
    }
  }
</style>
