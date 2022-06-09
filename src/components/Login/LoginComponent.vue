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
          @click="setLogin('forgotPw')"
          >Forgot password?</span
        >
      </div>
      <vee-field
        type="password"
        name="password"
        placeholder="Enter your password"
        class="input"
        :class="{ 'border border-red-600': errors.password }"
      />
      <p class="text-sm text-red-600">{{ errors.password }}</p>
    </section>
    <div v-if="errorMsg" class="text-red-900">{{ errorMsg }}</div>
    <button class="bg-gray-700 rounded px-6 py-1.5 text-white">Login</button>
  </vee-form>
</template>

<script setup lang="ts">
import uiState from '@/store/modalState';
import { useAuth } from '@/composables/useAuth';
import { getAuth } from '@firebase/auth';
import { setLogin } from '@/store/loginStore';

const { closeLoginModal } = uiState;
const { login, errorMsg } = useAuth();

const schema = {
  email: 'required',
  password: 'required',
};

const signIn = async (values: { email: string; password: string }) => {
  await login(values.email, values.password);
  if (getAuth().currentUser) {
    closeLoginModal();
  }
};
</script>

<style scoped>
.input {
  @apply placeholder:text-gray-400 bg-transparent border text-gray-700 dark:text-gray-300 dark:border-gray-600 px-3 p-2 rounded-md outline-none focus:border-blue-600 dark:focus:border-blue-600;
}
</style>
