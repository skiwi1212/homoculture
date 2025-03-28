<!-- components/RainbowDivider.vue -->
<template>
    <div class="container-safe py-8">
      <div class="mobile-safe flex flex-col items-start">
        <div class="rainbow-divider">
          <img 
            src="/images/rainbow-bar.png" 
            alt="Rainbow divider"
            class="w-full h-[6px] object-cover"
          />
        </div>
        <h2 class="text-[28px] font-semibold text-gray-800 mt-5">
          {{ props.text }}
        </h2>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const props = defineProps<{
    text: string
  }>()
  </script>
  
  <style scoped>
  .rainbow-divider {
    width: 100%;
    margin: 20px 0;
    overflow: hidden;
  }
  
  @media (max-width: 768px) {
    h2 {
      font-size: 24px;
    }
  }
  </style>
  