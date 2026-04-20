import { cube } from "./cube";

function init() {
  cube.init();
}

function destroy() {
  cube.destroy();
}

export const objects = { init, destroy };
