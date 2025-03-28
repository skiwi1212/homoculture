<!-- components/FeaturedContentBlock.vue -->
<template>
    <div class="featured-block-wrapper">
      <!-- Full width rainbow bar -->
      <div class="rainbow-bar"></div>
      
      <div class="container-safe">
        <div class="featured-row">
          <div class="featured-column">
            <!-- Title text -->
            <div class="featured-text-module">
              <div class="featured-text-inner">
                <h1>HomoCulture</h1>
              </div>
            </div>
            
            <!-- Subtitle text -->
            <div class="featured-text-module">
              <div class="featured-text-inner">
                <h2 class="text-[#D93F87]">North America's leading LGBTQ publication for:</h2>
                <h2 class="text-[#D93F87]">Gay Travel | Pride Events | Gay Culture</h2>
              </div>
            </div>
            
            <!-- Description text -->
            <div class="featured-text-module">
              <div class="featured-text-inner">
                <p>HomoCulture is your ultimate go-to guide for LGBTQ+ travel adventures worldwide. Discover vibrant pride events, romantic getaways, memorable life experiences, and cultural experiences tailored for the queer community. Join us on a journey of discovery, acceptance, and celebration as we navigate the rich diversity of queer travel together.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Full width rainbow bar -->
      <div class="rainbow-bar"></div>
    </div>
  </template>
  
  <script setup>
  // No longer need TextContainer import
  </script>
  
  <style scoped>
  .featured-block-wrapper {
    width: 100%;
    overflow: hidden;
    background-color: black;
    color: white;
  }
  
  .rainbow-bar {
    width: 100%;
    height: 12px;
    background-image: url('/images/rainbow-bar.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  
  .featured-row {
    padding: 60px 0;
    width: 100%;
  }
  
  .featured-column {
    width: 100%;
  }
  
  .featured-text-module {
    margin-bottom: 20px;
  }
  
  .featured-text-module:last-child {
    margin-bottom: 0;
  }
  
  .featured-text-inner h1 {
    font-size: 48px;
    line-height: 1.2;
    margin: 0 0 0.5em;
    font-weight: 600;
    padding: 0;
  }
  
  .featured-text-inner h2 {
    font-size: 24px;
    line-height: 1.4;
    margin: 0 0 0.5em;
    font-weight: 500;
    padding: 0;
  }
  
  .featured-text-inner h2:last-child {
    margin-bottom: 0;
  }
  
  .featured-text-inner p {
    font-size: 18px;
    line-height: 1.6;
    margin: 0;
    padding: 0;
  }
  
  @media (max-width: 768px) {
    .featured-row {
      padding: 40px 0;
    }
    
    .featured-text-inner h1 {
      font-size: 36px;
    }
    
    .featured-text-inner h2 {
      font-size: 20px;
    }
    
    .featured-text-inner p {
      font-size: 16px;
    }
  }
  
  @media (max-width: 480px) {
    .featured-text-inner h1 {
      font-size: 30px;
    }
    
    .featured-text-inner h2 {
      font-size: 18px;
    }
  }
  </style>
  