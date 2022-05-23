<template>
  <main class="fixed border p-8 rounded h-5/6 w-3/4 bg-white dark:bg-black">
    <CloseIcon
      class="absolute top-2 right-2 cursor-pointer dark:text-white text-gray-600"
      @click.prevent="toggleDashboardModal"
    />
    <section class="flex flex-row h-full">
      <aside class="flex flex-col">
        <div
          class="overflow-y-auto overflow-x-hidden flex flex-col justify-between"
        >
          <ul class="flex flex-col py-4 space-y-1">
            <li class="hidden md:block">
              <div class="flex flex-row items-center h-8">
                <div
                  class="text-sm font-light tracking-wide text-gray-400 uppercase"
                >
                  Main
                </div>
              </div>
            </li>
            <li>
              <button
                class="relative flex flex-row items-center h-8 dark:text-white"
                @click.prevent="menuItem = 'dashboard'"
                :class="{ 'font-bold': menuItem === 'dashboard' }"
              >
                <span class="inline-flex justify-center items-center">
                  <HomeIcon />
                </span>
                <span class="ml-2 text-sm tracking-wide truncate"
                  >Dashboard</span
                >
              </button>
            </li>
            <li>
              <button
                class="relative flex flex-row items-center h-8 dark:text-white"
                :class="{ 'font-bold': menuItem === 'writeArticle' }"
                @click.prevent="menuItem = 'writeArticle'"
              >
                <span class="inline-flex justify-center items-center">
                  <ArticleIcon />
                </span>
                <span class="ml-2 text-sm tracking-wide truncate"
                  >Write Article</span
                >
              </button>
            </li>
            <li class="hidden md:block">
              <div class="flex flex-row items-center mt-5 h-8">
                <div
                  class="text-sm font-light tracking-wide text-gray-400 uppercase"
                >
                  Settings
                </div>
              </div>
            </li>
            <li>
              <button
                class="relative flex flex-row items-center h-11 dark:text-white"
                @click.prevent="menuItem = 'profile'"
                :class="{ 'font-bold': menuItem === 'profile' }"
              >
                <span class="inline-flex justify-center items-center">
                  <ProfileIcon />
                </span>
                <span class="ml-2 text-sm tracking-wide truncate">Profile</span>
              </button>
            </li>
            <li>
              <button
                class="relative flex flex-row items-center dark:text-white"
                @click.prevent="menuItem = 'settings'"
                :class="{ 'font-bold': menuItem === 'settings' }"
              >
                <span class="inline-flex justify-center items-center">
                  <SettingsIcon />
                </span>
                <span class="ml-2 text-sm tracking-wide truncate"
                  >Settings</span
                >
              </button>
            </li>
          </ul>
        </div>
      </aside>
      <section class="h-full w-full flex overflow-scroll">
        <div
          v-if="menuItem === 'dashboard'"
          class="flex items-center justify-center h-full w-full dark:text-white"
        >
          <p>Dashboard</p>
        </div>
        <div
          v-if="menuItem === 'writeArticle'"
          class="w-full ml-12 mt-4 overflow-scroll"
        >
          <EditorComponent class="" />
        </div>
        <div
          v-if="menuItem === 'profile'"
          class="flex items-center justify-center h-full w-full dark:text-white"
        >
          <p>profile</p>
        </div>
        <div
          v-if="menuItem === 'settings'"
          class="flex items-center justify-center h-full w-full dark:text-white"
        >
          <p>settings</p>
        </div>
      </section>
    </section>
  </main>
</template>

<script setup lang="ts">
import CloseIcon from '@/assets/icons/CloseIcon.vue';
import HomeIcon from '@/assets/icons/HomeIcon.vue';
import ArticleIcon from '@/assets/icons/ArticleIcon.vue';
import ProfileIcon from '@/assets/icons/ProfileIcon.vue';
import SettingsIcon from '@/assets/icons/SettingsIcon.vue';
import uiState from '@/composables/modalState';
import EditorComponent from '@/components/EditorComponent.vue';
import { ref, type Ref } from 'vue';

const { toggleDashboardModal } = uiState;
const menuItem: Ref<string> = ref('dashboard');
</script>
