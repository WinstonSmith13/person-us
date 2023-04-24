<template>
  <div class="bg-secondary">
    <div class="fixed inset-x-0 z-10 mx-4 ">
      <div
        class="max-w-screen-lg mx-auto sm:max-screen-sm"
        id="navBar"
      >
        <NavigationTemplate />
      </div>
    </div>
    <div id="body" />
    <main>
      <nuxt-page />
    </main>
    <div class="max-w-screen-lg mx-auto">
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
  rootMargin: "210px",
};



onMounted(() => {
  const navBar = document.querySelector('#navBar');
  const containerContent = document.querySelector('#body')

  const sectionOneObserver = new IntersectionObserver(function (entries, sectionOneObserver) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {

        navBar.classList.add("transition-all", "duration-500", "max-w-screen-xl");
        navBar.classList.remove("max-w-screen-lg");
      } else {
        navBar.classList.remove("max-w-screen-xl");
        navBar.classList.add("max-w-screen-lg");
      }
    })
  }, sectionOneOption);
  sectionOneObserver.observe(containerContent)
})

</script>