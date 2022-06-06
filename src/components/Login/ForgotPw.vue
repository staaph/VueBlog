<template>
  <main class="w-full">
    <section class="flex flex-col items-center w-full justify-center mb-4">
      <h1 class="font-medium text-lg dark:text-white">Forgot Password ?</h1>

      <p class="dark:text-white">Send me a password reset email</p>
    </section>
    <div class="flex flex-col items-center justify-center">
      <input
        type="text"
        placeholder="Your Email"
        v-model="email"
        class="input"
      />
      <p v-text="errorMsg" class="text-red-600 text-center" />
    </div>
    <div class="flex justify-center w-full my-4">
      <button
        @click="sendEmail"
        class="bg-gray-700 rounded px-6 py-1.5 text-white"
      >
        send email
      </button>
    </div>
    <p class="dark:text-white flex justify-center mt-4 gap-x-2">
      Back to
      <span @click="setLogin('login')" class="text-blue-600 cursor-pointer"
        >Login</span
      >
    </p>
  </main>
</template>

<script setup lang="ts">
import { setLogin } from '@/store/loginStore';
import { ref } from 'vue';
import { useFbUtil } from '@/composables/useFbUtils';

const { resetPwEmail, errorMsg } = useFbUtil();

const email = ref();

const sendEmail = async () => {
  resetPwEmail(email.value);
};
</script>

<style scoped>
.input {
  @apply placeholder:text-gray-400 bg-transparent border text-gray-700 dark:text-gray-300 dark:border-gray-600 px-3 p-2 rounded-md outline-none focus:border-blue-600 dark:focus:border-blue-600;
}
</style>
