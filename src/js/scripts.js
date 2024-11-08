import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import starsTexture from '../img/stars.jpg';
import sunTexture from '../img/sun.jpg';
import mercuryTexture from '../img/mercury.jpg';
import venusTexture from '../img/venus.jpg';
import earthTexture from '../img/earth.jpg';
import marsTexture from '../img/mars.jpg';
import jupiterTexture from '../img/jupiter.jpg';
import saturnTexture from '../img/saturn.jpg';
import saturnRingTexture from '../img/saturn ring.png';
import uranusTexture from '../img/uranus.jpg';
import uranusRingTexture from '../img/uranus ring.png';
import neptuneTexture from '../img/neptune.jpg';

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const orbit = new OrbitControls(camera, renderer.domElement);

camera.position.set(-90, 140, 140);
orbit.update();

const ambientLight = new THREE.AmbientLight(0x333333);
scene.add(ambientLight);

const cubeTextureLoader = new THREE.CubeTextureLoader();
scene.background = cubeTextureLoader.load([
    starsTexture,
    starsTexture,
    starsTexture,
    starsTexture,
    starsTexture,
    starsTexture
]);

const textureLoader = new THREE.TextureLoader();

function createPlanete(size, texture, position, ring) {
    const geo = new THREE.SphereGeometry(size, 30, 30);
    const mat = new THREE.MeshStandardMaterial({
        map: textureLoader.load(texture)
    });
    const mesh = new THREE.Mesh(geo, mat);
    const obj = new THREE.Object3D();
    obj.add(mesh);
    if (ring) {
        const ringGeo = new THREE.RingGeometry(
            ring.innerRadius,
            ring.outerRadius,
            32
        );
        const ringMat = new THREE.MeshBasicMaterial({
            map: textureLoader.load(ring.texture),
            side: THREE.DoubleSide
        });
        const ringMesh = new THREE.Mesh(ringGeo, ringMat);
        obj.add(ringMesh);
        ringMesh.position.x = position;
        ringMesh.rotation.x = -0.5 * Math.PI;
    }
    scene.add(obj);
    mesh.position.x = position;

    obj.userData.link = getPlanetLink(texture);

    return { mesh, obj };
}

function getPlanetLink(texture) {
    switch (texture) {
        case sunTexture: return 'http://localhost:5173/Clients';
        case mercuryTexture: return 'http://localhost:5173/';
        case venusTexture: return 'http://localhost:5173/Portfolio';
        case earthTexture: return 'http://localhost:5173/Joinus';
        case marsTexture: return 'http://localhost:5173/mars';
        case jupiterTexture: return 'http://localhost:5173/jupiter';
        case saturnTexture: return 'http://localhost:5173/service';
        case uranusTexture: return 'http://localhost:5173/uranus';
        case neptuneTexture: return 'http://localhost:5173/contact';
        default: return '';
    }
}

// Create sun
const sunGeo = new THREE.SphereGeometry(16, 30, 30);
const sunMat = new THREE.MeshBasicMaterial({
    map: textureLoader.load(sunTexture)
});
const sun = new THREE.Mesh(sunGeo, sunMat);
const sunObj = new THREE.Object3D();
sunObj.add(sun);
scene.add(sunObj);
sunObj.userData.link = getPlanetLink(sunTexture);

const mercury = createPlanete(3.2, mercuryTexture, 28);
const venus = createPlanete(5.8, venusTexture, 44);
const earth = createPlanete(6, earthTexture, 62);
const mars = createPlanete(4, marsTexture, 78);
const jupiter = createPlanete(12, jupiterTexture, 100);
const saturn = createPlanete(10, saturnTexture, 138, {
    innerRadius: 10,
    outerRadius: 20,
    texture: saturnRingTexture
});
const uranus = createPlanete(7, uranusTexture, 176, {
    innerRadius: 7,
    outerRadius: 12,
    texture: uranusRingTexture
});
const neptune = createPlanete(7, neptuneTexture, 200);

const pointLight = new THREE.PointLight(0xFFFFFF, 2, 300);
scene.add(pointLight);

// Raycaster for detecting mouse clicks and hovering
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

window.addEventListener('click', onMouseClick, false);
window.addEventListener('mousemove', onMouseMove, false);

function onMouseClick(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);
    if (intersects.length > 0) {
        const object = intersects[0].object;
        if (object.parent && object.parent.userData && object.parent.userData.link) {
            window.open(object.parent.userData.link, '_blank');
        }
    }
}

function onMouseMove(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);
    
    // Check if the mouse is over any clickable object
    if (intersects.length > 0 && intersects[0].object.parent.userData.link) {
        renderer.domElement.style.cursor = 'pointer';
    } else {
        renderer.domElement.style.cursor = 'default';
    }
}

function animate() {
    sun.rotateY(0.01);
    mercury.mesh.rotateY(0.01);
    venus.mesh.rotateY(0.008);
    earth.mesh.rotateY(0.01);
    mars.mesh.rotateY(0.009);
    jupiter.mesh.rotateY(0.02);
    saturn.mesh.rotateY(0.018);
    uranus.mesh.rotateY(0.017);
    neptune.mesh.rotateY(0.015);

    mercury.obj.rotateY(0.002); // Slower orbit for Mercury
    venus.obj.rotateY(0.004); // Slower orbit for Venus
    earth.obj.rotateY(0.003); // Slower orbit for Earth
    mars.obj.rotateY(0.002); // Slower orbit for Mars
    jupiter.obj.rotateY(0.003); // Slower orbit for Jupiter
    saturn.obj.rotateY(0.0006); // Slower orbit for Saturn
    uranus.obj.rotateY(0.0004); // Slower orbit for Uranus
    neptune.obj.rotateY(0.0002); // Slower orbit for Neptune
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);

window.addEventListener('resize', function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
