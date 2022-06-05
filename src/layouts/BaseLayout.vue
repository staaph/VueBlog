<template>
  <main class="flex flex-col w-screen h-screen">
    <Navbar class="w-screen" />
    <section v-if="isDashboardOpen" class="centered">
      <DashboardModal />
    </section>
    <section v-if="isLoginModalOpen" class="centered">
      <LoginModal />
    </section>
    <CloseWarning v-if="showWarning" class="centered" />
    <router-view />
  </main>
</template>

<script setup lang="ts">
import Navbar from '@/components/NavbarComponent.vue';
import DashboardModal from '@/views/DashboardModal.vue';
import LoginModal from '@/views/LoginModal.vue';
import uiState from '@/store/modalState';
import CloseWarning from '@/components/CloseWarning.vue';

const { isDashboardOpen, isLoginModalOpen, showWarning } = uiState;
</script>

<style scoped>
.centered {
  @apply fixed flex justify-center items-center w-screen h-screen z-50;
}
</style>
