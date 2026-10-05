const fs = require('fs');
const path = require('path');
const THREE = require('three');
const { GLTFExporter } = require('three/examples/jsm/exporters/GLTFExporter.js');

global.FileReader = class FileReader {
  readAsArrayBuffer(blob) {
    blob.arrayBuffer().then(buf => {
      this.result = buf;
      if (this.onload) this.onload({ target: this });
      if (this.onloadend) this.onloadend({ target: this });
    });
  }
  readAsDataURL(blob) {
    blob.arrayBuffer().then(buf => {
      this.result = 'data:application/octet-stream;base64,' + Buffer.from(buf).toString('base64');
      if (this.onload) this.onload({ target: this });
      if (this.onloadend) this.onloadend({ target: this });
    });
  }
};

const publicDir = path.join(__dirname, '..', 'public');
const modelsDir = path.join(publicDir, 'models');
if (!fs.existsSync(modelsDir)) {
  fs.mkdirSync(modelsDir, { recursive: true });
}

function exportScene(scene, filename) {
  return new Promise((resolve, reject) => {
    const exporter = new GLTFExporter();
    exporter.parse(
      scene,
      (gltf) => {
        const filePath = path.join(modelsDir, filename);
        if (gltf instanceof ArrayBuffer) {
          fs.writeFileSync(filePath, Buffer.from(gltf));
        } else if (Buffer.isBuffer(gltf)) {
          fs.writeFileSync(filePath, gltf);
        } else {
          fs.writeFileSync(filePath, JSON.stringify(gltf, null, 2));
        }
        console.log(`Successfully exported ${filename} (${fs.statSync(filePath).size} bytes)`);
        resolve(filePath);
      },
      (error) => {
        console.error(`Error exporting ${filename}:`, error);
        reject(error);
      },
      { binary: false }
    );
  });
}

// 1. Create Ring Model
function createRing() {
  const group = new THREE.Group();
  group.name = "JewelleryRoot";

  const goldMat = new THREE.MeshStandardMaterial({
    color: 0xC9A55C,
    metalness: 0.98,
    roughness: 0.18,
    name: "ChampagneGold"
  });

  const diamondMat = new THREE.MeshStandardMaterial({
    color: 0xFFFFFF,
    metalness: 0.1,
    roughness: 0.05,
    name: "SolitaireDiamond"
  });

  // Ring Band (Torus with fine segments)
  const bandGeo = new THREE.TorusGeometry(1.0, 0.14, 48, 128);
  const bandMesh = new THREE.Mesh(bandGeo, goldMat);
  bandMesh.rotation.x = Math.PI / 2;
  bandMesh.name = "Band";
  group.add(bandMesh);

  // Crown / Bezel / Prong Setting
  const settingGeo = new THREE.CylinderGeometry(0.32, 0.18, 0.35, 16);
  const settingMesh = new THREE.Mesh(settingGeo, goldMat);
  settingMesh.position.set(0, 1.1, 0);
  settingMesh.name = "ProngSetting";
  group.add(settingMesh);

  // Solitaire Gem (Brilliant cut faceted cone)
  const gemTopGeo = new THREE.ConeGeometry(0.38, 0.3, 16);
  gemTopGeo.rotateX(Math.PI);
  const gemMesh = new THREE.Mesh(gemTopGeo, diamondMat);
  gemMesh.position.set(0, 1.28, 0);
  gemMesh.name = "DiamondSolitaire";
  group.add(gemMesh);

  // 4 Prongs
  for (let i = 0; i < 4; i++) {
    const angle = (i * Math.PI) / 2 + Math.PI / 4;
    const prongGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.45, 8);
    const prong = new THREE.Mesh(prongGeo, goldMat);
    prong.position.set(Math.cos(angle) * 0.28, 1.2, Math.sin(angle) * 0.28);
    prong.name = `Prong_${i+1}`;
    group.add(prong);
  }

  // Accent stones on shoulders
  for (let side = -1; side <= 1; side += 2) {
    for (let j = 1; j <= 3; j++) {
      const angle = (j * 0.12) * side;
      const accentGeo = new THREE.SphereGeometry(0.045, 8, 8);
      const accent = new THREE.Mesh(accentGeo, diamondMat);
      accent.position.set(Math.sin(angle) * 1.0, Math.cos(angle) * 1.0, 0);
      accent.name = `Accent_${side}_${j}`;
      group.add(accent);
    }
  }

  return group;
}

