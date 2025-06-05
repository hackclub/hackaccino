import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

function renderModel(containerId, modelName) {
  const container = document.getElementById(containerId);

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    75,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  );
  if (modelName === "CrystalBall" || modelName === "Warlock") {
    camera.position.set(0, 0, 2);
  } else {
    camera.position.set(0, 0, 1);
  }

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setClearColor(0x000000, 0);
  renderer.outputEncoding = THREE.sRGBEncoding;
  container.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.enableZoom = false;
  controls.minPolarAngle = Math.PI / 2;
  controls.maxPolarAngle = Math.PI / 2;

  if (modelName !== "CrystalBall") {
    const topLight = new THREE.DirectionalLight(0xf5f5f5, 1.5);
    topLight.position.set(0, 10, 0);
    scene.add(topLight);
  }
  if (modelName === "CrystalBall") {
    const topLight = new THREE.DirectionalLight(0x000000, 1.5);
    topLight.position.set(0, 10, 0);
    scene.add(topLight);
  }
  if (modelName !== "Warlock") {

    const rimLight = new THREE.DirectionalLight(0xffffff, 0.6);
    rimLight.position.set(-5, 30, 5);
    scene.add(rimLight);

    const ambient = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambient);
  }

  let object;

  const loader = new GLTFLoader();
  loader.load(
    `models/${modelName}.glb`,
    (gltf) => {
      object = gltf.scene;

      const box = new THREE.Box3().setFromObject(object);
      const size = new THREE.Vector3();
      box.getSize(size);
      const center = new THREE.Vector3();
      box.getCenter(center);

      object.position.sub(center);
      const maxDim = Math.max(size.x, size.y, size.z);
      const scale = 1 / maxDim;
      object.scale.setScalar(scale);

      scene.add(object);
    },
    (xhr) => {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    (error) => {
      console.error("Error loading model:", error);
    }
  );

  let mouseX = window.innerWidth / 2;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
  });

  let targetRotationY = 0;

  function animate() {
    requestAnimationFrame(animate);

    if (object) {
      if (modelName === "CrystalBall" || modelName === "Warlock") {
        object.rotation.y += 0.01;
      }
      else {
        const normalizedMouseX = mouseX / window.innerWidth;
        targetRotationY = THREE.MathUtils.lerp(-1, 1, normalizedMouseX);
        object.rotation.y += (targetRotationY - object.rotation.y) * 0.05;
        object.rotation.y = THREE.MathUtils.clamp(object.rotation.y, -1, 1);
      }
    }

    controls.update();
    renderer.render(scene, camera);
  }

  animate();

  const resizeObserver = new ResizeObserver(() => {
    const width = container.clientWidth;
    const height = container.clientHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  });

  resizeObserver.observe(container);
}

renderModel("model0", "CrystalBall");
renderModel("model1", "Warlock");
renderModel("model2", "SpellBook");
renderModel("model3", "Potion");
renderModel("model4", "MagicWand");
renderModel("model5", "Treasure");
