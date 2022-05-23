<template>
  <main class="w-full h-full">
    <section class="h-full">
      <div
        class="h-full border border-black bg-white rounded p-3 break-all overflow-scroll"
      >
        <div v-html="markupData" class=""></div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import MarkdownIt from 'markdown-it';
import type { ExtractPropTypes } from 'vue';
import 'highlight.js/styles/github-dark-dimmed.css';
import highlightjs from 'highlight.js';
import markdownHighlight from 'markdown-it-highlightjs';

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
  @apply break-all;
}

:deep(code) {
  @apply rounded break-all;
}
</style>
