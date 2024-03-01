<template>
    <div class="post">
        <div class="post__header">
            <userDetails 
                :userName="postData.owner.login" 
                :avatarUrl="postData.owner.avatar_url">
            </userDetails>
        </div>

        <div class="post__content">
            <slot name="content"></slot>
        </div>

        <div class="toggler" v-if="postData.open_issues_count > 0">
            <toggler @onToggle="toggle"></toggler>
        </div>

        <div class="post__comments">
            <ul v-if="shown">
                <li v-for="issue in issues" :key="issue.id">
                    <b>{{ issue.user.login }}</b> {{ issue.title }}
                </li>
            </ul>
        </div>

        <p class="post__date">{{ getFormattedDate(postData.created_at) }}</p>
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
            this.getIssues()
        },
        
        methods: {
            getIssues() {
                fetch("https://api.github.com/repos/${this.postData.owner.login}/${this.postData.name}/issues", {
                    headers: {
                        Authorization: "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",
                    },
                })
                .then(response => response.json())
                .then(data => {
                    this.issues = data
                })
                .catch(()=> {
                    this.errMessage = "Couldn't get questions"
                })
            },

            getFormattedDate(str) {
                const date = new Date(str);

                const options = { day: "numeric", month: "short" };
                const formattedDate = date.toLocaleString("en-US", options);

                return formattedDate.toLocaleUpperCase();
            },

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