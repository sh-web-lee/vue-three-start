import { camera } from "./core/camera";
import { renderer } from "./core/renderer";
import { objects } from "./objects";

class Three {
  constructor() {}

  init(canvas: HTMLCanvasElement) {
    renderer.init(canvas);
    objects.init();
    camera.init();
  }

  destroy() {
    renderer.destroy();
    objects.destroy();
  }
}

export const three = new Three();
