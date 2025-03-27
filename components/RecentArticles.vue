<!-- components/RecentArticles.vue -->
<template>
    <section class="py-12">
      <UContainer>
        <h2 class="text-2xl font-bold mb-8">Recently Added</h2>
        <UGrid :cols="[1, 2, 3]" gap="6">
          <UCard
            v-for="article in articles"
            :key="article.id"
            class="overflow-hidden"
          >
            <template #header>
              <UImage
                :src="article.image"
                class="h-48 w-full object-cover"
                :alt="article.title"
              />
            </template>
            
            <div class="space-y-4">
              <UBadge :color="article.category.color">
                {{ article.category }}
              </UBadge>
              
              <h3 class="text-xl font-semibold">{{ article.title }}</h3>
              
              <div class="flex items-center text-sm text-gray-500 space-x-2">
                <span>by {{ article.author }}</span>
                <span>•</span>
                <span>{{ article.date }}</span>
                <span>•</span>
                <span>Time {{ article.readingTime }}</span>
              </div>
              
              <p class="text-gray-600">{{ article.description }}</p>
              
              <UButton
                color="primary"
                variant="ghost"
                :to="article.path"
              >
                read more
              </UButton>
            </div>
          </UCard>
        </UGrid>
      </UContainer>
    </section>
  </template>
  