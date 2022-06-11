<template>
  <aside class="flex flex-col mr-6">
    <div
      class="overflow-y-auto overflow-x-hidden flex flex-col justify-between"
    >
      <ul class="flex flex-col py-4 space-y-1">
        <li class="hidden md:block">
          <div class="flex flex-row items-center h-8">
            <div
              class="text-sm font-light tracking-wide text-gray-400 uppercase"
            >
              Main
            </div>
          </div>
        </li>
        <li>
          <button
            class="relative flex flex-row items-center h-8 dark:text-white"
            @click.prevent="menuItem = 'dashboard'"
            :class="{ 'font-bold': menuItem === 'dashboard' }"
          >
            <span class="inline-flex justify-center items-center">
              <HomeIcon />
            </span>
            <span class="ml-2 text-sm tracking-wide truncate">Dashboard</span>
          </button>
        </li>
        <li class="hidden md:block">
          <div class="flex flex-row items-center mt-5 h-8">
            <div
              class="text-sm font-light tracking-wide text-gray-400 uppercase"
            >
              Settings
            </div>
          </div>
        </li>
        <li>
          <button
            class="relative flex flex-row items-center h-11 dark:text-white"
            @click.prevent="menuItem = 'profile'"
            :class="{ 'font-bold': menuItem === 'profile' }"
          >
            <span class="inline-flex justify-center items-center">
              <ProfileIcon />
            </span>
            <span class="ml-2 text-sm tracking-wide truncate">Profile</span>
          </button>
        </li>
        <li>
          <button
            class="relative flex flex-row items-center dark:text-white"
            @click.prevent="menuItem = 'settings'"
            :class="{ 'font-bold': menuItem === 'settings' }"
          >
            <span class="inline-flex justify-center items-center">
              <SettingsIcon />
            </span>
            <span class="ml-2 text-sm tracking-wide truncate">Settings</span>
          </button>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { menuItem } from '@/store/dashboardStore';
import HomeIcon from '@/assets/icons/HomeIcon.vue';
import ProfileIcon from '@/assets/icons/ProfileIcon.vue';
import SettingsIcon from '@/assets/icons/SettingsIcon.vue';
</script>
