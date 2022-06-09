<template>
  <main class="h-full px-10 md:px-32 pt-12 pb-24 overflow-hidden">
    <Editor />
  </main>
  <section v-if="isInfoMenuOpen" class="centered bg-gray-500/50">
    <InfoMenu />
  </section>
</template>

<script setup lang="ts">
import Editor from '@/components/Write/EditorComponent.vue';
import { stopPageLeave } from '@/composables/stopPageLeave';
import InfoMenu from '@/components/Write/InfoMenu.vue';
import { isInfoMenuOpen } from '@/store/dashboardStore';

stopPageLeave(true);
</script>

<style scoped>
.centered {
  @apply fixed flex justify-center items-center w-screen h-screen z-50;
}
</style>
