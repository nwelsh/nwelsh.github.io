// fireworks
let canvas = (document.getElementById("box2canvas"));
let context = canvas.getContext('2d');
// I chose a monochrome of red and added dark purple for my fireworks colors 
// You should have the fireworks be different colors. The explosions should each be a different color
let colors = ["#DB0FEB", "#E82C57", "#000000", "#F58558", "#E82CB2", "#9B00F5"];
canvas.style.backgroundColor = "#DBBEE6";
let radius = 3; //I tried to keep most variables a multiple of 3 since they werent specified in the instructions 
let width = canvas.width;
let height = canvas.height;

// arrays of boxes and discs 
let discs = [];
let boxes = [];

//function generates a random number between x and y, found: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function genRand(x, y) {
        return Math.random() * (y - x) + x;
}

//function to help create the circles. these are all the attributes: 
// input rand vals: tx, ty, x; y(canvas height), radius,
// colors generated from array, velocity (change in x/change in time)
// x needs to be generated from a rand location 
function createDiscs(x, tx, ty)
{
        return { "x":x, "y":height, "r": radius, "tx":tx, "ty":ty,
        "color":colors[Math.floor(genRand(0, colors.length))], 
        "vx":((tx - x) / 10), "vy":((height - ty) / 10)}; // / is time to explode 
}
// When the user clicks the mouse in the canvas (rectangle), a circle (a firework) starts at the bottom
// edge of the screen and travels to the mouse position.
canvas.onclick = function(event){
        //push a new disc with function createDisc: random x to shoot from each time, tx: target x value, ty: target y value
        discs.push(createDiscs(genRand(0, width), event.clientX, event.clientY));
} 
//function to create the firework
function fireworks()
{
        //Add random fireworks in addition to the ones created by user clicks: constantly also generates new fireworks at a random time
        //Found how to randomly trigger an event: https://stackoverflow.com/questions/49289864/javascript-random-trigger-on-event
        if (genRand(0, 300) < 3){ //generate a number between 0 and 300, if its less than 3 so should generate pretty frequently
                //random x, random x and y coordinates to shoot to
                discs.push(createDiscs(genRand(0, width), genRand(0, width), genRand(0, height)));
        }
        //create the boxes and the discs, creates explosion. for random and clicked discs
        discs.forEach(function(disc){
                let discs = 0;
                let newDiscs = Math.floor(genRand(20, 30)); // create 10 to 20 new discs 
                disc.x = disc.x + disc.vx;  //move the discs
                disc.y = disc.y - disc.vy;
                //to explode the disc into a bunch of boxes
                if (disc.y <= disc.ty) 
                {
                    //create the explosion, generate random boxes to explode from that spot 
                    while(discs < newDiscs){
                        //pick a random number between -9 and 9 to go to for x and y, creates explosion because the radius is 3
                        boxes.push({"fade": Math.round(Math.random()*10) + 20, "x":disc.tx, "y":disc.ty, "r": radius, "color":disc.c, "vx":genRand(-9, 9), "vy":genRand(-9, 9)});
                        discs++;
                    } 
                }
        });
        boxes.forEach(function(box){
                box.x = box.x + box.vx; // move the boxes
                box.y = box.y - box.vy; 
                box.fade--; // Have the explosion pieces fade out over time.
                box.vy--; //gravity creates the downward motion                 
        });
        //set new attributes for discs, reset the discs
        discs = discs.filter(disc => disc.y >= disc.ty);
        //clear for no redrawing
        context.clearRect(0, 0, width, height);
        //create boxes with new attributes
        boxes.forEach(function(box){
        context.fillStyle = box.color;
        let boxSize = genRand(0,6); //I want the boxes to change sizes after the explosion
        context.fillRect(box.x, box.y, radius + boxSize, radius + boxSize); //create each box
        });
        //create discs with new attribtues 
        discs.forEach(function(disc){
            context.fillStyle = disc.color;
            context.beginPath();
            context.arc(disc.x, disc.y, radius, 0, 2 * Math.PI); //create each disc
            context.fill();
        });
        window.requestAnimationFrame(fireworks);
}
fireworks();
