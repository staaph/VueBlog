<template>
  <div class="dark:bg-black">
    <Navbar />
    <div class="h-screen w-screen justify-center items-center">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/NavbarComponent.vue';
</script>
