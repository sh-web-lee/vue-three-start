import { camera, renderer } from "./core";
import { objects } from "./objects";

function init(canvas: HTMLCanvasElement) {
  renderer.init(canvas);
  objects.init();
  camera.init();
}

function destroy() {
  objects.destroy();
  renderer.destroy();
}

export const three = { init, destroy };
