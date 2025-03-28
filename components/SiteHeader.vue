<!-- components/SiteHeader.vue -->
<template>
  <div class="full-width-header">
    <header>
      <div class="header-wrapper">
        <div class="header-container-wrapper">
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
                  <span 
                    @mouseenter="showSubmenu(item.id)" 
                    class="menu-item"
                  >
                    {{ item.label }}
                  </span>
                  <div class="underline"></div>
                  
                  <!-- Dropdown submenu -->
                  <div 
                    v-show="activeSubmenu === item.id" 
                    class="submenu-dropdown"
                    @mouseleave="hideSubmenu"
                  >
                    <div class="submenu-content">
                      <NuxtLink 
                        v-for="link in menuContent[item.id].links" 
                        :key="link.path"
                        :to="link.path"
                        class="submenu-link"
                      >
                        {{ link.label }}
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
            </nav>

            <!-- Mobile Navigation -->
            <nav class="mobile-nav" :style="mobileNavStyle">
              <!-- Home Button -->
              <NuxtLink to="/" class="nav-item">
                <UIcon name="i-heroicons-home" size="24" />
                <span>Home</span>
              </NuxtLink>
              
              <!-- Search Button -->
              <div @click="toggleSearchModal()" class="nav-item">
                <UIcon name="i-heroicons-magnifying-glass" size="24" />
                <span>Search</span>
              </div>
              
              <!-- Menu Button -->
              <div @click="toggleMobileMenu()" class="nav-item">
                <UIcon name="i-heroicons-bars-3" size="24" />
                <span>Menu</span>
              </div>
              
              <!-- Tour Button -->
              <NuxtLink to="/homoculture-tour" class="nav-item">
                <UIcon name="i-heroicons-map" size="24" />
                <span>Tour</span>
              </NuxtLink>
              
              <!-- Photos Button -->
              <div @click="toggleGalleryModal()" class="nav-item">
                <UIcon name="i-heroicons-photo" size="24" />
                <span>Galleries</span>
              </div>
            </nav>
          </div>
        </div>
      </div>
      
      <!-- Rainbow Bar -->
      <div class="rainbow-bar"></div>
    </header>
    
    <!-- Search Modal -->
    <div v-if="showSearchModal" class="mobile-modal">
      <div class="mobile-modal-overlay" @click="toggleSearchModal()"></div>
      <div class="mobile-modal-content search-modal-content">
        <div class="mobile-modal-header">
          <h3>Search</h3>
          <div @click="toggleSearchModal()" class="close-button">
            <UIcon name="i-heroicons-x-mark" size="24" />
          </div>
        </div>
        
        <div class="search-form">
          <input 
            v-model="searchQuery" 
            type="text" 
            placeholder="Search HomoCulture..." 
            class="search-input"
            @input="performSearch"
          />
        </div>
        
        <div class="search-results" v-if="searchResults.length > 0">
          <div 
            v-for="(result, index) in searchResults" 
            :key="index" 
            class="search-result-item"
            @click="navigateToPost(result.url)"
          >
            <div class="result-image">
              <img :src="result.image" :alt="result.title" />
            </div>
            <div class="result-info">
              <div class="result-category">{{ result.category }}</div>
              <div class="result-title">{{ result.title }}</div>
              <div class="result-meta">{{ result.readTime }} min read</div>
            </div>
          </div>
        </div>
        
        <div v-else-if="searchQuery.length > 0" class="no-results">
          No results found for "{{ searchQuery }}"
        </div>
      </div>
    </div>
    
    <!-- Mobile Menu Modal -->
    <div v-if="showMobileMenu" class="mobile-modal">
      <div class="mobile-modal-overlay" @click="toggleMobileMenu()"></div>
      <div class="mobile-modal-content menu-modal-content">
        <div class="mobile-modal-header">
          <h3>Menu</h3>
          <div @click="toggleMobileMenu()" class="close-button">
            <UIcon name="i-heroicons-x-mark" size="24" />
          </div>
        </div>
        
        <div class="mobile-menu-items">
          <div v-for="(category, categoryId) in menuContent" :key="categoryId" class="mobile-menu-category">
            <div class="mobile-menu-category-title">{{ getCategoryTitle(categoryId) }}</div>
            <NuxtLink 
              v-for="link in category.links" 
              :key="link.path"
              :to="link.path"
              class="mobile-menu-item"
              @click="showMobileMenu = false"
            >
              {{ link.label }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Gallery Modal -->
    <div v-if="showGalleryModal" class="mobile-modal">
      <div class="mobile-modal-overlay" @click="toggleGalleryModal()"></div>
      <div class="mobile-modal-content gallery-modal-content">
        <div class="mobile-modal-header">
          <h3>Galleries</h3>
          <div @click="toggleGalleryModal()" class="close-button">
            <UIcon name="i-heroicons-x-mark" size="24" />
          </div>
        </div>
        
        <div class="gallery-items">
          <div 
            v-for="(gallery, index) in galleryItems" 
            :key="index"
            class="search-result-item"
            @click="navigateToGallery(gallery.url)"
          >
            <div class="result-image">
              <img :src="gallery.image" :alt="gallery.title" />
            </div>
            <div class="result-info">
              <div class="result-category">Gallery</div>
              <div class="result-title">{{ gallery.title }}</div>
              <div class="result-meta">View Gallery</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Import necessary Vue composables
import { ref, onMounted, onBeforeUnmount } from 'vue'

interface MenuItem {
  id: string;
  label: string;
  path: string;
}

interface SearchResult {
  title: string;
  url: string;
  image: string;
  category: string;
  readTime: number;
}

interface GalleryItem {
  title: string;
  url: string;
  image: string;
}

const activeSubmenu = ref('')
const showSearchModal = ref(false)
const showMobileMenu = ref(false)
const showGalleryModal = ref(false)
const searchQuery = ref('')
const searchResults = ref<SearchResult[]>([])

const menuItems: MenuItem[] = [
  { id: 'gayTravelGuides', path: '/travel-guides', label: 'Gay Travel Guides' },
  { id: 'homoCulture', path: '/culture', label: 'HomoCulture' },
  { id: 'homoCultureTour', path: '/tour', label: 'HomoCulture Tour' },
  { id: 'lifestyle', path: '/lifestyle', label: 'Lifestyle' },
  { id: 'loveAndSex', path: '/love-sex', label: 'Love and Sex' },
  { id: 'prideAndEvents', path: '/events', label: 'Pride and Events' },
  { id: 'travelAdvice', path: '/advice', label: 'Travel Advice' }
]

const menuContent = {
  gayTravelGuides: {
    links: [
      { path: '/gay-travel-guides/canada', label: 'Canada' },
      { path: '/gay-travel-guides/europe', label: 'Europe' },
      { path: '/gay-travel-guides/mexico', label: 'Mexico' },
      { path: '/gay-travel-guides/uk', label: 'United Kingdom' },
      { path: '/gay-travel-guides/usa', label: 'United States' }
    ]
  },
  homoCulture: {
    links: [
      { path: '/category/coming-out', label: 'Coming Out' },
      { path: '/category/days-of-awareness', label: 'Days of Awareness' },
      { path: '/category/drag-culture', label: 'Drag Culture' },
      { path: '/category/gay_culture', label: 'Gay Culture' },
      { path: '/category/lgbtq-allies', label: 'LGBTQ+ Allies' },
      { path: '/category/queer-history', label: 'Queer History' },
      { path: '/category/lgbtq-rights-equality', label: 'Rights and Equality' },
      { path: '/category/sexual-orientation-and-identity', label: 'Sexual Orientation and Identity' }
    ]
  },
  homoCultureTour: {
    links: [
      { path: '/homoculture-tour', label: 'HomoCulture Tour' }
    ]
  },
  lifestyle: {
    links: [
      { path: '/category/literature-art-media-culture', label: 'Arts, Literature, and Music' },
      { path: '/category/fashion-and-style', label: 'Fashion and Style' },
      { path: '/category/health-fitness', label: 'Health and Fitness' },
      { path: '/category/life-skills-planning-future', label: 'Life Skills and Planning' },
      { path: '/category/parenting-and-family', label: 'Parenting and Family' },
      { path: '/category/gay-personal-healthcare-hygiene', label: 'Personal Grooming' },
      { path: '/category/technology-gadgets', label: 'Technology and Gadgets' }
    ]
  },
  loveAndSex: {
    links: [
      { path: '/category/casual-encounters', label: 'Casual Encounters' },
      { path: '/category/kink', label: 'Kink' },
      { path: '/category/lgbtq-relationships-dating', label: 'Relationships and Dating' },
      { path: '/category/sex-toys-and-accessories', label: 'Sex Toys and Accessories' },
      { path: '/category/lgbtq-sexual-education', label: 'Sexual Education' },
      { path: '/category/lgbtq-sexual-health', label: 'Sexual Health' }
    ]
  },
  prideAndEvents: {
    links: [
      { path: '/category/celebrate-pride', label: 'Celebrate Pride' },
      { path: '/category/gay-events-nightlife', label: 'Gay Events and Nightlife' },
      { path: '/category/pride-events', label: 'Pride Events' }
    ]
  },
  travelAdvice: {
    links: [
      { path: '/category/flights-accommodation', label: 'Flights & Accommodation' },
      { path: '/category/meeting-people-solo-travel', label: 'Solo Travel' },
      { path: '/category/travel-tips', label: 'Travel Tips' },
      { path: '/category/budget-planning', label: 'Travel Planning' }
    ]
  }
}

const showSubmenu = (id: string) => {
  activeSubmenu.value = id
}

const hideSubmenu = () => {
  activeSubmenu.value = ''
}

const logoEl = ref<HTMLImageElement | null>(null)
const mobileNavStyle = ref({ width: '0px' })

const updateMobileNavWidth = () => {
  if (logoEl.value) {
    const logoWidth = logoEl.value.offsetWidth
    mobileNavStyle.value = {
      width: `${logoWidth}px`,
      margin: '0 auto'
    }
  }
}

onMounted(() => {
  updateMobileNavWidth()
  window.addEventListener('resize', updateMobileNavWidth)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateMobileNavWidth)
})

