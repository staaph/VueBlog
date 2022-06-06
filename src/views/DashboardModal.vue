<template>
  <main
    class="fixed border p-8 rounded h-[90%] w-[90%] bg-white dark:bg-gray-700"
  >
    <CloseIcon
      class="absolute top-2 right-2 cursor-pointer dark:text-white text-gray-600"
      @click.prevent="closeDashboard"
    />
    <section class="flex flex-row h-full">
      <DashboardMenu />
      <section class="w-full flex overflow-scroll">
        <div
          v-if="menuItem === 'dashboard'"
          class="flex items-center justify-center h-full w-full dark:text-white"
        >
          <p>Dashboard</p>
        </div>
        <div v-if="menuItem === 'writeArticle'" class="w-full h-[92%] ml-12">
          <EditorComponent />
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
import EditorComponent from '@/components/Dashboard/EditorComponent.vue';
import DashboardMenu from '@/components/Dashboard/DashboardMenu.vue';
import ProfileEditor from '@/components/Dashboard/ProfileEditor.vue';
import SettingsEditor from '@/components/Dashboard/SettingsEditor.vue';
import { menuItem } from '@/store/dashboardStore';

const { toggleDashboardModal, isUnsaved, setShowWarning } = uiState;

const closeDashboard = () => {
  if (isUnsaved.value) {
    setShowWarning();
  } else {
    toggleDashboardModal(false);
  }
};
</script>
