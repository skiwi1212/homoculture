<!-- app.vue -->
<template>
    <div class="site-wrapper">
      <NuxtLoadingIndicator />
      <div class="main-container">
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </div>
    </div>
  </template>
  
  <style>
  /* Reset and base styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body {
    width: 100%;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  /* Main wrapper */
  .site-wrapper {
    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
  }
  
  /* Main container */
  .main-container {
    flex: 1 0 auto;
    width: 100%;
    position: relative;
  }
  
  /* Loading indicator customization */
  ::view-transition-old(root),
  ::view-transition-new(root) {
    animation: none;
    mix-blend-mode: normal;
  }
  
  /* Nuxt loading bar customization */
  .nuxt-loading-indicator {
    background: linear-gradient(
      to right,
      #7B3F99, /* Purple */
      #D93F87, /* Pink */
      #EF5350  /* Red */
    ) !important;
  }
  </style>
  