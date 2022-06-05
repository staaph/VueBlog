<template>
  <main class="dark:text-white px-10 md:px-32 pt-12 pb-16">
    <div class="text-center mb-10">
      <div v-text="markdown.title" class="text-3xl font-bold" />
      <div v-text="markdown.author" class="font-light" />
    </div>
    <section class="flex flex-row justify-center gap-x-1 text-sm"></section>
    <MarkdownComponent :content="markdown.content" />
  </main>
</template>

<script setup lang="ts">
import MarkdownComponent from '@/components/MarkdownComponent.vue';
import { markdown } from '@/markdown';
</script>
