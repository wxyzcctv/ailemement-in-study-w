import { App } from "vue";
import AlContainer from "./Container.vue";
import AlHeader from "./Header.vue";

export default {
    install(app:App){
        app.component(AlContainer.name, AlContainer)
        app.component(AlHeader.name, AlHeader)
    }
}