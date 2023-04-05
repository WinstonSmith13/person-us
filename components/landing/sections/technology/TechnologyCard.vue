<template>
  <div class="w-[60wm] h-[15vh] sm:flex shadow-lg bg-secondary rounded">
    <nuxt-img
      :src="technology.image"
      :alt="technology.image"
      class="object-cover w-[6vw] h-full rounded"
    />
    
    <div class="p-4  flex flex-col justify-center">
      <h2 class="text-md font-bold text-primary">
        {{ technology.material }}
      </h2>
      <p class="text-md font-bold text-primary">
        {{ technology.description }}
      </p>
      <span class="text-sm font-bold text-black max-w-sm">
        {{ technology.university }}
      </span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  technology: {
    type: Object,
    required: true,
  }
})
</script>
