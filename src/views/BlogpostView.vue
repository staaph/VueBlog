<template>
  <main class="dark:text-white">
    <div v-text="markdown.title" class="text-center text-3xl font-bold" />
    <section class="flex flex-row justify-center gap-x-1 text-sm">
      <div v-text="markdown.author" class="font-light" />
      <div class="font-thin">in</div>
      <div v-text="markdown.category" class="font-light" />
    </section>
    <div v-html="markupData" />
  </main>
</template>

<script setup lang="ts">
import MarkdownIt from 'markdown-it';
import 'highlight.js/styles/github-dark-dimmed.css';
import highlightjs from 'highlight.js';
import markdownHighlight from 'markdown-it-highlightjs';
import { markdown } from '@/markdown';

const hljs = highlightjs;
const md = new MarkdownIt();
md.use(markdownHighlight, { hljs });
console.log(highlightjs);

const markupData = md.render(markdown.content);
</script>

<style scoped>
:deep(pre) {
  @apply break-all;
}

:deep(code) {
  @apply rounded break-all;
}
</style>
