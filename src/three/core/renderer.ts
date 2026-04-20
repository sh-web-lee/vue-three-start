import { WebGLRenderer } from "three";
import sizes from "../../utils/Sizes";

let instance: WebGLRenderer | null = null;

const init = (canvas: HTMLCanvasElement) => {
  if (instance) return;
  instance = new WebGLRenderer({ canvas, antialias: true, alpha: true });

  sizes.on("resize", resize);
  resize();
};

const resize = () => {
  if (!instance) return;
  instance.setSize(sizes.width, sizes.height);
  instance.setPixelRatio(sizes.pixelRatio);
};

const destroy = () => {
  if (!instance) return;
  instance.dispose();
  instance = null;
};

export const renderer = { init, destroy };
