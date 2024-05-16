<script setup>
import { RICK_CARDS } from "@/helpers/constants/rickCards";
import { reactive } from "vue";

const emit = defineEmits(["updateFilter"]);
const { disabledSubmit } = defineProps({
  disabledSubmit: Boolean,
});

const form = reactive({
  name: "",
  status: {
    labels: [
      RICK_CARDS.FILTER.ALL,
      RICK_CARDS.FILTER.ALIVE,
      RICK_CARDS.FILTER.DEAD,
      RICK_CARDS.FILTER.UNKNOWN,
    ],
    value: RICK_CARDS.FILTER.ALL,
  },
});

function submit() {
  const result = {};

  if (form.name.length) result.name = form.name;
  if (form.status.value !== RICK_CARDS.FILTER.ALL)
    result.status = form.status.value;

  emit("updateFilter", result);
}
</script>

<template>
  <form @submit.prevent="submit" class="form">
    <input v-model="form.name" type="text" name="name" placeholder="name" />

    <select v-model="form.status.value">
      <option
        v-for="(value, index) in form.status.labels"
        :key="index"
        :value="value"
      >
        {{ value }}
      </option>
    </select>

    <BaseButton :disabled="disabledSubmit" type="submit">Применить</BaseButton>
  </form>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.status {
  display: flex;

  gap: 0.4rem;
}
</style>
