<template>
    <div>
        <slot />
    </div>
</template>

<script setup>

console.log(this.$children);

const index = 0;
const slides = this.$children;

</script>

