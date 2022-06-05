<template>
  <main class="bg-gray-100 h-1/2 flex flex-row justify-center px-12">
    <div class="flex flex-row gap-x-12 items-center">
      <VueLogo class="h-40 w-40" />
      <section>
        <p class="font-medium text-lg text-header">
          Your daily source of Vue knowledge
        </p>

        <div class="flex items-end justify-center w-full pt-5" v-if="!user">
          <button class="reading-button" @click="openLoginModal">
            Start writing
          </button>
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import VueLogo from '@/assets/icons/VueLogo.vue';
import uiState from '@/store/modalState';
import { useAuth } from '@/composables/useAuth';

const { user } = useAuth();

const { openLoginModal } = uiState;
</script>

<style scoped>
.text-header {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.reading-button {
  @apply text-white rounded-full px-3 py-1 hover:bg-black;
  background-color: rgb(28, 28, 28);
}
</style>
