<!-- components/SearchBar.vue -->
<template>
    <div class="search-container">
      <div class="search-inner">
        <form @submit.prevent="handleSearch" class="search-form">
          <div class="search-input-wrapper">
            <input 
              type="text" 
              v-model="searchQuery" 
              placeholder="Search..." 
              class="search-input"
              aria-label="Search the site"
            />
            <button type="submit" class="search-button" aria-label="Submit search">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SearchBar',
    data() {
      return {
        searchQuery: ''
      }
    },
    methods: {
      handleSearch() {
        if (this.searchQuery.trim()) {
          console.log('Searching for:', this.searchQuery);
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .search-container {
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 10px;
  }
  
  .search-inner {
    width: 100%;
  }
  
  .search-form {
    width: 100%;
  }
  
  .search-input-wrapper {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
  }
  
  .search-input {
    width: 100%;
    padding: 10px;
    padding-right: 40px; /* Make room for the button */
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
    outline: none;
  }
  
  .search-button {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 36px;
    height: 36px;
    background-color: #e6599c;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  
  .search-button svg {
    color: white;
  }
  
  .search-button:hover {
    background-color: #d63384;
  }
  </style>
  