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
        class="h-full px-2 border border-black overflow-scroll rounded w-full resize-none outline-none dark:bg-gray-300"
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
import { ref, type Ref } from 'vue';
import { setDocument } from '@/composables/useFirestore';
import { isInfoMenuOpen } from '@/store/dashboardStore';

const title = ref<string>('');
const content = ref<string>('');

const publish = () => {
  setDocument('content', 'doc1', { text: content.value });
};

const view: Ref<string> = ref('write');
const setView = (value: string) => {
  view.value = value;
};
</script>
