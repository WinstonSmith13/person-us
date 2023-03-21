<template>
  <button
    class="cursor-pointer p-2 inline-flex items-center justify-center text-white focus:outline-none"
    aria-expanded="false"
    @click="toggleCross"
  >
    <span class="sr-only">Open main menu</span>
    <Icon
      :icon="isCross ? 'codicon:close' : 'codicon:three-bars'"
      color="white"
      width="24"
      height="24"
    />
    <div class="text-white">
      MENU
    </div>
  </button>
</template>
  
<script setup>







import { Icon } from '@iconify/vue';
import { ref } from 'vue';

const emit = defineEmits(['toggle'])
const isCross = ref(false)

function toggleCross ()  {
  isCross.value = !isCross.value;
  emit('toggle');

}

</script>
