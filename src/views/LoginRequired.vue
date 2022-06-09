<template>
  <main class="h-full">
    <div class="h-full w-full grid place-content-center">
      <p>A login is required to proceed</p>
      <div class="flex justify-center">
        <button class="bg-gray-200 rounded px-2 py-1 text-black mt-4">
          <button @click="openLoginModal">Login</button>
        </button>
      </div>
    </div>
  </main>
  <div class="centered" v-if="isLoginModalOpen">
    <LoginModal class="z-50 fixed" />
  </div>
</template>

<script setup lang="ts">
import LoginModal from '@/views/LoginModal.vue';
import uiState from '@/store/modalState';

const { isLoginModalOpen, openLoginModal } = uiState;
</script>

<style scoped>
.centered {
  @apply fixed flex justify-center items-center w-screen h-screen z-50;
}
</style>
