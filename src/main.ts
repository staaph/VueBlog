import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import '@/assets/index.css';
import VeeValidatePlugin from '@/plugins/validation.js';


const app = createApp(App);
app.use(router);
app.use(VeeValidatePlugin);
app.mount('#app');
