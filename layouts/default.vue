<template>
  <div class="absolute top-0 w-full">
    <div class="fixed inset-x-0 z-10 mx-4">
      <div class="max-w-screen-lg mx-auto" id="navBar">
        <NavigationTemplate />
      </div>
    </div>
    <div class="mt-120 mx-4 md:mx-40 ">
      <div class="max-w-screen-lg mx-auto shadow-2xl bg-white" id="containerContent">
        <slot />
        <FooterTemplate />
      </div>
    </div>
  </div>
</template>

<script setup>
import FooterTemplate from '../components/template/Footer.vue';
import NavigationTemplate from '../components/template/Navigation.vue';
import { onMounted } from 'vue';

const sectionOneOption = {
  root: null,
  threshold: 0.1,
  rootMargin: "0px",
};



onMounted(() => {
  const navBar = document.querySelector('#navBar');
  const containerContent = document.querySelector('#containerContent')

  const sectionOneObserver = new IntersectionObserver(function (entries, sectionOneObserver) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navBar.classList.add("transition-all", "duration-500", "max-w-[90%]");
        navBar.classList.remove("max-w-screen-lg");
      } else {
        navBar.classList.remove( "max-w-[90%]");
        navBar.classList.add("max-w-screen-lg");
      }
    })
  }, sectionOneOption);
  sectionOneObserver.observe(containerContent)
})

</script>