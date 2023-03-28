<template>
  <div class="z-[0] fixed top-0 left-0 w-full h-full bg-white bg-opacity-90 overflow-hidden ">
    <div class="pt-3 pb-2">
      <ul class="grid justify-center mr-[600px] mt-3 text-left">
        <li
          @click="$emit('menuToggle')"
          class="text-white items-center  font-bold"
          to="/"
        >
          <h1>
            <span
              class="block text-black hover:text-background cursor-pointer px-3 py-2 font-bold text-2xl hover:text-primary"
            >Home</span>
          </h1>
        </li>
        <li
          @click="$emit('menuToggle')"
          class="text-black font-bold"
          to="/about"
        >
          <h1>
            <span
              class="block text-black hover:text-background cursor-pointer px-3 py-2 font-bold text-2xl hover:text-primary"
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