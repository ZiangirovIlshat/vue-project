<template>
    <div class="slider-item">
        <header class="slider-item__header">
            <div class="slider-item__progress-bar">
                <progressbar :active="active" />
            </div>
            <div class="slider-item__user-details">
                <userDetails 
                    :userName="postData.owner.login" 
                    :avatarUrl="postData.owner.avatar_url">
                </userDetails>
            </div>
        </header>
        <div class="slider-item__body">
            <div class="slider-item__louder-wrapper">
                <loader />
            </div>
            <div class="slider-item__prelouder-wrapper" v-if="active === false">
                <ul v-for="item in 2" :key="item">
                    <li v-for="item in 3" :key="item"><preloader /></li>
                </ul>
            </div>
            <div class="slider-item__content">

            </div>
        </div>
        <footer class="slider-item__footer">
            <xButton :hoverText="'unfollow'"></xButton>
        </footer>
    </div>
</template>

<script>
    import { defineComponent } from "vue"

    import { mapState, mapActions, mapGetters } from "vuex";

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
            postData: {
                type: Object,
                required: true,
            }
        },

        computed: {
            ...mapState({
                postsReadme: state => state.readme
            }),
            ...mapGetters({
                getPostsReadme: "posts/getPostsReadme"
            }),
        },
        methods: {
            ...mapActions({
                fetchReadme: "posts/fetchPosts"
            }),
        },

        created() {
            this.fetchReadme([this.postData.owner.login, this.postData.name])
        },
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
            }
            &::-webkit-scrollbar-track {
                background: #fff;
            }
            &::-webkit-scrollbar-thumb {
                background-color: #AFAFAF;
                border-radius: 20px;
            }
        }

        &__louder-wrapper {

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
        &__content {

        }

        &__footer {
            padding: 24px 0 32px 0;
            display: flex;
            justify-content: center;
            border-top: 1px solid #CACACA;
        }
    }

</style>