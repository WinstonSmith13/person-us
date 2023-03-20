<template>
  <div class="max-w-full mx-auto px-4 bg-gray-50">
    <div class="flex flex-wrap justify-center md:justify-between md:text-left">
      <div class="basis-1/3">
        <footerNewsletter />
      </div> 
      <div class="basis-1/3">
        <footerSuiveznous />
      </div> 
      <div class="basis-1/3">
        <footerContacteznous />
      </div>
    </div>
  </div>
</template>

<script>
import footerNewsletter from './footerActionComponents/FooterNewsletter.vue';
import footerSuiveznous from './footerActionComponents/FooterSuiveznous.vue';
import footerContacteznous from './footerActionComponents/FooterContacteznous.vue';

export default {
    name: 'FooterAction',
    components: {
        footerNewsletter,
        footerSuiveznous,
        footerContacteznous
    },
    setup() {


        return {}
    }
}
</script>
