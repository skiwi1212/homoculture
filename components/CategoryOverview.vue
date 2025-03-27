<!-- components/CategoryOverview.vue -->
<template>
    <div class="category-overview">
      <div class="categories-container">
        <!-- Gay Travel Guides Section -->
        <div class="category-item">
          <div class="image-container">
            <img 
              src="https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg"
              alt="Gay Travel Guides" 
              class="category-image"
            />
          </div>
          <h2 class="category-title">Gay Travel Guides</h2>
          <div class="category-description">
            <p>
              Discover LGBTQ+ inclusive destinations and plan your next adventure with our comprehensive 
              <a href="/gay-travel-guides" class="pink-link">gay travel guides</a> and expert 
              <a href="/travel-tips" class="pink-link">travel tips</a> and recommendations.
            </p>
          </div>
        </div>
  
        <!-- Pride Events Section -->
        <div class="category-item">
          <div class="image-container">
            <img 
              src="https://images.pexels.com/photos/7676338/pexels-photo-7676338.jpeg"
              alt="Pride Events" 
              class="category-image"
            />
          </div>
          <h2 class="category-title">Pride Events</h2>
          <div class="category-description">
            <p>
              Explore vibrant <a href="/pride-events" class="pink-link">Pride events</a> worldwide, celebrating 
              <a href="/lgbtq-identity" class="pink-link">LGBTQ+ identity</a>, diversity, and equality through parades, festivals, and 
              <a href="/events-and-nightlife" class="pink-link">events and nightlife</a>.
            </p>
          </div>
        </div>
  
        <!-- HomoCulture Tour Section -->
        <div class="category-item">
          <div class="image-container">
            <img 
              src="https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg"
              alt="HomoCulture Tour" 
              class="category-image"
            />
          </div>
          <h2 class="category-title">HomoCulture Tour</h2>
          <div class="category-description">
            <p>
              Follow our travels on the <a href="/homoculture-tour" class="pink-link">HomoCulture Tour</a> to gay events and destinations as we go discover, celebrate, and explore LGBTQ life across the globe.
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CategoryOverview'
  }
  </script>
  
  <style scoped>
  .category-overview {
    width: 100%;
    padding: 40px 20px;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .categories-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
  
  .category-item {
    display: flex;
    flex-direction: column;
  }
  
  .image-container {
    aspect-ratio: 4/3;
    overflow: hidden;
    margin-bottom: 20px;
  }
  
  .category-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  .category-image:hover {
    transform: scale(1.05);
  }
  
  .category-title {
    font-size: 24px;
    font-weight: 600;
    color: #333;
    margin-bottom: 15px;
  }
  
  .category-description {
    font-size: 16px;
    line-height: 1.5;
    color: #666;
  }
  
  .pink-link {
    color: #ee4d9c;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s ease;
  }
  
  .pink-link:hover {
    color: #d12053;
    text-decoration: underline;
  }
  
  @media (max-width: 992px) {
    .categories-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (max-width: 768px) {
    .categories-container {
      grid-template-columns: 1fr;
      gap: 40px;
    }
  }
  </style>