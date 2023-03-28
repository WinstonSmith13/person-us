<template>
  <div class="carousel">
    <slot :current-slide="currentSlide" />
  
    <!--Navigation-->
  
    <div class="navigate">
      <div class="toggle-page left">
        <LeftCarouselButton
          @click="prevSlide"
          class="cursor-pointer hover:bg-primary"
        />
      </div>
      <div class="toggle-page right">
        <RightCarouselButton
          @click="nextSlide"
          class="cursor-pointer hover:bg-primary"
        />
      </div>
    </div>
    <div class="pagination">
      <span
        @click="goToSlide(index)"
        class="text-white"
        v-for="(slide, index) in getSlideCount"
        :key="index"
        :class="{active : index + 1 === currentSlide}"
      />
    </div>
  </div>
</template>
  
  <script setup>
  import LeftCarouselButton from '../../../template/buttons/carouselButton/LeftCarouselButton.vue'
  import RightCarouselButton from '../../../template/buttons/carouselButton/RightCarouselButton.vue'
  import { ref, onMounted } from 'vue';
  
  const currentSlide = ref(1);
  const getSlideCount = ref(null);
  const autoPlayEnable = ref(true)
  
  const nextSlide = () => {
      if (currentSlide.value === getSlideCount.value) {
          currentSlide.value = 0;
      }
      currentSlide.value += 1;
  }
  
  const prevSlide = () => {
      if (currentSlide.value === 1) {
          currentSlide.value = 1;
          return;
      }
      currentSlide.value -= 1;
  }

  const goToSlide = (index) => {
    currentSlide.value = index +1 ;
  }
  
  onMounted(() => {
      getSlideCount.value = document.querySelectorAll('.slide').length;
  })
  
  </script>
  
  <style lang="scss" scoped>
  .carousel {
    position: relative;
  }
  
  .navigate {
  padding: 0 16px;
  height: 100%;
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
}
  
  .pagination {
    position: absolute;
    bottom: 110px;
    width: 100%;
    display: flex;
    gap:16px;
    justify-content: center;
    align-items: flex-start;
  }

  span {
    cursor: pointer;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }
  
  .active {
    background-color: #780F89;
  }

  .toggle-page {
    display: flex;
    flex: 1;
  }
  
  .right {
    justify-content: flex-end;
  }
  </style>