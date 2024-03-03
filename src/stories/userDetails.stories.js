import { template } from "@babel/core"
import userDetails from "../components/userDetails.vue"
import standartUserAvatar from '../assets/standartAvatar.png'

export default {
    title : "userDetails",
    components: { userDetails },
}

export const defaultView = ()=> ({
    components: { userDetails },
    template: `
        <div>
        <userDetails
            userName="Иван Иванов" 
            avatarUrl="https://jjji.ru/300x300">
        </userDetails>
        </div>
    `,
})

export const withoutAvatar = ()=> ({
    components: { userDetails },
    template: `
        <div>
        <userDetails
            userName="Иван Иванов"
        >
        </userDetails>
        </div>
    `,
})