<template>
  <main class="w-full h-full justify-center flex items-center">
    <div class="bg-white rounded h-1/2 w-1/2 relative p-4 overflow-scroll">
      <CloseIcon
        class="absolute top-3 right-3 cursor-pointer dark:text-white text-gray-600"
        @click="isInfoMenuOpen = false"
      />
      <p># h1</p>
      <p>## h2</p>
      <p>### h3</p>
      <p>#### h4</p>
      <p>##### h5</p>
      <p>###### h6</p>
      <p>**bold**</p>
      <p>*italic*</p>
      <p>```language => for codeblocks<br />```</p>
    </div>
  </main>
</template>

<script setup lang="ts">
import CloseIcon from '@/assets/icons/CloseIcon.vue';
import { isInfoMenuOpen } from '@/store/dashboardStore';
</script>
