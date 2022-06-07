<template>
  <main class="h-full px-10 md:px-32 pt-12 pb-24 overflow-hidden">
    <Editor />
  </main>
</template>

<script setup lang="ts">
import Editor from '@/components/Write/EditorComponent.vue';
import { content } from '@/store/dashboardStore';
import { onUnmounted } from 'vue';
import { stopPageLeave } from '@/composables/stopPageLeave';

stopPageLeave(true);

onUnmounted(() => {
  content.value = '';
});
</script>

<style scoped></style>
