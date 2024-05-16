<template>
  <a target="_blank" class="link"><slot></slot></a>
</template>

<style scoped>
.link {
  color: var(--white);
  text-decoration: none;
}

.link:hover {
  color: var(--orange);
}
</style>
