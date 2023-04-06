<template>
  <div class="max-w-full rounded overflow-hidden shadow-lg bg-secondary">
    <nuxt-img
      format="webp"
      :src="newsFirst.image"
      :alt="newsFirst.image"
      class="w-full h-auto"
    />
    <div class="px-4 pt-4 pb-2 md:px-6 md:py-4">
      <div class="font-bold text-xl mb-2 text-center md:text-left">
        {{ newsFirst.title }}
      </div>
      <div class="text-center md:text-left">
        <p class="text-black leading-7 md:text-lg md:max-w-4xl">
          {{ newsFirst.news }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  newsFirst: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
@media (min-width: 768px) {
  .bg-secondary {
    background-color: white;
  }
}
</style>
