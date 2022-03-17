import './style.css'
import * as THREE from 'three'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// document.querySelector('#app').innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `

//scene
const scene = new THREE.Scene();


//camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


//render
const render = new THREE.WebGLRenderer({
  canvas:document.querySelector('#bg'),

});


//render controls
render.setPixelRatio(window.devicePixelRatio);
render.setSize(window.innerWidth, window.innerHeight);

//camera position
camera.position.setZ(30);
camera.position.setX(-3);


//render the scene and camera
render.render(scene, camera);


//torus geometry
const geometry = new THREE.TorusGeometry(10, 3, 16 , 100);
const material = new THREE.MeshStandardMaterial({ color: 0x454377 });
const torus = new THREE.Mesh(geometry, material);

//add torus to scene
// scene.add(torus)


//point light
const pointLight = new THREE.PointLight(0xFFFFFF);
pointLight.position.set(5,5,5);


//ambinet light
const ambientLight = new THREE.AmbientLight(0xffffff);


//add light to scene
scene.add(pointLight,ambientLight);


//controls
const controls = new OrbitControls(camera, render.domElement);

//lighHelper
const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(200,100);
scene.add(lightHelper,gridHelper);


//add star
function addStar(){
  const geometry = new THREE.SphereGeometry(0.15);
  const material = new THREE.MeshStandardMaterial({ color: 0x808080 });
  const star = new THREE.Mesh(geometry, material);
  const [x, y, z] = Array(3).fill().map(()=>THREE.MathUtils.randFloatSpread(100));

  star.position.set(x,y,z);


  //star position animate
  function animate(){
    requestAnimationFrame(animate);
    star.position.x += 0.005;
    star.position.y += 0.005;
    star.position.z += 0.005;
    // render.render(scene, camera);
    // controls.update();
  }
  
  scene.add(star);

  animate();

}

let animateBlender = new GLTFLoader();

let animateMesh;
animateBlender.load('./New folder/scene.gltf', (gltf)=>{
  animateMesh = gltf.scene({ color: 0x454377 });
  
  scene.add(animateMesh);
})

setInterval(makeStars(),10);
function makeStars(){
  Array(600).fill().forEach(addStar);
}


//space texture
const spaceTexture = new THREE.TextureLoader().load('space.jpg');
//set background
scene.background = spaceTexture;


//make a new texture
const aryanTexture = new THREE.TextureLoader().load('aryan.png');
//map the material in a box as a mesh
const aryan = new THREE.Mesh(
  new THREE.BoxGeometry(3,3,3),
  new THREE.MeshBasicMaterial({
    map : aryanTexture,
  }),
);

// scene.add(aryan);


//moon texture
const moonTexture = new THREE.TextureLoader().load('moon.jpg');
const normalTexture = new THREE.TextureLoader().load('normal.jpg');
//map moon texture to a mesh
const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3,32,32),
  new THREE.MeshBasicMaterial({
    map : moonTexture,
    normalMap : normalTexture,
  })
)

scene.add(moon);

//position of moon
// moon.position.z = 30;
// moon.position.setX(-10);


// move the camera
function moveCamera(){
  const t = document.body.getBoundingClientRect().top;

  moon.rotation.x += 0.05;
  moon.rotation.y += 0.075;
  moon.rotation.z += 0.05;

  aryan.rotation.y += 0.05
  aryan.rotation.z += 0.01;

  camera.position.z = t*-0.01;
  camera.position.x = t*-0.0002;
  camera.position.y = t*0.0004;
}

//move the camera on scrolling
document.body.onscroll = moveCamera


// render.render(scene, camera);
function animate(){
  requestAnimationFrame(animate);

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  // aryan.rotation.x += 0.001;
  aryan.rotation.y += 0.005;
  // aryan.rotation.z += 0.001;
  
  moon.rotation.x += 0.0009;
  moon.rotation.y += 0.0009;
  moon.rotation.z += 0.0009;
  moon
  render.render(scene, camera);
  controls.update();
}

animate();