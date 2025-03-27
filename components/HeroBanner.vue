<!-- components/HeroBanner.vue -->
<template>
  <div class="hero-banner">
    <img 
      src="https://images.pexels.com/photos/4894420/pexels-photo-4894420.jpeg" 
      alt="Hero Banner" 
      class="hero-image"
    />
    <!-- Optional: Overlay content -->
    <div class="hero-overlay">
      <slot></slot>
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
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  height: 70vh;
  overflow: hidden;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
}

@media (max-width: 768px) {
  .hero-banner {
    height: 50vh;
  }
}
</style>