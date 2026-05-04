import { WebGLRenderer } from "three";
import sizes from "../../utils/Sizes";
import { scene } from "./scene";
import { camera } from "./camera";
import gsap from "gsap";

class Renderer {
  instance: WebGLRenderer | null;
  constructor() {
    this.instance = null;
  }

  init(canvas: HTMLCanvasElement) {
    if (this.instance) return;
    this.instance = new WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });

    sizes.on("resize", this.#resize.bind(this));
    gsap.ticker.add(this.#ticker.bind(this));
    this.#resize();
  }

  getInstance = () => {
    if (!this.instance) throw new Error("Renderer not initialized");
    return this.instance;
  };

  #ticker() {
    if (!this.instance) return;
    this.instance.render(scene.instance, camera.instance!);
  }

  #resize() {
    if (!this.instance) return;
    this.instance?.setSize(sizes.width, sizes.height);
    this.instance?.setPixelRatio(sizes.pixelRatio);
  }

  destroy() {
    if (!this.instance) return;
    this.instance.dispose();
    this.instance = null;
  }
}

export const renderer = new Renderer();
