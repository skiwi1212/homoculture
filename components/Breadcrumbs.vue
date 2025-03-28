<!-- components/Breadcrumbs.vue -->
<template>
    <nav class="breadcrumbs" aria-label="breadcrumb">
      <ol>
        <li v-for="(crumb, index) in breadcrumbs" :key="index">
          <NuxtLink 
            v-if="index !== breadcrumbs.length - 1" 
            :to="crumb.path"
            class="breadcrumb-link"
          >
            {{ crumb.name }}
          </NuxtLink>
          <span 
            v-else 
            class="current"
          >
            {{ crumb.name }}
          </span>
          <span 
            v-if="index !== breadcrumbs.length - 1" 
            class="separator"
          >
            /
          </span>
        </li>
      </ol>
    </nav>
  </template>
  
  <script setup>
  defineProps({
    breadcrumbs: {
      type: Array,
      required: true,
      default: () => []
    }
  })
  </script>
  
  <style scoped>
  .breadcrumbs {
    width: 80%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 15px 0;
  }
  
  ol {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  
  li {
    display: flex;
    align-items: center;
  }
  
  .breadcrumb-link {
    color: black;
    text-decoration: none;
    font-size: 14px;
    transition: color 0.2s;
  }
  
  .breadcrumb-link:hover {
    text-decoration: underline;
  }
  
  .current {
    color: #ee4d9c;
    font-size: 14px;
    font-weight: 500;
  }
  
  .separator {
    color: black;
    margin: 0 8px;
    font-size: 14px;
  }
  
  @media (max-width: 768px) {
    .breadcrumbs {
      width: 90%;
      padding: 10px 0;
    }
  }
  </style>
  