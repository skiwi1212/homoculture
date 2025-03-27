<!-- components/PartnersSection.vue -->
<template>
    <section class="py-12">
      <UContainer>
        <h2 class="text-2xl font-bold mb-8">Our Partners</h2>
        <UGrid :cols="[2, 3, 5]" gap="8" class="items-center">
          <UImage
            v-for="partner in partners"
            :key="partner.id"
            :src="partner.logo"
            class="h-16 object-contain"
            :alt="partner.name"
          />
        </UGrid>
      </UContainer>
    </section>
  </template>
  