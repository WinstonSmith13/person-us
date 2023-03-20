<template>
  <div class="slide">
    <transition name="slide">
      <slot />
    </transition>
  </div>
</template>
  
  <script>
  export default {
      setup () {
          
  
          return {}
      }
  }
  </script>

  <style>
  .slide-enter-active, 
  .slide-leave-active{
    transition: all 1s ease-in-out;
  }

  .slide-enter-from,
  .slide-leave-to {
    opacity: 0;
  }

  .slide-enter-to,
  .slide-leave-from {
    opacity: 1;
    
  }


  .slide-enter-from{
    transform: translateX(-100%);
  }

  .slide-leave-to{
    transform: translateX(100%);
  }

</style>
  
  