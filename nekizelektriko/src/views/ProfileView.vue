<!--
// v0 by Vercel.
// https://v0.dev/t/VnN71aEPP6r
-->

<style>h1, h2, h3, h4, h5, h6 { font-family: 'Inter', sans-serif; --font-sans: 'Inter'; }
</style>
<style>body { font-family: 'Inter', sans-serif; --font-sans: 'Inter'; }
</style>
<template>
    <div class="flex flex-col items-center gap-6 max-w-md mx-auto py-8">
    <span class="relative flex shrink-0 overflow-hidden rounded-full h-24 w-24">
        <span class="flex h-full w-full items-center justify-center rounded-full bg-muted">JP</span>
    </span>
    <div class="text-center space-y-1">
        <h3 class="text-2xl font-bold">{{ name }}</h3>
        <p class="text-sm text-gray-500 dark:text-gray-400">{{ name }}@test.si</p>
    </div>
    <div class="w-full space-y-4">
        <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
        <div class="flex flex-col space-y-1.5 p-6">
            <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Settings</h3>
        </div>
        <div class="p-6 grid gap-4">
            <a class="flex items-center justify-between" href="#">
            <div class="flex items-center gap-4">
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
                class="h-5 w-5"
                >
                <circle cx="7.5" cy="15.5" r="5.5"></circle>
                <path d="m21 2-9.6 9.6"></path>
                <path d="m15.5 7.5 3 3L22 7l-3-3"></path>
                </svg>
                <span>Change Password</span>
            </div>
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
                class="h-5 w-5 text-gray-500 dark:text-gray-400"
            >
                <path d="m9 18 6-6-6-6"></path>
            </svg>
            </a>
            <a class="flex items-center justify-between" href="#">
            <div class="flex items-center gap-4">
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
                class="h-5 w-5"
                >
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
                </svg>
                <span>Notification Preferences</span>
            </div>
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
                class="h-5 w-5 text-gray-500 dark:text-gray-400"
            >
                <path d="m9 18 6-6-6-6"></path>
            </svg>
            </a>
            <a class="flex items-center justify-between" href="#">
            <div class="flex items-center gap-4">
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
                class="h-5 w-5"
                >
                <path d="M3 6h18"></path>
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                </svg>
                <span>Delete Account</span>
            </div>
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
                class="h-5 w-5 text-gray-500 dark:text-gray-400"
            >
                <path d="m9 18 6-6-6-6"></path>
            </svg>
            </a>
        </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: null
        }
    },
    mounted() {
        this.fetchUsers();
    },
    methods: {
        async fetchUsers()  {
            try {
                this.name = this.$route.params.id;
            }
            catch {
                console.error();
            }
        }
        
    }
    
}
    
</script>