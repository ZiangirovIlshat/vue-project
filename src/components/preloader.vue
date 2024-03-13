<template>
    <div class="preloader">
        
    </div>
</template>

<script>
    import { defineComponent } from "vue"

    export default defineComponent({
        name: "preloader",
    })
</script>

<style lang="scss" scoped>
.preloader {
    height: 18px;
    background: rgb(217,217,217);
    background: linear-gradient(90deg, rgba(217,217,217,1) 0%, rgba(234,234,234,1) 100%);
    border-radius: 3px;
}

</style>