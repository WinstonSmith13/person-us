<template>
  <div class="z-[1000] fixed top-0 left-0 w-full h-full bg-blue-600 bg-opacity-80 overflow-hidden ">
    <div class="pt-3 pb-2">
      <div class="flex items-center justify-between px-8">
        <div class="-mr-2">
          <button
            @click="$emit('menuToggle')"
            class="py-2 inline-flex items-center justify-center text-white hover:text-background"
            type="button"
          >
            <span class="sr-only"> Close</span>
            <svg
              class="h-10 w-10"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      <ul class="mt-3 px-6 space-y-1 text-left">
        <li
          @click="$emit('menuToggle')"
          class="text-white items-center  font-bold"
          to="/"
        >
          <h1>
            <span
              class="block text-white hover:text-background cursor-pointer px-3 py-2 font-bold text-2xl hover:text-yellow-400"
            >Home</span>
          </h1>
        </li>
        <li
          @click="$emit('menuToggle')"
          class="text-white font-bold"
          to="/about"
        >
          <h1>
            <span
              class="block text-white hover:text-background cursor-pointer px-3 py-2 font-bold text-2xl hover:text-yellow-400"
            >About</span>
          </h1>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>

defineEmits(['menuToggle'])

</script>