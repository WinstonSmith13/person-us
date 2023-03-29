<template>
  <div class="relative">
    <div class="mb-3 xl:w-96">
      <div class="mb-4 flex w-full items-stretch">
        <button
          class="absolute py-4 right-0 z-10 inline-flex items-center justify-center bg-primary px-3 text-white hover:bg-primary-700 hover:shadow-lg"
          type="button"
          @click="toggleSearch"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="h-5 w-5"
          >
            <path
              fill-rule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <input
          v-if="showSearch"
          type="search"
          class="block w-full min-w-0 flex-auto border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-3 text-base font-normal text-neutral-900 transition duration-300 ease-in-out"
          placeholder="Recherchez"
          aria-label="Search"
          aria-describedby="button-addon1"
        >
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const showSearch = ref(false);

function toggleSearch() {
  showSearch.value = !showSearch.value;
}
</script>