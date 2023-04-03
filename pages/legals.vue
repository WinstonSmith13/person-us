<template>
<div class="carousel">
    <nuxt-img src="./../public/images/carouselBg/bg-1.jpeg" class="h-full min-w-full object-cover"/>
</div>

  <div class="relative mt-[-50px]">
    <div class="max-w-screen-lg shadow-2xl bg-white p-8 mx-auto">
      <h1 class="text-5xl text-primary font-bold mb-8 ">
        Mentions légales
      </h1>

      <div class="mb-8">
        <h2 class="text-xl font-bold mb-2">
          Présentation de l'application
        </h2>
        <p class="mb-1">
          Nom de l'application : [Insérer le nom de votre application]
        </p>
        <p class="mb-1">
          Editeur de l'application : [Insérer le nom de l'éditeur de l'application]
        </p>
        <p class="mb-1">
          Version de l'application : [Insérer la version de l'application]
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-xl font-bold mb-2">
          Hébergement de l'application
        </h2>
        <p class="mb-1">
          Nom de l'hébergeur : [Insérer le nom de l'hébergeur]
        </p>
        <p class="mb-1">
          Adresse de l'hébergeur : [Insérer l'adresse de l'hébergeur]
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-xl font-bold mb-2">
          Propriété intellectuelle
        </h2>
        <p class="mb-1">
          Tous les droits de propriété intellectuelle relatifs à l'application, incluant sans limitation le code source, les textes, les images, les graphismes, les logos, les marques, les noms commerciaux et autres éléments sont la propriété exclusive de l'éditeur de l'application ou de ses partenaires.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-xl font-bold mb-2">
          Données personnelles
        </h2>
        <p class="mb-1">
          L'application peut collecter des données personnelles sur ses utilisateurs, conformément aux lois en vigueur. Les données collectées seront utilisées dans le cadre du fonctionnement de l'application et pourront être communiquées à des tiers dans le cadre de la réalisation de certaines fonctionnalités de l'application.
        </p>
        <p class="mb-1">
          Les utilisateurs disposent d'un droit d'accès, de modification, de rectification et de suppression des données les concernant, conformément à la loi applicable.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-xl font-bold mb-2">
          Responsabilité
        </h2>
        <p class="mb-1">
          L'éditeur de l'application ne saurait être tenu responsable des dommages directs ou indirects résultant de l'utilisation de l'application, notamment en cas de perte de données ou de détérioration de matériel.
        </p>
        <p class="mb-1">
          L'éditeur de l'application se réserve le droit de modifier ou de mettre fin à tout moment et sans préavis l'application ou les services qui y sont associés.
        </p>
      </div>

      <div class="mb-8">
        <h2 class="text-xl font-bold mb-2">
          Loi
        </h2>
        <p class="mb-1">
          Les présentes mentions légales sont régies par la loi applicable en [Indiquer le pays ou la région où l'application est éditée]. Tout litige relatif à l'application sera soumis à la compétence exclusive des tribunaux de [Indiquer la ville où l'application est éditée].
        </p>
      </div>
      <div>
        <h2 class="text-xl font-bold mb-2">
          Contact
        </h2>
        <p class="mb-1">
          Pour toute question ou demande relative à l'application, vous pouvez contacter l'éditeur à l'adresse suivante : [Insérer l'adresse de contact de l'éditeur].
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.carousel {
  position: relative;
  max-height: 60vh;
  height: 40vh;
  z-index: 0;
}

</style>