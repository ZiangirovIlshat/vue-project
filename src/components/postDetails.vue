<template>
    <div class="post-details">
        <ul>
            <li class="post-details__item">
                <svg class="post-details__icon" viewBox="0 0 24 24" width="24" height="24">
                    <use href="../assets/sprite.svg#star" x="0" y="0"></use>
                </svg>
                Star
            </li>
            <li class="post-details__item">{{ stars }}</li>
            <li class="post-details__item">
                <svg class="post-details__icon" viewBox="0 0 24 24" width="24" height="24">
                    <use href="../assets/sprite.svg#git" x="0" y="0"></use>
                </svg>
                Fork
            </li>
            <li class="post-details__item">{{ fork }}</li>
        </ul>
    </div>
</template>

<script>
    import { defineComponent } from "vue"

    export default defineComponent({
        name: "ostDetails",
        props: {
            stars: {
                required: true,
                type: Number,
            },
            fork: {
                required: true,
                type: Number,
            },
        }
    })
</script>

<style lang="scss" scoped>
.post-details {

    ul {
        display: inline-flex;
        align-items: center;
        border: 1px solid #dddddb;
        border-radius: 6px;
        overflow: hidden;
    }

    &__item {
        display: flex;
        align-items: center;
        padding: 5px 10px;
        border-right: 1px solid #dddddb;

        @media (max-width: 576px) {
            font-size: 10px;
        }

        &:nth-child(2n+1) {
            background: #FAFBFC;
            cursor: pointer;
            svg {
                fill: #586069;
            }

            @media(hover: hover) and (pointer: fine) {
                &:hover {
                    svg {
                        fill: #31AE54;
                    }
                }
            }
        }

        &:last-child {
            border-right: 0;
        }
    }

    &__icon {
        height: 16px;
        width: 16px;
        margin: 0 4px 0 0;

        @media (max-width: 576px) {
            height: 10px;
            width: 10px;
        }
    }
}


</style>