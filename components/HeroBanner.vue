<!-- components/HeroBanner.vue -->
<template>
    <div class="relative">
      <!-- Rainbow Progress Bar -->
      <div class="absolute top-0 left-0 right-0 z-10 flex h-1">
        <div v-for="color in rainbowColors" :key="color" 
             class="flex-1 transition-opacity duration-500"
             :class="color"
             :style="{ opacity: isTransitioning ? 0.5 : 1 }">
        </div>
      </div>
  
      <!-- Hero Carousel -->
      <UCarousel 
        v-model="currentSlide"
        :items="heroImages" 
        class="h-[50vh] md:h-[70vh] lg:h-[80vh]"
        :transition="false"
        @change="handleSlideChange"
      >
        <template #item="{ item }">
          <div class="relative h-full w-full">
            <nuxt-img
              preset="banner"
              :src="item.src"
              :alt="item.alt"
              class="object-cover w-full h-full transition-opacity duration-1000"
              :class="{ 'opacity-0': isTransitioning }"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
              <UContainer class="h-full flex flex-col justify-end pb-8 md:pb-12 lg:pb-16">
                <p class="text-lg md:text-xl text-white mb-8 max-w-2xl">
                  North America's leading LGBTQ publication for: 
                  <span class="font-semibold">Gay Travel | Pride Events | Gay Culture</span>
                </p>
              </UContainer>
            </div>
          </div>
        </template>
      </UCarousel>
    </div>
  </template>
  
  <script setup>
  const currentSlide = ref(0)
  const isTransitioning = ref(false)
  
  const rainbowColors = [
    'bg-red-500',
    'bg-orange-500',
    'bg-yellow-500',
    'bg-green-500',
    'bg-blue-500',
    'bg-violet-500'
  ]
  
  const heroImages = [
    {
      src: '/images/hero-winter.jpg',
      alt: 'Winter scene with HomoCulture flag'
    },
    {
      src: '/images/hero-pride.jpg',
      alt: 'Pride celebration'
    }
  ]
  
  const handleSlideChange = () => {
    isTransitioning.value = true
    setTimeout(() => {
      isTransitioning.value = false
    }, 1000)
  }
  </script>
  