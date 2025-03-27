<!-- components/ArticleCard.vue -->
<template>
    <UCard class="h-full">
      <template #header>
        <UImage
          :src="article.image"
          class="h-48 w-full object-cover"
          :alt="article.title"
        />
      </template>
      
      <UBadge :color="article.category.color" class="mb-2">
        {{ article.category.name }}
      </UBadge>
      
      <h3 class="text-xl font-semibold mb-2">{{ article.title }}</h3>
      
      <div class="flex items-center gap-2 text-sm text-gray-500 mb-4">
        <span>by {{ article.author }}</span>
        <span>•</span>
        <span>{{ formatDate(article.date) }}</span>
        <span>•</span>
        <span>{{ article.readingTime }} min read</span>
      </div>
      
      <p class="text-gray-600 mb-4">{{ article.description }}</p>
      
      <template #footer>
        <UButton
          color="primary"
          variant="ghost"
          :to="article.path"
          icon="i-heroicons-arrow-right"
          trailing
        >
          Read more
        </UButton>
      </template>
    </UCard>
  </template>
  