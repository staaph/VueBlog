<template>
  <section
    v-if="showTosModal"
    class="fixed z-10 px-6 py-4 flex flex-col max-h-96 max-w-md rounded overflow-scroll dark:bg-gray-700 bg-white border border-black dark:border-white"
  >
    <CloseIcon
      @click.prevent="showTosModal = !showTosModal"
      class="absolute top-2 right-2 cursor-pointer dark:text-white"
    />
    <h1 class="dark:text-white font-bold my-2">Terms of Service</h1>
    <p class="dark:text-white">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
      diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
      erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
      rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
      dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
      sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
      erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
      rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
      dolor sit amet.
    </p>
  </section>
</template>

<script setup lang="ts">
import uiState from '@/store/modalState';
import CloseIcon from '@/assets/icons/CloseIcon.vue';

const { showTosModal } = uiState;
</script>
