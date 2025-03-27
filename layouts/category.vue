<!-- pages/[category].vue -->
<template>
    <div>
      <!-- Recent Articles Grid -->
      <section class="mb-12">
        <h2 class="text-2xl font-bold mb-6">Recently Added</h2>
        <UGrid :cols="[1, 2, 3]" gap="4">
          <ArticleCard
            v-for="article in recentArticles"
            :key="article.id"
            :article="article"
          />
        </UGrid>
      </section>
  
      <!-- Featured Stories -->
      <section class="mb-12">
        <h2 class="text-2xl font-bold mb-6">Featured Stories</h2>
        <UGrid :cols="[1, 2, 4]" gap="4">
          <ArticleCard
            v-for="article in featuredArticles"
            :key="article.id"
            :article="article"
          />
        </UGrid>
      </section>
  
      <!-- Partners Section -->
      <section>
        <h2 class="text-2xl font-bold mb-6">Our Partners</h2>
        <UContainer class="bg-white rounded-lg p-8">
          <UGrid :cols="[2, 3, 5]" gap="8" class="items-center">
            <UImage
              v-for="partner in partners"
              :key="partner.id"
              :src="partner.logo"
              :alt="partner.name"
              class="h-12 object-contain"
            />
          </UGrid>
        </UContainer>
      </section>
    </div>
  </template>
  