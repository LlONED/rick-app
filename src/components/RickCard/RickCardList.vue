<script setup>
import RickCardItem from "@/components/RickCard/RickCardItem.vue";

const { cards } = defineProps({
  cards: Array,
});
</script>

<template>
  <section class="card-list">
    <RickCardItem v-for="card in cards" :key="card.id" :card="card">
      {{ card }}
    </RickCardItem>
  </section>
</template>

<style scoped>
.card-list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  max-width: 1920px;
}
</style>
