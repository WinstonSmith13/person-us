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
  </div>
</template>

<script setup>
import LeftCarouselButton from '../../../template/buttons/carouselButton/LeftCarouselButton.vue'
import RightCarouselButton from '../../../template/buttons/carouselButton/RightCarouselButton.vue'
import { ref, onMounted } from 'vue';

const currentSlide = ref(1);
const getSlideCount = ref(null);

const nextSlide = () => {
    if (currentSlide.value === getSlideCount.value) {
        currentSlide.value = 0;
    }
    currentSlide.value += 1;
}

const prevSlide = () => {
    if(currentSlide.value === 1) {
        currentSlide.value = 1;
        return;
    }
    currentSlide.value -= 1;
}

onMounted(() => {
    getSlideCount.value = document.querySelectorAll('.slide').length;
    console.log(getSlideCount.value);
})

</script>

<style lang="scss" scoped>
.carousel {
    position: relative;
}

.navigate {
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    margin: 16px;
}

.toggle-page {
    display: flex;
}

.right {
    margin-left: 16px;
    justify-content: flex-end;
}
</style>

