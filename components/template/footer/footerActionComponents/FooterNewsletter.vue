<template>
  <div class="bg-secondary z-[100] border w-full p-8">
    <div class="text-center">
      <h2 class="text-2xl font-bold text-gray-900">
        NEWSLETTER
      </h2>

      <div class="flex rounded-md shadow-sm">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Votre email"
          class="p-2 flex-1 block w-full rounded-l-full sm:text-sm border bg-gray-100 focus:outline-none focus:ring-primary focus:border-primary"
          required
        >
        <button
          type="submit"
          class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-r-full text-white bg-primary hover:bg-indigo-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Soumettre
        </button>
      </div>
    </div>
  </div>
</template>
  
<script setup>

</script>

