<template>
  <div class="ml-6">
    <div class="flex flex-row gap-2">
      <ThematicTag
        v-for="tag in tags"
        :key="tag"
        :tags="[tag]"
      />
    </div>
    
    <div class="flex flex-row mt-2">
      <nuxt-img
        class="w-[15vw] h-[20vh] object-cover"
        format="webp"
        :src="skill.image"
        :alt="skill.image"
      />
      <div class="pl-6 bg-white">
        <div class="font-light text-justify text-sm mb-2">
          {{ skill.content }}
        </div>
        <DetailsButton />
      </div>
    </div>
  </div>
</template>
  
<script setup>
import DetailsButton from '../../../template/buttons/DetailsButton.vue';
import ThematicTag from '../../../template/tag/ThematicTag.vue';

const props = defineProps({
  skill: {
    type: Object,
    required: true,
  },
  tags: {
    type: Array,
    required: true,
  }
})

</script>