<!-- components/SiteHeader.vue -->
<template>
  <div class="full-width-header">
    <header>
      <div class="header-container">
        <!-- Logo Container -->
        <div class="logo-container">
          <NuxtLink to="/" class="logo-link">
            <img 
              src="/images/homoculture-logo.png" 
              alt="HomoCulture" 
              class="responsive-logo"
              ref="logoEl"
              @load="updateMobileNavWidth"
            />
          </NuxtLink>
        </div>

        <!-- Desktop Navigation Menu -->
        <nav class="desktop-menu">
          <div class="menu-items-wrapper">
            <div v-for="(item, index) in menuItems" 
                 :key="index" 
                 class="menu-item-container">
              <NuxtLink :to="item.path" class="menu-item">
                {{ item.label }}
              </NuxtLink>
              <div class="underline"></div>
            </div>
          </div>
        </nav>

        <!-- Mobile Navigation -->
        <nav class="mobile-nav" :style="mobileNavStyle">
          <NuxtLink v-for="(item, index) in mobileMenuItems"
                    :key="index"
                    :to="item.path"
                    class="nav-item">
            <UIcon :name="item.icon" size="24" />
            <span>{{ item.label }}</span>
          </NuxtLink>
          
          <button class="nav-item" @click="handleMoreClick">
            <UIcon name="i-heroicons-bars-3" size="24" />
            <span>More</span>
          </button>
        </nav>
      </div>
      
      <!-- Rainbow Bar -->
      <div class="rainbow-bar"></div>
    </header>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

interface MenuItem {
  path: string
  label: string
  icon?: string
}

const logoEl = ref<HTMLImageElement | null>(null)
const mobileNavStyle = ref({ width: '0px' })

const menuItems: MenuItem[] = [
  { path: '/travel-guides', label: 'Gay Travel Guides' },
  { path: '/culture', label: 'HomoCulture' },
  { path: '/tour', label: 'HomoCulture Tour' },
  { path: '/lifestyle', label: 'Lifestyle' },
  { path: '/love-sex', label: 'Love and Sex' },
  { path: '/events', label: 'Pride and Events' },
  { path: '/advice', label: 'Travel Advice' }
]

const mobileMenuItems: MenuItem[] = [
  { path: '/', label: 'Home', icon: 'i-heroicons-home' },
  { path: '/search', label: 'Search', icon: 'i-heroicons-magnifying-glass' },
  { path: '/tour', label: 'Tour', icon: 'i-heroicons-map' },
  { path: '/galleries', label: 'Galleries', icon: 'i-heroicons-photo' }
]

const updateMobileNavWidth = () => {
  if (logoEl.value) {
    const logoWidth = logoEl.value.offsetWidth
    mobileNavStyle.value = {
      width: `${logoWidth}px`,
      margin: '0 auto'
    }
  }
}

const handleMoreClick = () => {
  // Implement more menu functionality
  console.log('More menu clicked')
}

onMounted(() => {
  updateMobileNavWidth()
  window.addEventListener('resize', updateMobileNavWidth)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateMobileNavWidth)
})
</script>

<style scoped>
.full-width-header {
  background: black;
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  margin: 0;
  padding: 0;
}

header {
  width: 100%;
  margin: 0;
  padding: 0;
  background: black;
}

.header-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  background: black;
}

.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  width: 100%;
  position: relative;
  background: black;
  margin: 0;
}

.logo-link {
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  position: relative;
}

.responsive-logo {
  height: 60px;
  width: auto;
  max-width: 100%;
  object-fit: contain;
  display: block;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}

.desktop-menu {
  display: flex;
  justify-content: center;
  padding: 10px 0 50px;
  position: relative;
}

.menu-items-wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0;
  position: relative;
}

.menu-item-container {
  position: relative;
  width: 120px;
  text-align: center;
}

.menu-item {
  color: white;
  font-weight: 400;
  text-decoration: none;
  font-size: 12px;
  padding: 5px 0;
  margin-bottom: 5px;
  display: block;
  text-align: center;
}

.underline {
  position: absolute;
  bottom: 0;
  left: -4px;
  width: calc(100% + 8px);
  height: 2px;
  background-color: #bd4c9b;
  transition: height 0.3s;
}

.menu-item-container:nth-child(2) .underline {
  background-color: #ef59a1;
}

.menu-item-container:nth-child(3) .underline {
  background-color: #d12053;
}

.menu-item-container:nth-child(4) .underline {
  background-color: #f15e4c;
}

.menu-item-container:nth-child(5) .underline {
  background-color: #f7954a;
}

.menu-item-container:nth-child(6) .underline {
  background-color: #e6ba06;
}

.menu-item-container:nth-child(7) .underline {
  background-color: #a7cd39;
}

.menu-item:hover + .underline {
  height: 5px;
}

.mobile-nav {
  display: none;
  justify-content: space-between;
  align-items: center;
  margin: 15px auto;
  padding: 0;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  text-decoration: none;
  font-size: 12px;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.nav-item .more-icon {
  position: relative;
  display: flex;
  align-items: center;
}

.nav-item:active,
.nav-item.router-link-active {
  color: #ee4d9c;
}

.nav-item span {
  margin-top: 4px;
}

.rainbow-bar {
  width: 100%;
  height: 12px;
  background-image: url('/images/rainbow-bar.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  bottom: 0;
}

@media (max-width: 1200px) {
  .menu-item {
    font-size: calc(12px * 0.9);
  }
  
  .menu-item-container {
    width: 100px;
  }
}

@media (max-width: 992px) {
  .responsive-logo {
    height: calc(60px * 0.8);
  }
  
  .menu-item {
    font-size: calc(12px * 0.8);
  }
  
  .menu-item-container {
    width: 90px;
  }
}

@media (max-width: 768px) {
  .desktop-menu {
    display: none;
  }
  
  .mobile-nav {
    display: flex;
  }
  
  .responsive-logo {
    height: calc(60px * 0.7);
  }
}
</style>
