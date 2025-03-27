<!-- components/RecentArticles.vue -->
<template>
  <div class="recent-articles-container">
    <!-- Main content area (80%) -->
    <div class="articles-wrapper">
      <h2 class="section-title">Recently Added</h2>
      <div class="articles-grid">
        <!-- Non-Gestational Mother Article -->
        <article class="article-card">
          <NuxtLink to="/parenting/non-gestational-mother">
            <div class="image-wrapper">
              <img 
                src="https://placehold.co/800x450/e6599c/ffffff?text=Article+1"
                alt="Non-gestational mother article"
                class="article-image"
              />
            </div>
            <div class="article-content">
              <span class="article-category">Parenting and Family</span>
              <h3 class="article-title">The Strength Of The Non-Gestational Mother In Modern Queer Families</h3>
              <div class="article-meta">
                by Brian Webb | March 26, 2025 | Time 6 mins
              </div>
              <p class="article-excerpt">
                Empowering non-gestational mothers and celebrating the true meaning of parenthood beyond biology...
              </p>
              <span class="read-more">Read More</span>
            </div>
          </NuxtLink>
        </article>

        <!-- Pride Globally Article -->
        <article class="article-card">
          <NuxtLink to="/culture/pride-globally">
            <div class="image-wrapper">
              <img 
                src="https://placehold.co/800x450/e6599c/ffffff?text=Article+2"
                alt="Pride celebration"
                class="article-image"
              />
            </div>
            <div class="article-content">
              <span class="article-category">Gay Culture</span>
              <h3 class="article-title">Escape The Trump Tariffs And Celebrate Pride Globally</h3>
              <div class="article-meta">
                by Brian Webb | March 25, 2025 | Time 8 mins
              </div>
              <p class="article-excerpt">
                Standing against Trump tariffs with vibrant Pride alternatives across Canada, Mexico, the UK, and Europe...
              </p>
              <span class="read-more">Read More</span>
            </div>
          </NuxtLink>
        </article>

        <!-- Pre-Screen Article -->
        <article class="article-card">
          <NuxtLink to="/encounters/pre-screen-tricks">
            <div class="image-wrapper">
              <img 
                src="https://placehold.co/800x450/e6599c/ffffff?text=Article+3"
                alt="City nightlife"
                class="article-image"
              />
            </div>
            <div class="article-content">
              <span class="article-category">Casual Encounters</span>
              <h3 class="article-title">How To Pre-Screen Your Tricks For Incredible Encounters</h3>
              <div class="article-meta">
                by Brian Webb | March 24, 2025 | Time 7 mins
              </div>
              <p class="article-excerpt">
                Learning how to pre-screen your tricks and set the stage for a successful connection every time...
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
      
      <div class="ad-slot second-ad">
        <div class="ad-placeholder">
          Advertisement
          <br>160x600
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.recent-articles-container {
  display: flex;
  gap: 20px;
}

.articles-wrapper {
  flex: 0 0 80%;
}

.section-title {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #333;
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.article-card {
  background: white;
  border: 1px solid #eee;
  border-radius: 4px;
  overflow: hidden;
  transition: transform 0.2s ease;
}

.article-card:hover {
  transform: translateY(-2px);
}

.article-card a {
  text-decoration: none;
  color: inherit;
}

.image-wrapper {
  position: relative;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  overflow: hidden;
}

.article-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.article-content {
  padding: 15px;
}

.article-category {
  color: #ee4d9c;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 500;
}

.article-title {
  font-size: 18px;
  font-weight: 600;
  margin: 8px 0;
  line-height: 1.3;
  color: #333;
}

.article-meta {
  font-size: 12px;
  color: #666;
  margin-bottom: 8px;
}

.article-excerpt {
  font-size: 14px;
  color: #666;
  line-height: 1.4;
  margin-bottom: 12px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.read-more {
  color: #ee4d9c;
  font-size: 14px;
  font-weight: 500;
}

.sidebar {
  flex: 0 0 20%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.ad-slot {
  width: 160px;
}

.second-ad {
  margin-top: 20px;
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
  .articles-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Mobile: 1x3 grid */
@media (max-width: 768px) {
  .recent-articles-container {
    flex-direction: column;
  }

  .articles-wrapper {
    flex: 0 0 100%;
  }

  .articles-grid {
    grid-template-columns: 1fr;
  }

  .sidebar {
    display: none;
  }
}
</style>
