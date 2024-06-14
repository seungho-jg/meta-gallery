// import * as THREE from 'three';

const socket = io();

// Three.js basic setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);
camera.position.z = 5;

const animate = function () {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
};

animate();

document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  let move = { x: 0, y: 0, z: 0 };

  if (keyName === 'ArrowUp') move.z = -0.1;
  if (keyName === 'ArrowDown') move.z = 0.1;
  if (keyName === 'ArrowLeft') move.x = -0.1;
  if (keyName === 'ArrowRight') move.x = 0.1;

  socket.emit('move', move);
});

socket.on('move', (data) => {
  cube.position.x += data.x;
  cube.position.y += data.y;
  cube.position.z += data.z;
});
