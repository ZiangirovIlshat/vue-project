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
        <div class="post__issues" v-if="shown">
            <div class="post__preloader" v-if="issues.loading[postData.name]"><preloader /></div>
            <div class="post__err-message" v-else-if="issues.error" v-html="issues.error"></div>
            <template v-else-if="issues.data">
                <ul>
                    <li v-for="issue in getIssues(postData.name)" :key="issue.id">
                        <b>{{ issue.user.login }}</b> {{ issue.title }}
                    </li>
                </ul>
            </template>
        </div>
        <p class="post__date">{{ getFormattedDate(postData.created_at) }}</p>
    </div>
</template>

<script>
    import { defineComponent } from "vue"

    import { mapState, mapActions, mapGetters } from "vuex";

    import userDetails from "../components/userDetails"
    import toggler from "../components/toggler"
    import preloader from "../components/preloader"

    export default defineComponent({
        name: "post",
        components: {
            userDetails,
            toggler,
            preloader,
        },

        props: {
            postData: {
                required: true,
                type: Object,
            },
        },

        data() {
            return {
                postIssues: [],
                shown: false,
            }
        },

        computed: {
            ...mapState({
                issues: state => state.issues
            }),
            ...mapGetters({
                getIssues: 'issues/getIssues'
            }),
        },
        methods: {
            ...mapActions({
                fetchIssues: 'issues/fetchIssues'
            }),
            getData() {
                this.fetchIssues([this.postData.owner.login, this.postData.name])
            },

            getFormattedDate(str) {
                const date = new Date(str);

                const options = { day: "numeric", month: "short" };
                const formattedDate = date.toLocaleString("en-US", options);

                return formattedDate.toLocaleUpperCase();
            },

            toggle(isOpened) {
                this.shown = isOpened
                this.getData()
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

    &__issues {
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