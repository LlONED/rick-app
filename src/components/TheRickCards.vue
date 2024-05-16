<script setup>
import { reactive, ref } from "vue";

import RickCardForm from "@/components/RickCard/RickCardForm.vue";
import RickCardList from "@/components/RickCard/RickCardList.vue";
import { requestCharacter, requestRawCharacter } from "@/api";

const loading = ref(true);
const errorMessage = ref(null);

const page = reactive({
  current: 1,
  next: null,
  prev: null,
});
const cards = reactive([]);

function updateCardsTemplate(requestPromise) {
  errorMessage.value = null;
  loading.value = true;

  cards.length = 0;

  requestPromise
    .then((data) => {
      page.prev = data.info.prev;
      page.next = data.info.next;
      cards.push(...data.results);
    })
    .catch((e) => {
      page.prev = null;
      page.next = null;
      errorMessage.value = e.message;
    })
    .finally(() => {
      loading.value = false;
    });
}

function updateCards(filterParameters = {}) {
  Object.assign(filterParameters, { page: page.current });

  return updateCardsTemplate(requestCharacter(filterParameters));
}

function updateCardsByMove(url) {
  page.prev = null;
  page.next = null;

  return updateCardsTemplate(requestRawCharacter(url));
}

updateCards();
</script>

<template>
  <RickCardForm @update-filter="updateCards" :disabled-submit="loading" />

  <BasePagination
    @prev="
      page.current--;
      updateCardsByMove(page.prev);
    "
    @next="
      page.current++;
      updateCardsByMove(page.next);
    "
    :disabled-prev="page.prev === null"
    :disabled-next="page.next === null"
    :current-page="page.current"
  />

  <p v-if="loading">Loading</p>
  <p v-else-if="errorMessage !== null">{{ errorMessage }}</p>
  <RickCardList v-else :cards="cards" />
</template>

<style scoped></style>
