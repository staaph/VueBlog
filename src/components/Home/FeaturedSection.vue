<template>
  <h1 class="mb-10 font-semibold text-gray-400 text-2xl">Latest</h1>
  <main class="grid sm:grid-cols-2 lg:grid-cols-3 gap-10" v-if="articles">
    <article v-for="(article, key) in lastSixArticles" :key="key">
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
import { getDocs, collection, getFirestore, query } from '@firebase/firestore';
import { computed, onBeforeMount, reactive } from 'vue';
import { formatTime } from '@/plugins/formatTime';
import type { Articles } from '@/interfaces/Article';
import { orderBy } from 'firebase/firestore';

const articles = reactive<Articles[]>([]);
const lastSixArticles = computed(() => articles.slice(-6).reverse());

const getArticles = async () => {
  const q = query(collection(getFirestore(), 'articles'), orderBy('date'));
  const snapshot = await getDocs(q);
  snapshot.forEach((document) => {
    articles.push({
      docID: document.id,
      ...document.data(),
    } as Articles);
  });
};

onBeforeMount(() => {
  getArticles();
});
</script>
