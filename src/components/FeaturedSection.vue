<template>
  <div v-for="(data, key) in blogdata" :key="key" class="flex flex-col">
    <h1
      class="flex mx-10 items-start justify-start font-bold text-2xl dark:text-white"
    >
      Latest
    </h1>
    <div
      class="grid grid-rows-6 lg:grid-rows-none lg:grid-cols-3 grid-flow-col gap-3 my-2 mx-10 text-center"
    >
      <div
        class="shadow-md shadow-gray-400 dark:shadow-none rounded px-4 py-16 hover:scale-[1.05] transition-all duration-300 cursor-pointer relative"
        :style="`background-image:linear-gradient(to bottom, rgba(255,255,255,0.3) 0%,rgba(255,255,255,0.7) 100%), url(${data[0].picture}); background-position: center; background-size:cover `"
      >
        <div class="absolute top-2 left-2 bg-gray-400 rounded-full px-2">
          <p>{{ data[0].category }}</p>
        </div>
        <div>
          <p class="font-bold">{{ data[0].title }}</p>
          <p>{{ data[0].description }}</p>
        </div>
        <div class="absolute flex flex-row bottom-1 right-2 gap-x-0.5 text-xs">
          <p>{{ data[0].author }}</p>
        </div>
      </div>
      <div
        class="shadow-md shadow-gray-400 dark:shadow-none rounded px-4 py-16 hover:scale-[1.05] transition-all duration-300 cursor-pointer relative"
        :style="`background-image:linear-gradient(to bottom, rgba(255,255,255,0.4) 0%,rgba(255,255,255,0.7) 100%), url(${data[1].picture}); background-position: center; background-size:cover;`"
      >
        <div class="absolute top-2 left-2 bg-gray-400 rounded-full px-2">
          <p>{{ data[1].category }}</p>
        </div>
        <div>
          <p class="font-bold">{{ data[1].title }}</p>
          <p>{{ data[1].description }}</p>
        </div>
        <div class="absolute flex flex-row bottom-1 right-2 gap-x-0.5 text-xs">
          <p>{{ data[1].author }}</p>
        </div>
      </div>
      <div
        class="shadow-md shadow-gray-400 dark:shadow-none rounded px-4 py-16 hover:scale-[1.05] transition-all duration-300 cursor-pointer relative"
        :style="`background-image:linear-gradient(to bottom, rgba(255,255,255,0.4) 0%,rgba(255,255,255,0.7) 100%), url(${data[2].picture}); background-position: center; background-size:cover;`"
      >
        <div class="absolute top-2 left-2 bg-gray-400 rounded-full px-2">
          <p>{{ data[2].category }}</p>
        </div>
        <div>
          <p class="font-bold">{{ data[2].title }}</p>
          <p>{{ data[2].description }}</p>
        </div>
        <div class="absolute flex flex-row bottom-1 right-2 gap-x-0.5 text-xs">
          <p>{{ data[2].author }}</p>
        </div>
      </div>
      <div
        class="shadow-md shadow-gray-400 dark:shadow-none rounded px-4 py-16 hover:scale-[1.05] transition-all duration-300 cursor-pointer relative"
        :style="`background-image:linear-gradient(to bottom, rgba(255,255,255,0.4) 0%,rgba(255,255,255,0.7) 100%), url(${data[3].picture}); background-position: center; background-size:cover;`"
      >
        <div class="absolute top-2 left-2 bg-gray-400 rounded-full px-2">
          <p>{{ data[3].category }}</p>
        </div>
        <div>
          <p class="font-bold">{{ data[3].title }}</p>
          <p>{{ data[3].description }}</p>
        </div>
        <div class="absolute flex flex-row bottom-1 right-2 gap-x-0.5 text-xs">
          <p>{{ data[3].author }}</p>
        </div>
      </div>
      <div
        class="shadow-md shadow-gray-400 dark:shadow-none rounded px-4 py-16 lg:row-span-2 flex flex-col justify-center hover:scale-[1.05] transition-all duration-300 cursor-pointer relative"
        :style="`background-image:linear-gradient(to bottom, rgba(255,255,255,0.4) 0%,rgba(255,255,255,0.7) 100%), url(${data[4].picture}); background-position: center; background-size:cover;`"
      >
        <div class="absolute top-2 left-2 bg-gray-400 rounded-full px-2">
          <p>{{ data[4].category }}</p>
        </div>
        <div>
          <p class="font-bold">{{ data[4].title }}</p>
          <p>{{ data[4].description }}</p>
        </div>
        <div class="absolute flex flex-row bottom-1 right-2 gap-x-0.5 text-xs">
          <p>{{ data[4].author }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import blogdata from '@/blogdata.json';
</script>
