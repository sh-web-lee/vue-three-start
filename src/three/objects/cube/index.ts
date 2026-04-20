import { Mesh, BoxGeometry, MeshBasicMaterial } from "three";
import { scene } from "../../core/scene";

let mesh: Mesh | null = null;
let geometry: BoxGeometry | null = null;
let material: MeshBasicMaterial | null = null;

function init() {
  geometry = new BoxGeometry(1, 1, 1);
  material = new MeshBasicMaterial({ color: 0xff0000 });

  mesh = new Mesh(geometry, material);
}

function destroy() {
  if (!mesh) return;
  scene.instance.remove(mesh);

  if (geometry) geometry.dispose();
  if (material) material.dispose();
  mesh = null;
  geometry = null;
  material = null;
}

export const cube = { init, destroy };
