import { createApp } from 'vue'
import App from './App'
import router from './router'
import './tailwind.css'
import pinia from './utils/pinia'

const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')
