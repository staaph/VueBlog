<template>
  <main class="h-full">
    <section class="mb-2 items-center">
      <div class="flex flex-row gap-x-3 items-center">
        <button
          class="dark:bg-gray-200 border rounded px-3 p-0.5"
          @click.prevent="setView('write')"
        >
          <WriteIcon />
        </button>
        <button
          class="dark:bg-gray-200 border rounded px-3 p-0.5"
          @click.prevent="setView('preview')"
        >
          <SearchIcon />
        </button>
        <button
          class="rounded px-3 p-0.5 dark:text-white"
          @click="isInfoMenuOpen = true"
        >
          <InfoButton />
        </button>
      </div>
    </section>
    <section class="flex flex-col h-full" v-if="view == 'write'">
      <input
        type="text"
        class="w-full mb-1 rounded h-10 dark:bg-gray-300 border border-black"
        placeholder="title"
        v-model="title"
      />
      <textarea
        v-model="content"
        class="h-full border border-black rounded w-full resize-none outline-none dark:bg-gray-300"
      />
      <div class="flex justify-end pt-1.5">
        <button
          class="flex py-1 items-center rounded bg-gray-200 dark:bg-gray-300 text-black px-2"
          @click="publish"
        >
          <SendIcon class="h-5 w-5 mr-1" />Publish
        </button>
      </div>
    </section>
    <section class="flex flex-col h-full" v-if="view == 'preview'">
      <PreviewComponent
        class="h-full p-2 border border-black overflow-scroll rounded w-full resize-none outline-none dark:bg-gray-300"
        :content="content"
      />
    </section>
  </main>
</template>

<script setup lang="ts">
import SendIcon from '@/assets/icons/SendIcon.vue';
import WriteIcon from '@/assets/icons/WriteIcon.vue';
import SearchIcon from '@/assets/icons/SearchIcon.vue';
import InfoButton from '@/assets/icons/InfoButton.vue';
import PreviewComponent from '@/components/MarkdownComponent.vue';
import { onMounted, ref, type Ref } from 'vue';
import { addDocument, updateDocument } from '@/composables/useFirestore';
import { isInfoMenuOpen } from '@/store/dashboardStore';
import { getAuth } from '@firebase/auth';
import { useRoute } from 'vue-router';
import { getDoc, doc, getFirestore } from '@firebase/firestore';

const title = ref<string>('');
const content = ref<string>('');
const route = useRoute();

const user = getAuth().currentUser;
const publish = async () => {
  if (user && !route.params.id) {
    const timestamp = Date.now();
    await addDocument('articles', {
      user: user.uid,
      username: user.displayName,
      title: title.value,
      content: content.value,
      date: timestamp,
    });
  } else {
    const docID = route.params.id as string;
    await updateDocument('articles', docID, {
      title: title.value,
      content: content.value,
    });
  }
};

const view: Ref<string> = ref('write');
const setView = (value: string) => {
  view.value = value;
};

onMounted(async () => {
  if (route.params.id) {
    const docID = route.params.id as string;
    const article = await getDoc(doc(getFirestore(), 'articles', docID));
    const test = article.data();
    if (test) {
      content.value = test.content;
      title.value = test.title;
    }
  }
});
</script>
