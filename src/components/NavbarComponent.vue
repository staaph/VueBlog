<template>
  <main class="bg-transparent p-3">
    <nav class="px-3 bg-transparent flex flex-row justify-between items-center">
      <section
        class="md:w-1/6 w-1/12 justify-start flex text-black dark:text-white text-xl font-bold"
      >
        <router-link to="/"> VueBlog </router-link>
      </section>

      <section class="justify-end flex text-black dark:text-white gap-3">
        <button>
          <Sun @click="toggleTheme" v-if="userTheme === 'dark'" />
          <Moon v-else @click="toggleTheme" />
        </button>
        <div
          class="border border-black dark:border-white rounded-full p-1 cursor-pointer"
        >
          <User @click.prevent="toggleUserMenu" />
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
        v-show="getAuth().currentUser"
        href="/"
        class="block px-4 py-2 text-sm text-gray-700"
        role="menuitem"
        tabindex="-1"
        id="user-menu-item-1"
        @click.prevent="toggleDashboardModal"
      >
        Dashboard
      </button>
      <button
        class="block px-4 py-2 text-sm text-gray-700"
        role="menuitem"
        tabindex="-1"
        id="user-menu-item-2"
        v-if="!getAuth().currentUser"
        @click.prevent="toggleLoginModal"
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
import uiState from '@/composables/modalState';
import { useAuth } from '@/composables/useAuth';
import { getAuth } from 'firebase/auth';

const { toggleTheme } = useDark();
const { logout } = useAuth();
const {
  toggleLoginModal,
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
    toggleDashboardModal();
  }
};
</script>
