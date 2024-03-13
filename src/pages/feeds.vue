<template>
    <topline>
        <template #headline>
            <logo />
            <mainMenu />
        </template>
        <template #content>
            <div class="users-stories" v-if="posts.data">
                <ul class="users-stories__list">
                    <li v-for="postData in getPosts.items" :key="postData.id">
                        <userStory
                            :userName="postData.owner.login"
                            :avatarUrl="postData.owner.avatar_url"
                            @onPress="handlePress(postData.id)">
                        </userStory>
                    </li>
                </ul>
            </div>
        </template>
    </topline>
    <main class="main">
        <div class="posts">
            <div class="posts__container">
                <div class="posts__loader" v-if="posts.loading"><loader /></div>

                <div class="posts__err-message" v-html="posts.error" v-else-if="posts.error"></div>

                <template v-else-if="posts.data">
                    <div  class="posts__post-wrapper" v-for="postData in getPosts.items" :key="postData.id">
                        <post :postData="postData">
                            <template #content>
                                <div class="posts__content-wrapper">
                                    <h2>{{postData.name}}</h2>
                                    <div class="posts__text" v-html="postData.description"></div>
                                    <div class="posts__details">
                                        <postDetails 
                                            :stars="postData.stargazers_count"
                                            :fork="postData.forks_count">
                                        </postDetails>
                                    </div>
                                </div>
                            </template>
                        </post>
                    </div>
                </template>
            </div>
        </div>
    </main>
</template>

<script>
    import { defineComponent } from "vue"

    import { mapState, mapActions, mapGetters } from "vuex";

    import topline from "../components/topline"
    import logo from "../components/logo"
    import mainMenu from "../components/mainMenu"
    import userStory from "../components/userStory"
    import post from "../components/post"
    import postDetails from "../components/postDetails"
    import loader from "../components/loader"

    export default defineComponent({
        name: "feeds",
        components: {
            topline,
            logo,
            mainMenu,
            userStory,
            post,
            postDetails,
            loader,
        },

        data() {
            return {
                postsData: null,
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

            //TODO:
            handlePress(id) {
                this.$router.push({
                    name: 'stories',
                    props: { 'postsData' : this.getPosts.items }
                })
            }
        },

        created() {
            this.fetchPosts()
        },
    })
</script>

<style lang="scss" scoped>
    .users-stories {
        overflow-x: scroll;
        &::-webkit-scrollbar { 
            width: 0;
        }
        -ms-overflow-style: none;
        overflow: -moz-scrollbars-none;

        &__list {
            display: flex;
            gap: 22px;
            overflow-x: auto;
            transform: translateZ(0);

            &::-webkit-scrollbar {
                width: 5px;
                height: 5px;
            }
            &::-webkit-scrollbar-track {
                background: #fff;
            }
            &::-webkit-scrollbar-thumb {
                background-color: #AFAFAF;
                border-radius: 20px;
            }

            @media (max-width: 576px) {
                gap: 5px;
            }
        }
    }

    .posts {
        padding: 30px 0;

        &__container {
            max-width: 1000px;
            padding: 0 10px;
            margin: 0 auto;
        }

        &__loader {
            margin: 40px 0 0 0;
            text-align: center;
        }

        &__err-message {
            font-size: 20px;
            text-align: center;
        }

        &__post-wrapper {
            margin: 0 0 20px 0;
        }

        &__content-wrapper {
            padding: 24px 20px;
            border: 1px solid #f1f1f1;
            border-radius: 10px;
            box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.04);
        }

        h2 {
            font-weight: 700;
            font-size: 25px;

            @media (max-width: 576px) {
                font-size: 20px;
            }
        }

        &__text {
            margin: 15px 0 0 0;

        }

        &__details {
            margin: 30px 0 0 0;
        }
    }

</style>