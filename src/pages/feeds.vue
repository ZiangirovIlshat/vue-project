<template>
    <topline>
        <template #headline>
            <logo />
            <mainMenu avatarUrl="https://avatanplus.com/files/resources/mid/59aeab5bb905315e524d5e6e.jpg" />
        </template>
        <template #content>
            <ul>
                <li>
                    <userStory userName="Jon Doe" avatarUrl="https://avatanplus.com/files/resources/mid/59aeab5bb905315e524d5e6e.jpg"></userStory>
                </li>
            </ul>
        </template>
    </topline>
</template>

<script>
    import { defineComponent } from "vue"
    import topline from "../components/topline";
    import logo from "../components/logo";
    import mainMenu from "../components/mainMenu";
    import userStory from "../components/userStory";

    export default defineComponent({
        name: "feeds",
        components: {
            topline,
            logo,
            mainMenu,
            userStory,
        }
    })
</script>

<style lang="scss" scoped>

</style>