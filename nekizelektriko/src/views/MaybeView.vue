<template>
  <div id="app" class="bg-green-100 h-screen w-screen">
    <left-menu></left-menu>
  </div>
</template>

<script>
import LeftMenu from '../components/Menu.vue';

export default {
  name: 'App',
  components: {
    LeftMenu
  }
}
</script>
