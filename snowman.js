import * as T from "./three.module.js";
import { OrbitControls } from "./controls/OrbitControls.js";

let renderer = new T.WebGLRenderer();
renderer.setSize(500, 500);
document.getElementById("div1").appendChild(renderer.domElement);

let scene = new T.Scene();
let camera = new T.PerspectiveCamera();
camera.position.z = 10;
camera.position.y = 5;
camera.position.x = 5;
camera.lookAt(0, 3, 0);

scene.add(new T.AmbientLight("white", 0.2));
let point = new T.PointLight("white", 1, 0, 0);
point.position.set(20, 10, 15);
scene.add(point);

let dir = new T.DirectionalLight("purple", 1);
dir.position.set(5, 0, 0);
scene.add(dir);

let axesMarker = new T.AxesHelper();
scene.add(axesMarker);

let controls = new OrbitControls(camera, renderer.domElement);

// ground
let groundBox = new T.BoxGeometry(5, 0.1, 5);
let groundMesh = new T.Mesh(
    groundBox,
    new T.MeshLambertMaterial({ color: "pink" })
);
groundMesh.position.y = -0.05;
scene.add(groundMesh);

//radius, width, height
let bottom = new T.Mesh(
    new T.SphereGeometry(15, 32, 16),
    new T.MeshStandardMaterial({ color: "white" })
  );
  bottom.scale.set(.05, .05, .05);
  bottom.translateY(.6);
let middle = new T.Mesh(
    new T.SphereGeometry(15, 32, 16),
    new T.MeshStandardMaterial({ color: "white" })
  );
  middle.scale.set(.035, .035, .035);
  middle.translateY(1.8);
let face = new T.Mesh(
    new T.SphereGeometry(15, 32, 16),
    new T.MeshStandardMaterial({ color: "white" })
  );
  face.scale.set(.025, .025, .025);
  face.translateY(2.7);

  let nose = new T.Mesh(
    new T.ConeGeometry( 5, 20, 32),
    new T.MeshBasicMaterial({ color: "orange" })
  );
  nose.scale.set(.02, .02, .02);
  nose.translateY(2.75);
  nose.translateX(.5);
  nose.translateZ(.1);
  nose.rotateZ(-Math.PI/2);

  let armLeft = new T.Mesh(
    new T.CylinderGeometry( 2, 2, 62, 32),
    new T.MeshBasicMaterial({ color: "#6B3600" })
  );
  armLeft.scale.set(.02, .02, .02);
  armLeft.translateY(1.8);
  armLeft.translateZ(.5);
  armLeft.rotateX(-Math.PI/4);

  let armRight = new T.Mesh(
    new T.CylinderGeometry( 2, 2, 62, 32),
    new T.MeshBasicMaterial({ color: "#6B3600" })
  );
  armRight.scale.set(.02, .02, .02);
  armRight.translateY(2.3);
  armRight.translateX(.5);
  armRight.rotateZ(-Math.PI/4);

  let hat = new T.Mesh(
    new T.CylinderGeometry( 8,8, 20, 32),
    new T.MeshStandardMaterial({ color: "purple" , roughness: 4.5})
  );
  hat.scale.set(.02, .02, .02);
  hat.translateY(3.2);

  let hatBottom = new T.Mesh(
    new T.CylinderGeometry( 16,16, 4, 10),
    new T.MeshStandardMaterial({ color: "#742CDB" , roughness: 4.5})
  );
  hatBottom.scale.set(.02, .02, .02);
  hatBottom.translateY(3);

  let eye1 = new T.Mesh(
    new T.SphereGeometry( 5, 20, 32),
    new T.MeshBasicMaterial({ color: "black" })
  );
  eye1.scale.set(.015, .015, .015);
  eye1.translateX(.38);
  eye1.translateY(2.9);

  let eye2 = new T.Mesh(
    new T.SphereGeometry( 5, 20, 32),
    new T.MeshBasicMaterial({ color: "black" })
  );
  eye2.scale.set(.015, .015, .015);
  eye2.translateZ(.3);
  eye2.translateY(2.9);
  
//   let mouth1 = new T.Mesh(
//     new T.SphereGeometry( 5, 20, 32),
//     new T.MeshBasicMaterial({ color: "gray" })
//   );
//   mouth1.scale.set(.01, .01, .01);
//   mouth1.translateZ(.4);
//   mouth1.translateY(2.7);

//   let mouth2 = new T.Mesh(
//     new T.SphereGeometry( 5, 20, 32),
//     new T.MeshBasicMaterial({ color: "gray" })
//   );
//   mouth2.scale.set(.035, .035, .035);
//   mouth2.translateY(2.5);
//   mouth2.translateX(0);
//   mouth2.translateZ(0);

//   let mouth3 = new T.Mesh(
//     new T.SphereGeometry( 5, 20, 32),
//     new T.MeshBasicMaterial({ color: "gray" })
//   );
//   mouth3.scale.set(.01, .01, .01);
//   mouth3.translateX(.4);
//   mouth3.translateY(2.6);

// add the boxes to the scene
scene.add(bottom);
scene.add(middle);
scene.add(face);
scene.add(nose);
scene.add(armLeft);
scene.add(armRight);
scene.add(hat);
scene.add(hatBottom);
scene.add(eye1);
scene.add(eye2);
// scene.add(mouth1);
// scene.add(mouth2);
// scene.add(mouth3);

let lastTimestamp;

function animate(timestamp) {
    let timeDelta = 0.001 * (lastTimestamp ? timestamp - lastTimestamp : 0);
    lastTimestamp = timestamp;

    hat.rotation.y += .5 *timeDelta;
    hatBottom.rotation.y += .5 *timeDelta;

    renderer.render(scene, camera);
    window.requestAnimationFrame(animate);
}
window.requestAnimationFrame(animate);