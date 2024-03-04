<template>
    <div class="user-story" @click="$emit('onPress')">
        <div class="user-story__body">
            <div class="user-story__avatar">
                <div class="user-story__avatar-body">
                    <img :src="avatarUrl" :alt="userName">
                </div>
            </div>
            <div class="user-story__name">
                {{ userName }}
            </div>
        </div>
    </div>
</template>

<script>
    import { defineComponent } from "vue"

    import standartUserAvatar from '../assets/standartAvatar.png'

    export default defineComponent({
        name: "userStory",
        props: {
            avatarUrl: {
                type: String,
                default: standartUserAvatar,
            },
            userName: {
                required: true,
                type: String,
                validator: function(value){
                    return value.length > 3 && value.length < 50;
                },
            },
        },
        emits: ['onPress'],
    })
</script>

<style lang="scss" scoped>
.user-story {
    width: 100px;
    padding-bottom: 10px;

    &__body {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    &__avatar {
        cursor: pointer;
        height: 92px;
        width: 92px;
        border: 3px solid #a6328d;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;

        @media (max-width: 576px) {
            height: 70px;
            width: 70px;
        }
    }

    @media(hover: hover) and (pointer: fine) {
        &__avatar:hover {
            border: 3px solid #fff;
        }
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

        @media (max-width: 576px) {
            height: 60px;
            width: 60px;
        }
    }

    &__name {
        font-size: 12px;
        width: 100%;
        margin: 10px 0 0 0;
        text-align: center;
        text-overflow: ellipsis;
        white-space: normal;
        overflow: hidden;
    }
}

</style>