<template>
  <div id="app" class="bg-green-100 h-screen w-screen">
    <left-menu></left-menu>
    <div class="sm:ml-96 m-auto sm:w-3/5 w-10/12 sm:pt-10 pt-7">
      <rooms></rooms>
      <br>
      <graph></graph>
    </div>
  </div>
</template>

<script>
import LeftMenu from '../components/Menu.vue';
import Rooms from '../components/Rooms.vue';
import Graph from '../components/Graph.vue';


export default {
  name: 'App',
  components: {
    LeftMenu,
    Rooms,
    Graph,
  },
mounted() {
    this.enableFullscreen();
  },
  methods: {
    enableFullscreen() {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.webkitRequestFullscreen) { /* Safari */
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) { /* IE11 */
        document.documentElement.msRequestFullscreen();
      }
    }
  }
}
</script>
