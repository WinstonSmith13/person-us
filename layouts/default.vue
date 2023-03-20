<template>
  <div class="relative ">
    <Carousel
      :navigation="false"
      :pagination="true"
      :timeout="5000"
      class="relative w-full h-full max-h-full md:max-h-screen"
      v-slot="{ currentSlide }"
    >
      <Slide
        v-for="(slide, index) in carouselSlides"
        :key="index"
      >
        <div
          v-show="currentSlide === index + 1"
          class=" absolute top-0 left-0 w-full h-full md:h-screen"
        >
          <nuxt-img
            :src="`../public/images/carouselBg/${slide}.jpeg`"
            alt=""
            fit=""
            format="webp"
            class="w-full h-full object-cover"
          />
        </div>
      </Slide>
    </Carousel>


    <div class="absolute top-0 w-full">
      <div class="mx-4 md:mx-40 mb-6 md:mb-60">
        <NavigationTemplate />
      </div>
      <div class="shadow-2xl bg-white mx-4 md:mx-40">
        <slot />
        <FooterTemplate />
      </div>
    </div>
  </div>
</template>
  
<script>
import FooterTemplate from '../components/template/Footer.vue';
import NavigationTemplate from '../components/template/Navigation.vue';
import Carousel from '../components/landing/sections/carousel/CarouselSection.vue';
import Slide from '../components/landing/sections/carousel/SlideSection.vue';


export default {
  name: 'DefaultLayout',
  components: {
    FooterTemplate,
    NavigationTemplate,
    Carousel,
    Slide
  },
  
  setup() {
    const carouselSlides = ['bg1', 'bg2', 'bg3'];

    return { carouselSlides };
  }
}

</script>