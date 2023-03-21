<template>
  <!-- Main content  -->
  <div class="m-10">
    <Introduction />
  </div>
  <div class="m-10">
    <News />
  </div>
  <div class="m-10">
    <AgendaSection />
  </div>
  <div class="m-10">
    <ProjectSection />
  </div>
  <div class="m-10">
    <ContributorSection />
  </div>
  <div class="m-10">
    <SkillSection />
  </div>
  <div class="m-10">
    <PublicationSection />
  </div>
  <div class="m-10">
    <TechnologySection />
  </div>
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

</script>