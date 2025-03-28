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
  
  <style scoped>
.search-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: white;
}

.search-inner {
  width: 100%;
  background-color: white;
}

.search-form {
  width: 100%;
  background-color: white;
}

.search-input-wrapper {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: white;
  height: 100%; /* Added to ensure full height */
}

.search-input {
  width: 100%;
  height: 100%; /* Added to ensure full height */
  padding: 10px;
  padding-right: 40px;
  border: 1px solid #e6599c;
  border-radius: 0; /* Removed rounded corners */
  font-size: 16px;
  outline: none;
  background-color: white !important;
  -webkit-appearance: none;
}

.search-button {
  position: absolute;
  right: 0;
  top: 0; /* Changed from 50% */
  height: 100%; /* Changed to full height */
  width: 40px;
  background-color: #e6599c;
  border: none;
  border-radius: 0; /* Removed rounded corners */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transform: none; /* Removed transform */
}

.search-button svg {
  color: white;
}

.search-button:hover {
  background-color: #d63384;
}

/* Remove if not needed since background is handled above */
.search-container-wrapper {
  background-color: white;
}

:deep(.search-wrapper) {
  background-color: white;
}
</style>
