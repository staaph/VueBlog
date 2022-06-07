<template>
  <main class="dark:text-white px-10 md:px-32 pt-12 pb-16">
    <div class="text-center mb-10">
      <div v-text="markdown.title" class="text-3xl font-bold" />
      <div v-text="markdown.author" class="font-light" />
    </div>
    <MarkdownComponent v-if="content" :content="markdown.content" />
  </main>
</template>

<script setup lang="ts">
import MarkdownComponent from '@/components/MarkdownComponent.vue';
import { markdown } from '@/markdown';
import { getDocument } from '@/composables/useFirestore';
import { onMounted, ref } from 'vue';

const content = ref<object>();
onMounted(async () => {
  const doc = await getDocument('content');
  content.value = doc[0];
});
</script>
