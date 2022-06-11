<template>
  <main class="w-full max-h-full">
    <section
      v-if="userArticles"
      class="max-h-full w-full flex flex-col justify-center items-center"
    >
      <div
        class="color overflow-auto justify-between w-1/2"
        v-for="(article, idx) in userArticles"
        :key="idx"
      >
        <div @click="goToPost(article.docID)">
          <p v-text="article.title" />
          <p>
            {{ formatTime(article.date) }}
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { getAuth } from 'firebase/auth';
import { formatTime } from '@/plugins/formatTime';
import {
  query,
  where,
  getDocs,
  getFirestore,
  collection,
} from 'firebase/firestore';
import { onBeforeMount, reactive } from 'vue';
import { useRouter } from 'vue-router';
import type { Articles } from '@/interfaces/Article';
import uiState from '@/store/modalState';

const router = useRouter();
const { toggleDashboardModal } = uiState;

const goToPost = (id: string) => {
  router.push({ name: 'write', params: { id: id } });
  toggleDashboardModal(false);
};

const userArticles = reactive<Articles[]>([]);

onBeforeMount(async () => {
  const songsCollection = collection(getFirestore(), 'articles');
  const q = query(
    songsCollection,
    where('user', '==', getAuth()!.currentUser!.uid)
  );
  const qSnapshot = await getDocs(q);

  qSnapshot.forEach((doc) => {
    userArticles.push({
      docID: doc.id,
      ...doc.data(),
    } as Articles);
  });
});
</script>

<style scoped>
.color {
  @apply p-1 rounded-sm hover:bg-gray-200 cursor-pointer;
}
.color:nth-child(2n) {
  @apply bg-gray-100 hover:bg-gray-200;
}
</style>
