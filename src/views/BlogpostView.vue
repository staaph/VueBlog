<template>
  <main class="dark:text-white px-10 md:px-32 pt-12 pb-16 break-all">
    <div class="text-center mb-10" v-if="content">
      <div v-text="content.title" class="text-3xl font-bold" />
      <div v-text="content.username" class="font-light" />
    </div>
    <MarkdownComponent v-if="content" :content="content.content" />
  </main>
</template>

<script setup lang="ts">
import MarkdownComponent from '@/components/MarkdownComponent.vue';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getDoc, doc, getFirestore } from '@firebase/firestore';

const route = useRoute();
const content = ref();
const router = useRouter();
onMounted(async () => {
  const docID = route.params.id as string;
  const article = await getDoc(doc(getFirestore(), 'articles', docID));
  console.log(article.data());
  if (!article.data()) {
    router.push({ name: 'error' });
  } else {
    content.value = article.data();
  }
});
</script>
