<template>
  <div class="w-80 h-full rounded shadow-lg bg-secondary">
    <nuxt-img
      class="w-full"
      :src="project.image"
      format="webp"
      :alt="project.image"
    />
    <div class="px-2 pt-4 pb-2 grid grid-cols-2 gap-2">
      <ThematicTag
        v-for="tag in tags"
        :key="tag"
        :tags="[tag]"
      />
    </div>
    <div class="px-2">
      <div class="font-bold text-lg text-primary mb-2">
        {{ project.description }}
      </div>
      <div
        v-if="users"
        class="flex -space-x-2"
      >
        <nuxt-img
          v-for="(user, index) in users"
          :key="index"
          class="w-8 h-8 rounded-full border-2 border-white"
          :src="user.image"
          :alt="user.name"
          fit="cover"
          format="webp"
          width="800"
          height="800"
        />
      </div>
      <div class="text-lg text-primary py-1">
        {{ project.budget }}
      </div>
    </div>
  </div>
</template>

<script setup>
import ThematicTag from '../../../template/tag/ThematicTag.vue'

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
  tags: {
    type: Array,
    required: true,
  },
  users: {
    type: Array,
    default: null,
  },
})
</script>