<template>
  <div class="flex flex-row z-[20]">
    <button
      @click="changeIcon"
      class="z-[20]"
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
      Compétence {{ skill.id }}
    </h3>
  </div>
  <div>
    <SkillCard
      v-if="showCard"
      :tags="tags"
      :skill="skill"
    />
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
  