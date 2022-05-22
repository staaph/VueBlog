<template>
  <form
    class="flex flex-col gap-y-5 justify-center items-center"
    @submit.prevent="signIn"
  >
    <!-- EMAIL -->
    <section class="flex flex-col gap-y-1 w-full">
      <label
        for="email"
        class="text-gray-700 dark:text-white text-sm font-medium"
        >E-Mail</label
      >
      <input
        type="email"
        required
        placeholder="john.doe@email.com"
        class="placeholder:text-gray-400 bg-transparent border text-gray-700 dark:text-gray-300 dark:border-gray-600 px-3 p-2 rounded-md outline-none focus:border-blue-600 dark:focus:border-blue-600"
        v-model="email"
      />
    </section>
    <!-- PASSWORD -->
    <section class="flex flex-col gap-y-1 w-full">
      <div class="flex flex-row items-center">
        <label
          for="password"
          class="text-sm font-medium text-gray-700 dark:text-white"
          >Password</label
        >
        <span
          class="flex justify-end w-full cursor-pointer text-xs text-gray-500 dark:text-gray-300 hover:underline"
          >Forgot password?</span
        >
      </div>
      <input
        type="password"
        placeholder="Enter your password"
        required
        class="placeholder:text-gray-400 bg-transparent border dark:border-gray-600 text-gray-700 dark:text-gray-300 px-3 rounded-md p-2 outline-none focus:border-blue-600 dark:focus:border-blue-600"
        v-model="password"
      />
    </section>
    <div v-if="errorMsg" class="text-red-900">{{ errorMsg }}</div>
    <button class="bg-gray-700 rounded px-6 py-1.5 text-white">Login</button>
  </form>
</template>

<script setup lang="ts">
import { ref, type Ref } from 'vue';
import uiState from '@/composables/modalState';
import { useAuth } from '@/composables/useAuth';
import { getAuth } from '@firebase/auth';

const { toggleLoginModal } = uiState;
const { login, errorMsg } = useAuth();

const email: Ref<string> = ref('');
const password: Ref<string> = ref('');

const signIn = async () => {
  await login(email.value, password.value);
  if (getAuth().currentUser) {
    toggleLoginModal();
  }
};
</script>
