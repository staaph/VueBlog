<template>
  <div class="flex flex-col mx-10">
    <h1 class="font-bold text-2xl">Latest</h1>
    <div>
      <div
        v-for="(data, key) in blogdata"
        class="grid grid-rows-6 lg:grid-rows-none lg:grid-cols-3 gap-3"
        :key="key"
      >
        <div v-for="(i, key) in data" :key="key">
          <div class="text-center mt-2">
            <div
              class="shadow-md shadow-gray-400 rounded px-4 py-16 hover:scale-[1.05] transition-all duration-300 cursor-pointer relative"
              :style="`background-image:linear-gradient(to bottom, rgba(255,255,255,0.3) 0%,rgba(255,255,255,0.7) 100%), url(${i.picture}); background-position: center; background-size:cover`"
            >
              <div class="absolute top-2 left-2 bg-gray-400 rounded-full px-2">
                <p>{{ i.category }}</p>
              </div>
              <div>
                <p class="font-bold">{{ i.title }}</p>
                <p>{{ i.description }}</p>
              </div>
              <div
                class="absolute flex flex-row bottom-1 right-2 gap-x-0.5 text-xs"
              >
                <p>{{ i.author }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import blogdata from '@/blogdata.json';
</script>

<style scoped>
.final-padding {
  grid-row: span 2 / span 2;
}
</style>
