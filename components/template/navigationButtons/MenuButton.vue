<template>
  <div
    @click="toggleMenu"
    class="menu-btn flex-row z-[1]"
    :class="{ open: menuOpen }"
  >
    <div class="menu-btn_burger">
      <span class="sr-only">Open main menu</span>
    </div>
    <div class="text-white p-1">
      MENU
    </div>
  </div>
</template>
  
<script setup>
import { ref } from 'vue';

const menuOpen = ref(false);

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}
</script>

<style>
.menu-btn {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 50px;
  cursor: pointer;
  transition: all .1s ease-in-out;
  background-color: #780F89;
}

.menu-btn_burger {
  width: 20px;
  height: 2px;
  background: #fff;
  border-radius: 5px;
  transition: all .1s ease-in-out;
}

.menu-btn_burger::before,
.menu-btn_burger::after {
  content: '';
  position: absolute;
  width: 20px;
  height: 2px;
  background: #fff;
  border-radius: 5px;
  transition: all .1s ease-in-out;
}

.menu-btn_burger::before {
  transform: translateY(-6px);
}

.menu-btn_burger::after {
  transform: translateY(6px);
}

/* ANIMATION */
.menu-btn.open .menu-btn_burger {
  transform: translateX(-50px);
  background: transparent;
  box-shadow: none;
}

.menu-btn.open .menu-btn_burger::before {
  transform: rotate(45deg) translate(35px, -35px);
}

.menu-btn.open .menu-btn_burger::after {
  transform: rotate(-45deg) translate(35px, 35px);
}
</style>