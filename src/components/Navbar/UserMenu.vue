<template>
  <div
    role="menu"
    aria-orientation="vertical"
    aria-labelledby="user-menu-button"
    tabindex="-1"
  >
    <button
      v-if="user"
      class="block px-4 py-2 text-sm text-gray-700"
      role="menuitem"
      tabindex="-1"
      id="user-menu-item-1"
      @click="toggleDashboardModal(true)"
    >
      <span class="flex flex-row gap-x-1"><DashboardIcon /> Dashboard</span>
    </button>
    <button
      v-if="user"
      class="block px-4 py-2 text-sm text-gray-700"
      role="menuitem"
      tabindex="-1"
      id="user-menu-item-2"
      @click="setUserMenu(false)"
    >
      <div @click="goToWrite" class="flex flex-row gap-x-1">
        <ArticleIcon />Write
      </div>
    </button>
    <button
      class="block px-4 py-2 text-sm text-gray-700"
      role="menuitem"
      tabindex="-1"
      id="user-menu-item-3"
      v-if="!user"
      @click.prevent="openLoginModal"
    >
      Sign In / Register
    </button>
    <button
      v-else
      class="block px-4 py-2 text-xs text-blue-700"
      role="menuitem"
      tabindex="-1"
      id="user-menu-item-3"
      @click="signOut"
    >
      Sign out
    </button>
  </div>
</template>

<script setup lang="ts">
import uiState from '@/store/modalState';
import { useAuth } from '@/composables/useAuth';
import { getAuth } from 'firebase/auth';
import ArticleIcon from '@/assets/icons/ArticleIcon.vue';
import DashboardIcon from '@/assets/icons/DashboardIcon.vue';
import { user } from '@/composables/useAuth';
import { useRouter } from 'vue-router';

const { logout } = useAuth();
const { openLoginModal, toggleDashboardModal, setUserMenu, isDashboardOpen } =
  uiState;

const router = useRouter();
const goToWrite = () => {
  router.push('/write');
};

const signOut = async () => {
  await logout();
  if (getAuth().currentUser === null) {
    setUserMenu(false);
  }
  if (isDashboardOpen.value) {
    toggleDashboardModal(false);
  }
};
</script>
