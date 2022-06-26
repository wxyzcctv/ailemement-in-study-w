import { App } from "vue";
import AlContainer from "./Container.vue";
import AlHeader from "./Header.vue";
import AlAside from "./Aside.vue";
import AlMain from "./Main.vue";
import AlFooter from "./Footer.vue";

export default {
    install(app:App){
        app.component(AlContainer.name, AlContainer)
        app.component(AlHeader.name, AlHeader)
        app.component(AlAside.name, AlAside)
        app.component(AlMain.name, AlMain)
        app.component(AlFooter.name, AlFooter)
    }
}