import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
import gsap from 'gsap';

class PirateHelmCockpit {
    constructor() {
        this.scene = new THREE.Scene();
        this.camera = null;
        this.renderer = null;
        this.composer = null;
        this.controls = null;
        this.clock = new THREE.Clock();
        this.wheelGroup = null;
        this.gauges = [];
        this.particles = null;
        this.compass = { bearing: 347, display: null };
        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2();
        this.dragControls = {
            isDragging: false,
            selectedObject: null,
            offset: new THREE.Vector3()
        };
        
        this.init();
    }
    
    init() {
        this.setupCamera();
        this.setupRenderer();
        this.setupPostProcessing();
        this.setupControls();
        this.setupLighting();
        this.createEnvironment();
        this.createHelm();
        this.createGauges();
        this.createParticles();
        this.setupEventListeners();
        this.hideLoadingScreen();
        this.animate();
    }
    
    setupCamera() {
        this.camera = new THREE.PerspectiveCamera(
            65,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        this.camera.position.set(0, 1.8, 4);
        this.camera.lookAt(0, 1.2, 0);
    }
    
    setupRenderer() {
        this.renderer = new THREE.WebGLRenderer({
            canvas: document.getElementById('canvas'),
            antialias: true,
            alpha: false
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1.8;
        this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    }
    
    setupPostProcessing() {
        this.composer = new EffectComposer(this.renderer);
        
        const renderPass = new RenderPass(this.scene, this.camera);
        this.composer.addPass(renderPass);
        
        const bloomPass = new UnrealBloomPass(
            new THREE.Vector2(window.innerWidth, window.innerHeight),
            0.5,
            0.4,
            0.85
        );
        this.composer.addPass(bloomPass);
        
        const vignetteShader = {
            uniforms: {
                tDiffuse: { value: null },
                amount: { value: 0.8 }
            },
            vertexShader: `
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,
            fragmentShader: `
                uniform sampler2D tDiffuse;
                uniform float amount;
                varying vec2 vUv;
                void main() {
                    vec4 color = texture2D(tDiffuse, vUv);
                    float dist = distance(vUv, vec2(0.5, 0.5));
                    color.rgb *= smoothstep(0.8, 0.4, dist * amount);
                    gl_FragColor = color;
                }
            `
        };
        
        const vignettePass = new ShaderPass(vignetteShader);
        this.composer.addPass(vignettePass);
    }
    
    setupControls() {
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;
        this.controls.minDistance = 2;
        this.controls.maxDistance = 8;
        this.controls.maxPolarAngle = Math.PI * 0.85;
        this.controls.target.set(0, 1.2, 0);
    }
    
    setupLighting() {
        // Ambient - much brighter golden hour warmth
        const ambientLight = new THREE.AmbientLight(0xffaa88, 1.2);
        this.scene.add(ambientLight);
        
        // Golden hour sun - strong edge lighting
        const sunLight = new THREE.DirectionalLight(0xff8844, 2.5);
        sunLight.position.set(-15, 3, -10);
        sunLight.castShadow = true;
        sunLight.shadow.mapSize.width = 4096;
        sunLight.shadow.mapSize.height = 4096;
        sunLight.shadow.camera.near = 0.5;
        sunLight.shadow.camera.far = 50;
        sunLight.shadow.camera.left = -15;
        sunLight.shadow.camera.right = 15;
        sunLight.shadow.camera.top = 15;
        sunLight.shadow.camera.bottom = -15;
        this.scene.add(sunLight);
        
        // Sky reflection light
        const skyLight = new THREE.DirectionalLight(0x4466aa, 0.4);
        skyLight.position.set(5, 10, 5);
        this.scene.add(skyLight);
        
        // Compass glow - seafoam green luminescent
        const compassLight = new THREE.PointLight(0x66ffcc, 4, 15);
        compassLight.position.set(0, 1.2, 0);
        this.scene.add(compassLight);
        
        // Caustic reflection under compass
        const causticLight = new THREE.SpotLight(0x66ffcc, 1.0, 10, Math.PI / 4, 0.5);
        causticLight.position.set(0, 1.2, 0);
        causticLight.target.position.set(0, 0, 0);
        this.scene.add(causticLight);
        this.scene.add(causticLight.target);
        
        // Golden hour gradient fill - brighter
        const fillLight = new THREE.HemisphereLight(0xffcc99, 0x445588, 1.2);
        this.scene.add(fillLight);
        
        // Flickering lantern lights - animated gold
        const lanternLight1 = new THREE.PointLight(0xffaa44, 2.5, 10);
        lanternLight1.position.set(-4, 1.5, -5);
        lanternLight1.castShadow = true;
        this.scene.add(lanternLight1);
        
        const lanternLight2 = new THREE.PointLight(0xffaa44, 2.5, 10);
        lanternLight2.position.set(4, 1.5, -5);
        lanternLight2.castShadow = true;
        this.scene.add(lanternLight2);
        
        // Gauge lights - brass reflection
        const gaugeLight1 = new THREE.PointLight(0xccaa66, 1.5, 6);
        gaugeLight1.position.set(-2, 2.2, -1);
        this.scene.add(gaugeLight1);
        
        const gaugeLight2 = new THREE.PointLight(0xccaa66, 1.5, 6);
        gaugeLight2.position.set(2, 2.2, -1);
        this.scene.add(gaugeLight2);
        
        // Volumetric fog - crimson mist
        this.scene.fog = new THREE.Fog(0x663333, 15, 120);
        
        // Treasure spot lights
        const treasureLight1 = new THREE.SpotLight(0xffd700, 2.0, 8, Math.PI / 4, 0.5);
        treasureLight1.position.set(-2, 3, -6);
        treasureLight1.target.position.set(-2, 0, -6);
        this.scene.add(treasureLight1);
        this.scene.add(treasureLight1.target);
        
        const treasureLight2 = new THREE.SpotLight(0xffd700, 1.5, 6, Math.PI / 4, 0.5);
        treasureLight2.position.set(0, 2, -4);
        treasureLight2.target.position.set(0, 0, -4);
        this.scene.add(treasureLight2);
        this.scene.add(treasureLight2.target);
    }
    
    createEnvironment() {
        // Ocean/Sky dome
        const skyGeo = new THREE.SphereGeometry(200, 32, 32);
        const skyMat = new THREE.ShaderMaterial({
            uniforms: {
                time: { value: 0 },
                topColor: { value: new THREE.Color(0x0a1833) },
                horizonColor: { value: new THREE.Color(0xff4422) },
                bottomColor: { value: new THREE.Color(0xff8844) },
                sunGlow: { value: new THREE.Color(0xffaa66) }
            },
            vertexShader: `
                varying vec3 vWorldPosition;
                void main() {
                    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
                    vWorldPosition = worldPosition.xyz;
                    gl_Position = projectionMatrix * viewMatrix * worldPosition;
                }
            `,
            fragmentShader: `
                uniform vec3 topColor;
                uniform vec3 horizonColor;
                uniform vec3 bottomColor;
                uniform vec3 sunGlow;
                varying vec3 vWorldPosition;
                void main() {
                    float h = normalize(vWorldPosition).y;
                    vec3 color;
                    
                    // Create dramatic sunset gradient
                    if (h > 0.3) {
                        color = mix(topColor, topColor * 0.5, smoothstep(0.3, 1.0, h));
                    } else if (h > 0.0) {
                        color = mix(horizonColor, topColor, smoothstep(0.0, 0.3, h));
                    } else if (h > -0.1) {
                        color = mix(sunGlow, horizonColor, smoothstep(-0.1, 0.0, h));
                    } else {
                        color = mix(bottomColor, sunGlow, smoothstep(-0.3, -0.1, h));
                    }
                    
                    // Add sun glow at horizon
                    float sunIntensity = 1.0 - abs(h + 0.05) * 10.0;
                    sunIntensity = clamp(sunIntensity, 0.0, 1.0);
                    color += sunGlow * sunIntensity * 0.3;
                    
                    gl_FragColor = vec4(color, 1.0);
                }
            `,
            side: THREE.BackSide
        });
        const sky = new THREE.Mesh(skyGeo, skyMat);
        this.scene.add(sky);
        
        // Ship deck - create boat-shaped platform
        const deckGroup = new THREE.Group();
        
        // Main deck material
        const deckMat = new THREE.MeshStandardMaterial({
            color: 0x1a0a05,
            roughness: 0.7,
            metalness: 0.05
        });
        
        // Center deck platform
        const centerDeckGeo = new THREE.BoxGeometry(16, 0.5, 20);
        const centerDeck = new THREE.Mesh(centerDeckGeo, deckMat);
        centerDeck.position.y = -0.25;
        centerDeck.receiveShadow = true;
        deckGroup.add(centerDeck);
        
        // Create proper ship bow - tapered triangular point
        const bowPoints = [];
        const bowSegments = 16;
        
        // Create V-shaped bow that comes to a point
        for (let i = 0; i <= bowSegments; i++) {
            const angle = (i / bowSegments) * Math.PI;
            const x = Math.sin(angle) * 8;
            const z = 10 + Math.cos(angle) * 8;
            bowPoints.push(new THREE.Vector3(x, -0.25, z));
        }
        
        // Bow deck geometry
        const bowCurve = new THREE.CatmullRomCurve3(bowPoints);
        const bowGeo = new THREE.ExtrudeGeometry(
            new THREE.Shape([
                new THREE.Vector2(-8, 0),
                new THREE.Vector2(0, 8),
                new THREE.Vector2(8, 0),
                new THREE.Vector2(0, -2)
            ]), 
            {
                depth: 0.5,
                bevelEnabled: false
            }
        );
        const bow = new THREE.Mesh(bowGeo, deckMat);
        bow.rotation.x = -Math.PI / 2;
        bow.position.set(0, -0.25, 15);
        bow.receiveShadow = true;
        deckGroup.add(bow);
        
        // Bowsprit - forward pointing beam
        const bowspritGeo = new THREE.CylinderGeometry(0.15, 0.25, 8, 12);
        const bowsprit = new THREE.Mesh(bowspritGeo, new THREE.MeshStandardMaterial({
            color: 0x2a1a10,
            roughness: 0.9,
            metalness: 0.1
        }));
        bowsprit.rotation.x = -Math.PI / 6;
        bowsprit.position.set(0, 1, 18);
        bowsprit.castShadow = true;
        deckGroup.add(bowsprit);
        
        // Stern section - rounded back
        const sternGeo = new THREE.CylinderGeometry(8, 8, 0.5, 16, 1, false, Math.PI, Math.PI);
        const stern = new THREE.Mesh(sternGeo, deckMat);
        stern.rotation.x = Math.PI / 2;
        stern.rotation.y = Math.PI / 2;
        stern.position.set(0, -0.25, -10);
        stern.receiveShadow = true;
        deckGroup.add(stern);
        
        this.scene.add(deckGroup);
        
        // Deck planks detail - simple parallel planks
        const plankMat = new THREE.MeshStandardMaterial({
            color: 0x0a0603,
            roughness: 0.9,
            metalness: 0.02
        });
        
        for (let i = -8; i < 8; i += 0.35) {
            const plankGeo = new THREE.BoxGeometry(0.3, 0.02, 20);
            const plank = new THREE.Mesh(plankGeo, plankMat);
            plank.position.set(i, 0.01, 0);
            plank.receiveShadow = true;
            this.scene.add(plank);
        }
        
        // Ship gunwales (raised edges) - simple railings
        const gunwaleMat = new THREE.MeshStandardMaterial({
            color: 0x2a1510,
            roughness: 0.8,
            metalness: 0.1
        });
        
        // Port side railing
        const portRailGeo = new THREE.BoxGeometry(0.3, 1.2, 20);
        const portRail = new THREE.Mesh(portRailGeo, gunwaleMat);
        portRail.position.set(-8, 0.6, 0);
        portRail.castShadow = true;
        this.scene.add(portRail);
        
        // Starboard side railing
        const starboardRail = new THREE.Mesh(portRailGeo, gunwaleMat);
        starboardRail.position.set(8, 0.6, 0);
        starboardRail.castShadow = true;
        this.scene.add(starboardRail);
        
        // Bow railings that follow the pointed shape
        const bowRailCurveLeft = new THREE.CatmullRomCurve3([
            new THREE.Vector3(-8, 0.6, 10),
            new THREE.Vector3(-5, 0.6, 16),
            new THREE.Vector3(-1, 0.6, 18)
        ]);
        const bowRailLeftGeo = new THREE.TubeGeometry(bowRailCurveLeft, 20, 0.15, 8, false);
        const bowRailLeft = new THREE.Mesh(bowRailLeftGeo, gunwaleMat);
        bowRailLeft.castShadow = true;
        this.scene.add(bowRailLeft);
        
        const bowRailCurveRight = new THREE.CatmullRomCurve3([
            new THREE.Vector3(8, 0.6, 10),
            new THREE.Vector3(5, 0.6, 16),
            new THREE.Vector3(1, 0.6, 18)
        ]);
        const bowRailRightGeo = new THREE.TubeGeometry(bowRailCurveRight, 20, 0.15, 8, false);
        const bowRailRight = new THREE.Mesh(bowRailRightGeo, gunwaleMat);
        bowRailRight.castShadow = true;
        this.scene.add(bowRailRight);
        
        // Figurehead - carved dragon or sea creature
        const figureheadGroup = new THREE.Group();
        
        // Dragon head
        const dragonHeadGeo = new THREE.SphereGeometry(0.8, 12, 8);
        const dragonHead = new THREE.Mesh(dragonHeadGeo, new THREE.MeshStandardMaterial({
            color: 0x8b4513,
            roughness: 0.8,
            metalness: 0.1
        }));
        dragonHead.scale.set(1.2, 0.8, 1.5);
        figureheadGroup.add(dragonHead);
        
        // Dragon eyes
        for (let side of [-0.3, 0.3]) {
            const eyeGeo = new THREE.SphereGeometry(0.1, 8, 8);
            const eye = new THREE.Mesh(eyeGeo, new THREE.MeshStandardMaterial({
                color: 0xff0000,
                emissive: 0x330000,
                emissiveIntensity: 0.5
            }));
            eye.position.set(side, 0.2, 0.6);
            figureheadGroup.add(eye);
        }
        
        // Dragon neck
        const neckGeo = new THREE.CylinderGeometry(0.4, 0.6, 2, 12);
        const neck = new THREE.Mesh(neckGeo, new THREE.MeshStandardMaterial({
            color: 0x8b4513,
            roughness: 0.8,
            metalness: 0.1
        }));
        neck.position.set(0, -1, -0.5);
        neck.rotation.x = Math.PI / 6;
        figureheadGroup.add(neck);
        
        figureheadGroup.position.set(0, 2, 19);
        figureheadGroup.rotation.y = Math.PI;
        figureheadGroup.castShadow = true;
        this.scene.add(figureheadGroup);
        
        // Add large cannons protruding through railings
        this.createCannonBattery();
        
        // Add treasure scatter
        this.createTreasure();
        
        // Add ship background elements
        this.createShipBackground();
        
        // Create full sailing warship
        this.createSailingWarship();
    }
    
    createCannonBattery() {
        const cannonMat = new THREE.MeshStandardMaterial({
            color: 0x2a2a2a,
            roughness: 0.6,
            metalness: 0.8
        });
        
        const brassMat = new THREE.MeshStandardMaterial({
            color: 0xccaa66,
            roughness: 0.3,
            metalness: 0.9
        });
        
        // Port side cannons (left side)
        for (let i = 0; i < 4; i++) {
            const cannonGroup = new THREE.Group();
            
            // Main cannon barrel - huge size
            const barrelGeo = new THREE.CylinderGeometry(0.4, 0.5, 6, 16);
            const barrel = new THREE.Mesh(barrelGeo, cannonMat);
            barrel.rotation.z = Math.PI / 2;
            barrel.position.x = -2; // Extend through the railing
            cannonGroup.add(barrel);
            
            // Cannon muzzle reinforcement
            const muzzleGeo = new THREE.CylinderGeometry(0.45, 0.4, 0.3, 16);
            const muzzle = new THREE.Mesh(muzzleGeo, brassMat);
            muzzle.rotation.z = Math.PI / 2;
            muzzle.position.x = -4.8;
            cannonGroup.add(muzzle);
            
            // Cannon breach (back end)
            const breachGeo = new THREE.SphereGeometry(0.6, 12, 12);
            const breach = new THREE.Mesh(breachGeo, cannonMat);
            breach.position.x = 1;
            cannonGroup.add(breach);
            
            // Cannon carriage wheels
            for (let side of [-0.8, 0.8]) {
                const wheelGeo = new THREE.CylinderGeometry(0.6, 0.6, 0.2, 12);
                const wheel = new THREE.Mesh(wheelGeo, new THREE.MeshStandardMaterial({
                    color: 0x4a3c28,
                    roughness: 0.9,
                    metalness: 0.1
                }));
                wheel.rotation.x = Math.PI / 2;
                wheel.position.set(0.5, side, -0.3);
                cannonGroup.add(wheel);
            }
            
            // Position cannon along port side
            cannonGroup.position.set(-7, 0.8, -6 + i * 4);
            cannonGroup.rotation.y = -Math.PI / 12; // Slight angle outward
            cannonGroup.castShadow = true;
            this.scene.add(cannonGroup);
        }
        
        // Starboard side cannons (right side)
        for (let i = 0; i < 4; i++) {
            const cannonGroup = new THREE.Group();
            
            // Main cannon barrel - huge size
            const barrelGeo = new THREE.CylinderGeometry(0.4, 0.5, 6, 16);
            const barrel = new THREE.Mesh(barrelGeo, cannonMat);
            barrel.rotation.z = -Math.PI / 2;
            barrel.position.x = 2; // Extend through the railing
            cannonGroup.add(barrel);
            
            // Cannon muzzle reinforcement
            const muzzleGeo = new THREE.CylinderGeometry(0.45, 0.4, 0.3, 16);
            const muzzle = new THREE.Mesh(muzzleGeo, brassMat);
            muzzle.rotation.z = -Math.PI / 2;
            muzzle.position.x = 4.8;
            cannonGroup.add(muzzle);
            
            // Cannon breach (back end)
            const breachGeo = new THREE.SphereGeometry(0.6, 12, 12);
            const breach = new THREE.Mesh(breachGeo, cannonMat);
            breach.position.x = -1;
            cannonGroup.add(breach);
            
            // Cannon carriage wheels
            for (let side of [-0.8, 0.8]) {
                const wheelGeo = new THREE.CylinderGeometry(0.6, 0.6, 0.2, 12);
                const wheel = new THREE.Mesh(wheelGeo, new THREE.MeshStandardMaterial({
                    color: 0x4a3c28,
                    roughness: 0.9,
                    metalness: 0.1
                }));
                wheel.rotation.x = Math.PI / 2;
                wheel.position.set(-0.5, side, -0.3);
                cannonGroup.add(wheel);
            }
            
            // Position cannon along starboard side
            cannonGroup.position.set(7, 0.8, -6 + i * 4);
            cannonGroup.rotation.y = Math.PI / 12; // Slight angle outward
            cannonGroup.castShadow = true;
            this.scene.add(cannonGroup);
        }
        
        // Bow chasers - forward pointing cannons
        for (let side of [-2, 2]) {
            const cannonGroup = new THREE.Group();
            
            // Smaller bow chaser cannon
            const barrelGeo = new THREE.CylinderGeometry(0.25, 0.3, 4, 12);
            const barrel = new THREE.Mesh(barrelGeo, cannonMat);
            barrel.rotation.x = -Math.PI / 2;
            barrel.position.z = 2;
            cannonGroup.add(barrel);
            
            // Muzzle
            const muzzleGeo = new THREE.CylinderGeometry(0.3, 0.25, 0.2, 12);
            const muzzle = new THREE.Mesh(muzzleGeo, brassMat);
            muzzle.rotation.x = -Math.PI / 2;
            muzzle.position.z = 3.8;
            cannonGroup.add(muzzle);
            
            // Breach
            const breachGeo = new THREE.SphereGeometry(0.4, 10, 10);
            const breach = new THREE.Mesh(breachGeo, cannonMat);
            breach.position.z = -0.5;
            cannonGroup.add(breach);
            
            cannonGroup.position.set(side, 1.2, 14);
            cannonGroup.castShadow = true;
            this.scene.add(cannonGroup);
        }
    }
    
    createHelm() {
        this.wheelGroup = new THREE.Group();
        
        // Helm post - blackened teak with brass base
        const postGeo = new THREE.CylinderGeometry(0.15, 0.2, 1.5, 8);
        const postMat = new THREE.MeshStandardMaterial({
            color: 0x0a0805,
            roughness: 0.6,
            metalness: 0.1
        });
        const post = new THREE.Mesh(postGeo, postMat);
        post.position.y = 0.75;
        post.castShadow = true;
        this.scene.add(post);
        
        // Wheel rim - weathered teak with visible grain
        const rimGeo = new THREE.TorusGeometry(1.5, 0.15, 12, 48);
        const rimMat = new THREE.MeshStandardMaterial({
            color: 0x2a1510,
            roughness: 0.8,
            metalness: 0.05
        });
        const rim = new THREE.Mesh(rimGeo, rimMat);
        rim.castShadow = true;
        this.wheelGroup.add(rim);
        
        // Add brass studs around rim
        for (let i = 0; i < 24; i++) {
            const studGeo = new THREE.SphereGeometry(0.04, 8, 8);
            const studMat = new THREE.MeshStandardMaterial({
                color: 0xccaa66,
                roughness: 0.4,
                metalness: 0.8
            });
            const stud = new THREE.Mesh(studGeo, studMat);
            const angle = (i / 24) * Math.PI * 2;
            stud.position.set(
                Math.cos(angle) * 1.5,
                Math.sin(angle) * 1.5,
                0.12
            );
            this.wheelGroup.add(stud);
        }
        
        // Spokes - weathered teak with carved details
        const spokeMat = new THREE.MeshStandardMaterial({
            color: 0x1a0f08,
            roughness: 0.85,
            metalness: 0.02
        });
        
        for (let i = 0; i < 12; i++) {
            const spokeGeo = new THREE.BoxGeometry(0.1, 0.15, 2.8);
            const spoke = new THREE.Mesh(spokeGeo, spokeMat);
            spoke.rotation.z = (i * Math.PI * 2) / 12;
            spoke.castShadow = true;
            this.wheelGroup.add(spoke);
            
            // Handle grips - leather wrapped
            const gripGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.3, 8);
            const gripMat = new THREE.MeshStandardMaterial({
                color: 0x2a1a0a,
                roughness: 0.95,
                metalness: 0
            });
            const grip = new THREE.Mesh(gripGeo, gripMat);
            grip.position.set(
                Math.cos((i * Math.PI * 2) / 12) * 1.3,
                Math.sin((i * Math.PI * 2) / 12) * 1.3,
                0
            );
            grip.rotation.z = (i * Math.PI * 2) / 12;
            this.wheelGroup.add(grip);
        }
        
        // Central hub - polished brass
        const hubGeo = new THREE.CylinderGeometry(0.35, 0.35, 0.25, 16);
        const hubMat = new THREE.MeshStandardMaterial({
            color: 0xccaa66,
            roughness: 0.3,
            metalness: 0.9
        });
        const hub = new THREE.Mesh(hubGeo, hubMat);
        hub.rotation.x = Math.PI / 2;
        this.wheelGroup.add(hub);
        
        // Digital compass
        const compassGeo = new THREE.CylinderGeometry(0.28, 0.28, 0.05, 32);
        const compassMat = new THREE.MeshStandardMaterial({
            color: 0x00ffcc,
            emissive: 0x00ffcc,
            emissiveIntensity: 2,
            roughness: 0.2,
            metalness: 0.8
        });
        this.compass.mesh = new THREE.Mesh(compassGeo, compassMat);
        this.compass.mesh.rotation.x = Math.PI / 2;
        this.wheelGroup.add(this.compass.mesh);
        
        // Compass ring detail
        const ringGeo = new THREE.TorusGeometry(0.3, 0.02, 8, 32);
        const ringMat = new THREE.MeshStandardMaterial({
            color: 0x00ffcc,
            emissive: 0x00ffcc,
            emissiveIntensity: 1,
            roughness: 0.2,
            metalness: 0.8
        });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.rotation.x = Math.PI / 2;
        this.wheelGroup.add(ring);
        
        // Add rope wrapping details
        const ropeWrapMat = new THREE.MeshStandardMaterial({
            color: 0x8b7355,
            roughness: 1,
            metalness: 0
        });
        
        // Rope wrapped around spokes
        for (let i = 0; i < 4; i++) {
            const ropeGeo = new THREE.TorusGeometry(0.15, 0.02, 4, 12);
            const rope = new THREE.Mesh(ropeGeo, ropeWrapMat);
            const angle = (i * Math.PI * 2) / 4 + Math.PI / 8;
            rope.position.set(
                Math.cos(angle) * 0.8,
                Math.sin(angle) * 0.8,
                0
            );
            rope.rotation.z = angle;
            this.wheelGroup.add(rope);
        }
        
        // Carved nautical symbols on rim
        const symbolMat = new THREE.MeshStandardMaterial({
            color: 0x1a0f08,
            roughness: 0.9,
            metalness: 0
        });
        
        // Add anchor symbol
        const anchorGroup = new THREE.Group();
        const anchorShaft = new THREE.BoxGeometry(0.02, 0.1, 0.01);
        const shaft = new THREE.Mesh(anchorShaft, symbolMat);
        anchorGroup.add(shaft);
        
        const anchorCross = new THREE.BoxGeometry(0.06, 0.02, 0.01);
        const cross = new THREE.Mesh(anchorCross, symbolMat);
        cross.position.y = 0.03;
        anchorGroup.add(cross);
        
        anchorGroup.position.set(1.45, 0, 0.1);
        anchorGroup.scale.set(0.5, 0.5, 0.5);
        this.wheelGroup.add(anchorGroup);
        
        this.wheelGroup.position.set(0, 1.2, 0);
        this.wheelGroup.rotation.x = -Math.PI / 8;  // Flipped to face viewer
        this.wheelGroup.rotation.y = 0;            // Facing forward
        this.scene.add(this.wheelGroup);
    }
    
    createGauges() {
        // GitHub Actions auto-deploy test
        
        const gaugeData = [
            { name: 'KNOTS', pos: { x: -3.5, y: 2.5, z: -1 }, scale: 2 },
            { name: 'COMPASS', pos: { x: 0, y: 2.7, z: -1.2 }, scale: 3 }, // Triple size center gauge
            { name: 'DRIFT', pos: { x: 3.5, y: 2.5, z: -1 }, scale: 2 }
        ];
        
        gaugeData.forEach((data, index) => {
            const gaugeGroup = new THREE.Group();
            
            // Gauge housing - scaled based on data.scale
            const baseSize = data.scale || 1;
            const housingGeo = new THREE.CylinderGeometry(0.18 * baseSize, 0.2 * baseSize, 0.15 * baseSize, 16);
            const housingMat = new THREE.MeshStandardMaterial({
                color: 0xc9a961,
                roughness: 0.4,
                metalness: 0.6
            });
            const housing = new THREE.Mesh(housingGeo, housingMat);
            housing.rotation.x = Math.PI / 2;
            housing.castShadow = true;
            gaugeGroup.add(housing);
            
            // Gauge face - scaled
            const faceGeo = new THREE.CircleGeometry(0.16 * baseSize, 32);
            const faceMat = new THREE.MeshStandardMaterial({
                color: 0x1a1a1a,
                roughness: 0.2,
                metalness: 0.1
            });
            const face = new THREE.Mesh(faceGeo, faceMat);
            face.position.z = 0.08 * baseSize;
            gaugeGroup.add(face);
            
            // Glass - scaled
            const glassGeo = new THREE.SphereGeometry(0.17 * baseSize, 32, 16, 0, Math.PI * 2, 0, Math.PI / 2);
            const glassMat = new THREE.MeshPhysicalMaterial({
                color: 0xffffff,
                metalness: 0,
                roughness: 0,
                transmission: 0.95,
                thickness: 0.5,
                transparent: true,
                clearcoat: 1,
                clearcoatRoughness: 0
            });
            const glass = new THREE.Mesh(glassGeo, glassMat);
            glass.rotation.x = -Math.PI / 2;
            glass.position.z = 0.08 * baseSize;
            gaugeGroup.add(glass);
            
            // Needle - scaled
            const needleGeo = new THREE.BoxGeometry(0.015 * baseSize, 0.14 * baseSize, 0.005);
            const needleMat = new THREE.MeshStandardMaterial({
                color: 0xff0000,
                emissive: 0xff0000,
                emissiveIntensity: 0.5,
                roughness: 0.3,
                metalness: 0.7
            });
            const needle = new THREE.Mesh(needleGeo, needleMat);
            needle.position.z = 0.09 * baseSize;
            needle.geometry.translate(0, 0.07 * baseSize, 0);
            gaugeGroup.add(needle);
            
            gaugeGroup.position.set(data.pos.x, data.pos.y, data.pos.z);
            gaugeGroup.lookAt(0, 1.8, 4);  // Try facing toward viewer for debugging
            
            // Make gauge draggable
            gaugeGroup.userData = { 
                isDraggable: true, 
                name: data.name,
                originalPosition: { x: data.pos.x, y: data.pos.y, z: data.pos.z }
            };
            
            // Add label text to gauge
            const canvas = document.createElement('canvas');
            canvas.width = 256;
            canvas.height = 64;
            const ctx = canvas.getContext('2d');
            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 48px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(data.name, 128, 48);
            
            const labelTexture = new THREE.CanvasTexture(canvas);
            const labelMat = new THREE.SpriteMaterial({ map: labelTexture });
            const label = new THREE.Sprite(labelMat);
            label.scale.set(0.5 * baseSize, 0.125 * baseSize, 1);
            label.position.y = -0.3 * baseSize;
            gaugeGroup.add(label);
            
            this.gauges.push({ group: gaugeGroup, needle, name: data.name });
            this.scene.add(gaugeGroup);
        });
    }
    
    createDebugText() {
        // Create FRONT indicator (green box with label)
        const frontGroup = new THREE.Group();
        const frontBoxGeo = new THREE.BoxGeometry(3, 0.8, 0.2);
        const frontBoxMat = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const frontBox = new THREE.Mesh(frontBoxGeo, frontBoxMat);
        frontGroup.add(frontBox);
        
        // Front label
        const frontCanvas = document.createElement('canvas');
        frontCanvas.width = 256;
        frontCanvas.height = 64;
        const frontCtx = frontCanvas.getContext('2d');
        frontCtx.fillStyle = '#000000';
        frontCtx.font = 'bold 48px Arial';
        frontCtx.textAlign = 'center';
        frontCtx.fillText('FRONT', 128, 48);
        
        const frontLabelTexture = new THREE.CanvasTexture(frontCanvas);
        const frontLabelMat = new THREE.SpriteMaterial({ map: frontLabelTexture });
        const frontLabel = new THREE.Sprite(frontLabelMat);
        frontLabel.scale.set(2, 0.5, 1);
        frontLabel.position.z = 0.2;
        frontGroup.add(frontLabel);
        
        frontGroup.position.set(0, 4, 5);
        this.scene.add(frontGroup);
        
        // Create BACK indicator (red box with label)
        const backGroup = new THREE.Group();
        const backBoxGeo = new THREE.BoxGeometry(3, 0.8, 0.2);
        const backBoxMat = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        const backBox = new THREE.Mesh(backBoxGeo, backBoxMat);
        backGroup.add(backBox);
        
        // Back label
        const backCanvas = document.createElement('canvas');
        backCanvas.width = 256;
        backCanvas.height = 64;
        const backCtx = backCanvas.getContext('2d');
        backCtx.fillStyle = '#ffffff';
        backCtx.font = 'bold 48px Arial';
        backCtx.textAlign = 'center';
        backCtx.fillText('BACK', 128, 48);
        
        const backLabelTexture = new THREE.CanvasTexture(backCanvas);
        const backLabelMat = new THREE.SpriteMaterial({ map: backLabelTexture });
        const backLabel = new THREE.Sprite(backLabelMat);
        backLabel.scale.set(2, 0.5, 1);
        backLabel.position.z = 0.2;
        backGroup.add(backLabel);
        
        backGroup.position.set(0, 4, -5);
        this.scene.add(backGroup);
    }
    
    createParticles() {
        // Stars
        const starsGeo = new THREE.BufferGeometry();
        const starCount = 5000;
        const starPositions = new Float32Array(starCount * 3);
        const starSizes = new Float32Array(starCount);
        
        for (let i = 0; i < starCount; i++) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(Math.random() * 2 - 1);
            const radius = 150 + Math.random() * 50;
            
            starPositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
            starPositions[i * 3 + 1] = radius * Math.cos(phi);
            starPositions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
            starSizes[i] = Math.random() * 0.8 + 0.2;
        }
        
        starsGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
        starsGeo.setAttribute('size', new THREE.BufferAttribute(starSizes, 1));
        
        const starsMat = new THREE.ShaderMaterial({
            uniforms: {
                time: { value: 0 }
            },
            vertexShader: `
                attribute float size;
                varying float vSize;
                uniform float time;
                void main() {
                    vSize = size;
                    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                    gl_PointSize = size * 5.0 * (200.0 / -mvPosition.z);
                    gl_Position = projectionMatrix * mvPosition;
                }
            `,
            fragmentShader: `
                varying float vSize;
                void main() {
                    float dist = distance(gl_PointCoord, vec2(0.5));
                    if (dist > 0.5) discard;
                    float intensity = 1.0 - dist * 2.0;
                    intensity = pow(intensity, 3.0);
                    vec3 color = mix(vec3(0.7, 0.8, 1.0), vec3(1.0, 1.0, 0.9), vSize);
                    gl_FragColor = vec4(color * intensity, intensity);
                }
            `,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });
        
        const stars = new THREE.Points(starsGeo, starsMat);
        this.scene.add(stars);
        
        // Mist particles
        const mistGeo = new THREE.BufferGeometry();
        const mistCount = 500;
        const mistPositions = new Float32Array(mistCount * 3);
        const mistScales = new Float32Array(mistCount);
        
        for (let i = 0; i < mistCount; i++) {
            mistPositions[i * 3] = (Math.random() - 0.5) * 40;
            mistPositions[i * 3 + 1] = Math.random() * 5;
            mistPositions[i * 3 + 2] = (Math.random() - 0.5) * 40;
            mistScales[i] = Math.random();
        }
        
        mistGeo.setAttribute('position', new THREE.BufferAttribute(mistPositions, 3));
        mistGeo.setAttribute('scale', new THREE.BufferAttribute(mistScales, 1));
        
        const mistMat = new THREE.ShaderMaterial({
            uniforms: {
                time: { value: 0 }
            },
            vertexShader: `
                attribute float scale;
                varying float vScale;
                uniform float time;
                void main() {
                    vScale = scale;
                    vec3 pos = position;
                    pos.x += sin(time * 0.5 + position.y) * 0.3;
                    pos.y += sin(time * 0.3) * 0.1;
                    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
                    gl_PointSize = scale * 80.0 / -mvPosition.z;
                    gl_Position = projectionMatrix * mvPosition;
                }
            `,
            fragmentShader: `
                varying float vScale;
                void main() {
                    float dist = distance(gl_PointCoord, vec2(0.5));
                    if (dist > 0.5) discard;
                    float opacity = (1.0 - dist * 2.0) * vScale * 0.15;
                    // Golden mist color
                    gl_FragColor = vec4(1.0, 0.7, 0.4, opacity);
                }
            `,
            transparent: true,
            blending: THREE.NormalBlending,
            depthWrite: false
        });
        
        this.particles = new THREE.Points(mistGeo, mistMat);
        this.scene.add(this.particles);
        
        // Add moon
        const moonGeo = new THREE.SphereGeometry(5, 32, 32);
        const moonMat = new THREE.MeshStandardMaterial({
            color: 0xffffcc,
            emissive: 0xffffaa,
            emissiveIntensity: 0.3,
            roughness: 0.8,
            metalness: 0
        });
        const moon = new THREE.Mesh(moonGeo, moonMat);
        moon.position.set(-30, 40, -50);
        this.scene.add(moon);
        
        // Moon glow
        const glowGeo = new THREE.SphereGeometry(7, 32, 32);
        const glowMat = new THREE.MeshBasicMaterial({
            color: 0xffffcc,
            transparent: true,
            opacity: 0.3
        });
        const moonGlow = new THREE.Mesh(glowGeo, glowMat);
        moonGlow.position.copy(moon.position);
        this.scene.add(moonGlow);
    }
    
    createTreasure() {
        // Gold material
        const goldMat = new THREE.MeshStandardMaterial({
            color: 0xffd700,
            metalness: 0.9,
            roughness: 0.2
        });
        
        // Ruby material
        const rubyMat = new THREE.MeshStandardMaterial({
            color: 0xcc0000,
            metalness: 0.4,
            roughness: 0.1,
            emissive: 0x330000,
            emissiveIntensity: 0.2
        });
        
        // Pearl material
        const pearlMat = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            metalness: 0.1,
            roughness: 0.05
        });
        
        // Gold doubloons scattered
        for (let i = 0; i < 15; i++) {
            const coinGeo = new THREE.CylinderGeometry(0.08, 0.08, 0.02, 16);
            const coin = new THREE.Mesh(coinGeo, goldMat);
            coin.position.set(
                -3 + Math.random() * 6,
                0.02 + Math.random() * 0.02,
                -8 + Math.random() * 4
            );
            coin.rotation.x = Math.PI / 2 + Math.random() * 0.2;
            coin.rotation.z = Math.random() * Math.PI;
            coin.castShadow = true;
            this.scene.add(coin);
        }
        
        // Bejeweled chalice
        const chaliceGroup = new THREE.Group();
        const chaliceGeo = new THREE.CylinderGeometry(0.15, 0.1, 0.3, 12);
        const chalice = new THREE.Mesh(chaliceGeo, goldMat);
        chaliceGroup.add(chalice);
        
        // Rubies on chalice
        for (let i = 0; i < 6; i++) {
            const rubyGeo = new THREE.OctahedronGeometry(0.03, 0);
            const ruby = new THREE.Mesh(rubyGeo, rubyMat);
            const angle = (i / 6) * Math.PI * 2;
            ruby.position.set(
                Math.cos(angle) * 0.12,
                0.05,
                Math.sin(angle) * 0.12
            );
            chaliceGroup.add(ruby);
        }
        chaliceGroup.position.set(-2, 0.15, -6);
        chaliceGroup.rotation.z = 0.3;
        this.scene.add(chaliceGroup);
        
        // Pearl necklace
        const pearlCurve = new THREE.CatmullRomCurve3([
            new THREE.Vector3(2, 0.3, -7),
            new THREE.Vector3(2.5, 0.2, -6.8),
            new THREE.Vector3(2.3, 0.1, -6.5),
            new THREE.Vector3(2, 0.05, -6.7)
        ]);
        const pearlPoints = pearlCurve.getPoints(20);
        
        pearlPoints.forEach((point, i) => {
            const pearlGeo = new THREE.SphereGeometry(0.02 + Math.random() * 0.01, 8, 8);
            const pearl = new THREE.Mesh(pearlGeo, pearlMat);
            pearl.position.copy(point);
            this.scene.add(pearl);
        });
        
        // Old brass sextant
        const sextantMat = new THREE.MeshStandardMaterial({
            color: 0xccaa66,
            metalness: 0.7,
            roughness: 0.4
        });
        const sextantGroup = new THREE.Group();
        
        // Sextant arc
        const arcGeo = new THREE.TorusGeometry(0.3, 0.02, 8, 12, Math.PI / 3);
        const arc = new THREE.Mesh(arcGeo, sextantMat);
        sextantGroup.add(arc);
        
        // Sextant arm
        const armGeo = new THREE.BoxGeometry(0.02, 0.4, 0.02);
        const arm = new THREE.Mesh(armGeo, sextantMat);
        arm.position.y = -0.2;
        sextantGroup.add(arm);
        
        sextantGroup.position.set(3, 0.1, -5);
        sextantGroup.rotation.z = -0.5;
        this.scene.add(sextantGroup);
        
        // Dagger with ruby pommel
        const daggerGroup = new THREE.Group();
        
        // Blade
        const bladeGeo = new THREE.ConeGeometry(0.03, 0.5, 4);
        const bladeMat = new THREE.MeshStandardMaterial({
            color: 0xcccccc,
            metalness: 0.9,
            roughness: 0.2
        });
        const blade = new THREE.Mesh(bladeGeo, bladeMat);
        blade.position.y = 0.25;
        daggerGroup.add(blade);
        
        // Handle
        const handleGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.2, 8);
        const handleMat = new THREE.MeshStandardMaterial({
            color: 0x2a1a0a,
            roughness: 0.8
        });
        const handle = new THREE.Mesh(handleGeo, handleMat);
        handle.position.y = -0.1;
        daggerGroup.add(handle);
        
        // Ruby pommel
        const pommelGeo = new THREE.SphereGeometry(0.05, 8, 8);
        const pommel = new THREE.Mesh(pommelGeo, rubyMat);
        pommel.position.y = -0.2;
        daggerGroup.add(pommel);
        
        daggerGroup.position.set(0, 0.2, -4);
        daggerGroup.rotation.z = Math.PI / 4;
        daggerGroup.rotation.x = -Math.PI / 2;
        this.scene.add(daggerGroup);
        
        // Ancient map
        const mapGeo = new THREE.PlaneGeometry(0.6, 0.4);
        const mapTexture = new THREE.CanvasTexture(this.createMapTexture());
        const mapMat = new THREE.MeshStandardMaterial({
            map: mapTexture,
            roughness: 0.9,
            metalness: 0
        });
        const map = new THREE.Mesh(mapGeo, mapMat);
        map.position.set(-1.5, 0.02, -5);
        map.rotation.x = -Math.PI / 2;
        map.rotation.z = 0.2;
        this.scene.add(map);
    }
    
    createMapTexture() {
        const canvas = document.createElement('canvas');
        canvas.width = 256;
        canvas.height = 256;
        const ctx = canvas.getContext('2d');
        
        // Parchment background
        ctx.fillStyle = '#f4e8d0';
        ctx.fillRect(0, 0, 256, 256);
        
        // Stains
        ctx.fillStyle = 'rgba(139, 90, 43, 0.2)';
        ctx.beginPath();
        ctx.arc(200, 50, 30, 0, Math.PI * 2);
        ctx.fill();
        
        // Simple map lines
        ctx.strokeStyle = '#5a3a1a';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(50, 100);
        ctx.lineTo(100, 80);
        ctx.lineTo(150, 120);
        ctx.lineTo(200, 100);
        ctx.stroke();
        
        // X marks the spot
        ctx.strokeStyle = '#cc0000';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(140, 140);
        ctx.lineTo(160, 160);
        ctx.moveTo(160, 140);
        ctx.lineTo(140, 160);
        ctx.stroke();
        
        return canvas;
    }
    
    createShipBackground() {
        // Ship mast
        const mastMat = new THREE.MeshStandardMaterial({
            color: 0x2a1a10,
            roughness: 0.9,
            metalness: 0.1
        });
        
        const mastGeo = new THREE.CylinderGeometry(0.3, 0.4, 15, 12);
        const mast = new THREE.Mesh(mastGeo, mastMat);
        mast.position.set(-5, 7.5, -10);
        mast.castShadow = true;
        this.scene.add(mast);
        
        // Cross beam
        const beamGeo = new THREE.CylinderGeometry(0.2, 0.2, 8, 8);
        const beam = new THREE.Mesh(beamGeo, mastMat);
        beam.position.set(-5, 10, -10);
        beam.rotation.z = Math.PI / 2;
        this.scene.add(beam);
        
        // Rigging ropes
        const ropeMat = new THREE.MeshStandardMaterial({
            color: 0x8b7355,
            roughness: 1,
            metalness: 0
        });
        
        // Main rigging lines
        for (let i = 0; i < 4; i++) {
            const ropeGeo = new THREE.CylinderGeometry(0.02, 0.02, 12, 6);
            const rope = new THREE.Mesh(ropeGeo, ropeMat);
            rope.position.set(
                -5 + (i - 1.5) * 0.5,
                6,
                -10
            );
            rope.rotation.z = (i - 1.5) * 0.2;
            rope.castShadow = true;
            this.scene.add(rope);
        }
        
        // Cannon
        const cannonGroup = new THREE.Group();
        const cannonMat = new THREE.MeshStandardMaterial({
            color: 0x333333,
            roughness: 0.6,
            metalness: 0.7
        });
        
        const cannonGeo = new THREE.CylinderGeometry(0.15, 0.25, 1.5, 12);
        const cannon = new THREE.Mesh(cannonGeo, cannonMat);
        cannon.rotation.z = Math.PI / 2;
        cannonGroup.add(cannon);
        
        // Cannon wheels
        for (let side of [-0.5, 0.5]) {
            const wheelGeo = new THREE.CylinderGeometry(0.3, 0.3, 0.1, 16);
            const wheel = new THREE.Mesh(wheelGeo, mastMat);
            wheel.position.set(side, -0.2, 0);
            wheel.rotation.x = Math.PI / 2;
            cannonGroup.add(wheel);
        }
        
        cannonGroup.position.set(5, 0.5, -8);
        cannonGroup.rotation.y = -Math.PI / 6;
        this.scene.add(cannonGroup);
        
        // Ship railing
        const railMat = new THREE.MeshStandardMaterial({
            color: 0x3a2920,
            roughness: 0.8,
            metalness: 0.1
        });
        
        // Side rails
        for (let z = -12; z < -2; z += 2) {
            const postGeo = new THREE.CylinderGeometry(0.05, 0.05, 1.2, 8);
            const post = new THREE.Mesh(postGeo, railMat);
            post.position.set(-7, 0.6, z);
            this.scene.add(post);
            
            const post2 = new THREE.Mesh(postGeo, railMat);
            post2.position.set(7, 0.6, z);
            this.scene.add(post2);
        }
        
        // Barrel stack
        const barrelMat = new THREE.MeshStandardMaterial({
            color: 0x4a3c28,
            roughness: 0.85,
            metalness: 0.05
        });
        
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 2 - i; j++) {
                const barrelGeo = new THREE.CylinderGeometry(0.35, 0.35, 0.7, 12);
                const barrel = new THREE.Mesh(barrelGeo, barrelMat);
                barrel.position.set(
                    6 - j * 0.7,
                    0.35 + i * 0.7,
                    -10
                );
                barrel.castShadow = true;
                this.scene.add(barrel);
            }
        }
        
        // Rope coils on deck
        const coilGroup = new THREE.Group();
        for (let i = 0; i < 5; i++) {
            const coilGeo = new THREE.TorusGeometry(0.3 - i * 0.02, 0.04, 6, 20);
            const coil = new THREE.Mesh(coilGeo, ropeMat);
            coil.position.y = i * 0.08;
            coil.rotation.x = Math.PI / 2;
            coilGroup.add(coil);
        }
        coilGroup.position.set(-4, 0.1, -9);
        this.scene.add(coilGroup);
        
        // Lantern posts
        const lanternMat = new THREE.MeshStandardMaterial({
            color: 0x666633,
            roughness: 0.5,
            metalness: 0.6
        });
        
        for (let side of [-4, 4]) {
            const postGeo = new THREE.CylinderGeometry(0.04, 0.04, 2, 8);
            const post = new THREE.Mesh(postGeo, lanternMat);
            post.position.set(side, 1, -5);
            this.scene.add(post);
            
            // Lantern
            const lanternGeo = new THREE.BoxGeometry(0.3, 0.4, 0.3);
            const lantern = new THREE.Mesh(lanternGeo, lanternMat);
            lantern.position.set(side, 2, -5);
            this.scene.add(lantern);
            
            // Glass panes
            const glassMat = new THREE.MeshPhysicalMaterial({
                color: 0xffaa44,
                metalness: 0,
                roughness: 0,
                transmission: 0.5,
                thickness: 0.1,
                emissive: 0xffaa44,
                emissiveIntensity: 0.5
            });
            
            const glassGeo = new THREE.BoxGeometry(0.25, 0.35, 0.25);
            const glass = new THREE.Mesh(glassGeo, glassMat);
            glass.position.copy(lantern.position);
            this.scene.add(glass);
        }
    }
    
    setupEventListeners() {
        window.addEventListener('resize', () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.composer.setSize(window.innerWidth, window.innerHeight);
        });
        
        // Mouse interaction for both wheel and gauges
        let wheelRotation = 0;
        
        this.renderer.domElement.addEventListener('mousedown', (e) => {
            e.preventDefault();
            
            // Update mouse position
            this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
            this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
            
            // Check for draggable objects (gauges)
            this.raycaster.setFromCamera(this.mouse, this.camera);
            const draggableObjects = this.gauges.map(gauge => gauge.group);
            const intersects = this.raycaster.intersectObjects(draggableObjects, true);
            
            if (intersects.length > 0) {
                // Found a gauge to drag
                this.controls.enabled = false; // Disable camera controls
                this.dragControls.isDragging = true;
                this.dragControls.selectedObject = intersects[0].object.parent;
                
                // Calculate offset
                const intersectionPoint = intersects[0].point;
                this.dragControls.offset.copy(intersectionPoint).sub(this.dragControls.selectedObject.position);
            } else {
                // Check for wheel interaction
                this.dragControls.isDragging = false;
                this.dragControls.wheelDragging = true;
                this.dragControls.lastMouseX = e.clientX;
            }
        });
        
        window.addEventListener('mouseup', () => {
            this.controls.enabled = true; // Re-enable camera controls
            this.dragControls.isDragging = false;
            this.dragControls.wheelDragging = false;
            this.dragControls.selectedObject = null;
        });
        
        window.addEventListener('mousemove', (e) => {
            if (this.dragControls.isDragging && this.dragControls.selectedObject) {
                // Drag gauge
                this.mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
                this.mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
                
                this.raycaster.setFromCamera(this.mouse, this.camera);
                
                // Project mouse position to 3D space
                const distance = this.dragControls.selectedObject.position.distanceTo(this.camera.position);
                const mouseWorld = new THREE.Vector3();
                mouseWorld.set(this.mouse.x, this.mouse.y, 0.5);
                mouseWorld.unproject(this.camera);
                mouseWorld.sub(this.camera.position).normalize();
                mouseWorld.multiplyScalar(distance);
                mouseWorld.add(this.camera.position);
                
                // Update gauge position
                this.dragControls.selectedObject.position.copy(mouseWorld.sub(this.dragControls.offset));
                
                // Keep gauge facing the camera
                this.dragControls.selectedObject.lookAt(this.camera.position);
            } else if (this.dragControls.wheelDragging && this.wheelGroup) {
                // Wheel rotation
                const deltaX = e.clientX - this.dragControls.lastMouseX;
                wheelRotation += deltaX * 0.01;
                gsap.to(this.wheelGroup.rotation, {
                    z: wheelRotation,
                    duration: 0.3,
                    ease: "power2.out"
                });
                this.dragControls.lastMouseX = e.clientX;
            }
        });
    }
    
    hideLoadingScreen() {
        setTimeout(() => {
            document.querySelector('.loading-screen').classList.add('hidden');
        }, 1000);
    }
    
    updateCompass() {
        this.compass.bearing += (Math.random() - 0.5) * 0.5;
        if (this.compass.bearing >= 360) this.compass.bearing -= 360;
        if (this.compass.bearing < 0) this.compass.bearing += 360;
        
        const direction = this.compass.bearing < 22.5 || this.compass.bearing >= 337.5 ? 'N' :
                         this.compass.bearing < 67.5 ? 'NE' :
                         this.compass.bearing < 112.5 ? 'E' :
                         this.compass.bearing < 157.5 ? 'SE' :
                         this.compass.bearing < 202.5 ? 'S' :
                         this.compass.bearing < 247.5 ? 'SW' :
                         this.compass.bearing < 292.5 ? 'W' : 'NW';
        
        document.querySelector('.compass-value').textContent = 
            `${direction} ${Math.floor(this.compass.bearing)}°`;
    }
    
    animate() {
        requestAnimationFrame(() => this.animate());
        
        const delta = this.clock.getDelta();
        const elapsed = this.clock.getElapsedTime();
        
        // Ship sway
        this.scene.rotation.z = Math.sin(elapsed * 0.5) * 0.02;
        this.scene.rotation.x = Math.cos(elapsed * 0.3) * 0.01;
        
        // Wheel subtle movement
        if (this.wheelGroup) {
            this.wheelGroup.rotation.z += Math.sin(elapsed * 0.8) * 0.0005;
        }
        
        // Gauge needles
        this.gauges.forEach((gauge, index) => {
            gauge.needle.rotation.z = Math.sin(elapsed * (1 + index * 0.3)) * Math.PI / 3;
        });
        
        // Compass glow pulse
        if (this.compass.mesh) {
            this.compass.mesh.material.emissiveIntensity = 2 + Math.sin(elapsed * 2) * 0.5;
        }
        
        // Update particles
        if (this.particles) {
            this.particles.material.uniforms.time.value = elapsed;
            this.particles.rotation.y += 0.0001;
        }
        
        // Animate lantern flicker
        const flicker1 = 2.5 + Math.sin(elapsed * 8) * 0.3 + Math.sin(elapsed * 13) * 0.2;
        const flicker2 = 2.5 + Math.sin(elapsed * 7 + 1) * 0.3 + Math.sin(elapsed * 11) * 0.2;
        
        this.scene.traverse((child) => {
            if (child.type === 'PointLight') {
                if (child.position.x === -4 && child.position.z === -5) {
                    child.intensity = flicker1;
                } else if (child.position.x === 4 && child.position.z === -5) {
                    child.intensity = flicker2;
                }
            }
        });
        
        // Update compass
        if (Math.random() < 0.02) {
            this.updateCompass();
        }
        
        this.controls.update();
        this.composer.render();
    }
    
    createSailingWarship() {
        const mastMat = new THREE.MeshStandardMaterial({
            color: 0x2a1a10,
            roughness: 0.9,
            metalness: 0.1
        });
        
        const sailMat = new THREE.MeshStandardMaterial({
            color: 0xf8f4e6,
            roughness: 0.8,
            metalness: 0.05,
            transparent: true,
            opacity: 0.9
        });
        
        const ropeMat = new THREE.MeshStandardMaterial({
            color: 0x8b7355,
            roughness: 1,
            metalness: 0
        });
        
        // Main mast (center) - REMOVED as it's too close to the wheel
        // const mainMastGeo = new THREE.CylinderGeometry(0.6, 0.8, 35, 16);
        // const mainMast = new THREE.Mesh(mainMastGeo, mastMat);
        // mainMast.position.set(0, 17.5, -3);
        // mainMast.castShadow = true;
        // this.scene.add(mainMast);
        
        // Fore mast (front)
        const foreMastGeo = new THREE.CylinderGeometry(0.5, 0.7, 30, 16);
        const foreMast = new THREE.Mesh(foreMastGeo, mastMat);
        foreMast.position.set(0, 15, 8);
        foreMast.castShadow = true;
        this.scene.add(foreMast);
        
        // Mizzen mast (rear)
        const mizzenMastGeo = new THREE.CylinderGeometry(0.4, 0.6, 25, 16);
        const mizzenMast = new THREE.Mesh(mizzenMastGeo, mastMat);
        mizzenMast.position.set(0, 12.5, -12);
        mizzenMast.castShadow = true;
        this.scene.add(mizzenMast);
        
        // Main sail (large center sail) - REMOVED with main mast
        // const mainSailGeo = new THREE.PlaneGeometry(20, 25);
        // const mainSail = new THREE.Mesh(mainSailGeo, sailMat);
        // mainSail.position.set(0, 20, -2);
        // mainSail.rotation.y = Math.PI / 16; // Slight wind curve
        // this.scene.add(mainSail);
        
        // Fore sail
        const foreSailGeo = new THREE.PlaneGeometry(16, 20);
        const foreSail = new THREE.Mesh(foreSailGeo, sailMat);
        foreSail.position.set(0, 18, 9);
        foreSail.rotation.y = -Math.PI / 20;
        this.scene.add(foreSail);
        
        // Top sail (main) - REMOVED with main mast
        // const topSailGeo = new THREE.PlaneGeometry(15, 12);
        // const topSail = new THREE.Mesh(topSailGeo, sailMat);
        // topSail.position.set(0, 30, -2);
        // topSail.rotation.y = Math.PI / 12;
        // this.scene.add(topSail);
        
        // Jib sails (triangular front sails)
        for (let i = 0; i < 3; i++) {
            const jibShape = new THREE.Shape();
            jibShape.moveTo(0, 0);
            jibShape.lineTo(8, 0);
            jibShape.lineTo(0, 12 - i * 2);
            jibShape.lineTo(0, 0);
            
            const jibGeo = new THREE.ShapeGeometry(jibShape);
            const jib = new THREE.Mesh(jibGeo, sailMat);
            jib.position.set(0, 10 + i * 3, 15 + i * 2);
            jib.rotation.y = Math.PI / 2;
            jib.rotation.x = Math.PI / 8;
            this.scene.add(jib);
        }
        
        // Mizzen sail (rear triangular sail)
        const mizzenSailShape = new THREE.Shape();
        mizzenSailShape.moveTo(0, 0);
        mizzenSailShape.lineTo(12, 0);
        mizzenSailShape.lineTo(0, 18);
        mizzenSailShape.lineTo(0, 0);
        
        const mizzenSailGeo = new THREE.ShapeGeometry(mizzenSailShape);
        const mizzenSail = new THREE.Mesh(mizzenSailGeo, sailMat);
        mizzenSail.position.set(0, 15, -11);
        mizzenSail.rotation.y = Math.PI / 2;
        this.scene.add(mizzenSail);
        
        // Crow's nest - REMOVED with main mast
        // const crowsNestGeo = new THREE.CylinderGeometry(2, 1.5, 1, 12);
        // const crowsNest = new THREE.Mesh(crowsNestGeo, mastMat);
        // crowsNest.position.set(0, 28, -3);
        // this.scene.add(crowsNest);
        
        // Cross beams (yards)
        const yards = [
            // Main mast yards removed
            // { pos: [0, 32, -2], length: 22 },
            // { pos: [0, 27, -2], length: 25 },
            // { pos: [0, 22, -2], length: 24 },
            { pos: [0, 25, 9], length: 18 },
            { pos: [0, 20, 9], length: 20 },
        ];
        
        yards.forEach(yard => {
            const yardGeo = new THREE.CylinderGeometry(0.15, 0.15, yard.length, 8);
            const yardMesh = new THREE.Mesh(yardGeo, mastMat);
            yardMesh.position.set(...yard.pos);
            yardMesh.rotation.z = Math.PI / 2;
            this.scene.add(yardMesh);
        });
        
        // Rigging ropes
        const riggingPoints = [
            // Main mast rigging - REMOVED
            // { from: [0, 35, -3], to: [-12, 0, -15] },
            // { from: [0, 35, -3], to: [12, 0, -15] },
            // { from: [0, 35, -3], to: [-12, 0, 8] },
            // { from: [0, 35, -3], to: [12, 0, 8] },
            
            // Fore mast rigging
            { from: [0, 30, 8], to: [-10, 0, 18] },
            { from: [0, 30, 8], to: [10, 0, 18] },
            { from: [0, 30, 8], to: [-8, 0, -2] },
            { from: [0, 30, 8], to: [8, 0, -2] },
            
            // Mizzen rigging
            { from: [0, 25, -12], to: [-8, 0, -20] },
            { from: [0, 25, -12], to: [8, 0, -20] },
        ];
        
        riggingPoints.forEach(rope => {
            const ropeLength = Math.sqrt(
                Math.pow(rope.to[0] - rope.from[0], 2) +
                Math.pow(rope.to[1] - rope.from[1], 2) +
                Math.pow(rope.to[2] - rope.from[2], 2)
            );
            
            const ropeGeo = new THREE.CylinderGeometry(0.02, 0.02, ropeLength, 6);
            const ropeMesh = new THREE.Mesh(ropeGeo, ropeMat);
            
            // Position and orient rope
            ropeMesh.position.set(
                (rope.from[0] + rope.to[0]) / 2,
                (rope.from[1] + rope.to[1]) / 2,
                (rope.from[2] + rope.to[2]) / 2
            );
            
            const direction = new THREE.Vector3(
                rope.to[0] - rope.from[0],
                rope.to[1] - rope.from[1],
                rope.to[2] - rope.from[2]
            ).normalize();
            
            ropeMesh.lookAt(
                ropeMesh.position.x + direction.x,
                ropeMesh.position.y + direction.y,
                ropeMesh.position.z + direction.z
            );
            ropeMesh.rotateX(Math.PI / 2);
            
            this.scene.add(ropeMesh);
        });
        
        // Ship's wheel platform (quarterdeck)
        const quarterdeckGeo = new THREE.BoxGeometry(12, 1, 8);
        const quarterdeck = new THREE.Mesh(quarterdeckGeo, new THREE.MeshStandardMaterial({
            color: 0x3a2920,
            roughness: 0.8,
            metalness: 0.1
        }));
        quarterdeck.position.set(0, 0.5, -8);
        quarterdeck.receiveShadow = true;
        this.scene.add(quarterdeck);
        
        // Gun deck railings with cannon ports
        const gundeckHeight = -2;
        
        // Lower gun deck
        const lowerDeckGeo = new THREE.BoxGeometry(18, 3, 25);
        const lowerDeck = new THREE.Mesh(lowerDeckGeo, new THREE.MeshStandardMaterial({
            color: 0x2a1510,
            roughness: 0.8,
            metalness: 0.1
        }));
        lowerDeck.position.set(0, gundeckHeight, 0);
        this.scene.add(lowerDeck);
        
        // Captain's cabin
        const cabinGeo = new THREE.BoxGeometry(8, 4, 6);
        const cabin = new THREE.Mesh(cabinGeo, new THREE.MeshStandardMaterial({
            color: 0x4a3c28,
            roughness: 0.7,
            metalness: 0.1
        }));
        cabin.position.set(0, 2, -15);
        this.scene.add(cabin);
        
        // Cabin windows
        for (let side of [-2, 2]) {
            const windowGeo = new THREE.PlaneGeometry(1.5, 1);
            const window = new THREE.Mesh(windowGeo, new THREE.MeshPhysicalMaterial({
                color: 0xffffcc,
                metalness: 0,
                roughness: 0,
                transmission: 0.8,
                thickness: 0.1,
                emissive: 0xffffaa,
                emissiveIntensity: 0.3
            }));
            window.position.set(side, 2, -18.1);
            this.scene.add(window);
        }
    }
}

// Initialize the application
new PirateHelmCockpit();