<!-- components/ArticleCard.vue -->
<template>
  <UCard class="article-card" :ui="{ rounded: 'none', hover: false }">
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
      <span>by</span>
      <NuxtLink 
        :to="`/author/${article.author.toLowerCase().replace(/\s+/g, '-')}`" 
        class="author-link"
      >
        {{ article.author }}
      </NuxtLink>
      <span>•</span>
      <span>{{ formatDate(article.date) }}</span>
      <span>•</span>
      <span>{{ article.readingTime }} min read</span>
    </div>
    
    <p class="article-description">{{ article.description }}</p>
    
    <template #footer>
      <NuxtLink 
        :to="article.path"
        class="read-more-link"
      >
        <UButton
          color="primary"
          variant="ghost"
          icon="i-heroicons-arrow-right"
          trailing
          :ui="{ rounded: 'none' }"
        >
          Read more
        </UButton>
      </NuxtLink>
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

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
}
</script>

<style scoped>
.article-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  transition: none;
  cursor: default;
}

.article-image {
  height: 12rem;
  width: 100%;
  object-fit: cover;
  border-radius: 0;
  margin: 0;
  padding: 0;
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
  color: #333;
}

.article-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 1rem;
}

.author-link {
  color: #ee4d9c;
  text-decoration: none;
  transition: color 0.2s;
  cursor: pointer;
  font-weight: 500;
}

.author-link:hover {
  text-decoration: underline;
}

.article-description {
  color: #4b5563;
  margin-bottom: 1rem;
  flex-grow: 1;
}

.read-more-link {
  text-decoration: none;
  width: fit-content;
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
