<template>
  <h1 class="mb-10 font-semibold text-gray-400 text-2xl">Latest</h1>
  <main class="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
    <article v-for="(article, key) in articles" :key="article.docID">
      <router-link :to="{ name: 'post', params: { id: article.docID } }">
        <div class="flex flex-row gap-x-3">
          <div
            v-text="'0' + (key + 1)"
            class="font-bold text-3xl text-gray-400"
          />
          <div class="flex flex-col text-sm dark:text-white">
            <span v-text="article.title" class="font-semibold" />
            <div class="flex flex-row gap-x-2 font-light">
              <span v-text="article.username + ','" />
              <span>{{ formatTime(article.date) }}</span>
            </div>
          </div>
        </div>
      </router-link>
    </article>
  </main>
</template>

<script setup lang="ts">
import { getDocs, collection, getFirestore } from '@firebase/firestore';
import { onBeforeMount, reactive } from 'vue';
import { formatTime } from '@/plugins/formatTime';

interface Articles {
  content: string;
  date: number;
  docID: string;
  title: string;
  user: string;
  username: string;
}

const articles = reactive<Articles[]>([]);
const getArticles = async () => {
  const snapshot = await getDocs(collection(getFirestore(), 'articles'));
  snapshot.forEach((document) => {
    articles.push({
      docID: document.id,
      ...document.data(),
    } as Articles);
  });
};

onBeforeMount(async () => {
  getArticles();
});
</script>
