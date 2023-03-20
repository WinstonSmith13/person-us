<template>
  <div class="flex flex-row border p-2 ">
    <button
      @click="changeIcon"
    >
      <Icon
        :icon="`${icon}`"
        color="#780f89"
        width="30"
        height="30"
      />
    </button>
    
    <h3

      class="font-semibold text-primary pl-5 pt-1"
    >
      Compétence 1
    </h3>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue';

const icon = ref("mdi:plus-circle" );
function changeIcon (){
    icon.value = (icon.value === "mdi:plus-circle" ? "mdi:minus-circle-outline" : "mdi:plus-circle")
};



</script>

