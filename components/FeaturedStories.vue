<!-- components/FeaturedStories.vue -->
<template>
  <div class="featured-stories-container">
    <!-- Main content area (80%) -->
    <div class="stories-wrapper">
      <div class="stories-grid">
        <article v-for="(story, index) in [1, 2, 3]" 
                 :key="index" 
                 :class="['story-card', `story-card-${index + 1}`]">
          <NuxtLink to="/">
            <div class="story-content">
              <span class="story-category">Coming Soon</span>
              <h3 class="story-title">Story {{ index + 1 }}</h3>
              <div class="story-meta">
                Add your content here
              </div>
              <p class="story-excerpt">
                This space will be populated with featured stories tagged in Nuxt Studio
              </p>
              <span class="read-more">Read More</span>
            </div>
          </NuxtLink>
        </article>
      </div>
    </div>

    <!-- Sidebar (20%) -->
    <div class="sidebar">
      <div class="ad-slot">
        <div class="ad-placeholder">
          Advertisement
          <br>160x600
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.featured-stories-container {
  display: flex;
  gap: 20px;
  margin-top: 20px;
}

.stories-wrapper {
  flex: 0 0 80%;
}

.stories-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.story-card {
  border-radius: 4px;
  overflow: hidden;
  padding: 20px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
}

/* Different background colors for each card */
.story-card-1 {
  background-color: #fdf2f8;
}

.story-card-2 {
  background-color: #f3e8ff;
}

.story-card-3 {
  background-color: #ffe4e6;
}

.story-card a {
  text-decoration: none;
  color: inherit;
  height: 100%;
}

.story-content {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.story-category {
  color: #ee4d9c;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 500;
  margin-bottom: 8px;
}

.story-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
  line-height: 1.3;
  color: #333;
}

.story-meta {
  font-size: 12px;
  color: #666;
  margin-bottom: 12px;
}

.story-excerpt {
  font-size: 14px;
  color: #666;
  line-height: 1.4;
  margin-bottom: 12px;
  flex-grow: 1;
}

.read-more {
  color: #ee4d9c;
  font-size: 14px;
  font-weight: 500;
  margin-top: auto;
}

.sidebar {
  flex: 0 0 20%;
}

.ad-slot {
  width: 160px;
  position: relative;
}

.ad-placeholder {
  width: 160px;
  height: 600px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #666;
}

/* Tablet: 2x3 grid */
@media (max-width: 1024px) {
  .stories-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Mobile: 1x3 grid */
@media (max-width: 768px) {
  .featured-stories-container {
    flex-direction: column;
  }

  .stories-wrapper {
    flex: 0 0 100%;
  }

  .stories-grid {
    grid-template-columns: 1fr;
  }

  .sidebar {
    display: none;
  }
}
</style>
