import { reactive, computed } from 'vue';

const state = reactive({
  isDashboardOpen: false,
  isUserMenuOpen: false,
  isLoginModalOpen: false,
  isUnsaved: false,
});

/**
 * in case of unchanged changes, this should be toggled
 * @param flag on input change set to true
 */
const setUnsaved = (flag: boolean) => {
  state.isUnsaved = flag;
};

const isDashboardOpen = computed(() => state.isDashboardOpen);
const toggleDashboardModal = () => {
  if (!state.isUnsaved) {
  state.isDashboardOpen = !state.isDashboardOpen;
  state.isUserMenuOpen = false;
  }
};

const isLoginModalOpen = computed(() => state.isLoginModalOpen);
const toggleLoginModal = () => {
  state.isLoginModalOpen = !state.isLoginModalOpen;
  state.isUserMenuOpen = false;
};
const isUserMenuOpen = computed(() => state.isUserMenuOpen);
const toggleUserMenu = () => {
  if(!state.isDashboardOpen){
  state.isUserMenuOpen = !state.isUserMenuOpen;
  }
};

const uiState = {
  isDashboardOpen,
  isLoginModalOpen,
  isUserMenuOpen,
  toggleDashboardModal,
  toggleLoginModal,
  toggleUserMenu,
  setUnsaved,
};

export default uiState;
