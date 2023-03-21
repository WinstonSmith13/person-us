<template>
  <nav>
    <LogoUs class="py-2" />
    <div class="flex flex-row justify-between">
      <MenuButton
        @toggle-menu="toggleMenu"
        :menu-open="menuOpen"
      />
      <SearchButton class="bg-primary" />
    </div>
  </nav>
</template>

<script setup>
import SearchButton from "./navigationButtons/SearchButton.vue";
import LogoUs from "./icons/LogoUs.vue";
import MenuButton from "./navigationButtons/MenuButton.vue"

import { ref } from 'vue';


</script>
