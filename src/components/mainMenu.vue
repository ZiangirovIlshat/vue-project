<template>
    <nav class="menu">
        <ul>
            <li>
                <router-link to="/">
                    <svg class="menu__icon" viewBox="0 0 24 24" width="24" height="24">
                        <use href="../assets/sprite.svg#home" x="0" y="0"></use>
                    </svg>
                </router-link>
            </li>
            <li>
                <router-link to="/">
                    <div class="menu__img-container">
                        <img :src="avatarUrl" alt="Фото">
                    </div>
                </router-link>
            </li>
            <li>
                <router-link to="/">
                    <svg class="menu__icon" viewBox="0 0 24 24" width="24" height="24">
                        <use href="../assets/sprite.svg#exit" x="0" y="0"></use>
                    </svg>
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    import { defineComponent } from "vue"

    export default defineComponent({
        name: "mainMenu",
        props: {
            avatarUrl: String,
        }
    })
</script>

<style lang="scss" scoped>
.menu {
    ul {
        display: flex;
        align-items: center;
        gap: 25px;
    }

    &__img-container {
        width: 35px;
        height: 35px;
        overflow: hidden;
        border-radius: 50%;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}

</style>