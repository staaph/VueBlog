<template>
  <main class="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
    <article v-for="(article, key) in articles" :key="key">
      <a :href="`/post`">
        <div class="flex flex-row gap-x-3">
          <div
            v-text="'0' + (key + 1)"
            class="font-bold text-3xl text-gray-400"
          />
          <div class="flex flex-col text-sm dark:text-white">
            <span v-text="article.category" class="font-thin text-xs" />
            <span v-text="article.description" class="font-bold" />
            <div class="flex flex-row gap-x-2">
              <span v-text="article.author + ','" />
              <span v-text="article.date" />
            </div>
          </div>
        </div>
      </a>
    </article>
  </main>
</template>

<script setup lang="ts">
import blogdata from '@/blogdata.json';

const articles = blogdata.articles;
</script>
