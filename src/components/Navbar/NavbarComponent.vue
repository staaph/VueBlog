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
          <User @click="openCloseDb" class="w-7 h-7" />
        </div>
      </section>
    </nav>
    <div
      v-show="isUserMenuOpen"
      class="origin-top-right absolute right-4 mt-2 w-36 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
    >
      <UserMenu />
    </div>
  </main>
</template>

<script setup lang="ts">
import Sun from '@/assets/icons/lightSun.vue';
import Moon from '@/assets/icons/darkMoon.vue';
import User from '@/assets/icons/UserIcon.vue';
import { useDark, userTheme } from '@/composables/useDark';
import uiState from '@/store/modalState';
import UserMenu from '@/components/Navbar/UserMenu.vue';

const { toggleTheme } = useDark();
const { isUserMenuOpen, setUserMenu } = uiState;

const openCloseDb = () => {
  !isUserMenuOpen.value ? setUserMenu(true) : setUserMenu(false);
};
</script>
