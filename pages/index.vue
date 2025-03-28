<!-- pages/index.vue -->
<template>
  <div class="page-wrapper">
    <!-- Hero Section -->
    <HeroBanner />
    
    <!-- Featured Content -->
    <FeaturedContentBlock />
    
    <!-- Categories -->
    <CategoryOverview />
    
    <!-- Leaderboard and Search -->
    <section class="ad-search-section-wrapper">
      <UContainer>
        <div class="px-[15px]">
          <div class="ad-search-section">
            <div class="leaderboard-wrapper">
              <div class="component-container">
                <Leaderboard />
              </div>
            </div>
            <div class="search-wrapper">
              <div class="search-container-wrapper">
                <SearchBar />
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>
    
    <!-- Recent Articles -->
    <RecentArticles />
    
    <!-- Featured Stories Section -->
    <section>
      <RainbowDivider text="Featured Stories" />
      <FeaturedStories />
    </section>
    
    <!-- Partners Section -->
    <PartnersSlider />
  </div>
</template>

<script setup lang="ts">
// Component Imports
import HeroBanner from '../components/HeroBanner.vue'
import FeaturedContentBlock from '../components/FeaturedContentBlock.vue'
import CategoryOverview from '../components/CategoryOverview.vue'
import Leaderboard from '../components/Leaderboard.vue'
import SearchBar from '../components/SearchBar.vue'
import RecentArticles from '../components/RecentArticles.vue'
import RainbowDivider from '../components/RainbowDivider.vue'
import FeaturedStories from '../components/FeaturedStories.vue'
import PartnersSlider from '../components/PartnersSlider.vue'
</script>

<style>
/* Reset and Base Styles */
.page-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Leaderboard and Search Layout */
.ad-search-section-wrapper {
  padding: 40px 0;
}

.ad-search-section {
  display: flex;
  gap: 20px;
  margin: 0;
  width: 100%;
}

/* Match the width to the 80% of the content grid with the sidebar taking 20% */
.leaderboard-wrapper {
  flex: 0 0 80%;
  height: 90px;
}

/* Make this exactly the same width as the sidebar ad (160px) */
.search-wrapper {
  width: 160px;
  height: 90px;
}

.component-container {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  border-radius: 4px;
  overflow: hidden;
}

.search-container-wrapper {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .ad-search-section {
    flex-direction: column;
  }
  
  .leaderboard-wrapper {
    flex: 0 0 100%;
    width: 100%;
    margin-bottom: 20px;
  }
  
  .search-wrapper {
    width: 100%;
  }
  
  .search-container-wrapper {
    width: 100%;
  }
}

/* Print Styles */
@media print {
  .ad-search-section,
  .partners-section {
    display: none;
  }
}
</style>