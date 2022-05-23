<template>
  <main class="w-full h-[91%]">
    <section class="w-full mb-2 items-center">
      <div class="flex flex-row gap-x-5 justify-center items-center">
        <button
          class="bg-gray-200 rounded px-3 p-0.5"
          @click.prevent="setView('write')"
        >
          Write
        </button>
        <button
          class="bg-gray-200 rounded px-3 p-0.5"
          @click.prevent="setView('preview')"
        >
          Preview
        </button>
      </div>
    </section>
    <section class="flex flex-col h-full pb-4" v-if="view === 'write'">
      <textarea
        v-model="content"
        class="h-full border border-black rounded w-full resize-none outline-none p-3"
      />
      <div class="flex justify-end pt-1.5">
        <button
          class="flex py-1 items-center rounded bg-gray-200 dark:bg-gray-200 text-black dark:text-white px-2"
        >
          <SendIcon class="h-5 w-5 mr-1" />Publish
        </button>
      </div>
    </section>
    <section v-if="view === 'preview'" class="h-full">
      <PreviewComponent :content="content" />
    </section>
  </main>
</template>

<script setup lang="ts">
import SendIcon from '@/assets/icons/SendIcon.vue';
import PreviewComponent from '@/components/PreviewComponent.vue';
import uiState from '@/composables/modalState';
import { ref, type Ref, watch } from 'vue';

const { setUnsaved } = uiState;

const content: Ref<string> = ref('');

watch(content, () => {
  if (content.value.length > 0) {
    setUnsaved(true);
  } else {
    setUnsaved(false);
  }
});

const view: Ref<string> = ref('write');
const setView = (value: string) => {
  view.value = value;
};
</script>
