<template>
    <div class="stories">
        <header class="stories__header">
            <logoLight />
            <button class="stories__close-btn" @click="close()">
                <svg class="menu__icon" viewBox="0 0 24 24" width="24" height="24">
                    <use href="../assets/sprite.svg#close" x="0" y="0"></use>
                </svg>
            </button>
        </header>

        <div class="stories__loader" v-if="posts.loading"><loader /></div>

        <div class="slider" v-else>
            <button
                class="slider__buttons prev"
                @click="prevBtnClick()"
                v-if="activeSlide > 0"
            >
                <svg class="menu__icon" viewBox="0 0 24 24" width="24" height="24">
                    <use href="../assets/sprite.svg#prev" x="0" y="0"></use>
                </svg>
            </button>
            <div class="slider__row">
                <ul class="slider__items" ref="sliderRow">
                    <li 
                        v-for="(postData, index) in posts.data.items"
                        :key="postData.id"
                        @click="switchSlider(index)"
                    >
                        <div
                            class="slider__slide-wrapper"
                            :class="{ '__active' : activeSlide === index }"
                        >
                            <sliderItem :postData="postData" :active="activeSlide === index"></sliderItem>
                        </div>
                    </li>
                </ul>
            </div>
            <button
                class="slider__buttons next"
                v-if="activeSlide < (posts.data.items.length - 1)"
                @click="nextBtnClick()"
            >
                <svg class="menu__icon" viewBox="0 0 24 24" width="24" height="24">
                    <use href="../assets/sprite.svg#next" x="0" y="0"></use>
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
    import { defineComponent } from "vue"

    import { mapState, mapActions, mapGetters } from "vuex";

    import logoLight from "../components/logoLight";
    import sliderItem from "../components/sliderItem.vue"
    import loader from "../components/loader.vue"

    export default defineComponent({
        name: "stories",

        components: {
            logoLight,
            sliderItem,
            loader,
        },

        props: {
            activeSlide: {
                type: Number,
                default: 0,
                required: false,
            },
        },

        data() {
            return {
                activeSlide: 0,
            }
        },

        computed: {
            ...mapState({
                posts: state => state.posts
            }),
            ...mapGetters({
                getPosts: 'posts/getPosts'
            }),
        },
        methods: {
            ...mapActions({
                fetchPosts: 'posts/fetchPosts'
            }),

            prevBtnClick() {
                this.activeSlide--
                this.moveSlider()
            },

            nextBtnClick() {
                this.activeSlide++
                this.moveSlider()
            },

            switchSlider(index) {
                if(index !== this.activeSlide) {
                    this.activeSlide = index
                    this.moveSlider()
                }
            },

            moveSlider() {
                this.$refs.sliderRow.style = `transform: translate(-${338*this.activeSlide}px);`
            },

            close() {
                this.$router.go(-1)
            },
        },

        created() {
            this.fetchPosts()
        }
    })
</script>

<style lang="scss" scoped>
.stories {
    background-color: #101010;
    min-height: 100vh;

    &__header {
        max-width: 1220px;
        padding: 0 10px;
        margin: 0 auto;

        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 45px 0 0 0;
    }

    &__close-btn {
        cursor: pointer;
    }

    &__loader {
        display: flex;
        justify-content: center;
        margin: 40px 0 0 0;
    }
}

.slider {
    position: relative;

    &__buttons {
        content: "";
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        top: calc(50% - 22px);
        width: 44px;
        height: 44px;
        border-radius: 50%;
        background-color: #fff;
        border: 1px solid;
        cursor: pointer; 
        z-index: 2;

        svg {
            fill: #404040;
        }

        &:hover {
            svg {
                fill: #31AE54;
            }
        }
    }

    &__row {
        overflow: hidden;
        margin-top: 90px;
    }

    &__items {
        margin-left: calc(50% - 187.5px);
        display: flex;
        align-items: center;
        gap: 38px;
        transition: .3s;
    }

    &__slide-wrapper {
        height: 538px;
        width: 300px;
        border-radius: 15px;
        overflow: hidden;
        opacity: 0.7;

        &.__active {
            height: 667px;
            width: 375px;
            opacity: 1;
        }

        background: #fff;
    }
}


.prev {
    left: calc(50% - 240px);
}
.next {
    right: calc(50% - 240px);
}

</style>