<template>
  <div class="mt-6 w-[60vw] rounded overflow-hidden shadow-lg bg-secondary">
    <div class="p-4  flex flex-col justify-center">
      <div class=" font-bold text-sm text-primary mb-2">
        {{ publication.abstract }}
      </div>
      <div class="font-light text-sm italic text-black">
        {{ publication.journal }} 
      </div>
      <div class="font-semibold text-sm italic text-black mb-2">
        {{ publication.date }}
      </div>
      <div class="flex  -space-x-2">
        <nuxt-img
          class="w-8 h-8 rounded-full border-2  border-white"
          src="images/albert.jpeg"
          alt="images/albert"
          fit="cover"
          format="webp"
          width="800"
          height="800"
        />
        <nuxt-img
          class="w-8 h-8 rounded-full border-2  border-white"
          src="images/toa.jpeg"
          alt="images/toa"
          fit="cover"
          format="webp"
          width="800"
          height="800"
        />
        <nuxt-img
          class="w-8 h-8 rounded-full border-2 border-white"
          src="images/aiony.jpeg"
          alt="images/aiony"
          fit="cover"
          format="webp"
          width="800"
          height="800"
        />
        <nuxt-img
          class="w-8 h-8 rounded-full border-2 border-white"
          src="images/jake.jpeg"
          alt="images/jake"
          fit="cover"
          format="webp"
          width="800"
          height="800"
        />
      </div>

      <div class="text-sm font-semibold text-black py-2">
        {{ publication.reference }}
      </div>
    </div>
  </div>
</template>
      
<script setup>

const props = defineProps({
  publication: {
    type: Object,
    required: true,
  },
  users: {
    type: Array,
    default: null,
  }
})

</script>
      