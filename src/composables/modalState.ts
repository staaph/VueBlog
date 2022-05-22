import { reactive, computed } from 'vue';

const state = reactive({
  isDashboardOpen: false,
  isUserMenuOpen: false,
  isLoginModalOpen: false,
});

const isDashboardOpen = computed(() => state.isDashboardOpen);
const toggleDashboardModal = () => {
  state.isDashboardOpen = !state.isDashboardOpen;
  state.isUserMenuOpen = false
};

const isLoginModalOpen = computed(() => state.isLoginModalOpen);
const toggleLoginModal = () => {
  state.isLoginModalOpen = !state.isLoginModalOpen;
  state.isUserMenuOpen = false
};
const isUserMenuOpen = computed(() => state.isUserMenuOpen);
const toggleUserMenu = () => {
  state.isUserMenuOpen = !state.isUserMenuOpen;
};

const uiState = {
  isDashboardOpen,
  isLoginModalOpen,
  isUserMenuOpen,
  toggleDashboardModal,
  toggleLoginModal,
  toggleUserMenu,
};

export default uiState;