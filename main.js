import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

// Set up scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#canvas"),
  antialias: true,
});

// Set up renderer
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

const radius = 1;
const segments = 32;
const colors = [0xff0000, 0x00ff00, 0x0000ff, 0xffff00];
const spheres = new THREE.Group();
// Set up camera position
camera.position.z = 5;

for (let i = 0; i < 4; i++) {
  // Create a sphere geometry
  const geometry = new THREE.SphereGeometry(radius, segments, segments);

  // Create a basic material
  const material = new THREE.MeshBasicMaterial({
    color: colors[i],
  });

  // Create a mesh with the geometry and material
  const sphere = new THREE.Mesh(geometry, material);
  // Add the sphere to the scene
  spheres.add(sphere);
}

scene.add(spheres);

// Set up OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Start the animation loop
animate();
scene.add(cube);

// Set up OrbitControls
