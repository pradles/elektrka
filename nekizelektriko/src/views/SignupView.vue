<template>
    <main class="flex min-h-screen items-center justify-center bg-gray-100 px-4 dark:bg-gray-900">
        <div class="w-full max-w-md space-y-4">
          <div class="text-center">
            <h1 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">Create a new account</h1>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Already have an account?
              <a href="/login" class="font-medium text-blue-600 hover:underline dark:text-blue-400" rel="ugc">
                Login
              </a>
            </p>
          </div>
          <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
            <div class="p-6 space-y-4">
              <div>
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="email"
                >
                  Email
                </label>
                <input
                  class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="email"
                  placeholder="name@example.com"
                  type="email"
                />
              </div>
              <div>
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="password"
                >
                  Password
                </label>
                <input
                  class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="password"
                  type="password"
                />
              </div>
              <div>
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="password"
                >
                  Confirm Password
                </label>
                <input
                  class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="password"
                  type="password"
                />
              </div>
            </div>
            <div class="flex items-center p-6">
              <button
                class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                type="submit"
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </main>
    
    

</template>

<style scoped>
    h1, h2, h3, h4, h5, h6 { 
        font-family: 'Inter', sans-serif; --font-sans: 'Inter'; 
    }
    body { font-family: 'Inter', sans-serif; --font-sans: 'Inter'; }
    button {
      background-color: rgb(0, 0, 0);
      color: white;
    }
</style>
