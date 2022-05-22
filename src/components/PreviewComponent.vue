<template>
  <main>
    <h1>preview</h1>
    <div v-html="markupData"></div>
  </main>
</template>

<script setup lang="ts">
import MarkdownIt from 'markdown-it';
import type { ExtractPropTypes } from 'vue';
const props: Readonly<ExtractPropTypes<{ content: StringConstructor }>> =
  defineProps({
    content: String,
  });

const md = new MarkdownIt();

const markupData = md.render(props.content.toString());
</script>

<style scoped></style>
