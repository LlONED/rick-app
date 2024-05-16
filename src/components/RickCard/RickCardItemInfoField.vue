<script setup>
const { description, location } = defineProps({
  description: String,
  url: String,
  name: String,
});
</script>

<template>
  <div class="info">
    <span class="description">{{ description }}</span>

    <BaseLink v-if="url" :href="url" class="text">{{ name }}</BaseLink>
    <span v-else class="text">{{ name }}</span>
  </div>
</template>

<style scoped>
.description {
  color: var(--gray-mute);
  font-weight: 500;
}

.text {
  font-size: 1.1rem;
}
</style>
