<template>
  <nav> 
    
      <LogoUs class="py-2" />
  
    
    <div class="flex flex-row justify-between items-center sm:items-stretch">
      <MenuButton
        class="hover:bg-indigo-800"
        @click="menuDisplay"
      />
      <SearchButton />
      <NavigationMenu
        @click="menuToggle = false"
        v-if="menuToggle"
        class="p-20 px-80 sm:px-20 lg:px-32"
      />
    </div>
  </nav>
</template>


<script setup>
import SearchButton from "./navigationButtons/SearchButton.vue";
import LogoUs from "./icons/LogoUs.vue";
import MenuButton from "./navigationButtons/MenuButton.vue"

import { ref } from 'vue';
import NavigationMenu from "./menuTemplate/NavigationMenu.vue";

const menuToggle = ref(false);

function menuDisplay () {
  menuToggle.value = !menuToggle.value
}


</script>
