import { createApp } from 'vue'
import App from './App.vue'
import AlContainer from './components/container'
import AlButton from './components/button'

const app = createApp(App)
app.config.globalProperties.$AILEMENTE = {
    size:'large'
}
app.use(AlContainer)
    .use(AlButton)
    .mount('#app')
