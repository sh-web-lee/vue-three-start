import { PerspectiveCamera } from "three";
import sizes from "../../utils/Sizes";

/**
 * Camera instance
 * Creates a perspective camera with standard settings
 * - Field of view: 75 degrees
 * - Aspect ratio: matches window dimensions
 * - Near plane: 0.1 units
 * - Far plane: 1000 units
 */
const instance: PerspectiveCamera = new PerspectiveCamera(
  75, // fov - Field of view in degrees
  window.innerWidth / window.innerHeight, // aspect - Width/height ratio
  0.1, // near - Near clipping plane
  1000, // far - Far clipping plane
);

/**
 * Initialize the camera
 * Sets initial position and subscribes to resize events
 */
const init = () => {
  // Position camera 5 units away from the scene along Z-axis
  instance.position.set(0, 0, 5);

  // Subscribe to window resize events
  sizes.on("resize", resize);

  // Call resize immediately to set initial aspect ratio
  resize();
};

/**
 * Handle window resize events
 * Updates camera aspect ratio and projection matrix
 * Prevents rendering distortion when window dimensions change
 */
const resize = () => {
  // Update aspect ratio based on current dimensions
  instance.aspect = sizes.width / sizes.height;

  // Recalculate camera's projection matrix
  // Required after changing aspect ratio or camera properties
  instance.updateProjectionMatrix();
};

/**
 * Clean up camera resources
 * Unsubscribes from resize events to prevent memory leaks
 */
const destroy = () => {
  // Guard clause: exit if instance doesn't exist
  if (!instance) return;

  // Remove resize event listener
  sizes.off("resize", resize);
};

/**
 * Camera module exports
 * Provides controlled access to camera functionality
 */
export const camera = {
  init, // Initialize the camera
  destroy, // Clean up resources
  instance, // Direct access to Three.js camera instance
};
