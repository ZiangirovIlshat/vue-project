<template>
    <div class="slider-item">
        <header class="slider-item__header">
            <div class="slider-item__progress-bar">
                <progressbar />
            </div>
            <div class="slider-item__user-details">
                <userDetails 
                    :userName="'Иванов Иван'" 
                    :avatarUrl="'https://jjji.ru/200x200'">
                </userDetails>
            </div>
        </header>
        <div class="slider-item__body">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit saepe harum voluptates impedit quidem magni in minus nulla, quo suscipit reiciendis perferendis ipsa corrupti dolor possimus voluptatum nostrum, obcaecati soluta.</p>
            <br>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste tenetur eligendi eum, possimus autem praesentium delectus amet sequi, atque voluptatem repellendus magnam ducimus recusandae labore eveniet, dolorem ullam voluptatibus excepturi.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit saepe harum voluptates impedit quidem magni in minus nulla, quo suscipit reiciendis perferendis ipsa corrupti dolor possimus voluptatum nostrum, obcaecati soluta.</p>
            <br>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit saepe harum voluptates impedit quidem magni in minus nulla, quo suscipit reiciendis perferendis ipsa corrupti dolor possimus voluptatum nostrum, obcaecati soluta.</p>
            <br>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit saepe harum voluptates impedit quidem magni in minus nulla, quo suscipit reiciendis perferendis ipsa corrupti dolor possimus voluptatum nostrum, obcaecati soluta.</p>
            <br>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit saepe harum voluptates impedit quidem magni in minus nulla, quo suscipit reiciendis perferendis ipsa corrupti dolor possimus voluptatum nostrum, obcaecati soluta.</p>
            <br>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit saepe harum voluptates impedit quidem magni in minus nulla, quo suscipit reiciendis perferendis ipsa corrupti dolor possimus voluptatum nostrum, obcaecati soluta.</p>
            <br>
        </div>
        <footer class="slider-item__footer">
            <xButton></xButton>
        </footer>
    </div>
</template>

<script>
    import { defineComponent } from "vue"

    import progressbar from "../components/progressBar"
    import userDetails from "../components/userDetails"
    import xButton from "../components/xButton"

    export default defineComponent({
        name: "sliderItem",
        components: {
            progressbar,
            xButton,
            userDetails,
        },

        props: {
            postData: {
                type: Object,
                required: true,
            }
        }
    })
</script>

<style lang="scss" scoped>
    .slider-item {
        display: flex;
        flex-direction: column;
        height: 667px;

        &__header {
            padding: 8px 8px 13px 8px;
        }

        &__progress-bar {
            margin: 0 0 10px 0;
        }

        &__body {
            flex: 1;
            padding: 18px;
            overflow-y: scroll;

            &::-webkit-scrollbar {
                width: 5px;
            }
            &::-webkit-scrollbar-track {
                background: #fff;
            }
            &::-webkit-scrollbar-thumb {
                background-color: #AFAFAF;
                border-radius: 20px;
            }
        }

        &__footer {
            padding: 24px 0 32px 0;
            display: flex;
            justify-content: center;
            border-top: 1px solid #CACACA;
        }
    }

</style>