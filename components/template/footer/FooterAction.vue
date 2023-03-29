<template>
  <div class="shadow-2xl">   
        <footerNewsletter />   
        <footerSuiveznous />
        <footerContacteznous />
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
