<!-- components/PartnersSlider.vue -->
<template>
    <UContainer class="partners-container">
      <div class="partners-section">
        <h2 class="section-title">Our Partners</h2>
        
        <div class="partners-slider" ref="slider">
          <div class="slider-track" :style="sliderStyle">
            <!-- Double the items to create smooth infinite loop -->
            <div v-for="partner in [...partners, ...partners]"
                 :key="partner._id + Math.random()"
                 class="partner-item">
              <img
                :src="partner.logo"
                :alt="partner.name"
                class="partner-logo"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </UContainer>
  </template>
   
  <script setup lang="ts">
  interface Partner {
    _id: string
    name: string
    logo: string
    url: string
  }
   
  // Temporary hardcoded partners until Nuxt Studio integration
  const partners = ref([
    {
      _id: '1',
      name: 'Explore Super Natural British Columbia Canada',
      logo: '/images/partners/bc-tourism.png',
      url: '#'
    },
    {
      _id: '2',
      name: 'Hotel Zed',
      logo: '/images/partners/hotel-zed.png',
      url: '#'
    },
    {
      _id: '3',
      name: 'My One Custom Fit Condoms',
      logo: '/images/partners/my-one.png',
      url: '#'
    },
    {
      _id: '4',
      name: 'San Francisco Travel Association',
      logo: '/images/partners/sf-travel.png',
      url: '#'
    },
    {
      _id: '5',
      name: 'The Trust',
      logo: '/images/partners/the-trust.png',
      url: '#'
    }
  ])
   
  // Animation controls
  const animationDuration = 30 // seconds for one complete cycle
  const sliderStyle = ref({
    animation: `slide ${animationDuration}s linear infinite`
  })
   
  // Later, fetch partners from Nuxt Studio
  // const { data: partners } = await useAsyncData('partners', () => 
  //   queryContent('partners').find()
  // )
  </script>
   
  <style scoped>
  .partners-container {
    width: 100%;
    max-width: 100%;
    padding-left: 0;
    padding-right: 0;
    overflow-x: hidden; /* Critical to prevent horizontal scroll */
  }
  
  .section-title {
    font-size: 28px;
    font-weight: 600;
    color: #333;
    margin-bottom: 20px;
    text-align: left;
    padding-left: 15px;
  }
  
  .partners-section {
    padding: 0;
    background: white;
    overflow: hidden;
    width: 100%;
    margin: 0 auto;
  }
  
  .partners-slider {
    position: relative;
    width: 100%;
    overflow: hidden;
    padding: 20px 0;
  }
  
  .slider-track {
    display: flex;
    align-items: center;
    gap: 40px;
    width: fit-content;
    animation: slide 30s linear infinite;
  }
  
  .partner-item {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    max-width: 220px;
  }
  
  .partner-logo {
    width: 100%;
    height: auto;
    object-fit: contain;
    max-height: 80px;
  }
  
  @keyframes slide {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }
  
  /* Pause animation on hover */
  .partners-slider:hover .slider-track {
    animation-play-state: paused;
  }
  
  @media (max-width: 1024px) {
    .partner-item {
      max-width: 180px;
      padding: 0 15px;
    }
    
    .partner-logo {
      max-height: 70px;
    }
  }
  
  @media (max-width: 768px) {
    .section-title {
      font-size: 24px;
    }
    
    .partner-logo {
      max-width: 120px;
      max-height: 50px;
    }
    
    .partner-item {
      padding: 0 10px;
      max-width: 140px;
    }
    
    .slider-track {
      gap: 20px;
    }
  }
  
  @media (max-width: 480px) {
    .section-title {
      font-size: 20px;
    }
    
    .partner-logo {
      max-width: 100px;
      max-height: 40px;
    }
    
    .partner-item {
      padding: 0 8px;
      max-width: 120px;
    }
    
    .slider-track {
      gap: 15px;
    }
  }
  </style>