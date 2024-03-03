import { template } from "@babel/core"

import sliderItem from "../components/sliderItem.vue"
import userDetails from "../components/userDetails.vue"
import xButton from "../components/xButton.vue"

export default {
    title : "sliderItem",
    components: { 
        sliderItem,
        userDetails,
        xButton,
    },
}

export const defaultView = ()=> ({
    components: { 
        sliderItem,
        userDetails,
        xButton,
    },
    template: `
        <div style="width: 375px; margin: 0 auto">
            <sliderItem>
        </div>
    `,
})