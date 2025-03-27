<!-- app.vue -->
<template>
    <div id="app">
      <SiteHeader />
      <main>
        <UContainer class="site-container">
          <NuxtPage />
        </UContainer>
      </main>
    </div>
  </template>
  
  <style>
  /* Critical reset */
  :root {
    margin: 0;
    padding: 0;
  }
  
  html, 
  body {
    margin: 0;
    padding: 0;
    background: black;
    min-height: 100vh;
    overflow-x: hidden;
  }
  
  #app {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    background: white;
  }
  
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
  