// @ts-check
export {};

const canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("canvas1"));
let context = canvas.getContext('2d');
canvas.style.backgroundColor = "#2D2338"; 

let height = canvas.height;
let width = canvas.width;
let bladeLength = 20;
let bladeWidth = 4;
function mainPiece(){

    bladeLength = 140;
    bladeWidth = 10;

    context.save();
    context.fillStyle = "#FF22F7";
    context.beginPath();
    context.lineTo(width/2 - 75, height/2 - 75);
    context.lineTo(width/2, height/2);
    context.lineTo(width/2 - 160, height/2 - 75);
    context.lineTo(width/2 + 42.5, height/2 - 142.5);
    context.fill();
    context.restore();

    //big propeller 

    context.save();
    context.translate(width/2 - 75, height/2 - 75); 
    context.rotate(performance.now() / 80); // spin the propeller
    for (let blades = 0; blades < 4; blades++) {
        context.fillStyle = "#A487FF";
        context.fillRect(0, -bladeWidth / 2, bladeLength, bladeWidth);
        context.rotate(Math.PI / 2);
    }
    context.restore();

    //right propeller
    bladeLength = 70;
    bladeWidth = 8;
    context.save();
    context.translate(width/2, height/2);
    context.rotate(performance.now() / 50); 
    for (let blades = 0; blades < 4; blades++) {
        context.fillStyle = "#E8CB8B";
        context.fillRect(0, -bladeWidth / 2, bladeLength, bladeWidth);
        context.rotate(Math.PI / 2);
    }
    context.restore();

    //left propeller
    context.save();
    context.translate(width/2 + 42.5, height/2 - 142.5); 
    context.rotate(performance.now() / 55); 
    for (let blades = 0; blades < 4; blades++) {
        context.fillStyle = "#E8CB8B";
        context.fillRect(0, -bladeWidth / 2, bladeLength, bladeWidth);
        context.rotate(Math.PI / 2);
    }
    context.restore();

    //front propeller
    context.save();
    context.translate(width/2 - 160, height/2 - 75);
    context.rotate(performance.now() / 40);
    for (let blades = 0; blades < 4; blades++) {
        context.fillStyle = "#E8CB8B";
        context.fillRect(0, -bladeWidth / 2, bladeLength, bladeWidth);
        context.rotate(Math.PI / 2);
    }
    context.restore();
}

function drawSpinner() {
    bladeLength = 20;
    bladeWidth = 8;

    context.save();
    context.translate(100, 100);
    context.rotate(performance.now() / 60); 
    for (let blades = 0; blades < 4; blades++) {
        context.fillStyle = "#8688E3";
        context.fillRect(0, 50, bladeLength, bladeWidth); // x y width height 
        context.rotate(Math.PI / 2);
    }
    context.restore();

    context.save();
    context.translate(130, 620);
    context.rotate(performance.now() / 60); 
    for (let blades = 0; blades < 4; blades++) {
        context.fillStyle = "#8688E3";
        context.fillRect(0, 50, bladeLength, bladeWidth); 
        context.rotate(Math.PI / 2);
    }
    context.restore();

    context.save();
    context.translate(500, 345);
    context.rotate(performance.now() / 60); 
    for (let blades = 0; blades < 4; blades++) {
        context.fillStyle = "#8688E3";
        context.fillRect(0, 50, bladeLength, bladeWidth); 
        context.rotate(Math.PI / 2);
    }
    context.restore();

}

function drawScene() {
    //let spin = 50 * Math.PI;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.save();
    context.translate(200, 350); 
    context.scale(.4, -.4);
    context.rotate(performance.now() / 1000);
    mainPiece();
    context.restore();
    context.save();
    drawSpinner();
    context.restore();
    context.save();

    //extra tiny ones 
    context.translate(200, 50);
    context.scale(.1, -.1);
    context.translate(0, 10);
    context.rotate(performance.now() / 1000);
    mainPiece();
    context.restore();
    context.save();

    //this one moves the other way 
    context.translate(400, 500);
    context.scale(.1, .1);
    context.translate(0, -10);
    context.rotate(performance.now() / 1000);
    mainPiece();
    context.restore();

    window.requestAnimationFrame(drawScene);
}
drawScene();