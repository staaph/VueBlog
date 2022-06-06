import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import '@/assets/index.css';
import VeeValidatePlugin from '@/plugins/validation.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import {
  faBold,
  faItalic,
  faList,
  faRotateLeft,
  faRotateRight,
  faCode,
  faListOl,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faBold,
  faItalic,
  faList,
  faRotateLeft,
  faRotateRight,
  faCode,
  faListOl
);

const app = createApp(App);
app.use(router);
app.use(VeeValidatePlugin);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
