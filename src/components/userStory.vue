<template>
    <div class="user-story">
        <div class="user-story__body">
            <div class="user-story__avatar">
                <div class="user-story__avatar-body">
                    <img :src="avatarUrl">
                </div>
            </div>
            <div class="user-story__name">
                {{userName}}
            </div>
        </div>
    </div>
</template>

<script>
    import { defineComponent } from "vue"

    export default defineComponent({
        name: "userStory",
        props: {
            userName: String,
            avatarUrl: String,
        }
    })
</script>

<style lang="scss" scoped>
.user-story {
    max-width: 100px;
    min-width: 100px;

    &__body {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    &__avatar {
        cursor: pointer;
        max-height: 92px;
        max-width: 92px;
        min-height: 92px;
        min-width: 92px;
        border: 3px solid #a6328d;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }

    &__avatar:hover {
        border: 3px solid #fff;
    }

    &__avatar-body {
        height: 80px;
        width: 80px;
        border-radius: 50%;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    &__name {
        margin: 10px 0 0 0;
        text-align: center;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
}

</style>