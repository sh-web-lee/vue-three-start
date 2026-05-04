import { PerspectiveCamera } from "three";
import sizes from "../../utils/Sizes";

// const instance: PerspectiveCamera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

class Camera {
  instance: PerspectiveCamera | null;
  constructor() {
    this.instance = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  }

  init() {
    this.instance?.position.set(0, 0, 5);

    sizes.on("resize", this.resize.bind(this));
  }

  resize() {
    this.instance && (this.instance.aspect = sizes.width / sizes.height);
    this.instance?.updateProjectionMatrix();
  }

  destroy() {
    if (!this.instance) return;
    sizes.off("resize", this.resize.bind(this));
  }
}

export const camera = new Camera();
