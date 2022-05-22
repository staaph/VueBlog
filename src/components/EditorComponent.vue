<template>
  <main class="w-full h-full">
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
        class="h-full bg-gray-200 w-full resize-none outline-none p-3"
      />
      <div class="flex justify-end pt-1.5">
        <button
          class="flex py-1 items-center rounded bg-gray-400 dark:bg-gray-700 text-black dark:text-white px-2"
        >
          <SendIcon class="h-5 w-5 mr-1" />Publish
        </button>
      </div>
    </section>
    <section v-if="view === 'preview'">
      <PreviewComponent :content="content" />
    </section>
  </main>
</template>

<script setup lang="ts">
import SendIcon from '@/assets/icons/SendIcon.vue';
import PreviewComponent from '@/components/PreviewComponent.vue';
import { ref } from 'vue';

const content = ref('');

const view = ref('write');
const setView = (value: string) => {
  view.value = value;
};
</script>

<style scoped></style>