// Sample gallery items as per your requirements
const galleryItems: GalleryItem[] = [
  {
    title: 'Pride Crosswalks',
    url: '/pride-crosswalks',
    image: '/images/galleries/pride-crosswalks.jpg'
  },
  {
    title: 'Friends of HomoCulture',
    url: '/friends-of-homoculture',
    image: '/images/galleries/friends.jpg'
  },
  {
    title: 'Photography Collection',
    url: '/photography',
    image: '/images/galleries/photography.jpg'
  }
]

// Navigation helpers
const navigateToPost = (url: string) => {
  showSearchModal.value = false
  window.location.href = url
}

const navigateToGallery = (url: string) => {
  showGalleryModal.value = false
  window.location.href = url
}

// Mock search function - in a real app, this would connect to your backend
const performSearch = () => {
  if (searchQuery.value.length < 2) {
    searchResults.value = []
    return
  }
  
  // Mock search results based on the query
  // In a real implementation, this would be an API call or search service
  const mockResults: SearchResult[] = [
    {
      title: 'Guide to LGBTQ+ Friendly Destinations',
      url: '/travel-guides/lgbtq-friendly-destinations',
      image: '/images/articles/travel-guide.jpg',
      category: 'Travel',
      readTime: 5
    },
    {
      title: 'Pride Events Around the World',
      url: '/events/pride-events-global',
      image: '/images/articles/pride-events.jpg',
      category: 'Events',
      readTime: 8
    },
    {
      title: 'Coming Out Stories: Personal Journeys',
      url: '/culture/coming-out-stories',
      image: '/images/articles/coming-out.jpg',
      category: 'Culture',
      readTime: 12
    }
  ]
  
  // Filter results based on the search query
  searchResults.value = mockResults.filter(result => 
    result.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    result.category.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
}

// Toggle functions for modals - with direct implementation
const toggleSearchModal = () => {
  showSearchModal.value = !showSearchModal.value
  
  // Close other modals
  if (showSearchModal.value) {
    showMobileMenu.value = false
    showGalleryModal.value = false
    document.body.style.overflow = 'hidden' // Prevent background scrolling
  } else {
    document.body.style.overflow = '' // Restore scrolling
  }
}

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
  
  // Close other modals
  if (showMobileMenu.value) {
    showSearchModal.value = false
    showGalleryModal.value = false
    document.body.style.overflow = 'hidden' // Prevent background scrolling
  } else {
    document.body.style.overflow = '' // Restore scrolling
  }
}

