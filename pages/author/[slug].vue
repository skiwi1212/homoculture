<!-- pages/author/[slug].vue -->
<template>
    <GridLayout
      :title="`Articles by ${$route.params.slug}`"
      :breadcrumbs="[
        { name: 'Home', path: '/' },
        { name: 'Authors', path: '/authors' },
        { name: $route.params.slug, path: '' }
      ]"
      :articles="articles"
      :categories="categories"
      :total-pages="totalPages"
    />
  </template>
  
  <script setup>
  const route = useRoute()
  
  // You'll need to fetch:
  // 1. Articles by this author
  // 2. Categories for the bottom grid
  // 3. Calculate total pages
  
  const articles = ref([])
  const categories = ref([])
  const totalPages = ref(1)
  
  // Example fetch (adjust based on your data structure)
  onMounted(async () => {
    // Fetch articles by author
    // articles.value = await fetchArticlesByAuthor(route.params.slug)
    
    // Fetch categories
    // categories.value = await fetchCategories()
    
    // Set total pages based on article count
    // totalPages.value = Math.ceil(totalArticles / articlesPerPage)
  })
  </script>
  