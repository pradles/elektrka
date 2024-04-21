import './assets/main.css'
import { createAuth0 } from '@auth0/auth0-vue';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)



app.use(router)
app.config.compilerOptions.whitespace = "preserve"
app.mount('#app')
