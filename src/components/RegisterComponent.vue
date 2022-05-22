<template>
  <form
    class="flex flex-col gap-y-5 justify-center items-center"
    @submit.prevent="register"
  >
    <!-- USERNAME -->
    <div class="flex flex-col gap-y-1 w-full">
      <label
        for="Username"
        class="text-gray-700 dark:text-white text-sm font-medium"
        >Username</label
      >
      <input
        type="text"
        required
        placeholder="johndoe"
        v-model="username"
        class="placeholder:text-gray-400 bg-transparent border text-gray-700 dark:text-gray-300 dark:border-gray-600 px-3 p-2 rounded-md outline-none focus:border-blue-600 dark:focus:border-blue-600"
      />
    </div>
    <!-- EMAIL -->
    <div class="flex flex-col gap-y-1 w-full">
      <label
        for="email"
        class="text-gray-700 dark:text-white text-sm font-medium"
        >E-Mail</label
      >
      <input
        type="email"
        required
        placeholder="john.doe@email.com"
        v-model="email"
        class="placeholder:text-gray-400 bg-transparent border text-gray-700 dark:text-gray-300 dark:border-gray-600 px-3 p-2 rounded-md outline-none focus:border-blue-600 dark:focus:border-blue-600"
      />
    </div>
    <!-- PASSWORD -->
    <div class="flex flex-col gap-y-1 w-full">
      <label
        for="password"
        class="text-sm font-medium text-gray-700 dark:text-white"
        >Password</label
      >

      <input
        type="password"
        placeholder="Enter your password"
        required
        v-model="password"
        class="placeholder:text-gray-400 bg-transparent border dark:border-gray-600 text-gray-700 dark:text-gray-300 px-3 rounded-md p-2 outline-none focus:border-blue-600 dark:focus:border-blue-600"
      />
    </div>
    <!-- CONFIRM PASSWORD -->
    <div class="flex flex-col gap-y-1 w-full">
      <label
        for="password"
        class="text-sm font-medium text-gray-700 dark:text-white"
        >Password</label
      >
      <input
        type="password"
        placeholder="Confirm your password"
        required
        v-model="confirm_password"
        class="placeholder:text-gray-400 bg-transparent border dark:border-gray-600 text-gray-700 dark:text-gray-300 px-3 rounded-md p-2 outline-none focus:border-blue-600 dark:focus:border-blue-600"
      />
    </div>
    <div>
      <input type="checkbox" required />
      <label class="dark:text-white ml-2"
        >I accept the
        <button @click.prevent="showModal = !showModal" class="hover:underline">
          Terms of Service
        </button></label
      >
    </div>
    <div
      v-if="showModal"
      class="fixed z-10 px-6 py-4 flex flex-col max-h-96 max-w-md rounded overflow-scroll dark:bg-gray-700 bg-white border border-black dark:border-white"
    >
      <CloseIcon
        @click.prevent="showModal = !showModal"
        class="absolute top-2 right-2 cursor-pointer dark:text-white"
      />
      <h1 class="dark:text-white font-bold my-2">Terms of Service</h1>
      <p class="dark:text-white">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
        elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
        aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
        est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
        sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
        dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
        justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
        takimata sanctus est Lorem ipsum dolor sit amet.
      </p>
    </div>
    <div v-if="errorMsg" class="text-red-900">{{ errorMsg }}</div>
    <button class="bg-gray-700 rounded px-6 py-1.5 text-white">Signup</button>
  </form>
</template>

<script setup lang="ts">
import CloseIcon from '@/assets/icons/CloseIcon.vue';
import { ref, type Ref } from 'vue';
import { useAuth } from '@/composables/useAuth';
import uiState from '@/composables/modalState';
import { getAuth } from '@firebase/auth';

const { toggleLoginModal } = uiState;
const { signup, errorMsg } = useAuth();

const showModal: Ref<boolean> = ref(false);

const username: Ref<string> = ref('');
const email: Ref<string> = ref('');
const password: Ref<string> = ref('');
const confirm_password: Ref<string> = ref('');

const register = async () => {
  if (password.value === confirm_password.value) {
    await signup(email.value, password.value);
    if (getAuth().currentUser) {
      toggleLoginModal();
    }
  } else {
    errorMsg.value = 'passwords do not match';
  }
};
</script>
