<!-- components/Leaderboard.vue -->
<template>
    <div class="leaderboard-content">
      <div class="leaderboard-ad">
        <p class="ad-placeholder">ADVERTISEMENT</p>
      </div>
    </div>
  </template>
  
  <script setup>
  // Using script setup for consistency
  </script>
  
  <style scoped>
  .leaderboard-content {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
  }
  
  .leaderboard-ad {
    width: 728px;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    background: #f5f5f5;
  }
  
  .ad-placeholder {
    margin: 0;
    padding: 0;
    color: #666;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  @media (max-width: 768px) {
    .leaderboard-content {
      padding: 0;
    }
    
    .leaderboard-ad {
      width: 250px;
      height: 250px;
    }
  }
  </style>
  