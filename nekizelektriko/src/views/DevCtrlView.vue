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
    <h1 class="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:ml-96 ml-4 m-auto sm:w-3/5 w-10/12 sm:pt-4 pt-2">{{ device }}</h1>
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
            <label class=" cursor-pointer">
                <span v-if="data.length > 0 && data[0].user !== undefined" class="text-sm text-gray-900 dark:text-gray-300">Owned by <span class="font-semibold">{{ this.data[0].user }}</span></span>
                <span v-else class="text-s">Loadings...</span><br>
                <span v-if="data.length > 0 && data[0].room !== undefined" class="text-sm text-gray-900 dark:text-gray-300">Location <span class="font-semibold">{{ this.data[0].room }}</span></span>
                <span v-else class="text-s">Loadings...</span>
            </label>
        </div>
        <div class="group flex flex-col gap-2 rounded-lg bg-white p-5 shadow-sm transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800">
            <label class="flex items-center justify-between cursor-pointer">
                <span class="text-sm text-gray-900 dark:text-gray-300">Needs constant power</span>
                <input type="checkbox" value="" class="sr-only peer" checked>
                <div class="relative flex-shrink-0 w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
        </div>
        <div class="group flex flex-col gap-2 rounded-lg bg-white p-5 shadow-sm transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800">
            <label class="flex items-center justify-between cursor-pointer">
                <span class="text-sm text-gray-900 dark:text-gray-300">Disable when I'm not home</span>
                <input type="checkbox" value="" class="sr-only peer" checked>
                <div class="relative flex-shrink-0 w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
        </div>
        <div class="group flex flex-col gap-2 rounded-lg bg-white p-5 shadow-sm transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800">
            <label class="flex items-center justify-between cursor-pointer">
                <span class="ms-3 text-sm text-gray-900 dark:text-gray-300 ">Disable at night</span>
                <input type="checkbox" value="" class="sr-only peer" checked>
                <div class="relative flex-shrink-0 w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
        </div>
          <div class="group flex flex-col gap-4 rounded-lg bg-white p-5 shadow-sm transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800 container">
            <label class="flex items-center justify-between cursor-pointer">
                <span class="text-sm text-gray-900 dark:text-gray-300 font-medium label-text">Disable from</span>
                <div class="flex items-center">
                    <input type="time" class="text-sm text-gray-900 dark:text-gray-300 border rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 time-input" id="disableFrom">
                </div>
            </label>
            <label class="flex items-center justify-between cursor-pointer">
                <span class="text-sm text-gray-900 dark:text-gray-300 font-medium label-text">Disable to</span>
                <div class="flex items-center">
                    <input type="time" class="text-sm text-gray-900 dark:text-gray-300 border rounded-md px-3 py-2 focus:outline-none focus:ring-blue-500 time-input" id="disableTo">
                </div>
            </label>
        </div>
        
        
      </div>
      
      
  </div>
<<<<<<< Updated upstream
  <center>
    <div style="width: 120px; height: 80px; display: flex; justify-content: center; align-items: center;">
        <div class="text-xs group flex items-center justify-center rounded-lg bg-white p-4 shadow-sm transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800" style="width: 100%; height: 100%;">
            <span class="text-s text-center">
                <strong class="text-3xl block">2.14</strong>
                <span class="block">EUR/month</span>
            </span>
        </div>
    </div>
</center>


  <div class="rooms grid grid-cols-2 p-4 gap-2 ">
    <div class="text-xs group flex flex-col items-center justify-center gap-2 rounded-lg bg-white p-4  shadow-sm transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800">
    <span class="text-s"><strong class="text-3xl">2.8</strong> kW/this week</span> 
=======
  <div class="rooms grid grid-cols-2 p-4 gap-2 sm:ml-96 m-auto sm:w-3/5 w-10/12 sm:pt-4 pt-2">
    <div class="text-xs group flex flex-col items-center justify-center gap-2 rounded-lg bg-white p-4  shadow-sm transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800">
      <span v-if="data.length > 0 && data[0].average_wattage !== undefined" class="text-s">
      <strong class="text-3xl">{{ data[0].average_wattage.toFixed(2) }}</strong> kW/week
      </span>
      <span v-else class="text-s">Loading...</span>
>>>>>>> Stashed changes
    </div>
    <div class="text-xs group flex flex-col items-center justify-center gap-2 rounded-lg bg-white p-4 text-center shadow-sm transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800">
    <span class="text-s"><strong class="text-3xl">0.56</strong> EUR/this week</span>
    </div>
   
    <div class=" text-xs group flex items-center justify-center gap-2 rounded-lg bg-white p-4 text-center shadow-sm transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800">
    <span><strong class="text-3xl">+0.2</strong> kW/last week</span> &nbsp; <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="#ff0000" stroke="#ff0000" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"><path d="M3 20h18L12 4z"/></svg>
    </div>
    <div class=" text-xs group flex items-center justify-center gap-2 rounded-lg bg-white p-4 text-center shadow-sm transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800">
    <span><strong class="text-3xl">+0.04</strong> EUR/last week</span> &nbsp; <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="#ff0000" stroke="#ff0000" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"><path d="M3 20h18L12 4z"/></svg>
    </div>
</div>
  <div class="sm:ml-96 m-auto sm:w-3/5 w-10/12 sm:pt-4 pt-2 mb-10">
    <Graph deviceName="podaljsek" ></Graph>
  </div>
</main>
</template>

<style scoped>
h1, h2, h3, h4, h5, h6 { font-family: 'Inter', sans-serif; --font-sans: 'Inter'; }
body { font-family: 'Inter', sans-serif; --font-sans: 'Inter'; }
.text-xs {
  font-size: 0.6em;
}
.time-input {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 8px;
    font-size: 14px;
    color: #333;
    outline: none;
    transition: border-color 0.3s ease;
}

.time-input:focus {
    border-color: #3490dc;
}
</style>



<script>

  import axios from 'axios';
  import Graph from '../components/Graph.vue';


  export default {
    name: 'Devices',
    data() {
      return {
        data: [],
        device: null
      };
    },
    mounted() {
      this.fetchRooms();
    },
    methods: {
      async fetchRooms() {
        try {
          this.device = this.$route.params.id;

          const response = await axios.get('http://172.20.10.4:3000/get-device-info/'+this.device);
          console.log(response)
          this.data = response.data.data;
          console.log("TLE>",this.data);
        } catch (error) {
          console.error('Error fetching rooms:', error);
        }
      }
    }
  };
  </script>