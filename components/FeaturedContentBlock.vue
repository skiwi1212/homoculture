<!-- components/FeaturedContentBlock.vue -->
<template>
    <div class="featured-block">
      <!-- Full width rainbow bar -->
      <div class="rainbow-bar"></div>
      
      <!-- Container for centered content -->
      <div class="container">
        <div class="content-container">
          <h1 class="title">HomoCulture</h1>
          
          <h2 class="subtitle">
            North America's leading LGBTQ publication for:<br>
            Gay Travel | Pride Events | Gay Culture
          </h2>
          
          <p class="description">
            HomoCulture is your ultimate go-to guide for LGBTQ+ travel adventures worldwide. Discover vibrant pride events, romantic getaways, memorable life experiences, and cultural experiences tailored for the queer community. Join us on a journey of discovery, acceptance, and celebration as we navigate the rich diversity of queer travel together.
          </p>
        </div>
      </div>
      
      <!-- Full width rainbow bar -->
      <div class="rainbow-bar"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FeaturedContentBlock'
  }
  </script>
  
  <style scoped>
  .featured-block {
    position: relative;
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    background-color: black;
    color: white;
    padding: 0;
    display: flex;
    flex-direction: column;
  }
  
  .rainbow-bar {
    width: 100%;
    height: 12px;
    background-image: url('/images/rainbow-bar.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .content-container {
    padding: 60px 0;
    width: 100%;
  }
  
  .title {
    font-size: 48px;
    margin-bottom: 20px;
    font-weight: 600;
  }
  
  .subtitle {
    font-size: 24px;
    margin-bottom: 30px;
    color: #ee4d9c;
    font-weight: 500;
    line-height: 1.4;
  }
  
  .description {
    font-size: 18px;
    line-height: 1.6;
    max-width: 900px;
  }
  
  @media (max-width: 768px) {
    .content-container {
      padding: 40px 0;
    }
    
    .title {
      font-size: 36px;
    }
    
    .subtitle {
      font-size: 20px;
    }
    
    .description {
      font-size: 16px;
    }
  }
  
  @media (max-width: 480px) {
    .title {
      font-size: 30px;
    }
    
    .subtitle {
      font-size: 18px;
    }
  }
  </style>