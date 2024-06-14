// import * as THREE from 'three';

const maploader = (scene) => {
    const images = '/assets/wood.jpg';
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
}
export default maploader;