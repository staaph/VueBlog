<template>
  <main class="fixed border p-8 rounded h-3/4 w-3/4 bg-white dark:bg-gray-700">
    <CloseIcon
      class="absolute top-2 right-2 cursor-pointer dark:text-white text-gray-600"
      @click.prevent="toggleDashboardModal(false)"
    />
    <section class="flex flex-row h-full">
      <DashboardMenu />
      <section class="w-full flex overflow-scroll">
        <div
          v-if="menuItem === 'dashboard'"
          class="flex items-center justify-center h-full w-full dark:text-white"
        >
          <DashboardArticles />
        </div>
        <div v-if="menuItem === 'profile'" class="ml-12 w-full dark:text-white">
          <ProfileEditor />
        </div>
        <div
          v-if="menuItem === 'settings'"
          class="ml-12 w-full dark:text-white"
        >
          <SettingsEditor />
        </div>
      </section>
    </section>
  </main>
</template>

<script setup lang="ts">
import CloseIcon from '@/assets/icons/CloseIcon.vue';
import uiState from '@/store/modalState';
import DashboardMenu from '@/components/Dashboard/DashboardMenu.vue';
import ProfileEditor from '@/components/Dashboard/ProfileEditor.vue';
import SettingsEditor from '@/components/Dashboard/SettingsEditor.vue';
import { menuItem } from '@/store/dashboardStore';
import DashboardArticles from '../components/Dashboard/DashboardArticles.vue';

const { toggleDashboardModal } = uiState;
</script>
