<template>
    <div class="logo-wrapper">
        <img src="../assets/Logo.svg" alt="logo">
    </div>
</template>

<script>
    import { defineComponent } from "vue"

    export default defineComponent({
        name: "logo",
    })
</script>

<style lang="scss" scoped>
    .logo-wrapper {
        width: 174px;
        height: 40px;
        overflow: hidden;

        img {
            width: 100%;
            height: auto;
            object-fit: contain;
        }

        @media (max-width: 768px) {
            width: 100px;
            height: 23px;
        }
    }
</style>