<template>
  <main class="flex w-full h-full justify-center">
    <div
      v-if="isDashboardOpen"
      class="fixed flex justify-center w-full h-full z-50"
    >
      <DashboardModal />
    </div>
    <div
      v-if="isLoginModalOpen"
      class="fixed flex justify-center w-full h-full z-50"
    >
      <LoginModal />
    </div>
    <section class="justify-center flex items-start mt-12 z-0">
      <FeaturedSection />
    </section>
  </main>
</template>

<script setup lang="ts">
import DashboardModal from '@/views/DashboardModal.vue';
import LoginModal from '@/views/LoginModal.vue';
import FeaturedSection from '@/components/FeaturedSection.vue';
import uiState from '@/composables/modalState';
import TestSection from '@/components/TestSection.vue';
import blogdata from '@/blogdata.json';

const { isDashboardOpen, isLoginModalOpen } = uiState;
</script>
