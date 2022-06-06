<template>
  <input type="text" placeholder="Your Email" v-model="email" />
  <button @click="sendEmail">send email</button>
  <p>
    Back to
    <span @click="setLogin('login')" class="text-blue-600 cursor-pointer"
      >Login</span
    >
  </p>
</template>

<script setup lang="ts">
import { setLogin } from '@/store/loginStore';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { ref } from 'vue';

const auth = getAuth();
const email = ref();
const sendEmail = async () => {
  await sendPasswordResetEmail(auth, email.value);
};
</script>
