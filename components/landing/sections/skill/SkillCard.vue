<template>
  <div class="ml-6">
    <div class="flex flex-row gap-2">
      <ThematicTag
        v-for="tag in tags"
        :key="tag"
        :tags="[tag]"
      />
    </div>

    <div class="flex flex-col md:flex-row mt-2">
      <nuxt-img
        class="w-full h-56 md:w-[15vw] md:h-[20vh] object-cover"
        format="webp"
        :src="skill.image"
        :alt="skill.image"
      />
      <div class="md:pl-6 bg-white flex-1">
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
