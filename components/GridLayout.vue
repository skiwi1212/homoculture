<!-- components/GridLayout.vue -->
<template>
    <div class="grid-layout">
      <HeroBanner>
        <h1 class="page-title">{{ title }}</h1>
      </HeroBanner>
      
      <Breadcrumbs :breadcrumbs="breadcrumbs" />
      
      <div class="content-wrapper">
        <!-- Leaderboard/Search split -->
        <div class="top-section">
          <div class="leaderboard-container">
            <Leaderboard />
          </div>
          <div class="search-container">
            <SearchBar />
          </div>
        </div>
  
        <!-- Main content area with sidebar -->
        <div class="main-content">
          <!-- Articles grid -->
          <div class="articles-section">
            <div class="articles-grid">
              <ArticleCard 
                v-for="article in articles" 
                :key="article.id" 
                :article="article"
              />
            </div>
            
            <!-- Pagination -->
            <div class="pagination">
              <UPagination
                v-model="currentPage"
                :total="totalPages"
                :ui="{ rounded: 'none' }"
              />
            </div>
          </div>
  
          <!-- Sidebar -->
          <div class="sidebar">
            <div class="ad-container">
              <!-- Sidebar ad content -->
            </div>
          </div>
        </div>
  
        <!-- Category grid -->
        <div class="categories-section">
          <CategoryGrid :categories="categories" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    title: {
      type: String,
      required: true
    },
    breadcrumbs: {
      type: Array,
      required: true
    },
    articles: {
      type: Array,
      required: true,
      default: () => []
    },
    categories: {
      type: Array,
      required: true,
      default: () => []
    },
    totalPages: {
      type: Number,
      default: 1
    }
  })
  
  const currentPage = ref(1)
  </script>
  
  <style scoped>
  .grid-layout {
    width: 100%;
    margin: 0;
    padding: 0;
  }
  
  .page-title {
    color: white;
    font-size: 2.5rem;
    font-weight: 700;
    margin: 0;
    padding: 0;
  }
  
  .content-wrapper {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0;
  }
  
  .top-section {
    display: flex;
    width: 100%;
    gap: 20px;
    margin: 0;
    padding: 15px;
  }
  
  .leaderboard-container {
    flex: 0 0 80%;
  }
  
  .search-container {
    flex: 0 0 20%;
  }
  
  .main-content {
    display: flex;
    gap: 20px;
    padding: 15px;
  }
  
  .articles-section {
    flex: 0 0 80%;
  }
  
  .articles-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-bottom: 40px;
  }
  
  .sidebar {
    flex: 0 0 20%;
  }
  
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }
  
  .categories-section {
    width: 100%;
    padding: 40px 0;
    background: black;
  }
  
  @media (max-width: 1024px) {
    .articles-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (max-width: 768px) {
    .top-section {
      flex-direction: column;
    }
  
    .leaderboard-container,
    .search-container {
      flex: 0 0 100%;
    }
  
    .main-content {
      flex-direction: column;
    }
  
    .articles-section,
    .sidebar {
      flex: 0 0 100%;
    }
  
    .articles-grid {
      grid-template-columns: 1fr;
    }
  
    .page-title {
      font-size: 2rem;
    }
  }
  </style>
  