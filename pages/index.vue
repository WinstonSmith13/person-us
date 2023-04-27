<template>
  <section>
    <CarouselTemplate
      class="carousel"
      v-slot="{ currentSlide }"
      ref="carouselId"
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
            format="webp"
          />
        </div>
      </CarouselSlide>
    </CarouselTemplate>

    <div
      ref="content"
      class="relative mt-[-50px]"
    >
      <div class="absolute flex justify-center gap-4 top-[-50px] left-1/2 transform -translate-x-1/2 mx-auto">
        <OptionButton />
      </div>

      <div class="max-w-screen-lg shadow-2xl bg-white p-8 mx-auto mt-8">
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
  </section>
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
import OptionButton from '../components/template/buttons/OptionButton.vue';
import { ref, onMounted } from 'vue';

const carouselSlides = ['bg-1', 'bg-2', 'bg-3'];
const carouselId = ref(null);
const content = ref(null);

onMounted(() => {
  window.addEventListener('scroll', function(){
    const value = this.window.scrollY;
    carouselId.value.style.top = value * 0.5 + 'px';
    content.value.style.top = -value * 0.5 + 'px';
  });
});



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