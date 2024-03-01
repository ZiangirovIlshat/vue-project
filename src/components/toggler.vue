<template>
    <button :class="['toggler', { __active: isOpened }]" @click="toggle()">
        <span>{{ this.isOpened ? "Hide issues" : "View issues" }}</span>
        <span class="toggler__arrow">
            <svg class="toggler__icon" viewBox="0 0 24 24" width="24" height="24">
                <use href="../assets/sprite.svg#arrow" x="0" y="0"></use>
            </svg>
        </span>
    </button>
</template>

<script>
    import { defineComponent } from "vue"

    export default defineComponent({
        name: "toggler",

        data() {
            return {
                isOpened: false,
            }
        },

        methods: {
            toggle() {
                this.isOpened = !this.isOpened
                this.$emit("onToggle", this.isOpened)
            }
        }
    })
</script>

<style lang="scss" scoped>
.toggler {
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;

    &__arrow {
        img {
            width: 10px;
            height: 5px;
        }
    }

    &__icon {
        width: 14px;
        height: 10px;
        transform: rotate(180deg);
    }
    &.__active {
        .toggler__icon {
            transform: rotate(0deg);
        }
    }
}


</style>