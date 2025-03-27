<!-- components/Leaderboard.vue -->
<template>
  <div class="leaderboard-content">
    <!-- Placeholder for leaderboard ad -->
    <div class="leaderboard-ad">
      <p class="ad-placeholder">ADVERTISEMENT</p>
      <!-- You can replace this with actual ad code later -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Leaderboard'
}
</script>

<style scoped>
.leaderboard-content {
  width: 100%;
}

.leaderboard-ad {
  width: 100%;
  height: 90px; /* Standard leaderboard height */
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #eaeaea;
}

.ad-placeholder {
  color: #aaa;
  font-size: 14px;
  letter-spacing: 1px;
}
</style>