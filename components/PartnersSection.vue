<!-- components/PartnersSection.vue -->
<template>
  <section class="partners-section">
    <UContainer>
      <div class="px-[15px]">
        <div class="content-wrapper">
          <h2 class="section-title">Our Partners</h2>
          <div class="partners-grid">
            <UImage
              v-for="partner in partners"
              :key="partner.id"
              :src="partner.logo"
              class="partner-image"
              :alt="partner.name"
            />
          </div>
        </div>
      </div>
    </UContainer>
  </section>
</template>

<script setup>
const partners = [
  {
    id: 1,
    name: 'Partner 1',
    logo: '/path/to/logo1.png'
  },
  // Add more partners as needed
];
</script>

<style scoped>
.partners-section {
  padding: 60px 0;
}

.content-wrapper {
  width: calc(80% + 170px);
  margin-left: 15px;
}

.section-title {
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 32px;
  color: #333;
}

.partners-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 32px;
  align-items: center;
}

.partner-image {
  height: 64px;
  width: 100%;
  object-fit: contain;
}

@media (max-width: 1024px) {
  .content-wrapper {
    width: 100%;
    margin-left: 0;
    padding: 0 15px;
  }
  
  .partners-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
}

@media (max-width: 768px) {
  .partners-section {
    padding: 40px 0;
  }

  .section-title {
    font-size: 24px;
    margin-bottom: 24px;
  }
  
  .partners-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .partner-image {
    height: 48px;
  }
}
</style>
