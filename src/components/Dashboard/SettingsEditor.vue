<template>
  <main>
    <section class="flex flex-col">
      <div class="flex flex-row gap-x-3 items-center">
        <h1>Delete Account ?</h1>
        <button
          class="bg-red-600 px-1 rounded-sm text-white"
          @click="confirm = !confirm"
        >
          Delete
        </button>
      </div>
      <div v-if="confirm" class="mt-2">
        <p>
          This action cannot be reversed. Are you sure, that you wanna delete
          your account and all written articles?
        </p>
        <section class="flex flex-col justify-center items-center mt-2 gap-x-6">
          <p v-text="errorMsg" class="text-sm text-red-600" />
          <input
            type="password"
            placeholder="enter your current password"
            class="rounded w-1/2"
            v-model="confirm_password"
            :class="{ 'border border-red-600': errorMsg }"
          />
          <div class="flex text-white justify-between gap-x-8 mt-4">
            <button class="bg-green-500 px-6 py-1 rounded-md" @click="abort">
              No
            </button>
            <button class="bg-red-500 px-6 py-1 rounded-md" @click="delAccount">
              Yes, delete my account
            </button>
          </div>
        </section>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useFbUtil } from '@/composables/useFbUtils';
import { ref } from 'vue';
import { deleteDocument } from '@/composables/useFirestore';
import { getAuth } from '@firebase/auth';
import { useRouter } from 'vue-router';

const { deleteAccount } = useFbUtil();

const confirm = ref<boolean>(false);
const confirm_password = ref<string>('');

const abort = () => {
  confirm.value = false;
  confirm_password.value = '';
  errorMsg.value = '';
};

const router = useRouter();
const errorMsg = ref('');
const user = getAuth().currentUser;
const delAccount = async () => {
  if (user !== null && confirm_password.value.length !== 0) {
    await deleteDocument('users', user.uid);
    await deleteAccount(confirm_password.value);
    router.push('/');
  } else {
    errorMsg.value = 'please confirm your password';
  }
};
</script>
