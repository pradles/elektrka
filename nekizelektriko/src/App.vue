<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <h1>Neki z elektriko</h1>
  <RouterView />
</template>

<style scoped>

h1 {
  text-align: center;
  color: cornflowerblue;
}

@media (min-width: 1024px) {
  /* css za web */
  h1 {
    color: red;
  }
}
</style>
