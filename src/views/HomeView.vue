<template>
  <main class="h-full">
    <HomeHeader />
    <div class="px-10 md:px-32 pt-12 pb-16">
      <FeaturedSection />
    </div>
  </main>
</template>

<script setup lang="ts">
import FeaturedSection from '@/components/Home/FeaturedSection.vue';
import HomeHeader from '@/components/Home/HomeHeader.vue';
</script>
