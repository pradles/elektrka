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
    <h1 class="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:ml-96 ml-4 m-auto sm:w-3/5 w-10/12 sm:pt-4 pt-2">{{room}}</h1>
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
  <div class=" overflow-auto p-4 sm:ml-96 m-auto sm:w-3/5 w-10/12 sm:pt-4 pt-2">
      <div class="rooms grid grid-cols-1 gap-4 pb-4">
          <div class="group flex flex-col gap-2 rounded-lg bg-white p-5 shadow-sm transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800">
            <div class="pb-5">There are <strong>{{ dcount }}</strong> devices in this room. </div>
            <div class="pb-5">Power consumption of this room this week has increased by <strong>100</strong> kW compared to last week. </div>
            <div>Most power consuming device is <strong>TV</strong>, working on average for <strong>6.71</strong> hours per day.</div>
            <div class="pb-5">Consider limiting this device in configuration.</div>
            <div class="pb-5">Your <strong>Personal Computer</strong> is using <strong>53%</strong> more kW/h than normal. Something might be wrong with the device.</div>
  
          </div>
      </div>
      <div class="rooms grid grid-cols-2 gap-2 ">
          <div class="text-xs group flex flex-col items-center justify-center gap-2 rounded-lg bg-white p-4  shadow-sm transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800">
          <span class="text-s"><strong class="text-3xl">123</strong> kW/week</span> 
          </div>
          <div class="text-xs group flex flex-col items-center justify-center gap-2 rounded-lg bg-white p-4 text-center shadow-sm transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800">
          <span class="text-s"><strong class="text-3xl">245</strong> EUR/month</span>
          </div>
         
          <div class=" text-xs group flex items-center justify-center gap-2 rounded-lg bg-white p-4 text-center shadow-sm transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800">
          <span><strong class="text-3xl">+52</strong> kW</span> &nbsp; <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="#ff0000" stroke="#ff0000" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"><path d="M3 20h18L12 4z"/></svg>
          </div>
          <div class=" text-xs group flex items-center justify-center gap-2 rounded-lg bg-white p-4 text-center shadow-sm transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800">
          <span><strong class="text-3xl">+76</strong> EUR</span> &nbsp; <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="#ff0000" stroke="#ff0000" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"><path d="M3 20h18L12 4z"/></svg>
          </div>
      </div>
      
  </div>
  <h2 class="text-xl font-bold tracking-tight text-center pt-10 pb-5 text-gray-900 dark:text-gray-50 sm:ml-96 m-auto sm:w-3/5 w-10/12 sm:pt-4 pt-2">Device Control</h2>
    
    <div class="rooms grid p-4 pt-2 grid-cols-2 gap-4 sm:ml-96 m-auto sm:w-3/5 w-10/12 sm:pt-4 pt-2">
      <div v-for="d in devices" :key="d.device_name" >
          <DeviceTile :msg="d.device_name"></DeviceTile>
      </div>
    </div>
</main>
</template>

<style scoped>
h1, h2, h3, h4, h5, h6 { font-family: 'Inter', sans-serif; --font-sans: 'Inter'; }
body { font-family: 'Inter', sans-serif; --font-sans: 'Inter'; }
.text-xs {
  font-size: 0.6em;
}
</style>

<script>
  import axios from 'axios';
  let room;
  let dcount;
  
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
          room = this.$route.params.id
          // const response = await axios.get('http://172.20.10.4:3000/get-room-info/'+room);
          // this.devices = response.data.devices;
          this.devices = [{device_name: "TV"},{device_name: "Personal Computer"},{device_name: "Phone Charger"}]
          dcount = this.devices.length
          console.log(this.devices[1].device_name);
        } catch (error) {
          console.error('Error fetching rooms:', error);
        }
      }
    }
  };
  </script>