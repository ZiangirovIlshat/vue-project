<template>
    <div class="slider-item">
        <header class="slider-item__header">
            <div class="slider-item__progress-bar">
                <progressbar :active="active && !loading" @animationFinished="handleAnimationFinished" />
            </div>
            <div class="slider-item__user-details">
                <userDetails
                    :userName="sliderData.ownerLogin" 
                    :avatarUrl="sliderData.ownerAvatar">
                </userDetails>
            </div>
        </header>
        <div class="slider-item__body">
            <div class="slider-item__prelouder-wrapper" v-if="active === false && !sliderData.content">
                <preloader :count="3" />
            </div>
            <template v-else>
                <div class="slider-item__loader" v-if="loading"><loader/></div>
                <div class="slider-item__content" v-else-if="error"></div>
                <div class="slider-item__content" v-else-if="sliderData.content" v-html="sliderData.content"></div>
            </template>
        </div>
        <footer class="slider-item__footer">
            <xButton :hoverText="'unfollow'">follow</xButton>
        </footer>
    </div>
</template>

<script>
    import { defineComponent } from "vue"

    import progressbar from "../components/progressBar"
    import userDetails from "../components/userDetails"
    import xButton from "../components/xButton"
    import preloader from "../components/preloader"
    import loader from "../components/loader"

    export default defineComponent({
        name: "sliderItem",

        components: {
            progressbar,
            xButton,
            userDetails,
            preloader,
            loader,
        },

        props: {
            active: Boolean,
            loading: Boolean,
            error: String,
            sliderData: Object,
        },

        methods: {
            handleAnimationFinished() {
                this.$emit('animationFinished');
            }
        }
    })
</script>

<style lang="scss" scoped>
    .slider-item {
        display: flex;
        flex-direction: column;
        height: 667px;

        &__header {
            padding: 8px 8px 13px 8px;
        }

        &__progress-bar {
            margin: 0 0 10px 0;
        }

        &__body {
            flex: 1;
            padding: 18px;
            overflow-y: scroll;

            &::-webkit-scrollbar {
                width: 5px;
                height: 5px;
            }
            &::-webkit-scrollbar-track {
                background: #fff;
            }
            &::-webkit-scrollbar-thumb {
                background-color: #AFAFAF;
                border-radius: 2px;
            }
        }

        &__loader {
            display: flex;
            justify-content: center;
            margin: 40px 0 0 0;
        }

        &__prelouder-wrapper {
            ul {
                margin: 0 0 30px 0;
                li {
                    margin: 0 0 15px 0;
                }
                li:nth-child(2n + 1) {
                    width: 60%;
                }
            }
        }

        &__footer {
            padding: 24px 0 32px 0;
            display: flex;
            justify-content: center;
            border-top: 1px solid #CACACA;
        }
    }

</style>