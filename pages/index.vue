<template>
  <CarouselTemplate
    class="carousel"
    v-slot="{ currentSlide }"
  >
    <CarouselSlide
      v-for="(slide, index) in carouselSlides"
      :key="index"
    >
      <div
        v-show="currentSlide === index + 1"
        class="slide-info"
      >
        <nuxt-img
          :src="`../public/images/carouselBg/${slide}.jpeg`"
          alt="carousel_images"
          class="h-full min-w-full object-cover"
        />
      </div>
    </CarouselSlide>
  </CarouselTemplate>


  <div class="relative mt-[-50px]">
    <div class="absolute flex justify-center gap-4 top-[-50px] left-1/2 transform -translate-x-1/2 mx-auto ">
      <div class=" flex gap-4  text-xl bg-white shadow-md text-black hover:translate-y-1 transition-all duration-300 p-6 cursor-pointer mx-2">
        <Icon icon="ion:options" />
        Option 1
      </div>
      <div class="flex gap-4  text-xl bg-white shadow-md text-black hover:translate-y-1 transition-all duration-300 p-6 cursor-pointer mx-2">
        <Icon icon="ion:options" />
        Option 2
      </div>
      <div class="flex gap-4  text-xl bg-white shadow-md text-black hover:translate-y-1 transition-all duration-300 p-6 cursor-pointer mx-2">
        <Icon icon="ion:options" />
        Option 3
      </div>
      <div class="flex gap-4  text-xl bg-white shadow-md text-black hover:translate-y-1 transition-all duration-300 p-6 cursor-pointer mx-2">
        <Icon icon="ion:options" />
        Option 4
      </div>
    </div>

    <div class="max-w-screen-lg shadow-2xl bg-white p-8 mx-auto">
      <Introduction />
      <News />
      <AgendaSection />
      <ProjectSection />
      <ContributorSection />
      <SkillSection />
      <PublicationSection />
      <TechnologySection />
    </div>
  </div>
</template>

<script setup>
import Introduction from '../components/landing/sections/IntroductionSection.vue';
import News from '../components/landing/sections/NewsSection.vue';
import AgendaSection from '../components/landing/sections/AgendaSection.vue';
import ProjectSection from '../components/landing/sections/ProjectSection.vue';
import ContributorSection from '../components/landing/sections/ContributorSection.vue';
import SkillSection from '../components/landing/sections/SkillSection.vue';
import PublicationSection from '../components/landing/sections/PublicationSection.vue';
import TechnologySection from '../components/landing/sections/TechnologySection.vue'
import CarouselTemplate from '../components/landing/sections/carousel/CarouselTemplate.vue';
import CarouselSlide from '../components/landing/sections/carousel/CarouselSlide.vue';
import { Icon } from '@iconify/vue';

const carouselSlides = ['bg-1', 'bg-2', 'bg-3'];

</script>

<style lang="scss" scoped>
.carousel {
  position: relative;
  max-height: 60vh;
  height: 60vh;
  z-index: 0;
}



.slide-info {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-height: 100%;
  height: 100%;

}
</style>