<template>
  <main class="">
    <Navbar />
    <div class="h-screen w-screen justify-center items-center">
      <router-view />
    </div>
  </main>
</template>

<script setup lang="ts">
import Navbar from '@/components/NavbarComponent.vue';
</script>
