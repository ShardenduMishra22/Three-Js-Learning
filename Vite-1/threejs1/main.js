import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Create a canvas element
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);

// 1.) create a scene
const scene = new THREE.Scene();
scene.background = new THREE.Color("#212121");

// 2.) create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// 3.) create a renderer
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

// Add OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);

// 4.) create objects

// Dodecahedron
const doc_geometry = new THREE.DodecahedronGeometry();
let doc_material = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
const dodecahedron = new THREE.Mesh(doc_geometry, doc_material);
scene.add(dodecahedron);

// Cube
const cube_geometry = new THREE.BoxGeometry();
let cube_material = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(cube_geometry, cube_material);
cube.position.y = -1.5;
scene.add(cube);

// 5.) Add light
const light = new THREE.PointLight(0x0000ff, 1, 100); // Blue light
light.position.set(5, 5, 5);
scene.add(light);

// 6.) Color change function
function changeColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  doc_material.color.set(`#${randomColor}`);
  cube_material.color.set(`#${randomColor}`);
  light.color.set(`#${randomColor}`); // Change light color to match
}

// Listen for keypress 'c' to change colors
window.addEventListener('keydown', (event) => {
  if (event.key === 'c') {
    changeColor();
  }
});

// 7.) Animation loop
function animate() {
  requestAnimationFrame(animate);

  // Update controls
  controls.update();

  // Rotation
  dodecahedron.rotation.x += 0.01;
  dodecahedron.rotation.y += 0.01;

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();
