<template>
  <nav>
    <LogoUs class="py-2" />
    <div class="flex flex-row justify-between">
      <MenuButton
        :toggle="toggle"
        @toggle="toggle = !toggle"
        class="bg-primary"
      />
      <SearchButton class="bg-primary" />
    </div>
  </nav>
</template>

<script>
import SearchButton from "./navigationButtons/SearchButton.vue";
import LogoUs from "./icons/LogoUs.vue";
import MenuButton from "./navigationButtons/MenuButton.vue"
export default {
    name: 'NavigationTemplate',
    components: {
    MenuButton,
    LogoUs,
    SearchButton
},

    setup() {
        const toggle = ref(false)
        return {
            toggle,
        }
    }

}
</script>

