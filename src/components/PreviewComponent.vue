<template>
  <main class="h-full">
    <div class="overflow-scroll mt-4">
      <div v-html="markupData" class=""></div>
    </div>
  </main>
</template>

<script setup lang="ts">
import MarkdownIt from 'markdown-it';
import 'highlight.js/styles/github-dark-dimmed.css';
import highlightjs from 'highlight.js';
import markdownHighlight from 'markdown-it-highlightjs';

import type { ExtractPropTypes } from 'vue';

const props: Readonly<ExtractPropTypes<{ content: StringConstructor }>> =
  defineProps({
    content: String,
  });

const hljs = highlightjs;
const md = new MarkdownIt();
md.use(markdownHighlight, { hljs });

const markupData = md.render(props.content);
</script>

<style scoped>
:deep(pre) {
  @apply rounded;
}
:deep(pre > code) {
  @apply rounded;
}
</style>
