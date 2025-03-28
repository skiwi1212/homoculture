<!-- components/ArticleCard.vue -->
<template>
  <UCard class="article-card" :ui="{ rounded: 'none' }">
    <template #header>
      <UImage
        :src="article.image"
        class="article-image"
        :alt="article.title"
      />
    </template>
    
    <UBadge :color="article.category.color" class="category-badge" :ui="{ rounded: 'none' }">
      {{ article.category.name }}
    </UBadge>
    
    <h3 class="article-title">{{ article.title }}</h3>
    
    <div class="article-meta">
      <span>by {{ article.author }}</span>
      <span>•</span>
      <span>{{ formatDate(article.date) }}</span>
      <span>•</span>
      <span>{{ article.readingTime }} min read</span>
    </div>
    
    <p class="article-description">{{ article.description }}</p>
    
    <template #footer>
      <UButton
        color="primary"
        variant="ghost"
        :to="article.path"
        icon="i-heroicons-arrow-right"
        trailing
        :ui="{ rounded: 'none' }"
      >
        Read more
      </UButton>
    </template>
  </UCard>
</template>

<script setup>
defineProps({
  article: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.article-card {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.article-image {
  height: 12rem;
  width: 100%;
  object-fit: cover;
  border-radius: 0;
}

.category-badge {
  margin-bottom: 0.5rem;
  border-radius: 0;
}

.article-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

.article-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 1rem;
}

.article-description {
  color: #4b5563;
  margin-bottom: 1rem;
  flex-grow: 1;
}

@media (max-width: 768px) {
  .article-image {
    height: 10rem;
  }

  .article-title {
    font-size: 1.125rem;
  }
}
</style>
