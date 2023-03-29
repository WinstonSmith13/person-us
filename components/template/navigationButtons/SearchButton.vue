<template>
  <div
    class="search-box"
    :class="{ open: searchOpen }"
  >
    <input
      type="text"
      placeholder="Recherchez"
    >
    <button
      @click="toggleSearch"
      class="search-btn"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5"
      >
        <path
          fill-rule="evenodd"
          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
  </div>
</template>
<script setup>

import { ref } from 'vue';

const searchOpen = ref(false);

function toggleSearch() {
  searchOpen.value = !searchOpen.value;
}

</script>

<style>
  .search-box {
  display: flex;
  height: 100%;
  width: 50px;
  position: relative; /* Ajout de position relative */
  transition: all .3s ease-in-out;
}

.search-box.open {
    width: 350px; /* Ajout de la largeur au moment où la classe open est active */}



.search-box input {
  padding: 13px;
  width: 100%;
}

.search-box .search-btn {
  position: absolute; /* Ajout de position absolue */
  height: 50px;
  width: 50px;
  color: white;
  background-color: #780F89;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0; /* Ajout de right pour positionner le bouton à droite */
}



</style>

