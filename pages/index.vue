<template>
  <div class="home">
    <CarouselTemplate
      class="carousel inset-0"
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
  </div>


  <div class="relative mt-[-100px] mx-4 md:mx-40 flex justify-center">
    <div class="max-w-screen-lg mx-auto shadow-2xl bg-white">
      <!-- Main content  -->
      <div class="m-10">
        <Introduction />
      </div>
      <div class="m-10">
        <News />
      </div>
      <div class="m-10">
        <AgendaSection />
      </div>
      <div class="m-10">
        <ProjectSection />
      </div>
      <div class="m-10">
        <ContributorSection />
      </div>
      <div class="m-10">
        <SkillSection />
      </div>
      <div class="m-10">
        <PublicationSection />
      </div>
      <div class="m-10">
        <TechnologySection />
      </div>
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

const carouselSlides = ['bg-1', 'bg-2', 'bg-3'];

</script>

<style lang="scss" scoped>
.carousel {
  position: relative;
  max-height: 60vh;
  height: 60vh;
}

.home {
  z-index: -1;
}

.slide-info {
  position: absolute;
  top:0;
  left: 0;
  width: 100%;
  max-height: 100%;
  height: 100%;

}
</style>