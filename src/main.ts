import { createApp } from 'vue'
import App from './App.vue'
import AlContainer from './components/container'

const app = createApp(App)
app.use(AlContainer)
    .mount('#app')
