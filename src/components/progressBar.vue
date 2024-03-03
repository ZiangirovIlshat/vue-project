<template>
    <div class="progressbar" :class="{'__active' : active}">
        <div class="progressbar__indicator"></div>
    </div>
</template>

<script>
    import { defineComponent } from "vue"

    export default defineComponent({
        name: "progressbar",

        data() {
            return {
                active: false
            }
        },

        mounted() {
            this.$nextTick(() => {
                setTimeout(() => {
                    this.active = true;
                }, 100);
            })
        },
    })
</script>

<style lang="scss" scoped>
    .progressbar {
        height: 2px;
        border-radius: 1px;
        background-color: #31AE544D;
        overflow: hidden;
        position: relative;

        &.__active {
            .progressbar__indicator {
                width: 100%;
            }
        }

        &__indicator {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            width: 0;
            background-color: #31AE54;

            transition: width 5s ease-in-out;
        }
    }

</style>