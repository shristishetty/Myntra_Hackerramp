import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

window.onload = () => loadModel();

function loadModel() {
  const loader = new GLTFLoader();
  loader.load('avatar.glb',
    (gltf) => {
      setupScene(gltf);
      document.getElementById('avatar-loading').style.display = 'none';
    }, 
    (xhr) => {
      const percentCompletion = Math.round((xhr.loaded / xhr.total) * 100);
      document.getElementById('avatar-loading').innerText = `LOADING... ${percentCompletion}%`
      console.log(`Loading model... ${percentCompletion}%`);
    }, 
    (error) => {
      console.log(error);
    }
  );
}

function setupScene(gltf) {
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true 
    });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    
    const container = document.getElementById('avatar-container');
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    container.appendChild(renderer.domElement);

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      80, container.clientWidth / container.clientHeight);
    camera.position.set(0, 0.2, 0.2);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.minDistance = 10;
    controls.minPolarAngle = 1.4;
    controls.maxPolarAngle = 1.4;
    controls.target = new THREE.Vector3(0, 0.75, 0);
    controls.update();

    // Scene setup
    const scene = new THREE.Scene();

    // Lighting setup
    scene.add(new THREE.AmbientLight());

    const spotlight = new THREE.SpotLight(0xffffff, 20, 8, 1);
    spotlight.penumbra = 0.5;
    spotlight.position.set(0, 4, 2);
    spotlight.castShadow = true;
    scene.add(spotlight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2);
    keyLight.position.set(1, 1, 2);
    keyLight.lookAt(new THREE.Vector3());
    scene.add(keyLight);

    // Load avatar
    const avatar = gltf.scene;
    const scaleFactor = 1.5; // Adjust this factor as needed
  avatar.scale.set(scaleFactor, scaleFactor, scaleFactor);
    avatar.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
    scene.add(avatar);
    


    // // Create ramp
    // const rampWidth = 4;
    // const rampHeight = 0.05;
    // const rampLength = 20; // Adjust the length to make it long

    // const rampGeometry = new THREE.BoxGeometry(rampWidth, rampHeight, rampLength);
    // const rampMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff }); // Adjust the color as needed
    // const rampMesh = new THREE.Mesh(rampGeometry, rampMaterial);

    // rampMesh.castShadow = false;
    // rampMesh.receiveShadow = true;
    // rampMesh.position.y -= 0.25 // Position it half the height below to align with the ground
    // rampMesh.rotation.x = -Math.PI / 100; // Adjust the angle to create a slope

    // scene.add(rampMesh);


    // Load animations
    const mixer = new THREE.AnimationMixer(avatar);
    const clips = gltf.animations;
    const waveClip = THREE.AnimationClip.findByName(clips, 'walk');
    const stumbleClip = THREE.AnimationClip.findByName(clips, 'stagger');
    const waveAction = mixer.clipAction(waveClip);
    const stumbleAction = mixer.clipAction(stumbleClip);

    let isStumbling = false;
    const raycaster = new THREE.Raycaster();
    container.addEventListener('mousedown', (ev) => {
      const coords = {
        x: (ev.offsetX / container.clientWidth) * 2 - 1,
        y: -(ev.offsetY / container.clientHeight) * 2 + 1
      };

      raycaster.setFromCamera(coords, camera);
      const intersections = raycaster.intersectObject(avatar);
  
      if (intersections.length > 0) {
        if (isStumbling) return;

        isStumbling = true;
        stumbleAction.reset();
        stumbleAction.play();
        waveAction.crossFadeTo(stumbleAction, 0.3);

        setTimeout(() => {
          waveAction.reset();
          waveAction.play();
          stumbleAction.crossFadeTo(waveAction, 1);
          setTimeout(() => isStumbling = false, 1000);
        }, 4000)
      }
    });

    window.addEventListener('resize', () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    });

    const clock = new THREE.Clock();
    function animate() {
      requestAnimationFrame(animate);
      mixer.update(clock.getDelta());
      renderer.render(scene, camera);
    }

    animate();
    waveAction.play();
}