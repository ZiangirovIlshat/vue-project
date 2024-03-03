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

        <div class="post__comments" v-if="issuesIsLoaded && shown">
            <ul>
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

    import { fetchData } from "../api.js";

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
                issues: [],
                issuesIsLoaded : false,
                shown: false,
            }
        },
        
        methods: {
            
            getIssues() {
                this.issues = []
                this.issuesIsLoaded = false

                fetchData(`/repos/${this.postData.owner.login}/${this.postData.name}/issues`)
                .then(data => {
                    this.issues = data
                    this.issuesIsLoaded = true
                })
            },

            getFormattedDate(str) {
                const date = new Date(str);

                const options = { day: "numeric", month: "short" };
                const formattedDate = date.toLocaleString("en-US", options);

                return formattedDate.toLocaleUpperCase();
            },

            toggle(isOpened) {
                this.issues = []
                this.getIssues()
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

    &__placeholders {
        height: 17px;
        width: 80%;
        border-radius: 5px;
        background: linear-gradient(90deg, rgba(234,234,234,1) 0%, rgba(255,255,255,1) 100%);
        background-size: 400% 400%;
        animation: gradient 10s ease infinite;
    }

    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
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