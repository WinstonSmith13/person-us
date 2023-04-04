<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg sm:grid">
    <nuxt-img
      class="sm:w-full object-cover"
      format="webp"
      :src="newSecond.image"
      :alt="newSecond.image"
    />
    <div class="px-2 py-10 sm:text-sm  bg-secondary">
      <div class="font-bold text-xl mb-2">
        {{ newSecond.title }}
      </div>
    </div>
  </div>
</template>
<script setup>

const props = defineProps ( {
  newSecond: {
    type: Object,
    required: true,
  },
})

</script>