const toggleGalleryModal = () => {
  showGalleryModal.value = !showGalleryModal.value
  
  // Close other modals
  if (showGalleryModal.value) {
    showSearchModal.value = false
    showMobileMenu.value = false
    document.body.style.overflow = 'hidden' // Prevent background scrolling
  } else {
    document.body.style.overflow = '' // Restore scrolling
  }
}

// Helper function to get category title from ID
const getCategoryTitle = (categoryId: string) => {
  const titleMap: {[key: string]: string} = {
    gayTravelGuides: 'Gay Travel Guides',
    homoCulture: 'HomoCulture',
    homoCultureTour: 'HomoCulture Tour',
    lifestyle: 'Lifestyle',
    loveAndSex: 'Love and Sex',
    prideAndEvents: 'Pride and Events',
    travelAdvice: 'Travel Advice'
  }
  return titleMap[categoryId] || categoryId
}
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
  z-index: 100;
  overflow-x: hidden;
}

header {
  width: 100%;
  margin: 0;
  padding: 0;
  background: black;
  position: relative;
}

.header-wrapper {
  width: 100%;
  max-width: 100%;
}

.header-container-wrapper {
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 15px;
}

.header-container {
  width: 100%;
  padding: 0;
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
  justify-content: center;
}

.menu-item-container {
  position: relative;
  width: 120px;
  text-align: center;
}

