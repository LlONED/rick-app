<script setup>
import RickCardItemInfoField from "@/components/RickCard/RickCardItemInfoField.vue";

const { card } = defineProps({
  card: Object,
});
</script>

<template>
  <article class="card">
    <div class="image-wrapper">
      <img
        @load="$event.target.classList.remove('loading')"
        :src="card.image"
        :alt="card.name"
        class="image loading"
      />
    </div>

    <section class="info-wrapper">
      <div class="info">
        <BaseLink :href="card.url" target="_blank">
          <h2>{{ card.name }}</h2>
        </BaseLink>

        <p class="status-wrapper">
          <span :class="['status', card.status.toLowerCase()]">{{
            card.status
          }}</span>
          -
          {{ card.species }}
        </p>
      </div>

      <RickCardItemInfoField
        :url="card.location.url"
        :name="card.location.name"
        description="Last known location:"
      />

      <RickCardItemInfoField
        :url="card.origin.url"
        :name="card.origin.name"
        description="First seen in:"
      />
    </section>
  </article>
</template>

<style scoped>
h2 {
  font-size: 1.5rem;
  font-weight: 800;
}

.card {
  width: 580px;
  height: 220px;
  display: flex;
  overflow: hidden;
  background: var(--gray);
  border-radius: 0.4rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}

@media (max-width: 40.625em) {
  .card {
    flex-direction: column;
    height: initial;
    width: 100%;
  }
}

.image-wrapper {
  flex: 2 1 0%;
  width: 100%;
}

.image {
  width: 100%;
  height: 100%;
  opacity: 1;
  transition: opacity 0.5s ease 0s;
  object-position: center center;
  object-fit: cover;
}

.image.loading {
  opacity: 0;
  transition: opacity 0.5s ease 0s;
}

.info-wrapper {
  flex: 3 1 0%;
  position: relative;
  padding: 0.8rem;
  color: var(--white);
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.info {
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.status-wrapper {
  font-size: 1rem;
  font-weight: 500;
}

.status::before {
  content: "";
  display: inline-block;
  height: 0.5rem;
  width: 0.5rem;
  margin-right: 0.375rem;
  margin-bottom: 0.14rem;
  border-radius: 50%;
}

.status.alive::before {
  background-color: var(--green);
}

.status.dead::before {
  background-color: var(--red);
}

.status.unknown::before {
  background-color: var(--gray-mute);
}
</style>
