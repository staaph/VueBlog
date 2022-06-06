<template>
  <main
    class="flex flex-col items-center h-full justify-center overflow-scroll"
  >
    <div class="w-1/2 flex flex-col gap-y-4">
      <section class="flex flex-col">
        <label>Provide your current password</label>
        <input
          type="password"
          placeholder="old password"
          class="input"
          v-model="userProvidedPassword"
        />
      </section>
      <section class="flex flex-col">
        <label for="pw-change">Change Email</label>
        <input type="text" class="input" v-model="newEmail" />
        <div class="flex items-center justify-center">
          <button @click="changeEmail" class="button">Change Email</button>
        </div>
      </section>
      <section class="flex flex-col justify-center">
        <label for="pw-change">Change Password</label>
        <input type="password" v-model="newPassword" class="input" />
        <div class="flex items-center justify-center">
          <button @click="changePassword" class="button">
            Change Password
          </button>
        </div>
      </section>
      <p v-text="errorMsg" class="text-center text-red-600" />
    </div>
  </main>
</template>

<script setup lang="ts">
import { useFbUtil } from '@/composables/useFbUtils';

const {
  changeEmail,
  changePassword,
  errorMsg,
  userProvidedPassword,
  newPassword,
  newEmail,
} = useFbUtil();
</script>

<style scoped>
.input {
  @apply placeholder:text-gray-400 bg-transparent border text-gray-700 dark:text-gray-300 dark:border-gray-600 px-3 p-2 rounded-md outline-none focus:border-blue-600 dark:focus:border-blue-600;
}

.button {
  @apply bg-gray-700 rounded px-6 py-1 mt-1 text-white;
}
</style>
