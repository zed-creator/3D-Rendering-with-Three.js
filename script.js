// import MathUtils from './MathUtils'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  moon.rotation.x += 0.05;
  moon.rotation.y += 0.075;
  moon.rotation.z += 0.05;

  jeff.rotation.y += 0.01;
  jeff.rotation.z += 0.01;

  camera.position.z = t * -0.01;
  camera.position.x= t * -0.0002;
  camera.position.y = t * -0.0002;
}

document.body.onscroll = moveCamera

// const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
// const material = new THREE.MeshStandardMaterial({ color: 0x2874 });
// const torus = new THREE.Mesh(geometry, material);

// scene.add(torus)

const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(5, 5, 5)

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight)

const lightHelper = new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.GridHelper(10000, 2500);
scene.add(lightHelper,)

const controls = new THREE.OrbitControls(camera, renderer.domElement);

// Avatar 

const galaxyTexture = new THREE.TextureLoader().load('cool-galaxy.jpg');

const galaxy = new THREE.Mesh(
  new THREE.BoxGeometry(3, 3, 3),
  new THREE.MeshBasicMaterial({map: galaxyTexture})
);

scene.add(galaxy);

// Solar System

const sunTexture = new THREE.TextureLoader().load('sun.jpg');

const sun = new THREE.Mesh(
  new THREE.SphereGeometry(8, 60, 60),
  new THREE.MeshBasicMaterial({
    map: sunTexture
    })
);

scene.add(sun)

const mercuryTexture = new THREE.TextureLoader().load('mercury.jpeg');

const mercury = new THREE.Mesh(
  new THREE.SphereGeometry(2, 20,20),
  new THREE.MeshBasicMaterial({
    map: mercuryTexture
    })
);

scene.add(mercury)

mercury.position.z = 15;
mercury.position.setX(-2);

const venusTexture = new THREE.TextureLoader().load('venus.jpg');

const venus = new THREE.Mesh(
  new THREE.SphereGeometry(2, 33, 33),
  new THREE.MeshBasicMaterial({
    map: venusTexture
    })
);

scene.add(venus)

venus.position.z = 25;
venus.position.setX(-6);


const earthTexture = new THREE.TextureLoader().load('earth.jpg');

const earth = new THREE.Mesh(
  new THREE.SphereGeometry(3, 33, 33),
  new THREE.MeshBasicMaterial({
    map: earthTexture
    })
);

scene.add(earth)

earth.position.z = 40;
earth.position.setX(-20);

const moonTexture = new THREE.TextureLoader().load('moon.jpg');
const normalTexture = new THREE.TextureLoader().load('normal.jpg');

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(2, 15, 15),
  new THREE.MeshBasicMaterial({
    map: moonTexture,
    normalMap: normalTexture
    })
);

scene.add(moon)

moon.position.z = 46;
moon.position.setX(-30);

const marsTexture = new THREE.TextureLoader().load('mars.jpeg');

const mars = new THREE.Mesh(
  new THREE.SphereGeometry(2.5, 26, 26),
  new THREE.MeshBasicMaterial({
    map: marsTexture
    })
);

scene.add(mars)

mars.position.z = 60;
mars.position.setX(-70);


const jupiterTexture = new THREE.TextureLoader().load('jupiter.jpg');

const jupiter = new THREE.Mesh(
  new THREE.SphereGeometry(6, 50, 50),
  new THREE.MeshBasicMaterial({
    map: jupiterTexture
    })
);

scene.add(jupiter)

jupiter.position.z = 80;
jupiter.position.setX(-90);


const saturnTexture = new THREE.TextureLoader().load('saturn.jpg');

const saturn = new THREE.Mesh(
  new THREE.SphereGeometry(5, 45, 45),
  new THREE.MeshBasicMaterial({
    map: saturnTexture
    })
);

scene.add(saturn)

saturn.position.z = 100;
saturn.position.setX(-120);

// const saturnringsTexture = new THREE.TextureLoader().load('saturnrings.jpg');

// const saturnrings = new THREE.Mesh(
//   new THREE.CircleGeometry(60, 60),
//   new THREE.MeshBasicMaterial({
//     map: saturnringsTexture
//     })
// );

// scene.add(saturnrings)

// saturnrings.position.z = 100;
// saturnrings.position.setX(-120);


// const circle = {
//   // The geometry: the shape & size of the object
//   geometry: new THREE.CircleGeometry(5, 60),
//   // The material: the appearance (color, texture) of the object
//   material: new THREE.MeshBasicMaterial({ color: 0xff8000 })
// };
const geometry = new THREE.CircleGeometry( 5, 60 );
const material = new THREE.MeshBasicMaterial( { color: 0xff8000 } );
const circle = new THREE.Mesh( geometry, material );
circle.position.z = 100;
circle.position.setX(-120);

scene.add(circle);

const uranusTexture = new THREE.TextureLoader().load('uranus.jpg');

const uranus = new THREE.Mesh(
  new THREE.SphereGeometry(5, 45, 45),
  new THREE.MeshBasicMaterial({
    map: uranusTexture
    })
);

scene.add(uranus)

uranus.position.z = 120;
uranus.position.setX(-140);

const neptuneTexture = new THREE.TextureLoader().load('neptune.jpg');

const neptune = new THREE.Mesh(
  new THREE.SphereGeometry(5, 45, 45),
  new THREE.MeshBasicMaterial({
    map: neptuneTexture
    })
);

scene.add(neptune)

neptune.position.z = 140;
neptune.position.setX(-160);


function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial({color: 0xffffff})
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3).fill().map(() => 500 * Math.random() - 100);

  star.position.set(x, y, z);
  scene.add(star)

}

  Array(500).fill().forEach(addStar)

  const spaceTexture = new THREE.TextureLoader().load('space.jpg');
  scene.background = spaceTexture;

function animate() {
  requestAnimationFrame(animate)

  // torus.rotation.x += 0.01;
  // torus.rotation.y += 0.005;
  // torus.rotation.z += 0.01;

  controls.update();

  renderer.render(scene, camera);
}

animate();