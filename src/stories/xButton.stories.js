import { template } from "@babel/core"
import xButton from "../components/xButton.vue"

export default {
    title : "xButton",
    components: { xButton },
}

export const defaultView = ()=> ({
    components: { xButton },
    template: `
        <div>
            <xButton>Follow</xButton>
        </div>
    `,
})