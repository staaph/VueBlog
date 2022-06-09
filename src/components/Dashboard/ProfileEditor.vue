<template>
  <main class="h-full overflow-scroll">
    <p v-text="errorMsg" class="text-center text-red-600 mb-4" />
    <div class="flex flex-col gap-y-4">
      <!-- USERNAME -->
      <section class="flex flex-row w-full items-center">
        <label class="w-1/4">Username</label>
        <input type="text" class="input" v-model="username" />
      </section>
      <div class="flex items-center justify-end">
        <button @click="changeUsername" class="button">Change username</button>
      </div>
      <!-- CHANGE EMAIL -->
      <section class="flex flex-row">
        <label for="pw-change" class="w-1/4">Change Email</label>
        <input type="text" class="input" v-model="newEmail" />
      </section>
      <div class="flex items-center justify-end">
        <button @click="setNewMail" class="button">Change Email</button>
      </div>
      <section class="flex flex-row items-center">
        <label for="pw-change" class="w-1/4">Change Password</label>
        <input
          type="password"
          placeholder="••••••••"
          v-model="newPassword"
          class="input placeholder:justify-center"
        />
      </section>
      <div class="flex items-center justify-end">
        <button @click="changePassword" class="button">Change Password</button>
      </div>
    </div>
    <!-- CONFIRM PASSWORD -->
    <section class="flex flex-row items-center mt-4">
      <label class="w-1/4">confirm password</label>
      <input
        type="password"
        placeholder="••••••••"
        class="input"
        v-model="userProvidedPassword"
      />
    </section>
  </main>
</template>

<script setup lang="ts">
import { useFbUtil } from '@/composables/useFbUtils';
import { updateDocument } from '@/composables/useFirestore';
import { getAuth, updateProfile } from 'firebase/auth';
import { ref } from 'vue';

const {
  changeEmail,
  changePassword,
  errorMsg,
  userProvidedPassword,
  newPassword,
} = useFbUtil();

const user = getAuth().currentUser;
const username = ref(user!.displayName);
const newEmail = ref<string>(getAuth().currentUser!.email!);

const setNewMail = async () => {
  await changeEmail(newEmail.value);
  if (user && user.email) {
    newEmail.value = user.email;
  }
};

const changeUsername = async () => {
  if (user !== null) {
    await updateProfile(user, {
      displayName: username.value,
    });
    await updateDocument('users', user.uid, {
      username: username.value,
    });
  }
};
</script>

<style scoped>
.input {
  @apply placeholder:text-gray-400 w-full bg-transparent border text-gray-700 dark:text-gray-300 dark:border-gray-600 px-3 p-2 rounded-md outline-none focus:border-blue-600 dark:focus:border-blue-600;
}

.button {
  @apply bg-gray-700 rounded px-6 py-1 text-white;
}
</style>
