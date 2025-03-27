<!-- pages/index.vue -->
<template>
    <div>
      <RecentArticles :articles="recentArticles" />
      <FeaturedStories :stories="featuredStories" />
      <PartnersSection :partners="partners" />
    </div>
  </template>
  
  <script setup>
  // You can fetch this data from your content system
  const recentArticles = ref([])
  const featuredStories = ref([])
  const partners = ref([])
  
  // Fetch data when component mounts
  onMounted(async () => {
    // Fetch your content here
  })
  </script>
  