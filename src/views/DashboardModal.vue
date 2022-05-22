<template>
  <div class="fixed border p-8 rounded h-3/4 w-3/4 bg-white dark:bg-black">
    <CloseIcon
      class="absolute top-2 right-2 cursor-pointer dark:text-white text-gray-600"
      @click.prevent="toggleDashboardModal"
    />
    <div class="flex flex-row h-full">
      <div class="flex flex-col">
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
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    ></path>
                  </svg>
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
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
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    ></path>
                  </svg>
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
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </span>
                <span class="ml-2 text-sm tracking-wide truncate"
                  >Settings</span
                >
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div
        v-if="menuItem === 'dashboard'"
        class="flex items-center justify-center h-full w-full dark:text-white"
      >
        <p>Dashboard</p>
      </div>
      <div
        v-if="menuItem === 'writeArticle'"
        class="flex flex-col w-full ml-12 mt-4"
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
    </div>
  </div>
</template>

<script setup lang="ts">
import CloseIcon from '@/assets/icons/CloseIcon.vue';
import uiState from '@/composables/modalState.js';
import EditorComponent from '@/components/EditorComponent.vue';
import { ref } from 'vue';

const { toggleDashboardModal } = uiState;
const menuItem = ref('dashboard');
</script>
