<!-- components/HeroBanner.vue -->
<template>
    <div class="relative">
      <!-- Hero Image/Slider -->
      <UCarousel v-if="images?.length > 1" :items="images">
        <template #item="{ item }">
          <div class="relative h-[70vh] w-full">
            <UImage
              :src="item.src"
              class="object-cover w-full h-full"
              :alt="item.alt"
            />
            <div class="absolute inset-0 bg-black/30">
              <div class="container mx-auto px-4 py-8">
                <!-- Logo/Title -->
                <h1 class="text-5xl font-bold text-white mb-4">HOMOCULTURE</h1>
                <!-- Navigation -->
                <nav class="bg-white/90 rounded-lg p-2">
                  <ul class="flex space-x-6 justify-center">
                    <li v-for="item in navigation" :key="item.name">
                      <ULink
                        :to="item.href"
                        class="text-gray-700 hover:text-primary-500"
                      >
                        {{ item.name }}
                      </ULink>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </template>
      </UCarousel>
    </div>
  </template>
  
  <script setup>
  const navigation = [
    { name: 'Gay Travel Guides', href: '/travel-guides' },
    { name: 'Homoculture', href: '/culture' },
    { name: 'Homoculture Tour', href: '/tour' },
    { name: 'Lifestyle', href: '/lifestyle' },
    { name: 'Love and Sex', href: '/love-sex' },
    { name: 'Pride and Events', href: '/events' },
    { name: 'Travel Advice', href: '/advice' },
  ]
  </script>
  