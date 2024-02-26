<template>
    <topline>
        <template #headline>
            <logo />
            <mainMenu />
        </template>
        <template #content>
            <div class="users-stories">
                <ul class="users-stories__list">
                    <li v-for="story in usersStoriesData" :key="story.id">
                        <userStory
                            :userName="story.name" 
                            :avatarUrl="story.avatarUrl"
                            @onPress="handlePress(story.id)">
                        </userStory>
                    </li>
                </ul>
            </div>
        </template>
    </topline>
    <main class="main">
        <div class="posts">
            <div class="posts__container">
                <div class="posts__post-wrapper" v-for="post in usersPostsData" :key="post.id">
                    <post :postData="post">
                        <template #content>
                            <div class="posts__content-wrapper">
                                <h2>{{post.name}}</h2>
                                <div class="posts__text" v-html="post.text"></div>
                                <div class="posts__details">
                                    <postDetails 
                                        :stars="post.stars"
                                        :fork="post.fork">
                                    </postDetails>
                                </div>
                            </div>
                        </template>
                    </post>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    import { defineComponent } from "vue"
    
    import data from "../testData.json";

    import topline from "../components/topline";
    import logo from "../components/logo";
    import mainMenu from "../components/mainMenu";
    import userStory from "../components/userStory";
    import post from "../components/post";
    import postDetails from "../components/postDetails";

    export default defineComponent({
        name: "feeds",
        components: {
            topline,
            logo,
            mainMenu,
            userStory,
            post,
            postDetails,
        },

        data() {
            return {
                usersStoriesData: [],
                usersPostsData: [],
            }
        },

        created() {
            this.getData()
        },

        methods: {
            getData() {
                this.usersStoriesData = data.stories
                this.usersPostsData = data.posts
            },

            handlePress(id) {
                console.log(id)
            }
        }
    })
</script>

<style lang="scss" scoped>
    .users-stories {
        padding: 0;
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