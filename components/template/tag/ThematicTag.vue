<template>
  <div>
    <span
      v-for="tag in tags"
      :key="tag"
      :class="getTagClass(tag)"
      class="inline-block rounded py-1 px-2 text-sm font-bold text-white text-center"
    >
      {{ tag }}
    </span>
  </div>
</template>

<script setup>
const props = defineProps({
  tags: {
    type: Array,
    required: true,
  },
});

function getTagClass(tag) {
  const thematicClasses = {
    "THÉMATIQUE 1": "bg-blue-500",
    "THÉMATIQUE 2": "bg-red-500",
    "THÉMATIQUE 3": "bg-green-500",
  };
  return thematicClasses[tag] || "bg-gray-500";
}
</script>