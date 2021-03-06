import { reactive, computed, ref, type Ref } from 'vue';
import { getAuth } from 'firebase/auth';
import { setLogin } from '@/store/loginStore';

const state = reactive({
  isDashboardOpen: false,
  isUserMenuOpen: false,
  isLoginModalOpen: false,
});

const showTosModal: Ref<boolean> = ref(false);

const isDashboardOpen = computed(() => state.isDashboardOpen);
const toggleDashboardModal = (flag: boolean) => {
  if (flag == true && getAuth().currentUser != null) {
    state.isDashboardOpen = true;
    state.isUserMenuOpen = false;
  } else if (flag == false) {
    state.isDashboardOpen = false;
    state.isUserMenuOpen = false;
  }
};

const isLoginModalOpen = computed(() => state.isLoginModalOpen);
const openLoginModal = () => {
  if (getAuth().currentUser == null) {
    state.isLoginModalOpen = true;
    state.isUserMenuOpen = false;
  }
};
const closeLoginModal = () => {
  state.isLoginModalOpen = false;
  state.isUserMenuOpen = false;
  setLogin('login');
};

const isUserMenuOpen = computed(() => state.isUserMenuOpen);
const setUserMenu = (flag: boolean) => {
  if (!state.isDashboardOpen) {
    state.isUserMenuOpen = flag;
  }
};

const uiState = {
  isDashboardOpen,
  isLoginModalOpen,
  isUserMenuOpen,
  showTosModal,
  toggleDashboardModal,
  openLoginModal,
  closeLoginModal,
  setUserMenu,
};

export default uiState;
