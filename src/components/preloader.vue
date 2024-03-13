<template>
    <div class="preloader">
        <ul v-for="paragraph in count" :key="paragraph">
            <li v-for="row in 3" :key="row">
                <div class="preloader__item"></div>
            </li>
        </ul>
    </div>
</template>

<script>
    import { defineComponent } from "vue"

    export default defineComponent({
        name: "preloader",

        props: {
            count: {
                type: Number,
                default: 1,
            },
        }
    })
</script>

<style lang="scss" scoped>
.preloader {
    width: 60%;

    ul {
        margin: 0 0 30px 0;
        li {
            margin: 0 0 10px 0;
        }
        li:nth-child(2n + 1) {
            width: 60%;
        }
    }

    &__item {
        height: 18px;
        background: rgb(217,217,217);
        background: linear-gradient(90deg, rgba(217,217,217,1) 0%, rgba(234,234,234,1) 100%);
        border-radius: 3px;
    }
}

</style>