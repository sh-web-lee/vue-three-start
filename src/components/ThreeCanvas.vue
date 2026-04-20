<template>
  <canvas class="three-canvas" ref="canvasRef"></canvas>
</template>
<script lang="ts" setup>
import { onMounted, ref, onUnmounted } from "vue";
import { three } from "../three";

const canvasRef = ref<HTMLCanvasElement | null>(null);

onMounted(() => {
  three.init(canvasRef.value!);
});

onUnmounted(() => {
  three.destroy();
});
</script>
<style lang="scss" scoped>
.three-canvas {
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-index-canvas);
}
</style>
