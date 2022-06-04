<template>
  <vee-form
    class="flex flex-col gap-y-5 justify-center items-center"
    @submit="signIn"
    v-slot="{ errors }"
    :validation-schema="schema"
  >
    <!-- EMAIL -->
    <section class="flex flex-col gap-y-1 w-full">
      <label
        for="email"
        class="text-gray-700 dark:text-white text-sm font-medium"
        >E-Mail</label
      >
      <vee-field
        type="email"
        name="email"
        placeholder="john.doe@email.com"
        class="input"
        v-model="email"
        :class="{ 'border border-red-600': errors.email }"
      />
      <p class="text-sm text-red-600">{{ errors.email }}</p>
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
      <vee-field
        type="password"
        name="password"
        placeholder="Enter your password"
        class="input"
        v-model="password"
        :class="{ 'border border-red-600': errors.password }"
      />
      <p class="text-sm text-red-600">{{ errors.password }}</p>
    </section>
    <div v-if="errorMsg" class="text-red-900">{{ errorMsg }}</div>
    <button class="bg-gray-700 rounded px-6 py-1.5 text-white">Login</button>
  </vee-form>
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

const schema = {
  email: 'required',
  password: 'required',
};

const signIn = async () => {
  await login(email.value, password.value);
  if (getAuth().currentUser) {
    toggleLoginModal();
  }
};
</script>

<style scoped>
.input {
  @apply placeholder:text-gray-400 bg-transparent border text-gray-700 dark:text-gray-300 dark:border-gray-600 px-3 p-2 rounded-md outline-none focus:border-blue-600 dark:focus:border-blue-600;
}
</style>
