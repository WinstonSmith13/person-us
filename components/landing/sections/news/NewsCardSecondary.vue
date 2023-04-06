<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <nuxt-img
      class="w-full object-cover h-56 sm:h-auto sm:object-fill"
      format="webp"
      :src="newSecond.image"
      :alt="newSecond.image"
    />
    <div class="px-2 py-4 bg-secondary">
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
