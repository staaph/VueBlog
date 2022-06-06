<template>
  <main class="bg-transparent p-3">
    <nav class="px-3 bg-transparent flex flex-row justify-between items-center">
      <section
        class="md:w-1/6 w-1/12 justify-start flex text-black dark:text-white text-2xl font-bold"
      >
        <router-link to="/"> VueBlog </router-link>
      </section>

      <section class="justify-end flex text-black dark:text-white gap-4">
        <button>
          <Sun
            @click="toggleTheme"
            v-if="userTheme === 'dark'"
            class="w-7 h-7"
          />
          <Moon v-else @click="toggleTheme" class="w-7 h-7" />
        </button>
        <div
          class="border border-black dark:border-white rounded-full p-1 cursor-pointer"
        >
          <User @click.prevent="toggleUserMenu" class="w-7 h-7" />
        </div>
      </section>
    </nav>
    <div
      v-show="isUserMenuOpen"
      class="origin-top-right absolute right-4 mt-2 w-36 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="user-menu-button"
      tabindex="-1"
    >
      <button
        v-if="getAuth().currentUser"
        href="/"
        class="block px-4 py-2 text-sm text-gray-700"
        role="menuitem"
        tabindex="-1"
        id="user-menu-item-1"
        @click="toggleDashboardModal(true)"
      >
        Dashboard
      </button>
      <button
        class="block px-4 py-2 text-sm text-gray-700"
        role="menuitem"
        tabindex="-1"
        id="user-menu-item-2"
        v-if="!getAuth().currentUser"
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
  </main>
</template>

<script setup lang="ts">
import Sun from '@/assets/icons/lightSun.vue';
import Moon from '@/assets/icons/darkMoon.vue';
import User from '@/assets/icons/UserIcon.vue';
import { useDark, userTheme } from '@/composables/useDark';
import uiState from '@/store/modalState';
import { useAuth } from '@/composables/useAuth';
import { getAuth } from 'firebase/auth';

const { toggleTheme } = useDark();
const { logout } = useAuth();
const {
  openLoginModal,
  toggleDashboardModal,
  isUserMenuOpen,
  toggleUserMenu,
  isDashboardOpen,
} = uiState;

const signOut = async () => {
  await logout();
  if (getAuth().currentUser === null) {
    toggleUserMenu();
  }
  if (isDashboardOpen.value) {
    toggleDashboardModal(false);
  }
};
</script>
