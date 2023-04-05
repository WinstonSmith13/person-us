<template>
  <div class="bg-white text-black p-8">
    <div class="space-y-4  md:space-y-0 md:space-x-6 md:flex-row">
      <p class="text-black font-bold text-2xl mb-6">
        Mes domaines de spécialités
      </p>
    </div>
    <SkillLign
      v-for="skill in skills"
      :key="skill.id"
      :skill="skill"
      :tags="skill.tags"
    />
  </div>
</template>
        
<script setup>
import SkillLign from './skill/SkillLign.vue';

const skills = [
  {
    id : 1,
    image: '/images/actualite.jpeg',
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In integer rhoncus neque maecenas amet sed. Gravida ac aliquam id fusce eget aliquam posuere mauris, convallis. Risus elit iaculis facilisis felis, morbi. In viverra turpis tempus massa pretium cras tincidunt nibh pretium. Mauris sed egestas varius commodo, tincidunt orci lectus ultrices. Aliquam mauris augue nibh elit. Auctor sagittis et arcu imperdiet viverra velit. Sit dui porttitor et vulputate nisl pretium, justo risus etiam.Vel sapien pharetra at vel arcu diam quisque. In in amet, gravida rhoncus eu dolor nibh velit ac. Maecenas etiam sodales facilisis maecenas arcu, semper. Dictum gravida ut donec consectetur duis.",
    tags: ["THÉMATIQUE 1", "THÉMATIQUE 2"],
  },
  {
    id : 2,
    image: "/images/construction.jpeg",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In integer rhoncus neque maecenas amet sed. Gravida ac aliquam id fusce eget aliquam posuere mauris, convallis. Risus elit iaculis facilisis felis, morbi. In viverra turpis tempus massa pretium cras tincidunt nibh pretium. Mauris sed egestas varius commodo, tincidunt orci lectus ultrices. Aliquam mauris augue nibh elit. Auctor sagittis et arcu imperdiet viverra velit. Sit dui porttitor et vulputate nisl pretium, justo risus etiam.Vel sapien pharetra at vel arcu diam quisque. In in amet, gravida rhoncus eu dolor nibh velit ac. Maecenas etiam sodales facilisis maecenas arcu, semper. Dictum gravida ut donec consectetur duis.",
    tags: [ "THÉMATIQUE 3"],
  },
  {
    id : 3,
    image: '/images/headway.jpeg',
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In integer rhoncus neque maecenas amet sed. Gravida ac aliquam id fusce eget aliquam posuere mauris, convallis. Risus elit iaculis facilisis felis, morbi. In viverra turpis tempus massa pretium cras tincidunt nibh pretium. Mauris sed egestas varius commodo, tincidunt orci lectus ultrices. Aliquam mauris augue nibh elit. Auctor sagittis et arcu imperdiet viverra velit. Sit dui porttitor et vulputate nisl pretium, justo risus etiam.Vel sapien pharetra at vel arcu diam quisque. In in amet, gravida rhoncus eu dolor nibh velit ac. Maecenas etiam sodales facilisis maecenas arcu, semper. Dictum gravida ut donec consectetur duis.",
    tags: ["THÉMATIQUE 1", "THÉMATIQUE 2"],
  },
  {
    id : 4,
    image: "/images/construction.jpeg",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In integer rhoncus neque maecenas amet sed. Gravida ac aliquam id fusce eget aliquam posuere mauris, convallis. Risus elit iaculis facilisis felis, morbi. In viverra turpis tempus massa pretium cras tincidunt nibh pretium. Mauris sed egestas varius commodo, tincidunt orci lectus ultrices. Aliquam mauris augue nibh elit. Auctor sagittis et arcu imperdiet viverra velit. Sit dui porttitor et vulputate nisl pretium, justo risus etiam.Vel sapien pharetra at vel arcu diam quisque. In in amet, gravida rhoncus eu dolor nibh velit ac. Maecenas etiam sodales facilisis maecenas arcu, semper. Dictum gravida ut donec consectetur duis.",
    tags: [ "THÉMATIQUE 3"],
  }
];




</script>
      