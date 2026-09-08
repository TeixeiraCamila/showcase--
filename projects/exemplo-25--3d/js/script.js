import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

(function () {
  "use strict";

  let scene, camera, renderer, controls;
  let model = null;
  let clock;
  let container;

  function init() {
    container = document.querySelector('.imagem__3D');
    if (!container) return;

    // Tracks elapsed time for animations
    clock = new THREE.Clock();

    /* ── Renderer ─────────────────────────── */
    // Creates WebGL renderer with antialiasing and transparent background
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    // Limits pixel ratio to 2 for performance
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    // Sets canvas size to match container dimensions
    renderer.setSize(container.clientWidth, container.clientHeight);
    // Applies cinematic color grading for realistic tones
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    // Brightens the overall scene exposure
    renderer.toneMappingExposure = 1.2;
    // Enables shadow rendering
    renderer.shadowMap.enabled = true;
    // Uses soft shadow edges for realistic look
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    // Appends the canvas element to the container div
    container.appendChild(renderer.domElement);

    /* ── Scene ────────────────────────────── */
    // Creates the 3D scene graph root
    scene = new THREE.Scene();

    /* ── Camera ───────────────────────────── */
    // Perspective camera with 40° FOV for less distortion
    camera = new THREE.PerspectiveCamera(
      40,
      container.clientWidth / container.clientHeight,
      0.1,  // Near clipping plane
      100   // Far clipping plane
    );
    // Positions camera in front and slightly above
    camera.position.set(0, 2, 6);

    /* ── Controls ─────────────────────────── */
    // Orbit controls for mouse/touch rotation and zoom
    controls = new OrbitControls(camera, renderer.domElement);
    // Smooths camera movement with inertia
    controls.enableDamping = true;
    controls.dampingFactor = 0.06;
    // Prevents zooming too close
    controls.minDistance = 3;
    // Prevents zooming too far
    controls.maxDistance = 14;
    // Limits vertical rotation to prevent going below ground
    controls.maxPolarAngle = Math.PI / 2.6;
    // Limits vertical rotation to prevent looking from straight above
    controls.minPolarAngle = Math.PI / 5;
    // Sets the point the camera orbits around
    controls.target.set(0, 1, 0);
    // Applies initial control state
    controls.update();

    /* ── Lights (studio 3-point) ──────────── */
    setupLights();

    /* ── Load model ───────────────────────── */
    loadModel();

    /* ── Events ───────────────────────────── */
    window.addEventListener('resize', onResize);

    animate();
  }

  /* ══════════════════════════════════════════
     Lighting — 3-point studio setup
     ══════════════════════════════════════════ */

  function setupLights() {
    // Key light — primary illumination, white, high intensity
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.0);
    keyLight.position.set(5, 8, 5);
    // Key light casts shadows
    keyLight.castShadow = true;
    // High-resolution shadow map for sharp edges
    keyLight.shadow.mapSize.width = 2048;
    keyLight.shadow.mapSize.height = 2048;
    // Shadow camera near/far planes define shadow volume
    keyLight.shadow.camera.near = 0.5;
    keyLight.shadow.camera.far = 30;
    // Shadow camera frustum boundaries
    keyLight.shadow.camera.left = -8;
    keyLight.shadow.camera.right = 8;
    keyLight.shadow.camera.top = 8;
    keyLight.shadow.camera.bottom = -8;
    // Reduces shadow acne artifacts
    keyLight.shadow.bias = -0.0005;
    // Softens shadow edges
    keyLight.shadow.radius = 3;
    // Adds key light to scene
    scene.add(keyLight);

    // Fill light — softer, cool-toned, no shadows
    const fillLight = new THREE.DirectionalLight(0x8899cc, 0.5);
    fillLight.position.set(-6, 4, -3);
    scene.add(fillLight);

    // Rim light — warm backlight for edge separation
    const rimLight = new THREE.DirectionalLight(0xffeedd, 0.9);
    rimLight.position.set(0, 5, -8);
    scene.add(rimLight);

    // Ambient light — fills dark areas with low-intensity uniform light
    scene.add(new THREE.AmbientLight(0x333344, 0.4));

    // Hemisphere light — simulates sky (blue) and ground (brown) bounce
    scene.add(new THREE.HemisphereLight(0xb1e1ff, 0x3d2817, 0.35));
  }

  /* ══════════════════════════════════════════
     Model loading
     ══════════════════════════════════════════ */

  function loadModel() {
    // Creates loader for .glb/.gltf 3D model files
    const loader = new GLTFLoader();

    loader.load(
      './assets/red_pokemon.glb',
      (gltf) => {
        // Extracts the scene hierarchy from the loaded GLTF
        model = gltf.scene;

        /* Reset transforms before calculations */
        model.position.set(0, 0, 0);
        model.rotation.set(0, 0, 0);
        model.scale.set(1, 1, 1);

        /* Compute bounding box on original model */
        // Calculates the axis-aligned bounding box of the model
        const box = new THREE.Box3().setFromObject(model);
        // Gets the size (width, height, depth) of the bounding box
        const size = box.getSize(new THREE.Vector3());
        // Gets the center point of the bounding box
        const center = box.getCenter(new THREE.Vector3());

        /* Scale to target height of 2.5 units */
        const targetHeight = 2.5;
        const scaleFactor = targetHeight / size.y;
        // Uniformly scales the model to fit target height
        model.scale.setScalar(scaleFactor);

        /* Recompute after scaling */
        // Recalculates bounding box after applying scale
        const scaledBox = new THREE.Box3().setFromObject(model);
        const scaledCenter = scaledBox.getCenter(new THREE.Vector3());

        /* Center horizontally and place bottom at y=0 */
        // Centers model on X/Z and lifts it so bottom sits on ground plane
        model.position.set(
          -scaledCenter.x,
          -scaledBox.min.y,
          -scaledCenter.z
        );

        /* Enable shadows */
        // Traverses all child objects in the model hierarchy
        model.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;    // Mesh casts shadows
            child.receiveShadow = true; // Mesh receives shadows
          }
        });

        // Adds the model to the scene graph
        scene.add(model);
        onModelLoaded();
      },
      (progress) => {
        if (progress.total) {
          const pct = Math.round((progress.loaded / progress.total) * 100);

        }
      },
      (err) => {
        console.error('Error loading model:', err);
      }
    );
  }

  function onModelLoaded() {
    const screen = document.querySelector('.loading-screen');
    if (screen) screen.classList.add('is-hidden');
  }

  /* ══════════════════════════════════════════
     Animation loop
     ══════════════════════════════════════════ */

  function animate() {
    // Schedules the next frame for continuous rendering
    requestAnimationFrame(animate);
    // Returns time in seconds since clock started
    const elapsed = clock.getElapsedTime();

    // Rotates model continuously on Y axis (horizontal spin)
    if (model) {
      model.rotation.y = elapsed * 0.2;
    }

    // Applies damping to camera movement
    controls.update();
    // Renders the scene from the camera's perspective
    renderer.render(scene, camera);
  }

  /* ══════════════════════════════════════════
     Resize
     ══════════════════════════════════════════ */

  function onResize() {
    const w = container.clientWidth;
    const h = container.clientHeight;
    // Updates camera aspect ratio to match new dimensions
    camera.aspect = w / h;
    // Recalculates projection matrix after aspect change
    camera.updateProjectionMatrix();
    // Resizes renderer canvas to match container
    renderer.setSize(w, h);
  }

  /* ── Boot ────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', init);

  /* ── Spotlight do título — gradiente segue o mouse ── */
  const title = document.querySelector('.header__title');
  if (title) {
    title.addEventListener('mousemove', function (e) {
      const rect = title.getBoundingClientRect();
      title.style.setProperty('--mx', e.clientX - rect.left + 'px');
      title.style.setProperty('--my', e.clientY - rect.top + 'px');
    });
  }
})();
