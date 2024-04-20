<script setup>
import RoomTile from "../components/RoomTile.vue"
import { createApp, createElementBlock } from 'vue';
import Menu from '@/components/Menu.vue'
import DeviceTile from '@/components/DeviceTile.vue'

</script>

<template>
<main class="flex min-h-screen flex-col bg-gray-100 dark:bg-gray-900 no-scrollbar">
  <header class="sticky top-0 flex items-center justify-between bg-white px-4 py-3 shadow dark:bg-gray-950">
    
    <Menu></Menu>
    <h1 class="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-50">room</h1>
    <div class="flex items-center">
      <button
        class="p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
        type="button"
        id="radix-:r0:"
        aria-haspopup="menu"
        aria-expanded="false"
        data-state="closed"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-6 w-6"
        >
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
        <span class="sr-only">Open user menu</span>
      </button>
    </div>
  </header>
  <div class="flex-1 overflow-auto p-4">
    <div class="rooms grid grid-cols-1 gap-4 ">
        <div v-for="d in devices" :key="d.device_name" >
            <DeviceTile :msg="d.device_name"></DeviceTile>
        </div>
    </div>
  </div>
</main>
</template>

<style scoped>
h1, h2, h3, h4, h5, h6 { font-family: 'Inter', sans-serif; --font-sans: 'Inter'; }
body { font-family: 'Inter', sans-serif; --font-sans: 'Inter'; }
</style>

<script>
function click() {
  let div = document.body.getElementsByClassName("rooms")[0]
  const sp = document.createElement('span')

  createApp(RoomTile, { msg: "new room" }).mount(sp)
  div.append(sp)
  console.log(div);
}
  import axios from 'axios';
  
  export default {
    name: 'Rooms',
    data() {
      return {
        devices: []
      };
    },
    mounted() {
      this.fetchRooms();
    },
    methods: {
      async fetchRooms() {
        try {
          const response = await axios.get('http://172.20.10.4:3000/get-room-info/'+this.$route.params.id);
          this.devices = response.data.devices;
          console.log(this.devices[1].device_name);
        } catch (error) {
          console.error('Error fetching rooms:', error);
        }
      }
    }
  };
  </script>