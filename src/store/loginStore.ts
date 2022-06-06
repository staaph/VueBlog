import { reactive, computed } from 'vue';

const state = reactive({
  showLogin: 'login',
});

const showLogin = computed(() => state.showLogin);
const setLogin = (component: string) => {
  state.showLogin = component;
};

export {showLogin, setLogin}
