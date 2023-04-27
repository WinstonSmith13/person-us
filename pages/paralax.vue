<template>
  <body>
    <section> 
      <img
        src="./../public/images/paralax/bg.jpg"
        ref="bg"
        alt="bg"
      >
      <img
        src="./../public/images/paralax/moon.png"
        ref="moon"
        alt="moon"
      >
      <img
        src="./../public/images/paralax/mountain.png"
        ref="mountain"
        alt="mountain"
        class="z-[3]"
      >
      <img
        src="./../public/images/paralax/road.png"
        ref="road"
        alt="road"
        class="z-[4]"
      >

      <h2 ref="text" class="z-[2] text-white font-bold">
        Moon Ligth
      </h2>
    </section>
  </body>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const bg = ref(null);
    const moon = ref(null);
    const mountain = ref(null);
    const road = ref(null);
    const text = ref(null);

    onMounted(() => {
      window.addEventListener('scroll', function(){
        const value = this.window.scrollY;
        bg.value.style.top = value * 0.5 + 'px';
        moon.value.style.top = -value * 0.5 + 'px';
        mountain.value.style.top = -value * 0.10 + 'px';
        road.value.style.top = value * 0.15 + 'px';
        text.value.style.top = value * 1 + 'px';
      });
    });

    return { bg, moon, mountain, road, text };
  }
}
</script>

<style>


section {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}

section::before{
    content:'';
    position:absolute;
    bottom: 0;
    width:100%;
    height: 100px;
    background: linear-gradient(to top, #0a2a43, transparent); 
    z-index: 10000;
} 

section::after{
    content:'';
    position:absolute;
    top: 0;
    left: 0;
    width:100%;
    height: 100%;
   
    
} 

section img{
    position: absolute;
    top:0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
}

#text {
    position: relative;
    color: #fff;
    font-size: 100em;
}


</style>