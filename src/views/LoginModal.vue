<template>
  <main
    class="fixed border py-2 rounded-md h-full md:h-5/6 w-full sm:w-2/3 lg:w-1/3 bg-white dark:bg-gray-800"
  >
    <CloseIcon
      class="absolute top-3 right-3 cursor-pointer dark:text-white text-gray-600"
      @click="closeLoginModal"
    />
    <div class="flex flex-row h-full justify-center">
      <div class="flex flex-col w-full justify-center">
        <div
          class="overflow-y-auto overflow-x-hidden flex flex-col items-center"
        >
          <!-- LOGIN -->
          <section v-if="showLogin === 'login'">
            <h1
              class="flex items-center w-full justify-center font-medium text-lg mb-4 dark:text-white"
            >
              Login
            </h1>
            <Login />
            <p
              class="flex justify-center mt-3 text-sm dark:text-white text-gray-700"
            >
              No account yet?
              <span
                @click="setLogin('register')"
                class="cursor-pointer text-blue-600"
                >&nbsp;Sign up&nbsp;</span
              >instead
            </p>
          </section>

          <!-- Forgot Password -->
          <section v-if="showLogin == 'forgotPw'">
            <ForgotPw />
          </section>

          <!-- REGISTER -->
          <section v-if="showLogin == 'register'">
            <h1
              class="flex items-center w-full justify-center font-medium text-lg mb-4 dark:text-gray-300"
            >
              Register
            </h1>
            <Register />
            <p class="flex justify-center mt-3 text-sm dark:text-white">
              Already registered?
              <span
                @click="setLogin('login')"
                class="cursor-pointer text-blue-600"
                >&nbsp;Login&nbsp;</span
              >instead
            </p>
          </section>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import Login from '@/components/Login/LoginComponent.vue';
import Register from '@/components/Login/RegisterComponent.vue';
import uiState from '@/store/modalState';
import CloseIcon from '@/assets/icons/CloseIcon.vue';
import ForgotPw from '@/components/Login/ForgotPw.vue';
import { showLogin, setLogin } from '@/store/loginStore';

const { closeLoginModal } = uiState;
</script>
