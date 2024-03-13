<template>
    <button 
        class="x-button"
        @click="this.$emit('handleClick')"
    >
        <span class="x-button__btn-text">
            <slot ref="btn"></slot>
        </span>
    </button>
</template>

<script>
    import { defineComponent } from "vue"

    export default defineComponent({
        name: "xButton",
        emits: ['handleClick'],

        props: {
            hoverText: String
        },
    })
</script>

<style lang="scss" scoped>
    .x-button {
        background-color: #31AE54;
        color: #fff;
        padding: 12px 52px;
        font-size: 16px;
        border-radius: 5px;
        cursor: pointer;
        transition: .2;
        border: none;
    }

    .x-button:hover {
        background: #9E9E9E;
    }

</style>