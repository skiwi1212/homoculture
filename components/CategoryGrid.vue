<!-- components/CategoryGrid.vue -->
<template>
    <div class="category-grid-section">
      <div class="category-grid">
        <NuxtLink 
          v-for="category in categories" 
          :key="category.slug"
          :to="`/category/${category.slug}`"
          class="category-card"
        >
          <img 
            :src="category.image" 
            :alt="category.name"
            class="category-image"
          />
          <h3 class="category-name">{{ category.name }}</h3>
        </NuxtLink>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    categories: {
      type: Array,
      required: true,
      default: () => []
    }
  })
  </script>
  
  <style scoped>
  .category-grid-section {
    width: 100%;
    padding: 40px 0;
    background: black;
  }
  
  .category-grid {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    padding: 0 15px;
  }
  
  .category-card {
    text-decoration: none;
    color: white;
    text-align: center;
    transition: transform 0.2s;
  }
  
  .category-card:hover {
    transform: translateY(-5px);
  }
  
  .category-image {
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
    margin-bottom: 10px;
  }
  
  .category-name {
    font-size: 18px;
    margin: 0;
    padding: 10px 0;
  }
  
  @media (max-width: 768px) {
    .category-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 15px;
    }
  }
  
  @media (max-width: 480px) {
    .category-grid {
      grid-template-columns: 1fr;
    }
  }
  </style>
  