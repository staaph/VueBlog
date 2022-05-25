<template>
  <vee-form
    class="flex flex-col gap-y-5 justify-center items-center"
    @submit="register"
    v-slot="{ errors }"
    :validation-schema="schema"
  >
    <!-- USERNAME -->
    <section class="flex flex-col gap-y-1 w-full">
      <div class="flex flex-row justify-between">
        <label
          for="Username"
          class="text-gray-700 dark:text-white text-sm font-medium"
          >Username</label
        >
        <p class="text-sm text-red-600">{{ errors.username }}</p>
      </div>
      <vee-field
        name="username"
        type="text"
        placeholder="johndoe"
        v-model="username"
        class="input"
        :class="{ 'border border-red-600': errors.username }"
      />
    </section>
    <!-- EMAIL -->
    <section class="flex flex-col gap-y-1 w-full">
      <div class="flex flex-row justify-between">
        <label
          for="email"
          class="text-gray-700 dark:text-white text-sm font-medium"
          >E-Mail</label
        >
        <p class="text-sm text-red-600">{{ errors.email }}</p>
      </div>
      <vee-field
        name="email"
        type="email"
        placeholder="john.doe@email.com"
        v-model="email"
        class="input"
        :class="{ 'border border-red-600': errors.email }"
      />
    </section>
    <!-- PASSWORD -->
    <section class="flex flex-col gap-y-1 w-full">
      <div class="flex flex-row justify-between">
        <label
          for="password"
          class="text-sm font-medium text-gray-700 dark:text-white"
          >Password</label
        >
        <p class="text-sm text-red-600">{{ errors.password }}</p>
      </div>
      <vee-field
        name="password"
        type="password"
        placeholder="Enter your password"
        v-model="password"
        class="input"
        :class="{ 'border border-red-600': errors.password }"
      />
    </section>
    <!-- CONFIRM PASSWORD -->
    <section class="flex flex-col gap-y-1 w-full">
      <div class="flex flex-row justify-between">
        <label
          for="password"
          class="text-sm font-medium text-gray-700 dark:text-white"
          >Confirm Password</label
        >
        <p class="text-sm text-red-600">{{ errors.confirm_password }}</p>
      </div>
      <vee-field
        name="confirm_password"
        type="password"
        placeholder="Confirm your password"
        v-model="confirm_password"
        class="input"
        :class="{ 'border border-red-600': errors.confirm_password }"
      />
    </section>
    <!-- TOS -->
    <section>
      <vee-field
        name="tos"
        type="checkbox"
        class="rounded-sm outline-none"
        :class="{ 'border border-red-600 ml-10': errors.tos }"
      />
      <label class="dark:text-white ml-2"
        >I accept the
        <button
          @click.prevent="showTosModal = !showTosModal"
          class="hover:underline"
        >
          Terms of Service
        </button></label
      >
    </section>
    <TosModal />
    <div v-if="errorMsg" class="text-red-900">{{ errorMsg }}</div>
    <button class="bg-gray-700 rounded px-6 py-1.5 text-white">Signup</button>
  </vee-form>
</template>

<script setup lang="ts">
import TosModal from '@/components/TosModal.vue';
import { ref, type Ref } from 'vue';
import { getAuth } from '@firebase/auth';
import { useAuth } from '@/composables/useAuth';
import uiState from '@/composables/modalState';

const { toggleLoginModal, showTosModal } = uiState;
const { signup, errorMsg } = useAuth();

const username: Ref<string> = ref('');
const email: Ref<string> = ref('');
const password: Ref<string> = ref('');
const confirm_password: Ref<string> = ref('');

const schema = {
  email: 'required|email',
  username: 'required|min:3|max:20',
  password: 'min:8|required',
  confirm_password: 'passwords_mismatch:@password|confirm_password',
  tos: 'tos',
};

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

<style scoped>
.input {
  @apply placeholder:text-gray-400 bg-transparent border text-gray-700 dark:text-gray-300 dark:border-gray-600 px-3 p-2 rounded-md outline-none focus:border-blue-600 dark:focus:border-blue-600;
}
</style>
