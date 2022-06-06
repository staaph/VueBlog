<template>
  <main>
    <section class="flex flex-col gap-y-2">
      <label for="pw-change">Change Email</label>
      <input type="text" class="rounded-md h-8" v-model="newEmail" />
      <button class="bg-gray-200 rounded" @click="changeEmail">Change</button>
    </section>
    <section class="flex flex-col gap-y-2">
      <label for="pw-change">Change Password</label>
      <input type="password" v-model="newPassword" class="rounded-md h-8" />
      <button @click="changePassword" class="bg-gray-200 rounded">
        Change
      </button>
    </section>
  </main>
</template>

<script setup lang="ts">
import { getAuth, updatePassword, updateEmail } from 'firebase/auth';
import { ref } from 'vue';

const user = getAuth().currentUser;
const newPassword = ref();
const newEmail = ref();

const changeEmail = async () => {
  await updateEmail(user, newEmail.value);
};

const changePassword = async () => {
  await updatePassword(user, newPassword.value);
};
</script>
