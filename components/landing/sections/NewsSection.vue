<template>
  <div class="bg-white text-black p-8">
    <div class="flex flex-col md:space-y-0 md:space-x-6 md:flex-row">
      <p class="font-bold text-2xl mb-6">
        Mes dernières actualités
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <NewsCard :news-first="newsFirst" />
      <div class="grid grid-cols-1 md:grid-cols-3 gap-3 ">
        <NewsCardSecondary
          v-for="newSecond in newsSecond"
          :key="newSecond.id"
          :new-second="newSecond"
        />
        <MoreButton />
      </div>
    </div>
  </div>
</template>
  
<script setup>
import NewsCardSecondary from './news/NewsCardSecondary.vue';
import NewsCard from './news/NewsCard.vue';
import MoreButton from '../../template/buttons/MoreButton.vue';

const newsFirst = {
  title: 'Actualité à la Une',
  image: '/images/actualite.jpeg',
  news: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci sit pellentesque amet in duis egestas elit lorem. Leo tristique montes, fringilla et tortor, vitae cras lorem mauris.',
};

const newsSecond =
  [
    {
      id: 1,
      title: 'Actualité secondaire',
      image: '/images/actualite.jpeg',
      news: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci sit pellentesque amet in duis egestas elit lorem. Leo tristique montes, fringilla et tortor, vitae cras lorem mauris.',
    },
    {id: 2,
      title: 'Actualité secondaire',
      image: '/images/actualite.jpeg',
      news: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci sit pellentesque amet in duis egestas elit lorem. Leo tristique montes, fringilla et tortor, vitae cras lorem mauris.',
    },
    {id: 3,
      title: 'Actualité secondaire',
      image: '/images/actualite.jpeg',
      news: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci sit pellentesque amet in duis egestas elit lorem. Leo tristique montes, fringilla et tortor, vitae cras lorem mauris.',
    },
    {id: 4,
      title: 'Actualité secondaire',
      image: '/images/actualite.jpeg',
      news: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci sit pellentesque amet in duis egestas elit lorem. Leo tristique montes, fringilla et tortor, vitae cras lorem mauris.',
    },
    {id: 5,
      title: 'Actualité secondaire',
      image: '/images/actualite.jpeg',
      news: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci sit pellentesque amet in duis egestas elit lorem. Leo tristique montes, fringilla et tortor, vitae cras lorem mauris.',
    },
  ]


</script>