// 2. Create Bracelet Model (Kada / Cuff)
function createBracelet() {
  const group = new THREE.Group();
  group.name = "JewelleryRoot";

  const goldMat = new THREE.MeshStandardMaterial({
    color: 0xC9A55C,
    metalness: 0.98,
    roughness: 0.18,
    name: "ChampagneGold"
  });

  const diamondMat = new THREE.MeshStandardMaterial({
    color: 0xFFFFFF,
    metalness: 0.1,
    roughness: 0.05,
    name: "DiamondAccents"
  });

  // Oval Kada Band
  const curve = new THREE.EllipseCurve(0, 0, 1.5, 1.2, 0, 2 * Math.PI, false, 0);
  const points = curve.getPoints(120);
  const path = new THREE.CatmullRomCurve3(points.map(p => new THREE.Vector3(p.x, 0, p.y)));
  path.closed = true;

  const tubeGeo = new THREE.TubeGeometry(path, 120, 0.12, 24, true);
  const braceletMesh = new THREE.Mesh(tubeGeo, goldMat);
  braceletMesh.name = "KadaTube";
  group.add(braceletMesh);

  // Center Feature Plate with Inset Diamonds
  const claspGeo = new THREE.BoxGeometry(0.6, 0.22, 0.32);
  const claspMesh = new THREE.Mesh(claspGeo, goldMat);
  claspMesh.position.set(0, 0, 1.2);
  claspMesh.name = "CenterFeature";
  group.add(claspMesh);

  // 3 Linear Diamonds on the clasp plate
  for (let k = -1; k <= 1; k++) {
    const stoneGeo = new THREE.SphereGeometry(0.06, 12, 12);
    const stone = new THREE.Mesh(stoneGeo, diamondMat);
    stone.position.set(k * 0.18, 0.12, 1.2);
    stone.name = `ClaspStone_${k+1}`;
    group.add(stone);
  }

  return group;
}

// 3. Create Chain / Necklace Model
function createChain() {
  const group = new THREE.Group();
  group.name = "JewelleryRoot";

  const goldMat = new THREE.MeshStandardMaterial({
    color: 0xC9A55C,
    metalness: 0.98,
    roughness: 0.18,
    name: "ChampagneGold"
  });

  const diamondMat = new THREE.MeshStandardMaterial({
    color: 0xFFFFFF,
    metalness: 0.1,
    roughness: 0.05,
    name: "PendantDiamond"
  });

  // Elegant catenary curve for chain
  const chainPoints = [];
  for (let i = -20; i <= 20; i++) {
    const t = i / 20;
    const x = t * 1.5;
    const y = (t * t * 1.8) - 1.0;
    const z = -Math.abs(t) * 0.3;
    chainPoints.push(new THREE.Vector3(x, y, z));
  }
  const chainCurve = new THREE.CatmullRomCurve3(chainPoints);
  const chainGeo = new THREE.TubeGeometry(chainCurve, 80, 0.045, 16, false);
  const chainMesh = new THREE.Mesh(chainGeo, goldMat);
  chainMesh.name = "ChainLinks";
  group.add(chainMesh);

  // Pendant Bail & Drop
  const bailGeo = new THREE.TorusGeometry(0.09, 0.03, 16, 32);
  const bail = new THREE.Mesh(bailGeo, goldMat);
  bail.position.set(0, -1.05, 0);
  group.add(bail);

  // Teardrop Pendant Frame
  const pendantFrameGeo = new THREE.CylinderGeometry(0.24, 0.12, 0.42, 16);
  const pendantFrame = new THREE.Mesh(pendantFrameGeo, goldMat);
  pendantFrame.position.set(0, -1.35, 0);
  pendantFrame.name = "PendantFrame";
  group.add(pendantFrame);

  // Pendant Inset Gem
  const gemGeo = new THREE.SphereGeometry(0.18, 16, 16);
  const gem = new THREE.Mesh(gemGeo, diamondMat);
  gem.position.set(0, -1.35, 0.04);
  gem.name = "PendantGem";
  group.add(gem);

  return group;
}

// 4. Create Earring Model
function createEarring() {
  const group = new THREE.Group();
  group.name = "JewelleryRoot";

  const goldMat = new THREE.MeshStandardMaterial({
    color: 0xC9A55C,
    metalness: 0.98,
    roughness: 0.18,
    name: "ChampagneGold"
  });

  const diamondMat = new THREE.MeshStandardMaterial({
    color: 0xFFFFFF,
    metalness: 0.1,
    roughness: 0.05,
    name: "EarringStone"
  });

  // Huggie / Loop
  const loopGeo = new THREE.TorusGeometry(0.75, 0.09, 32, 64, Math.PI * 1.6);
  const loop = new THREE.Mesh(loopGeo, goldMat);
  loop.rotation.y = Math.PI / 2;
  loop.name = "EarringLoop";
  group.add(loop);

  // Dangling Chandelier / Drop Motif
  const dropConnector = new THREE.CylinderGeometry(0.03, 0.03, 0.3, 8);
  const conn = new THREE.Mesh(dropConnector, goldMat);
  conn.position.set(0, -0.9, 0);
  group.add(conn);

  // Drop Gemstone
  const dropGeo = new THREE.ConeGeometry(0.35, 0.7, 16);
  dropGeo.rotateX(Math.PI);
  const drop = new THREE.Mesh(dropGeo, diamondMat);
  drop.position.set(0, -1.4, 0);
  drop.name = "DropStone";
  group.add(drop);

  // Cap / Setting on drop
  const capGeo = new THREE.SphereGeometry(0.14, 12, 12);
  const cap = new THREE.Mesh(capGeo, goldMat);
  cap.position.set(0, -1.05, 0);
  group.add(cap);

  return group;
}

async function run() {
  console.log('Generating GLB/GLTF models...');
  await exportScene(createRing(), 'ring.glb');
  await exportScene(createBracelet(), 'bracelet.glb');
  await exportScene(createChain(), 'chain.glb');
  await exportScene(createEarring(), 'earring.glb');
  console.log('All 4 models successfully generated in public/models/');
}

run().catch(console.error);
