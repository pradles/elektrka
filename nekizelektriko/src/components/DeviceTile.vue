<template>
<a
    class="group flex flex-col items-center justify-center gap-2 rounded-lg bg-white p-5 text-center shadow-sm transition-colors hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-800"
    href="/">
    
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