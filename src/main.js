import { createApp } from 'vue'
import router from './router'
import './style.css'
import App from './App.vue'
import { applyDarkThemeFromLocalStorage } from './utils/theme'

applyDarkThemeFromLocalStorage()


const app = createApp(App)

app.use(router)
app.mount('#app')
