<template>
  <button
    class="cursor-pointer p-2 inline-flex items-center justify-center text-white focus:outline-none"
    aria-expanded="false"
    @click="$emit('toggle')"
  >
    <span class="sr-only">Open main menu</span>
    <Icon
      icon="codicon:three-bars"
      color="white"
      width="24"
      height="24"
    />
    <div class="text-white">
      MENU
    </div>
  </button>
</template>
  
<script>
import { Icon } from '@iconify/vue';

export default {
  name: 'MenuButton',
  components: {
    Icon,
  },
  emits: ['toggle']
}
</script>
  