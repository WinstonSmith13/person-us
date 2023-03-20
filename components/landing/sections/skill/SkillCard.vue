<template>
  <div class="ml-6">
    <div class="flex flex-row gap-2">
      <ThematicTag />
      <ThematicTag />
    </div>
    <div class="flex flex-row mt-2">
      <nuxt-img
        class="w-80 "
        format="webp"
        src="images/actualite.jpeg"
        alt="Illustration actualité"
      />
      <div class="pl-6 bg-white">
        <div class="font-light text-justify text-sm mb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In integer rhoncus neque maecenas amet sed. 
          Gravida ac aliquam id fusce eget aliquam posuere mauris, convallis. Risus elit iaculis facilisis felis, morbi. 
          In viverra turpis tempus massa pretium cras tincidunt nibh pretium. Mauris sed egestas varius commodo, tincidunt orci lectus ultrices. 
          Aliquam mauris augue nibh elit. Auctor sagittis et arcu imperdiet viverra velit. Sit dui porttitor et vulputate nisl pretium, justo risus etiam.
          Vel sapien pharetra at vel arcu diam quisque. In in amet, gravida rhoncus eu dolor nibh velit ac. Maecenas etiam sodales facilisis maecenas arcu, semper. 
          Dictum gravida ut donec consectetur duis.
        </div>
        <DetailsButton />
      </div>
    </div>
  </div>
</template>
  
<script setup>
import DetailsButton from '../../../template/buttons/DetailsButton.vue';
import ThematicTag from '../../../template/tag/ThematicTag.vue';


</script>