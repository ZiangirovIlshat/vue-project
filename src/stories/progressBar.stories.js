import { template } from "@babel/core"
import progressBar from "../components/progressBar.vue"

export default {
    title : "progressBar",
    components: { progressBar },
}

export const defaultView = ()=> ({
    components: { progressBar },
    template: `
        <div>
            <progressBar />
        </div>
        <br>
        <div style="width: 500px">
            <progressBar />
        </div>
        <br>
        <div style="width: 100px">
            <progressBar />
        </div>
    `,
})