<template>
  <main class="dark:text-white">
    <div v-text="markdown.title" class="text-center text-3xl font-bold" />
    <section class="flex flex-row justify-center gap-x-1 text-sm">
      <div v-text="markdown.author" class="font-light" />
      <div class="font-thin">in</div>
      <div v-text="markdown.category" class="font-light" />
    </section>
    <MarkdownComponent :content="markdown.content" />
  </main>
</template>

<script setup lang="ts">
import MarkdownComponent from '@/components/MarkdownComponent.vue';
import { markdown } from '@/markdown';
</script>
