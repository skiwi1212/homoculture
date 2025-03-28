<!-- components/SiteFooter.vue -->
<template>
    <footer class="footer">
      <!-- Rainbow gradient bar -->
      <div class="rainbow-bar"></div>
      
      <div class="footer-wrapper">
        <div class="footer-content">
          <!-- Main four column section -->
          <div class="footer-row">
            <!-- Column 1: HomoCulture -->
            <div class="footer-column">
              <h2>HomoCulture</h2>
              <p>
                Explore global gay travel with HomoCulture: Your guide to pride events, 
                romantic getaways and cultural experiences for the 
                LGBTQ+ community. Join our journey of discovery and 
                celebration today.
              </p>
            </div>
            
            <!-- Column 2: Company -->
            <div class="footer-column">
              <h2>Company</h2>
              <div class="footer-links">
                <p><NuxtLink to="/about-homoculture" class="footer-link"><strong>About HomoCulture</strong></NuxtLink></p>
                <p><NuxtLink to="/advertising-opportunities" class="footer-link"><strong>Advertising Opportunities</strong></NuxtLink></p>
                <p><NuxtLink to="/contact-us" class="footer-link"><strong>Contact Us</strong></NuxtLink></p>
                <p><NuxtLink to="/privacy-policy" class="footer-link"><strong>Privacy Policy</strong></NuxtLink></p>
                <p><NuxtLink to="/homoculture-testimonials" class="footer-link"><strong>Why Partner With Us?</strong></NuxtLink></p>
              </div>
            </div>
            
            <!-- Column 3: Quick Links -->
            <div class="footer-column">
              <h2>Quick Links</h2>
              <div class="footer-links">
                <p><NuxtLink to="/friends-of-homoculture" class="footer-link"><strong>Friends of HomoCulture</strong></NuxtLink></p>
                <p><NuxtLink to="/photography" class="footer-link"><strong>Photography</strong></NuxtLink></p>
                <p><NuxtLink to="/pride-crosswalks" class="footer-link"><strong>Pride Crosswalks</strong></NuxtLink></p>
                <p><NuxtLink to="/cision-lgbt-news" class="footer-link"><strong>Cision LGBT News</strong></NuxtLink></p>
              </div>
            </div>
            
            <!-- Column 4: Join the conversation -->
            <div class="footer-column">
              <h2 :class="{ 'text-center': isMobile }">Join the conversation</h2>
              <ul class="social-media-follow">
                <li v-for="(social, index) in socialMedia" :key="index">
                  <NuxtLink 
                    :to="social.url" 
                    target="_blank" 
                    class="social-icon" 
                    :title="`Follow on ${social.name}`"
                  >
                    <UIcon :name="social.icon" />
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
          
          <!-- Divider -->
          <div class="footer-divider"></div>
          
          <!-- Copyright -->
          <div class="copyright">
            <p><strong>Copyright © {{ new Date().getFullYear() }} HomoCulture All Rights Reserved</strong></p>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue';
  
  // Social media links
  const socialMedia = [
    { name: 'Facebook', icon: 'i-heroicons-users', url: 'https://www.facebook.com/TheHomoCulture/' },
    { name: 'Twitter', icon: 'i-heroicons-paper-airplane', url: 'https://twitter.com/thehomoculture' },
    { name: 'Instagram', icon: 'i-heroicons-camera', url: 'https://www.instagram.com/thehomoculture/' },
    { name: 'Threads', icon: 'i-heroicons-chat-bubble-oval-left-ellipsis', url: 'https://www.threads.net/@thehomoculture' },
  ]
  
  // Mobile detection
  const isMobile = ref(false);
  
  const checkMobile = () => {
    isMobile.value = window.innerWidth <= 767;
  }
  
  onMounted(() => {
    checkMobile();
    window.addEventListener('resize', checkMobile);
  })
  
  onUnmounted(() => {
    window.removeEventListener('resize', checkMobile);
  })
  </script>
  
  <style scoped>
  .footer {
    background: #000;
    color: white;
    padding: 0;
    margin-top: auto;
    width: 100%;
    overflow-x: hidden;
  }
  
  .rainbow-bar {
    height: 4px;
    width: 100%;
    background: linear-gradient(to right,
      #7B3F99, /* Purple */
      #D93F87, /* Pink */
      #EF5350, /* Red */
      #FF7043, /* Orange */
      #FFA726, /* Amber */
      #FFEB3B, /* Yellow */
      #9CCC65, /* Light green */
      #66BB6A, /* Green */
      #26C6DA, /* Cyan */
      #29B6F6  /* Blue */
    );
  }
  
  .footer-wrapper {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 1.5rem 15px;
  }
  
  .footer-content {
    width: 100%;
  }
  
  .footer-row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
  }
  
  .footer-column {
    padding: 10px 0;
  }
  
  .footer-column h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .footer-column p {
    width: 100%;
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: normal;
    hyphens: auto;
    white-space: normal;
  }
  
  .footer-links p {
    margin-bottom: 10px;
  }
  
  .footer-link {
    color: #ee4d9c;
    text-decoration: none;
    transition: opacity 0.2s;
  }
  
  .footer-link:hover {
    opacity: 0.8;
  }
  
  .social-media-follow {
    display: flex;
    justify-content: flex-start;
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .social-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ee4d9c;
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 0; /* Removed rounded corners */
    margin-right: 15px;
    transition: transform 0.2s;
  }
  
  .social-icon:hover {
    transform: scale(1.1);
  }
  
  .footer-divider {
    width: 100%;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.2);
    margin: 30px 0;
  }
  
  .copyright {
    text-align: center;
    padding: 10px 0;
  }
  
  @media (max-width: 1024px) {
    .footer-row {
      gap: 20px;
    }
  }
  
  @media (max-width: 767px) {
    .footer-row {
      grid-template-columns: 1fr;
    }
    
    .footer-column {
      padding: 10px 15px;
    }
    
    .footer-column p {
      font-size: 14px;
      line-height: 1.4;
      margin-bottom: 15px;
    }
    
    .footer-links {
      word-break: normal;
    }
    
    .social-media-follow {
      justify-content: center;
    }
    
    .footer-column h2 {
      margin-top: 20px;
    }
    
    .text-center {
      text-align: center;
    }
  }
  
  @media (max-width: 480px) {
    .footer-wrapper {
      padding: 1.5rem 10px;
    }
    
    .footer-column h2 {
      font-size: 20px;
    }
  }
  </style>
  