<template>
  <main class="flex flex-col w-screen h-screen">
    <Navbar class="w-screen" />
    <section v-if="isDashboardOpen" class="centered bg-gray-500/50">
      <DashboardModal />
    </section>
    <section v-if="isLoginModalOpen" class="centered bg-gray-500/50">
      <LoginModal />
    </section>
    <router-view />
  </main>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar/NavbarComponent.vue';
import DashboardModal from '@/views/DashboardModal.vue';
import LoginModal from '@/views/LoginModal.vue';
import uiState from '@/store/modalState';

const { isDashboardOpen, isLoginModalOpen } = uiState;
</script>

<style scoped>
.centered {
  @apply fixed flex justify-center items-center w-screen h-screen z-50;
}
</style>