.menu-item {
  color: white;
  font-weight: 400;
  font-size: 12px;
  padding: 5px 0;
  margin-bottom: 5px;
  display: block;
  text-align: center;
  cursor: pointer;
  background: none;
  border: none;
  width: 100%;
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

.submenu-dropdown {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  background-color: black;
  z-index: 1000;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.submenu-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.submenu-link {
  color: #8b9dc3;
  text-decoration: none;
  padding: 4px 8px;
  font-size: 14px;
  text-align: center;
  transition: color 0.2s;
}

.submenu-link:hover {
  color: white;
}

.mobile-nav {
  display: none;
  justify-content: space-between;
  align-items: flex-start;
  margin: 15px auto;
  padding: 0 0 15px 0;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  text-decoration: none;
  font-size: 12px;
  gap: 8px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  -webkit-tap-highlight-color: transparent;
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
  margin: 0;
  padding: 0;
}

/* Mobile Modal Styles */
.mobile-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1;
}

.mobile-modal-content {
  position: relative;
  width: 90%;
  max-width: 500px;
  max-height: 80vh;
  background-color: black;
  border-radius: 8px;
  z-index: 2;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
}

.mobile-modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border-bottom: 1px solid #333;
  padding-bottom: 10px;
}

.mobile-modal-header h3 {
  color: white;
  margin: 0;
  font-size: 20px;
}

.close-button {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Search Modal Specific Styles */
.search-form {
  margin-bottom: 20px;
  width: 100%;
}

.search-input {
  width: 100%;
  padding: 12px;
  border-radius: 6px;
  border: 1px solid #444;
  background-color: #222;
  color: white;
  font-size: 16px;
  box-sizing: border-box;
}

.search-results {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
}

.search-result-item {
  display: flex;
  gap: 15px;
  background-color: #111;
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s;
  width: 100%;
}

.search-result-item:hover {
  transform: translateY(-2px);
}

.result-image {
  width: 30%;
  height: 100px;
  overflow: hidden;
}

.result-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.result-info {
  flex: 1;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.result-category {
  color: #ff6b98;
  font-size: 12px;
  margin-bottom: 5px;
}

.result-title {
  color: white;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 5px;
}

.result-meta {
  color: #aaa;
  font-size: 12px;
}

.no-results {
  text-align: center;
  color: #aaa;
  padding: 20px 0;
}

/* Menu Modal Specific Styles */
.mobile-menu-items {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}

.mobile-menu-category {
  margin-bottom: 10px;
  width: 100%;
}

.mobile-menu-category-title {
  color: #ff6b98;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 10px;
  padding-bottom: 5px;
  border-bottom: 1px solid #333;
}

.mobile-menu-item {
  color: white;
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 6px;
  background-color: #222;
  margin-bottom: 5px;
  display: block;
  transition: background-color 0.2s;
  width: 100%;
  box-sizing: border-box;
}

.mobile-menu-item:hover {
  background-color: #333;
}

/* Gallery Modal Specific Styles */
.gallery-items {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
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
    padding-bottom: 20px;
  }
  
  .responsive-logo {
    height: calc(60px * 0.7);
  }

  .nav-item span {
    display: block;
    margin-top: 6px;
    white-space: nowrap;
  }
}

@media (max-width: 480px) {
  .header-container-wrapper {
    padding: 0 10px;
  }
}
</style>

