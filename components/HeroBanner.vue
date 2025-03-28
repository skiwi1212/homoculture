<!-- components/HeroBanner.vue -->
<template>
  <div class="hero-container">
    <!-- Use canvas for rendering the image with perfect stability -->
    <canvas ref="heroCanvas" class="hero-canvas"></canvas>
    
    <!-- Content overlay -->
    <div class="hero-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroBanner',
  data() {
    return {
      imageLoaded: false
    }
  },
  methods: {
    updateCanvasSize() {
      const canvas = this.$refs.heroCanvas;
      const ctx = canvas.getContext('2d');
      const container = canvas.parentElement;
      
      // Set canvas to match container size exactly
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
      
      // If image is already loaded, redraw it
      if (this.imageLoaded) {
        this.drawImage(ctx, canvas.width, canvas.height);
      } else {
        // Fill with black background while loading
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    },
    
    drawImage(ctx, canvasWidth, canvasHeight) {
      // Get dimensions
      const img = this.img;
      const imgWidth = img.width;
      const imgHeight = img.height;
      
      // Calculate scaling to ensure image covers the entire canvas
      // If canvas is wider than the image aspect ratio, scale by width
      // If canvas is taller than the image aspect ratio, scale by height
      const canvasRatio = canvasWidth / canvasHeight;
      const imgRatio = imgWidth / imgHeight;
      
      let sourceX = 0;
      let sourceY = 0;
      let sourceWidth = imgWidth;
      let sourceHeight = imgHeight;
      let destX = 0;
      let destY = 0;
      let destWidth = canvasWidth;
      let destHeight = canvasHeight;
      
      // Ensure the image fully covers the canvas (similar to object-fit: cover)
      if (canvasRatio > imgRatio) {
        // Canvas is wider than image aspect ratio
        // Scale width to match canvas width, crop height
        sourceHeight = (imgWidth / canvasWidth) * canvasHeight;
        sourceY = (imgHeight - sourceHeight) / 2;
      } else {
        // Canvas is taller than image aspect ratio
        // Scale height to match canvas height, crop width
        sourceWidth = (imgHeight / canvasHeight) * canvasWidth;
        sourceX = (imgWidth - sourceWidth) / 2;
      }
      
      // Draw the image ensuring it covers the entire canvas
      ctx.drawImage(
        img,
        sourceX, sourceY, sourceWidth, sourceHeight,
        destX, destY, destWidth, destHeight
      );
    }
  },
  mounted() {
    // Get canvas context
    const canvas = this.$refs.heroCanvas;
    const ctx = canvas.getContext('2d');
    
    // Initial size setup
    this.updateCanvasSize();
    
    // Listen for window resize
    window.addEventListener('resize', this.updateCanvasSize);
    
    // Load the image
    this.img = new Image();
    this.img.onload = () => {
      this.imageLoaded = true;
      this.drawImage(ctx, canvas.width, canvas.height);
    };
    this.img.src = '/images/home-hero-image.jpg';
  },
  beforeDestroy() {
    // Clean up resize listener
    window.removeEventListener('resize', this.updateCanvasSize);
  }
}
</script>

<style scoped>
.hero-container {
  width: 100%;
  height: 70vh;
  position: relative;
  background-color: black;
  overflow: hidden;
}

.hero-canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
}

.hero-content {
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
  z-index: 2;
}

@media (max-width: 768px) {
  .hero-container {
    height: 50vh;
  }
}

@media (max-width: 480px) {
  .hero-container {
    height: 40vh;
  }
}
</style>