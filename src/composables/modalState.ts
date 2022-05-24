import { reactive, computed, ref, type Ref } from 'vue';

const state = reactive({
  isDashboardOpen: false,
  isUserMenuOpen: false,
  isLoginModalOpen: false,
  isUnsaved: false,
  showWarning: false,
});

const showTosModal: Ref<boolean> = ref(false);

/**
 * in case of unchanged changes, this should be toggled
 * @param flag on input change set to true
 */
const setUnsaved = (flag: boolean) => {
  state.isUnsaved = flag;
};
const isUnsaved = computed(()=>state.isUnsaved)

const showWarning = computed(()=>state.showWarning)
const setShowWarning = () =>{
  state.showWarning = !state.showWarning
}

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
  isUnsaved,
  showWarning,
  setShowWarning,
  toggleDashboardModal,
  toggleLoginModal,
  toggleUserMenu,
  setUnsaved,
  showTosModal
};

export default uiState;
