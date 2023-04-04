<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg bg-secondary">
    <nuxt-img
      class="w-full"
      src="/images/construction.jpeg"
      format="webp"
      alt="Illustration actualité"
    />
    <div class="px-2 pt-4 pb-2 grid grid-cols-2 gap-2">
      <ThematicTag />
      <ThematicTag />
    </div>
    <div class="px-2">
      <div class="font-bold text-lg text-primary mb-2">
        Lorem ipsum dolor sit amet, consectetur elit.
      </div>
      <div class="flex -space-x-2">
        <nuxt-img
          class="w-8 h-8 rounded-full border-2 border-white"
          src="/images/albert.jpeg"
          alt="images/albert"
          fit="cover"
          format="webp"
          width="800"
          height="800"
        />
        <nuxt-img
          class="w-8 h-8 rounded-full border-2 border-white"
          src="/images/toa.jpeg"
          alt="images/toa"
          fit="cover"
          format="webp"
          width="800"
          height="800"
        />
        <nuxt-img
          class="w-8 h-8 rounded-full border-2 border-white"
          src="/images/aiony.jpeg"
          alt="images/aiony"
          fit="cover"
          format="webp"
          width="800"
          height="800"
        />
        <nuxt-img
          class="w-8 h-8 rounded-full border-2 border-white"
          src="/images/jake.jpeg"
          alt="images/jake"
          fit="cover"
          format="webp"
          width="800"
          height="800"
        />
      </div>
      <div class="text-lg text-primary py-1">
        Budget : 0 000 000 Euros
      </div>
    </div>
  </div>
</template>
<script setup>
import ThematicTag from '../../../template/tag/ThematicTag.vue';
</script>