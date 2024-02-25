<template>
    <topline>
        <template #headline>
            <logo />
            <mainMenu />
        </template>
        <template #content>
            
        </template>
    </topline>
</template>

<script>
    import { defineComponent } from "vue"
    import topline from "../components/topline";
    import logo from "../components/logo";
    import mainMenu from "../components/mainMenu";

    export default defineComponent({
        name: "feeds",
        components: {
            topline,
            logo,
            mainMenu,
        }
    })
</script>

<style lang="scss" scoped>

</style>