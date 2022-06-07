<template>
  <main class="flex justify-center items-center h-full">
    <section class="flex flex-col">
      <div class="flex flex-row gap-x-3 items-center">
        <h1 class="font-medium text-xl">Delete Account ?</h1>
        <button
          class="bg-red-600 px-2 py-1 rounded-sm text-white"
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
          <input
            type="password"
            placeholder="enter your current password"
            class="rounded w-1/2"
            v-model="confirm_password"
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

const { deleteAccount } = useFbUtil();

const confirm = ref<boolean>(false);
const confirm_password = ref<string>('');

const abort = () => {
  confirm.value = false;
  confirm_password.value = '';
};

const delAccount = async () => {
  await deleteAccount(confirm_password.value);
};
</script>
