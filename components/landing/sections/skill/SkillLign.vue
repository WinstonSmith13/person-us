<template>
  <div class="flex flex-row ">
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
      Compétence 
    </h3>
  </div>
  <div>
    <SkillCard v-if="showCard" />
  </div>
</template>
  
  <script setup>
  import { ref } from 'vue'
  import { Icon } from '@iconify/vue';
  import SkillCard from './SkillCard.vue';
  
  const icon = ref("mdi:plus-circle" );
  const showCard = ref(false);
  function changeIcon (){
      icon.value = (icon.value === "mdi:plus-circle" ? "mdi:minus-circle-outline" : "mdi:plus-circle")
        showCard.value = !showCard.value
    };

  </script>
  