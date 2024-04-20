<template>
  <div id="app" class="bg-green-100 h-screen w-screen">
    <left-menu></left-menu>
    <div class="sm:ml-96 m-auto sm:w-3/5 w-10/12 sm:pt-10 pt-7">
      <rooms></rooms>
    </div>
  </div>
</template>

<script>
import LeftMenu from '../components/Menu.vue';
import Rooms from '../components/Rooms.vue';

export default {
  name: 'App',
  components: {
    LeftMenu,
    Rooms,
  }
}
</script>
