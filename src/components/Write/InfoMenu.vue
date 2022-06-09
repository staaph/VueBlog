<template>
  <main class="w-full h-full justify-center flex items-center">
    <div class="bg-white h-1/2 w-1/2 relative">
      <CloseIcon
        class="absolute top-3 right-3 cursor-pointer dark:text-white text-gray-600"
        @click="isInfoMenuOpen = false"
      />
    </div>
  </main>
</template>

<script setup lang="ts">
import CloseIcon from '@/assets/icons/CloseIcon.vue';
import { isInfoMenuOpen } from '@/store/dashboardStore';
</script>
