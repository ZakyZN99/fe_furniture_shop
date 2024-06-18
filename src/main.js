import { createApp } from 'vue'
// import Vue from 'vue';
import App from './App.vue'
import './assets/tailwind.css'
import store from './store';

import router from './router.js'



// createApp(App).mount('#app')

const app = createApp(App);

app.use(store);
app.use(router);

app.mount('#app');