<template>
  <div class="flex flex-col bg-primary text-white -space-y-2 justify-center p-1 max-w-sm">
    <div class="font-bold">
      <p>{{ date.day }}</p>
    </div>
    <div class="font-extrabold text-3xl">
      <p>{{ date.num }}</p>
    </div>
    <div class="font-bold">
      <p>{{ date.month }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  date: {
    type: Object,
    required: true,
  },
});
</script>

