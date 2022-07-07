// @ts-check
export {};  // null statement to tell VSCode we're doing a module


let canvas = (document.getElementById("spiralcanvas"));

if (!(canvas instanceof HTMLCanvasElement))
    throw new Error("Canvas is not HTML Element");

let box = /** @type {HTMLInputElement} */ document.getElementById("dotslines");
// let slider = /** @type {HTMLInputElement} */  document.getElementById("slider");

let context = canvas.getContext("2d");
// let steps = slider.value;//can be 20-200
let steps = 150;


function dots(u){
let theta = 2 * Math.PI * 4 * u; 
let x = 300 + u * 180 * Math.cos(theta);
let y = 300 + u * 180 * Math.sin(theta);
return [x,y];
}

function dotsLittle(u){
    let theta = 2 * Math.PI * 4 * u; 
    let x = 100 + u * 120 * Math.cos(theta);
    let y = 100 + u * 120 * Math.sin(theta);
    return [x,y];
    }

    function dotsLittleRight(u){
        let theta = 2 * Math.PI * 4 * u; 
        let x = 500 + u * 120 * Math.cos(theta);
        let y = 500 + u * 120 * Math.sin(theta);
        return [x,y];
        }

canvas.style.backgroundColor = "#E6C6F7";



function middle(){ 
  // context.bezierCurveTo(x,y, x,y, x,y);
 
   for(let u = 0; u < 1; u += 1/steps){
     let x = dots(u)[0];
     let y = dots(u)[1];
     context.beginPath(); //ellipse
     context.ellipse(x,y,1,1,Math.PI / 4, 0, 2 * Math.PI); 
     context.stroke();
   }
 } middle();

 function little(){ 
    // context.bezierCurveTo(x,y, x,y, x,y);
   
     for(let u = 0; u < 1; u += 1/steps){
       let x = dotsLittle(u)[0];
       let y = dotsLittle(u)[1];
       context.beginPath(); //ellipse
       context.ellipse(x,y,1,1,Math.PI / 4, 0, 2 * Math.PI); 
       context.stroke();
     }
   } little();

   function littleRight(){ 
    // context.bezierCurveTo(x,y, x,y, x,y);
   
     for(let u = 0; u < 1; u += 1/steps){
       let x = dotsLittleRight(u)[0];
       let y = dotsLittleRight(u)[1];
       context.beginPath(); //ellipse
       context.ellipse(x,y,1,1,Math.PI / 4, 0, 2 * Math.PI); 
       context.stroke();
     }
   } littleRight();