<template>
    <a
        class="group flex flex-col items-center justify-center gap-2 rounded-lg bg-white p-4 text-center shadow-sm transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800"
        :href="'/users/'+msg">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 mb-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z" />
          </svg>
        <span class="text-sm font-medium text-gray-900 dark:text-gray-50">{{ msg }}</span>
    </a>
    </template>
    
    <script setup>
    defineProps({
      msg: {
        type: String,
        required: true
      },
    })
    </script>