<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>

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
