// @ts-check
export {};  // null statement to tell VSCode we're doing a module


let canvas = (document.getElementById("spiralcanvas"));

if (!(canvas instanceof HTMLCanvasElement))
    throw new Error("Canvas is not HTML Element");

let box = /** @type {HTMLInputElement} */ document.getElementById("dotslines");
// let slider = /** @type {HTMLInputElement} */  document.getElementById("slider");

let context = canvas.getContext("2d");
// let steps = slider.value;//can be 20-200
let steps = 200;


function dots(u){
let theta = 2 * Math.PI * 4 * u; 
let x = 300 + u * 180 * Math.cos(theta);
let y = 300 + u * 180 * Math.sin(theta);
return [x,y];
}

canvas.style.backgroundColor = "#C183EB";



function drawNotChecked(){ 
  // context.bezierCurveTo(x,y, x,y, x,y);
 
   for(let u = 0; u < 1; u += 1/steps){
     let x = dots(u)[0];
     let y = dots(u)[1];
     context.beginPath(); //ellipse
     context.ellipse(x,y,1,1,Math.PI / 4, 0, 2 * Math.PI); 
     context.stroke();
   }
 } drawNotChecked();