<template>
  <main class="fixed w-full h-content m-auto">
    <dialog class="grid place-content-center rounded" ref="dialog">
      <section class="bg-white text-xl text-center">
        <p>
          U have unsaved changes. <br />
          Are you sure you want to quit?
        </p>
      </section>
      <section class="flex w-full gap-x-6 justify-center mt-3">
        <button class="px-4 py-1 bg-red-600 rounded" @click="no">NO</button>
        <button class="px-4 py-1 bg-green-600 rounded" @click="yes">YES</button>
      </section>
    </dialog>
  </main>
</template>

<script setup lang="ts">
import uiState from '@/composables/modalState';
import { content } from '@/composables/editorContent';

const { toggleDashboardModal, setUnsaved, setShowWarning } = uiState;

const no = () => {
  setShowWarning();
};

const yes = () => {
  setUnsaved(false);
  setShowWarning();
  toggleDashboardModal();
  content.value = '';
};
</script>
