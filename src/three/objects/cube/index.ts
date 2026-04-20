import { Mesh, BoxGeometry, MeshBasicMaterial } from "three";
import { scene } from "../../core/scene";

let mesh: Mesh | null = null;
let geometry: BoxGeometry | null = null;
let material: MeshBasicMaterial | null = null;

const init = () => {
  geometry = new BoxGeometry(1, 1, 1);
  material = new MeshBasicMaterial({ color: "#09aa34" });

  mesh = new Mesh(geometry, material);

  scene.instance.add(mesh);
};

const tick = () => {
  if (!mesh) throw new Error("Mesh not initialized");
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;
};

const destroy = () => {
  if (!mesh) return;
  scene.instance.remove(mesh);

  if (geometry) geometry.dispose();
  if (material) material.dispose();
  mesh = null;
  geometry = null;
  material = null;
};

export const cube = { init, destroy };
