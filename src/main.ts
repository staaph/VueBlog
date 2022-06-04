import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import '@/assets/index.css';
import { auth } from '@/firebase/config';
import VeeValidatePlugin from '@/plugin/validation.js'
import { getAuth, onAuthStateChanged } from '@firebase/auth';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import specific icons */
import {
  faBold,
  faItalic,
  faList,
  faRotateLeft,
  faRotateRight,
  faCode,
  faListOl
} from '@fortawesome/free-solid-svg-icons';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* add icons to the library */
library.add(faBold, faItalic, faList, faRotateLeft, faRotateRight, faCode, faListOl);





  const app = createApp(App);
  app.use(router);
  app.use(VeeValidatePlugin)
  app.component('font-awesome-icon', FontAwesomeIcon);

  app.mount('#app');

