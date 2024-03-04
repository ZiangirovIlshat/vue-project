import { template } from "@babel/core"
import xButton from "../components/xButton.vue"
import { action } from "@storybook/addon-actions"

const methods = {
    onAction: action("onAction")
}

export default {
    title : "xButton",
    components: { xButton },
}

export const defaultView = ()=> ({
    components: { xButton },
    template: `
        <div>
            <xButton @action="onAction">Follow</xButton>
        </div>
    `,
    methods
})