<!-- app.vue -->
<template>
    <div>
      <SiteHeader />
      <UContainer class="site-container">
        <NuxtPage />
      </UContainer>
    </div>
  </template>
  
  <style>
  .site-container {
    max-width: 1200px !important;
    margin: 0 auto;
    padding: 0 32px;
    width: 100%;
  }
  
  @media (max-width: 992px) {
    .site-container {
      padding: 0 20px;
    }
  }
  
  @media (max-width: 768px) {
    .site-container {
      padding: 0 16px;
    }
  }
  </style>
  