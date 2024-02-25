<template>
    <topline>
        <template #headline>
            <logo />
            <mainMenu />
        </template>
        <template #content>
            <div class="users-stories">
                <ul class="users-stories__list">
                    <li v-for="item in usersStoriesData" :key="item.id">
                        <userStory
                            :userName="item.name" 
                            :avatarUrl="item.avatarUrl"
                            @onPress="handlePress(item.id)">
                        </userStory>
                    </li>
                </ul>
            </div>
        </template>
    </topline>
    <main class="main">
        <div class="posts">
            <div class="posts__container">
                <div class="posts__post-wrapper">
                    <post></post>
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

    export default defineComponent({
        name: "feeds",
        components: {
            topline,
            logo,
            mainMenu,
            userStory,
            post,
        },

        data() {
            return {
                usersStoriesData: [],
            }
        },

        created() {
            this.getData()
        },

        methods: {
            getData() {
                this.usersStoriesData = data.stories
                // this.usersPostsData = data.posts
            },

            handlePress(id) {
                console.log(id)
            }
        }
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
            align-items: start;
            gap: 22px;
            overflow-x: auto;
            transform: translateZ(0);
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
    }

</style>