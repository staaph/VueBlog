<template>
  <main
    class="dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-900 dark:to-black"
  >
    <Navbar />
    <div class="h-screen w-screen justify-center items-center">
      <router-view />
    </div>
  </main>
</template>

<script setup lang="ts">
import Navbar from '@/components/NavbarComponent.vue';
</script>
