<!-- components/SiteHeader.vue -->
<template>
  <div class="full-width-black">
    <header style="width: 100%; padding: 20px 0; position: relative;">
      <div class="header-container">
        <!-- Centered Logo Container -->
        <div class="logo-container" ref="logoContainer">
          <a href="/" class="logo-link">
            <img 
              src="/images/homoculture-logo.png" 
              alt="HomoCulture" 
              class="responsive-logo"
              ref="logo"
              @load="updateMobileNavWidth"
            />
          </a>
        </div>

        <!-- Desktop Navigation Menu -->
        <div class="desktop-menu" style="display: flex; justify-content: center; padding: 10px 0; position: relative;">
          <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 0; position: relative;">
            <div style="position: relative; width: 120px; text-align: center;">
              <a href="/travel-guides" class="menu-item" style="color: white; font-weight: 400; text-decoration: none; font-size: 12px; padding: 5px 0; margin-bottom: 5px; display: block; text-align: center;">
                Gay Travel Guides
              </a>
              <div class="underline" style="position: absolute; bottom: 0; left: -4px; width: calc(100% + 8px); height: 2px; background-color: #bd4c9b; transition: height 0.3s;"></div>
            </div>
            
            <div style="position: relative; width: 120px; text-align: center;">
              <a href="/culture" class="menu-item" style="color: white; font-weight: 400; text-decoration: none; font-size: 12px; padding: 5px 0; margin-bottom: 5px; display: block; text-align: center;">
                HomoCulture
              </a>
              <div class="underline" style="position: absolute; bottom: 0; left: -4px; width: calc(100% + 8px); height: 2px; background-color: #ef59a1; transition: height 0.3s;"></div>
            </div>
            
            <div style="position: relative; width: 120px; text-align: center;">
              <a href="/tour" class="menu-item" style="color: white; font-weight: 400; text-decoration: none; font-size: 12px; padding: 5px 0; margin-bottom: 5px; display: block; text-align: center;">
                HomoCulture Tour
              </a>
              <div class="underline" style="position: absolute; bottom: 0; left: -4px; width: calc(100% + 8px); height: 2px; background-color: #d12053; transition: height 0.3s;"></div>
            </div>
            
            <div style="position: relative; width: 120px; text-align: center;">
              <a href="/lifestyle" class="menu-item" style="color: white; font-weight: 400; text-decoration: none; font-size: 12px; padding: 5px 0; margin-bottom: 5px; display: block; text-align: center;">
                Lifestyle
              </a>
              <div class="underline" style="position: absolute; bottom: 0; left: -4px; width: calc(100% + 8px); height: 2px; background-color: #f15e4c; transition: height 0.3s;"></div>
            </div>
            
            <div style="position: relative; width: 120px; text-align: center;">
              <a href="/love-sex" class="menu-item" style="color: white; font-weight: 400; text-decoration: none; font-size: 12px; padding: 5px 0; margin-bottom: 5px; display: block; text-align: center;">
                Love and Sex
              </a>
              <div class="underline" style="position: absolute; bottom: 0; left: -4px; width: calc(100% + 8px); height: 2px; background-color: #f7954a; transition: height 0.3s;"></div>
            </div>
            
            <div style="position: relative; width: 120px; text-align: center;">
              <a href="/events" class="menu-item" style="color: white; font-weight: 400; text-decoration: none; font-size: 12px; padding: 5px 0; margin-bottom: 5px; display: block; text-align: center;">
                Pride and Events
              </a>
              <div class="underline" style="position: absolute; bottom: 0; left: -4px; width: calc(100% + 8px); height: 2px; background-color: #e6ba06; transition: height 0.3s;"></div>
            </div>
            
            <div style="position: relative; width: 120px; text-align: center;">
              <a href="/advice" class="menu-item" style="color: white; font-weight: 400; text-decoration: none; font-size: 12px; padding: 5px 0; margin-bottom: 5px; display: block; text-align: center;">
                Travel Advice
              </a>
              <div class="underline" style="position: absolute; bottom: 0; left: -4px; width: calc(100% + 8px); height: 2px; background-color: #a7cd39; transition: height 0.3s;"></div>
            </div>
          </div>
        </div>

        <!-- Mobile Navigation -->
        <nav class="mobile-nav" :style="mobileNavStyle">
          <NuxtLink to="/" class="nav-item">
            <UIcon name="i-heroicons-home" size="24" />
            <span>Home</span>
          </NuxtLink>
          
          <NuxtLink to="/search" class="nav-item">
            <UIcon name="i-heroicons-magnifying-glass" size="24" />
            <span>Search</span>
          </NuxtLink>
          
          <button class="nav-item">
            <div class="more-icon">
              <UIcon name="i-heroicons-bars-3" size="24" />
            </div>
            <span>More</span>
          </button>
          
          <NuxtLink to="/tour" class="nav-item">
            <UIcon name="i-heroicons-map" size="24" />
            <span>Tour</span>
          </NuxtLink>
          
          <NuxtLink to="/galleries" class="nav-item">
            <UIcon name="i-heroicons-photo" size="24" />
            <span>Galleries</span>
          </NuxtLink>
        </nav>
      </div>
      
      <!-- Rainbow Bar -->
      <div class="rainbow-bar"></div>
    </header>
  </div>
</template>


<script>
export default {
  name: 'SiteHeader',
  data() {
    return {
      mobileNavStyle: {
        width: '0px'
      }
    }
  },
  mounted() {
    this.updateMobileNavWidth()
    window.addEventListener('resize', this.updateMobileNavWidth)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateMobileNavWidth)
  },
  methods: {
    updateMobileNavWidth() {
      if (this.$refs.logo) {
        const logoWidth = this.$refs.logo.offsetWidth
        this.mobileNavStyle = {
          width: `${logoWidth}px`,
          margin: '0 auto'
        }
      }
    }
  }
}
</script>

<style scoped>
.full-width-black {
  background-color: black;
  width: 100%;
  position: relative;
}

.header-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  width: 100%;
  position: relative;
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

.nav-item .arrow {
  position: absolute;
  right: -12px;
  top: 50%;
  transform: translateY(-50%);
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

.menu-item:hover + .underline {
  height: 5px !important;
}

@media (max-width: 1200px) {
  .header-container {
    padding: 0 20px;
  }
  
  .responsive-logo {
    height: calc(60px * 0.9);
  }
  
  .menu-item {
    font-size: calc(12px * 0.9) !important;
  }
  
  div[style*="width: 120px"] {
    width: 100px !important;
  }
}

@media (max-width: 992px) {
  .responsive-logo {
    height: calc(60px * 0.8);
  }
  
  .menu-item {
    font-size: calc(12px * 0.8) !important;
  }
  
  div[style*="width: 120px"] {
    width: 90px !important;
  }
}

@media (max-width: 768px) {
  .desktop-menu {
    display: none !important;
  }
  
  .mobile-nav {
    display: flex;
  }
  
  .responsive-logo {
    height: calc(60px * 0.7);
  }
}
</style>

