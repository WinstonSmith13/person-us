<template>
  <button
    class="cursor-pointer p-2 inline-flex items-center justify-center text-tertiary focus:outline-none"
    aria-expanded="false"
    @click="$emit('toggle')"
  >
    <span class="sr-only">Open main menu</span>
    <Icon
      icon="ph:magnifying-glass-bold"
      color="white"
      width="24"
    />
  </button>
</template>
    
<script>
import { Icon } from '@iconify/vue';
export default {
  name: 'SearchButton',
  components: {
    Icon,
  },
  emits: ['toggle']
}
</script>
    