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
