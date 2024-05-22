<script setup>
const { disabledPrev, disabledNext, currentPage } = defineProps({
  disabledPrev: Boolean,
  disabledNext: Boolean,
  currentPage: Number,
});

const emit = defineEmits(["prev", "next"]);
</script>

<template>
  <div class="pagination">
    <BaseButton @click="emit('prev')" :disabled="disabledPrev">-</BaseButton>

    <span>{{ currentPage }}</span>

    <BaseButton @click="emit('next')" :disabled="disabledNext">+</BaseButton>
  </div>
</template>

<style scoped>
.pagination {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--white);
}
</style>
