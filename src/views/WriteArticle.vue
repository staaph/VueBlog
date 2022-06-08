<template>
  <main class="h-full px-10 md:px-32 pt-12 pb-24 overflow-hidden">
    <Editor />
  </main>
</template>

<script setup lang="ts">
import Editor from '@/components/Write/EditorComponent.vue';
import { stopPageLeave } from '@/composables/stopPageLeave';

stopPageLeave(true);
</script>

<style scoped></style>
