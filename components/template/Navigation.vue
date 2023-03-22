<template>
  <nav>
    <LogoUs class="py-2" />
    <div class="flex flex-row justify-between">
      <MenuButton class="hover:bg-tertiary" @click="menuDisplay" />
      <SearchButton class="bg-primary" />
      <NavigationMenu
        @click="menuToggle = false"
        v-if="menuToggle"
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
