import './assets/main.css'
import { createAuth0 } from '@auth0/auth0-vue';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)


app.use(
    createAuth0({
      domain: import.meta.env.AUTH0_DOMAIN,
      clientId: import.meta.env.AUTH0_CLIENT_ID,
      authorizationParams: {
        redirect_uri: window.location.origin
      }
    })
  );
app.use(router)
app.config.compilerOptions.whitespace = "preserve"
app.mount('#app')
