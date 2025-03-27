<!-- components/FeaturedStories.vue -->
<template>
    <section class="py-12 bg-gray-50">
      <UContainer>
        <h2 class="text-2xl font-bold mb-8">Featured Stories</h2>
        <UGrid :cols="[1, 2, 4]" gap="6">
          <UCard
            v-for="story in stories"
            :key="story.id"
            class="overflow-hidden"
          >
            <template #header>
              <UImage
                :src="story.image"
                class="h-64 w-full object-cover"
                :alt="story.title"
              />
            </template>
            
            <div class="space-y-4">
              <h3 class="text-xl font-semibold">{{ story.title }}</h3>
              <div class="flex items-center text-sm text-gray-500 space-x-2">
                <span>by {{ story.author }}</span>
                <span>{{ story.date }}</span>
              </div>
              <p class="text-gray-600">{{ story.description }}</p>
              <UButton
                color="primary"
                variant="ghost"
                :to="story.path"
              >
                read more
              </UButton>
            </div>
          </UCard>
        </UGrid>
      </UContainer>
    </section>
  </template>
  