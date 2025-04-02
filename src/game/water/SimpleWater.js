import * as THREE from "three";
import { degToRad } from "three/src/math/MathUtils.js";
export class SimpleWater {
  constructor() {
    this.simpleWater = null;
    this._init();
  }
  _init() {
    const simpleWaterGeometry = new THREE.PlaneGeometry(400, 1300, 10, 10);

    const simpleWaterMaterial = new THREE.MeshBasicMaterial({
      color: 0x3987c9,
      transparent: true,
      opacity: 0.7,
    });
    this.simpleWater = new THREE.Mesh(simpleWaterGeometry, simpleWaterMaterial);
    simpleWaterGeometry.rotateX(degToRad(-90));
    simpleWaterGeometry.translate(90, -8, 0);
  }
}
