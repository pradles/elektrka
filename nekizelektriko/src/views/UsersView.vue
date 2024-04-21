<script setup>
import UsersTile from "../components/UsersTile.vue"
import { createApp, createElementBlock } from 'vue'
import Menu from '../components/Menu.vue'
</script>


<template>
    <main class="flex min-h-screen flex-col bg-gray-100 dark:bg-gray-900 no-scrollbar">
  <header class="sticky top-0 flex items-center justify-between bg-white px-4 py-3 shadow dark:bg-gray-950">
    <Menu></Menu>
    <h1 class="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:ml-96 m-auto sm:w-3/5 w-10/12 sm:pt-4 pt-2">Users</h1>
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
    <div class="flex-1 overflow-auto p-4 sm:ml-96 m-auto sm:w-3/5 w-10/12">
        <div class="user grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            <div v-for="user in users" >
                <UsersTile :msg="user"></UsersTile>
                <!-- <div class="fixed bottom-4 left-1/2 -translate-x-1/2">
                
                </div> -->
               
            </div>
            <div class="group flex flex-col items-center justify-center gap-2 rounded-lg bg-white p-4 text-center shadow-sm transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800">
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
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                </svg>
            </div>
        </div>
    </div>
  </main>
</template>

<script>
  import axios from 'axios';
  
  export default {
    name: 'Users',
    data() {
      return {
        users: []
      };
    },
    mounted() {
      this.fetchRooms();
    },
    methods: {
      async fetchRooms() {
        try {
          const response = await axios.get('http://172.20.10.4:3000/get-users');
          console.log(response.data);
          this.users = response.data;
        } catch (error) {
          console.error('Error fetching rooms:', error);
        }
      }
    }
  };
  </script>