<template>
    <div class="post">
        <div class="post__header">
            <userDetails 
                :userName="postData.author.name" 
                :avatarUrl="postData.author.avatarUrl">
            </userDetails>
        </div>

        <div class="post__content">
            <slot name="content"></slot>
        </div>

        <div class="toggler" v-if="postData.commets.length > 0">
            <toggler @onToggle="toggle"></toggler>
        </div>

        <div class="post__comments">
            <ul v-if="shown">
                <li v-for="comment in postData.commets" :key="comment.id">
                    <b>{{ comment.userName }}</b> {{ comment.text }}
                </li>
            </ul>
        </div>

        <p class="post__date">{{ postData.date }}</p>
    </div>
</template>

<script>
    import { defineComponent } from "vue"

    import userDetails from "../components/userDetails";
    import toggler from "../components/toggler";

    export default defineComponent({
        name: "post",
        components: {
            userDetails,
            toggler,
        },

        props: {
            postData: {
                required: true,
                type: Object,
            },
        },

        data() {
            return {
                usersStoriesData: [],
                usersPostsData: [],
                shown: false,
            }
        },

        created() {
            
        },
        
        methods: {
            toggle(isOpened) {
                this.shown = isOpened
            }
        }
    })
</script>

<style lang="scss" scoped>
.post {

    &__header {
        margin: 0 0 15px 0;
    }

    &__comments {
        margin: 10px 0 0 0;

        li {
            margin: 0 0 5px 0;
        }

        b {
            font-weight: 600;
        }
    }

    &__date {
        margin: 10px 0 0 0;
        color: #00000066;
    }
}

.toggler {
    margin: 15px 0 0 0;
}

</style>