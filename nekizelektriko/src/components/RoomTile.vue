<template>
<a
    class="group flex flex-col items-center justify-center gap-2 rounded-lg bg-white p-4 text-center shadow-sm transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800"
    href="#">
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
        class="h-8 w-8 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50">
        <rect width="18" height="18" x="3" y="3" rx="2"></rect>
    </svg>
    <span class="text-sm font-medium text-gray-900 dark:text-gray-50">{{ msg }}</span>
</a>
</template>

<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>