<!-- layouts/default.vue -->
<template>
  <div class="layout-wrapper">
    <div class="modal-container">
      <SiteHeader />
    </div>
    <main>
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
// Explicitly import components
import SiteHeader from '~/components/SiteHeader.vue'
import SiteFooter from '~/components/SiteFooter.vue'
</script>

<style scoped>
.layout-wrapper {
  position: relative;
  z-index: 0;
}

.modal-container {
  position: relative;
  z-index: 99999;
}

main {
  position: relative;
  z-index: 1;
}
</style>
