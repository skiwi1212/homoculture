<!-- components/RainbowDivider.vue -->
<template>
    <div class="rainbow-divider-wrapper">
      <div class="rainbow-divider">
        <div class="rainbow-bar"></div>
      </div>
      <h2 class="section-title">{{ props.text }}</h2>
    </div>
  </template>
  
  <script setup lang="ts">
  const props = defineProps<{
    text: string
  }>()
  </script>
  
  <style scoped>
  .rainbow-divider-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  
  .rainbow-divider {
    width: 80%;
    height: 12px;
    background-image: url('/images/rainbow-bar.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin-bottom: 20px;
  }
  
  .section-title {
    font-size: 28px;
    font-weight: 600;
    color: #333;
    margin: 0;
    padding: 0;
  }
  
  @media (max-width: 768px) {
    .rainbow-divider {
      width: 100%;
    }
  }
  </style>
  