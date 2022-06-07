<template>
  <main class="fixed w-full h-content m-auto">
    <dialog class="grid place-content-center rounded bg-slate-400">
      <section class="text-lg text-center">
        <p>
          You have unsaved changes. <br />
          Are you sure you want to quit?
        </p>
      </section>
      <section class="flex w-full gap-x-6 justify-center mt-3">
        <button
          class="px-4 py-1 bg-green-600 rounded hover:bg-green-700"
          @click="no"
        >
          NO
        </button>
        <button
          class="px-4 py-1 bg-red-600 rounded hover:bg-red-700"
          @click="yes"
        >
          YES
        </button>
      </section>
    </dialog>
  </main>
</template>

<script setup lang="ts">
import uiState from '@/store/modalState';
import { content } from '@/store/dashboardStore';

const { toggleDashboardModal, setUnsaved, setShowWarning } = uiState;

const no = () => {
  setShowWarning(false);
};

const yes = () => {
  setUnsaved(false);
  setShowWarning(false);
  toggleDashboardModal(false);
  content.value = '';
};
</script>
