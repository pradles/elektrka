import './assets/main.css'
import { createAuth0 } from '@auth0/auth0-vue';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)


app.use(
    createAuth0({
      domain: "dev-hx4w4tj6qft5zmw0.us.auth0.com",
      clientId: "e0kKBpxv2ssZ2JWq6LNxmp48ZL5RiqJe",
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    })
  );
app.use(router)
app.config.compilerOptions.whitespace = "preserve"
app.mount('#app')
