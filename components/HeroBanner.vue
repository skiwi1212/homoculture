<!-- components/HeroBanner.vue -->
<template>
  <div class="hero-banner">
    <img 
      src="https://images.pexels.com/photos/4894420/pexels-photo-4894420.jpeg" 
      alt="Hero Banner" 
      class="hero-image"
    />
    <div class="hero-overlay">
      <UContainer>
        <slot></slot>
      </UContainer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroBanner'
}
</script>

<style scoped>
.hero-banner {
  position: relative;
  width: 100%;
  height: 70vh;
  overflow: hidden;
  margin: 0;
  padding: 0;
  background: black;
  z-index: -999;
}

.hero-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  margin: 0;
  padding: 0;
  display: block;
  transform: scale(1.01);
  z-index: -999;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  z-index: -998;
}

@media (max-width: 768px) {
  .hero-banner {
    height: 50vh;
  }
}

@media (max-width: 480px) {
  .hero-banner {
    height: 40vh;
  }
}
</style>



