<template>
  <main class="h-full overflow-scroll">
    <p
      v-if="errorMsg"
      v-text="errorMsg"
      class="text-center text-red-600 font-semibold mb-4 w-full rounded-sm h-12 items-center flex justify-center"
    />
    <div class="flex flex-col gap-y-4">
      <!-- USERNAME -->
      <section class="flex flex-row w-full items-center">
        <label class="w-1/4">Username</label>
        <input type="text" class="input" v-model="username" />
      </section>
      <div class="flex items-center justify-end">
        <button
          @click="changeUsername"
          class="button"
          :class="{
            'bg-green-600': success.username,
            'bg-gray-800': !success.username,
          }"
        >
          Change username
        </button>
      </div>
      <!-- CHANGE EMAIL -->
      <section class="flex flex-row">
        <label for="pw-change" class="w-1/4">Change Email</label>
        <input type="text" class="input" v-model="newEmail" />
      </section>
      <div class="flex items-center justify-end">
        <button
          @click="setNewMail"
          class="button"
          :class="{
            'bg-green-600': success.email,
            'bg-gray-800': !success.email,
          }"
        >
          Change Email
        </button>
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
        <button
          @click="changePw"
          class="button"
          :class="{
            'bg-green-600': success.password,
            'bg-gray-800': !success.password,
          }"
        >
          Change Password
        </button>
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
        :class="{ 'border border-red-600': errorMsg }"
      />
    </section>
  </main>
</template>

<script setup lang="ts">
import { useFbUtil } from '@/composables/useFbUtils';
import { updateDocument } from '@/composables/useFirestore';
import { getAuth, updateProfile } from 'firebase/auth';
import { reactive, ref } from 'vue';

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
const success = reactive({ username: false, email: false, password: false });

const setNewMail = async () => {
  if (user && user.email && userProvidedPassword.value) {
    await changeEmail(newEmail.value);
    newEmail.value = user.email;
    success.email = true;
  } else {
    errorMsg.value = 'provide your password';
  }
};

const changeUsername = async () => {
  if (user !== null && userProvidedPassword.value) {
    await updateProfile(user, {
      displayName: username.value,
    });
    await updateDocument('users', user.uid, {
      username: username.value,
    });
    success.username = true;
  } else {
    errorMsg.value = 'provide your password';
  }
};

const changePw = () => {
  if (user && userProvidedPassword.value) {
    changePassword();
    success.password = true;
  } else {
    errorMsg.value = 'provide your password';
  }
};
</script>

<style scoped>
.input {
  @apply placeholder:text-gray-400 w-full bg-transparent border text-gray-700 dark:text-gray-300 px-3 p-2 rounded-md outline-none focus:border-blue-600 dark:focus:border-blue-600;
}

.button {
  @apply rounded px-6 py-1 text-white;
}
</style>
