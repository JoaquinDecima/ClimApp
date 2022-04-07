import { createApp } from 'vue'
import App from './App.vue'
import { current, next } from "./service/api.js";

const app = createApp(App)

app.mount('#app')
app.config.globalProperties.$currentWeatherData = await current()