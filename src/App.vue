<script setup lang="ts">
import { onMounted } from "vue";
import ThreeCanvas from "./components/ThreeCanvas.vue";
import sizes from "./utils/Sizes";

onMounted(() => {
  sizes.init();
});
</script>

<template>
  <ThreeCanvas />
</template>

<style scoped></style>
