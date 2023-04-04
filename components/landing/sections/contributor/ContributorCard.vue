<template>
  <div class=" flex flex-row  shadow-lg  bg-secondary rounded">
    <div class=" w-full h-44 sm:h-40 sm:w-32 sm:mb-0">
      <nuxt-img
        :src="contributor.imageSrc"
        alt="profil picture"
        class="object-cover w-full h-full rounded"
      />
    </div>
    <div class="flex flex-col space-y-4 p-6">
      <div>
        <h2 class="text-xl font-semibold">
          {{ contributor.name }}
        </h2>
        <span class="text-sm font-bold text-primary">{{ contributor.job }}</span>
      </div>
      <ContributorLink />
    </div>
  </div>
</template>

<script setup>
import ContributorLink from './ContributorLink.vue';

const props = defineProps ( {
  contributor: {
    type: Object,
    required: true,
  },
})

</script>

