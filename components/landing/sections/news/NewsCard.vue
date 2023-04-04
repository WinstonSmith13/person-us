<template>
  <div class=" max-w-full  rounded overflow-hidden shadow-lg  bg-secondary">
    <nuxt-img
      format="webp"
      :src="newsFirst.image"
      :alt="newsFirst.image"
    />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">
        {{ newsFirst.title }}
      </div>
      <div class="flex justify-center pt-4 space-x-4 align-center">
        <p class="text-black leading-7 md:text-lg md:max-w-4xl">
          {{ newsFirst.news }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps ( {
  newsFirst: {
    type: Object,
    required: true,
  },
})

</script>

