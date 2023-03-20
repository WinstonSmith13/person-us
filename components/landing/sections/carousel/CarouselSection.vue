<template>
  <div class="carousel">
    <slot :current-slide="currentSlide" />

    <!--Navigation-->
    <div
      v-if="navEnable"
      class="absolute top-0 justify-between p-6 h-full w-full flex items-center "
    >
      <div class="cursor-pointer">
        <LeftCarouselButton
          @click="prevSlide"
          class="transition-colors duration-150 bg-primary rounded-full focus:shadow-outline hover:bg-black"
        />
      </div>
      <div class="cursor-pointer">
        <RightCarouselButton
          @click="nextSlide"
          class="transition-colors duration-150 bg-primary rounded-full focus:shadow-outline hover:bg-black"
        />
      </div>
    </div>

    <!--Pagination-->
    <div
      v-if="paginationEnable"
      class="absolute bottom-64 w-full flex justify-center items-center gap-3"
    >
      <span
        @click="goToSlide(index)"
        v-for="{slide, index} in getSlideCount"
        :key="index"
        :class="{active: index + 1 === currentSlide }"
        class="cursor-pointer w-4 h-4 border rounded-full bg-tertiary shadow-lg"
      >
        {{ slide }}
      </span>
    </div>
  </div>
</template>

<script>

import { ref, onMounted } from "vue";
import LeftCarouselButton from '../../../template/buttons/carouselButton/LeftCarouselButton.vue';
import RightCarouselButton from '../../../template/buttons/carouselButton/RightCarouselButton.vue';

export default {
  components: { 
    LeftCarouselButton, 
    RightCarouselButton },
  
  props: ['startAutoPlay' , 'timeout', 'navigation', 'pagination'],

  setup(props) {
    const currentSlide = ref(1);
    const getSlideCount = ref(null);
    const autoPlayEnable = ref(props.startAutoPlay === undefined ? true : props.startAutoPlay);
    const timeoutDuration = ref(props.timeout === undefined ? 5000 : props.timeout);
    const paginationEnable = ref(props.pagination === undefined ? true : props.pagination);
    const navEnable = ref(props.navigation === undefined ? true : props.navigation);

    //next slide 

    const nextSlide = () => {
      if (currentSlide.value === getSlideCount.value){
        currentSlide.value = 1;
        return;
      }
      currentSlide.value += 1
    }

    // prev slide 
    const prevSlide = () => {
      if (currentSlide.value === 1){
        currentSlide.value = 1;
        return;
      }
      currentSlide.value -= 1;
    }
// Verifier pourquoi cela ne fonctionne pas 
    const goToSlide = (index) => {
      currentSlide.value = index + 1;
    }

// Autoplay
    const autoPlay = () => {
      setInterval(() => {
        nextSlide();
      }, timeoutDuration.value);
    }

    if (autoPlayEnable.value){
      autoPlay();
    }

    onMounted(() => {
      getSlideCount.value = document.querySelectorAll('.slide').length;
    })
    return { currentSlide,
      getSlideCount,
      nextSlide,
      prevSlide,
      goToSlide,
      paginationEnable,
      navEnable
    };
  }

}
</script>

<style>
.active {
  background-color: blueviolet;
}

</style>

