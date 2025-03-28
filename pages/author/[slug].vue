<!-- pages/author/[slug].vue -->
<template>
  <GridLayout
    :title="`Articles by ${author.name}`"
    :breadcrumbs="[
      { name: 'Home', path: '/' },
      { name: 'Authors', path: '/authors' },
      { name: author.name, path: '' }
    ]"
    :articles="articles"
    :categories="categories"
    :total-pages="totalPages"
  />
</template>

<script setup>
const route = useRoute()

// Initial data
const author = ref({})
const articles = ref([])
const categories = ref([])
const totalPages = ref(1)

onMounted(async () => {
  // Fetch author data based on route.params.slug
  // Fetch articles by this author
  // Fetch categories for bottom grid
})
</script>
