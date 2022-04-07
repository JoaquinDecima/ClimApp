import { createApp } from 'vue'
import App from './App.vue'
import { current, next } from "./service/api.js";

const app = createApp(App)

app.mount('#app')
app.config.globalProperties.$currentWeatherData = await current()
app.config.globalProperties.$nextWeatherData = await next()

console.log(app.config.globalProperties.$nextWeatherData)
console.log(app.config.globalProperties.$currentWeatherData)