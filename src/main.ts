import { createApp } from "vue"
import pinia from "./stores"

import App from "./App.vue"
import router from "./router"

import "normalize.css"
import "./assets/css/index.css"

const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount("#app")
