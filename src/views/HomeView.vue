<template>
  <div class="h-screen w-screen justify-center items-center">
    <Navbar />

    <main class="flex w-full justify-center">
      <section v-if="isDashboardOpen" class="fixed flex justify-center z-50">
        <DashboardModal />
      </section>
      <section v-if="isLoginModalOpen" class="fixed flex justify-center z-50">
        <LoginModal />
      </section>
      <section class="flex w-full justify-center mt-20 mx-16">
        <FeaturedSection />
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/NavbarComponent.vue';
import DashboardModal from '@/views/DashboardModal.vue';
import LoginModal from '@/views/LoginModal.vue';
import uiState from '@/composables/modalState';
import FeaturedSection from '@/components/FeaturedSection.vue';

const { isDashboardOpen, isLoginModalOpen } = uiState;
</script>
