<template>
  <div class="bg-secondary text-black p-8">
    <div class="flex flex-col items-center md:flex-row md:items-center md:space-x-6">
      <nuxt-img
        :src="user.image"
        :alt="user.name"
        fit="cover"
        format="webp"
        width="800"
        height="800"
        class="w-24 h-24 border rounded md:w-32 md:h-32"
      />
      <div class="flex flex-col  md:items-center md:justify-between w-full md:w-auto">
        <div class="flex flex-col items-center md:items-start">
          <h4 class="text-lg font-semibold text-center md:text-left">
            <p>{{ user.name }} {{ user.lastname }}</p>
          </h4>
          <h5 class="text-primary font-bold">
            {{ user.activite }}
          </h5>
        </div>
        <button class="h-8 mt-2 px-2 text-white transition-colors duration-150 bg-primary focus:shadow-outline hover:bg-indigo-800">
          VOIR LE PROFIL
        </button>
      </div>
    </div>
    <p class="text-black font-bold text-2xl mt-6">
      Un petit mot pour commencer
    </p>
    <div class="flex justify-center pt-4 space-x-4 align-center">
      <p class="text-black leading-7 md:text-lg md:max-w-4xl">
        {{ user.description }}
      </p>
    </div>
  </div>
</template>

<script setup>

const user = {
  id: 1,
  name: 'Charlie',
  lastname : 'Doe',
  activite: 'Développeuse',
  image: '/images/aiony.jpeg',
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci sit pellentesque amet in duis egestas elit lorem. Leo tristique montes, fringilla et tortor, vitae cras lorem mauris. Purus egestas quam lectus augue vitae viverra. Fames lectus sed ut sagittis volutpat. Mauris tortor tincidunt tempor id tristique vitae risus. Arcu euismod tristique bibendum tristique consectetur etiam ac. Eget elementum natoque lobortis bibendum ultricies mauris. Augue phasellus praesent adipiscing eget eget ante. Arcu felis, elit, eget lacinia. A faucibus commodo viverra quam fames lorem diam in urna. Augue tellus ipsum, cursus vitae magna eu nisi, sed. Pellentesque quis nullam feugiat amet felis vestibulum. Lectus mauris volutpat in enim dui pharetra. Cursus ullamcorper elementum orci, sed maecenas suscipit purus, pharetra. Et mi quam id facilisis sit tempor dapibus sed vel. Vitae eu molestie interdum dui scelerisque tincidunt malesuada turpis cursus. Turpis viverra consequat malesuada gravida vitae cras. Tristique turpis magna ullamcorper scelerisque ut mauris vel nunc. Tempus, egestas sit libero elit, et sit lorem tempus. Feugiat velit sit consectetur velit, suspendisse urna vitae in quis. Est dictum commodo cras velit eget augue felis morbi. Dictumst rhoncus mauris duis morbi blandit varius aliquam purus."
};

</script>