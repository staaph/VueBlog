<template>
  <main>
    <HomeHeader />
    <div class="px-10 md:px-32 pt-12 pb-16">
      <h1 class="mb-10 font-semibold text-gray-400 text-2xl">Latest</h1>
      <FeaturedSection />
    </div>
  </main>
</template>

<script setup lang="ts">
import FeaturedSection from '@/components/Home/FeaturedSection.vue';
import HomeHeader from '@/components/Home/HomeHeader.vue';
</script>

<style></style>
