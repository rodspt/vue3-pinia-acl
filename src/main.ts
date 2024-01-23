import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import route from './router'

/*
import UserGatewayHttp from "./infra/gateway/UserGatewayHttp.ts";

const userGateway = new UserGatewayHttp();
userGateway.login('00000000191', 'teste123456')
    .then(response => console.log(response))
    .catch(error => console.log(error));
*/

const app = createApp(App)
app.use(route)
app.mount('#app')
