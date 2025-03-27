<!-- pages/index.vue -->
<template>
  <div>
    <!-- Hero Banner (full width) -->
    <HeroBanner />
    
    <!-- Featured content block (full width with contained content) -->
    <FeaturedContentBlock />
    
    <!-- Categories in a container -->
    <div class="container">
      <CategoryOverview />
    </div>
    
    <!-- Leaderboard and Search section with proper spacing -->
    <div class="container">
      <div class="ad-search-section">
        <div class="leaderboard-wrapper">
          <Leaderboard />
        </div>
        <div class="search-wrapper">
          <SearchBar />
        </div>
      </div>
    </div>
    
    <!-- Recently added section -->
    <div class="container">
      <RecentArticles />
    </div>

    <!-- Rainbow Divider -->
    <div class="container">
      <RainbowDivider text="Featured Stories" />
    </div>

    <!-- Featured articles section -->
    <div class="container">
      <FeaturedArticles />
    </div>
  </div>
</template>

<script setup lang="ts">
import HeroBanner from '../components/HeroBanner.vue'
import FeaturedContentBlock from '../components/FeaturedContentBlock.vue'
import CategoryOverview from '../components/CategoryOverview.vue'
import Leaderboard from '../components/Leaderboard.vue'
import SearchBar from '../components/SearchBar.vue'
import RecentArticles from '../components/RecentArticles.vue'
import RainbowDivider from '../components/RainbowDivider.vue'
</script>

<style>
/* Global container style */
.container {
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  margin: 0 auto;
}

/* Ad and search area */
.ad-search-section {
  display: flex;
  margin: 40px 0;
  gap: 20px;
}

.leaderboard-wrapper {
  flex: 0 0 80%; /* Fixed to 80% width */
  background-color: #f5f5f5;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-wrapper {
  flex: 0 0 20%; /* Fixed to 20% width */
  background-color: #f5f5f5;
  height: 90px;
}

/* Article sections spacing */
.container + .container {
  margin-top: 40px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .ad-search-section {
    flex-direction: column;
  }
  
  .leaderboard-wrapper,
  .search-wrapper {
    flex: 0 0 100%;
    width: 100%;
  }
  
  .search-wrapper {
    margin-top: 20px;
  }
}
</style>
