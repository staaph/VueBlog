<template>
  <div v-html="markupData"></div>
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

:deep(pre) {
  @apply break-all;
}

:deep(code) {
  @apply rounded break-all;
}

:deep(h1) {
  display: block;
  font-size: 2em;
  margin-top: 0.67em;
  margin-bottom: 0.67em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
}
:deep(h2) {
  display: block;
  font-size: 1.5em;
  margin-top: 0.83em;
  margin-bottom: 0.83em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
}
:deep(h3) {
  display: block;
  font-size: 1.17em;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
}
:deep(h4) {
  display: block;
  margin-top: 1.33em;
  margin-bottom: 1.33em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
}
:deep(h5) {
  display: block;
  font-size: 0.83em;
  margin-top: 1.67em;
  margin-bottom: 1.67em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
}
:deep(h6) {
  display: block;
  font-size: 0.67em;
  margin-top: 2.33em;
  margin-bottom: 2.33em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
}
:deep(p) {
  display: block;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 0;
  margin-right: 0;
}

:deep(ol) {
  display: block;
  list-style-type: decimal;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 0;
  margin-right: 0;
  padding-left: 40px;
}

:deep(ul) {
  display: block;
  list-style-type: disc;
  margin-top: 1em;
  margin-bottom: 1 em;
  margin-left: 0;
  margin-right: 0;
  padding-left: 40px;
}
:deep(li) {
  display: list-item;
}

:deep(blockquote) {
  display: block;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 40px;
  margin-right: 40px;
}
:deep(strong) {
  font-weight: bold;
}
:deep(em) {
  font-style: italic;
}

:deep(hr) {
  display: block;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  margin-left: auto;
  margin-right: auto;
  border-style: inset;
  border-width: 1px;
}
:deep(a) {
  color: blue;
  text-decoration: none;
  cursor: pointer;
}
:deep(s) {
  text-decoration: line-through;
}
/* TABLE */
:deep(table) {
  display: table;
  border-collapse: separate;
  border-spacing: 2px;
  border-color: gray;
}
:deep(tbody) {
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
}
:deep(thead) {
  display: table-header-group;
  vertical-align: middle;
  border-color: inherit;
}
:deep(tr) {
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
}
:deep(th) {
  display: table-cell;
  vertical-align: inherit;
  font-weight: bold;
  text-align: center;
}
:deep(td) {
  display: table-cell;
  vertical-align: inherit;
}
:deep(tfoot) {
  display: table-footer-group;
  vertical-align: middle;
  border-color: inherit;
}
</style>
