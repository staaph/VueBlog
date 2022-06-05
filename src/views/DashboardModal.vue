<template>
  <main
    class="fixed border p-8 rounded h-[85%] w-[85%] bg-white dark:bg-neutral-900"
  >
    <CloseIcon
      class="absolute top-2 right-2 cursor-pointer dark:text-white text-gray-600"
      @click.prevent="closeDashboard"
    />
    <section class="flex flex-row h-full">
      <DashboardMenu />
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
          <EditorComponent />
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
import uiState from '@/store/modalState';
import EditorComponent from '@/components/Dashboard/EditorComponent.vue';
import DashboardMenu from '../components/Dashboard/DashboardMenu.vue';
import { menuItem } from '@/store/dashboardStore';

const { toggleDashboardModal, isUnsaved, setShowWarning } = uiState;

const closeDashboard = () => {
  if (isUnsaved.value) {
    setShowWarning();
  } else {
    toggleDashboardModal();
  }
};
</script>
