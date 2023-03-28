<template>
  <div class="absolute top-0 w-full">
    <div class="fixed inset-x-0 z-10 mx-4">
      <div
        class="max-w-screen-lg mx-auto"
        id="navBar"
      >
        <NavigationTemplate />
      </div>
    </div>
    <div id="body" />
    <slot />
    <div class="max-w-screen-lg mx-auto ">
      <FooterTemplate />
    </div>
  </div>
</template>

<script setup>
import FooterTemplate from '../components/template/Footer.vue';
import NavigationTemplate from '../components/template/Navigation.vue';
import { onMounted } from 'vue';

const sectionOneOption = {
  root: null,
  threshold: 0,
  rootMargin: "180px",
};



onMounted(() => {
  const navBar = document.querySelector('#navBar');
  const containerContent = document.querySelector('#body')

  const sectionOneObserver = new IntersectionObserver(function (entries, sectionOneObserver) {
    entries.forEach(entry => {
      console.log(entry)
      if (!entry.isIntersecting) {

        navBar.classList.add("transition-all", "duration-500", "max-w-[80%]");
        navBar.classList.remove("max-w-screen-lg");
      } else {
        navBar.classList.remove("max-w-[80%]");
        navBar.classList.add("max-w-screen-lg");
      }
    })
  }, sectionOneOption);
  sectionOneObserver.observe(containerContent)
})

</script>