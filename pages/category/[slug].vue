<!-- pages/category/[slug].vue -->
<template>
    <GridLayout
      :title="category.name"
      :breadcrumbs="[
        { name: 'Home', path: '/' },
        { name: 'Categories', path: '/categories' },
        { name: category.name, path: '' }
      ]"
      :articles="articles"
      :categories="otherCategories"
      :total-pages="totalPages"
    />
  </template>
  
  <script setup>
  const route = useRoute()
  
  // Initial data
  const category = ref({})
  const articles = ref([])
  const otherCategories = ref([])
  const totalPages = ref(1)
  
  onMounted(async () => {
    // Fetch category data based on route.params.slug
    // Fetch articles for this category
    // Fetch other categories for bottom grid
  })
  </script>
  