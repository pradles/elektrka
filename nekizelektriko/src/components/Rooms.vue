<template>
    <p class="m-4 text-3xl text-gray-700 font-semibold">Rooms</p>
    <div class="flex flex-wrap">
      <div v-for="room in rooms" :key="room.room" class="flex-auto min-w-12 w-14 p-6 text-gray-700 bg-white m-2 rounded-lg hover:bg-slate-100">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 mb-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z" />
        </svg>
        <h2 class="font-semibold">{{ room.room }}</h2>
        <p class="text-gray-600">{{ room.unique_device_count }} Devices</p>
      </div>
    </div>
  </template>
  
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'Rooms',
    data() {
      return {
        rooms: []
      };
    },
    mounted() {
      this.fetchRooms();
    },
    methods: {
      async fetchRooms() {
        try {
          const response = await axios.get('http://172.20.10.4:3000/get-rooms');
          this.rooms = response.data;
        } catch (error) {
          console.error('Error fetching rooms:', error);
        }
      }
    }
  };
  </script>
  