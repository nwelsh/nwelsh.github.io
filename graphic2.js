/**
 * 04-05-01.js - a simple JavaScript file that gets loaded with
 * page 5 of Workbook 4 (CS559).
 *
 * written by Michael Gleicher, January 2019
 * modified January 2020, February 2021
 *
 */

// @ts-check
/* jshint -W069, esversion:6 */

/**
 * If you want to read up on JavaScript classes, 
 * see the tutorial on the class website:
 * 
 * https://graphics.cs.wisc.edu/Courses/559-sp2021/tutorials/oop-in-js-1/
 */
class Boid {
    /**
     * 
     * @param {number} x    - initial X position
     * @param {number} y    - initial Y position
     * @param {number} vx   - initial X velocity
     * @param {number} vy   - initial Y velocity
     */
    constructor(x, y, vx = 1, vy = 0, color = "pink") {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.color = color;
    }
    /**
     * Draw the Boid
     * @param {CanvasRenderingContext2D} context 
     */
    draw(context) {
        obstacles();
        context.fillStyle = "pink";
        context.save();
        context.translate(this.x, this.y);
        context.rotate(Math.atan2(this.vy, this.vx));
        context.beginPath();
        //shape is a triangle 
        context.moveTo(0, 10);
        context.lineTo(17, 0);
        context.lineTo(-5, -5);
        context.fill();        
        context.restore();
    }
    /**
     * Perform the "steering" behavior -
     * This function should update the velocity based on the other
     * members of the flock.
     * It is passed the entire flock (an array of Boids) - that includes
     * "this"!
     * Note: dealing with the boundaries does not need to be handled here
     * (in fact it can't be, since there is no awareness of the canvas)
     * *
     * And remember, (vx,vy) should always be a unit vector!
     * @param {Array<Boid>} flock 
     */
    steer(flock) {
        /*
		// Note - this sample behavior is just to help you understand
		// what a steering function might  do
		// all this one does is have things go in circles, rather than
		// straight lines
		// Something this simple would not count for the advanced points:
		// a "real" steering behavior must consider other boids,
		// or at least obstacles.
		
        // a simple steering behavior: 
        // create a rotation matrix that turns by a small amount
        // 2 degrees per time step
        */
        // Uses slider to create which way to steer 
        let steerVal = Number(steer.value);
        const angle = steerVal * Math.PI / 180;
        const s = Math.sin(angle);
        const c = Math.cos(angle);

        let ovx = this.vx;
        let ovy = this.vy;

        this.vx =  ovx * c + ovy * s;
        this.vy = -ovx * s + ovy * c;
        
		
    }
}

function genRand(x, y) {
    return Math.random() * (y - x) + x;
}


/** the actual main program
 * this used to be inside of a function definition that window.onload
 * was set to - however, now we use defer for loading
 */

 /** @type Array<Boid> */
let theBoids = [];
let maxSize = 18; //18 to allocate for the 17 length triangle

let canvas = /** @type {HTMLCanvasElement} */ (document.getElementById("flock"));
let context = canvas.getContext("2d");
canvas.style.backgroundColor = "#504B59";

let speedSlider = /** @type {HTMLInputElement} */ (document.getElementById("speed"));
let steer = /** @type {HTMLInputElement} */ (document.getElementById("steer"));

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    theBoids.forEach(boid => boid.draw(context));
}

function obstacles(){
    context.beginPath();
    context.fillStyle = "white";
    context.fillRect(20, 20, 10, 10);
    context.fillRect(430, 500, 10, 10);
    context.fillRect(520, 280, 10, 10);
    context.stroke();


}

// /**
//  * Create some initial boids
//  * STUDENT: may want to replace this
//  */
// theBoids.push(new Boid(100, 100));
//left in so I have some initial boids to reference 
 theBoids.push(new Boid(200, 200, -1, 0, "pink"));
 theBoids.push(new Boid(300, 300, 0, -1, "pink"));
 theBoids.push(new Boid(400, 400, 0, 1, "pink"));

/**
 * Handle the buttons
 */
document.getElementById("add").onclick = function () {
    //x y vx = 1 vy = 0 initially it starts left and goes right 
    //  add 10 boids when button is clicked, random locations and directions
    for(let i = 0; i < 10; i++){
        //between 20 and 580 to allocate for size, gen vx and vy as wither -1, 0, or 1
        theBoids.push(new Boid(genRand(20, 580), genRand(20, 580), genRand(-1, 1), genRand(-1, 1), "pink"));
    }
};
document.getElementById("clear").onclick = function () {
    //clear the array 
    theBoids.length = 0;
};

let lastTime; // will be undefined by default
/**
 * The Actual Execution
 */
function loop(timestamp) {
    // time step - convert to 1/60th of a second frames
    // 1000ms / 60fps
    const delta = (lastTime ? timestamp-lastTime : 0) * 1000.0/60.0;

    // change directions
    theBoids.forEach(boid => boid.steer(theBoids));
    // move forward
    let speed = Number(speedSlider.value);
    theBoids.forEach(function (boid) {
        boid.x += boid.vx * speed;
        boid.y += boid.vy * speed;
    });
    // make sure that we stay on the screen
    theBoids.forEach(function (boid) {
        /**
         * Students should replace this with collision code
         */
        
        // boids “bounce” off the edge instad of wrapping around 
        
        // if y value is at the top edge and is moving up, make it move down 
        if (boid.y < maxSize && boid.vy < 0)
        {
            boid.vy = -boid.vy;
        }

         // if x value is at the right edge and its moving right, move left 
         if ((boid.x > canvas.width - maxSize && boid.vx > 0)) 
         {
             boid.vx = -boid.vx;
         }

         //if y value is at bottom edge and is moving down, make it move up 
         if(boid.y > canvas.height - maxSize && boid.vy > 0){
            boid.vy = -boid.vy;
         }

        //if x value is less than the left side and its moving left, move right  
        if((boid.x < maxSize && boid.vx < 0)){
            boid.vx = -boid.vx;
         } 

         // when they collide with each other

        theBoids.forEach(function(collide){
            //calculate boid's location with distance location: 
            let boidLoc = Math.pow((boid.x - collide.x), 2) +  Math.pow((boid.y - collide.y), 2);
            //attempted to make extra objects 
            // let obs1X = 20;
            // let obs1Y = 20;
            // let obs2X = 430;
            // let obs2Y = 500;
            // // //context.fillRect(20, 20, 120, 100);
            // // //context.fillRect(430, 500, 160, 80);
            // let obs1Loc = Math.pow((boid.x - obs1X), 2) +  Math.pow((boid.y - obs1Y), 2);
            // let obs2Loc = Math.pow((boid.x - obs2X), 2) +  Math.pow((boid.y - obs2Y), 2);
            // //let obs2Loc = Math.pow((obs2X), 2) +  Math.pow((obs2Y), 2);
            //if boid location is within current boids circle, and theyre not the same boid, then change path 
            if(boidLoc < Math.pow(maxSize, 2) && boid != collide){ 
                boid.vx = -boid.vx;
                boid.vy = -boid.vy;              
                // change color here 
            }

        });

        boid.x = boid.x % canvas.width;
        boid.y = boid.y % canvas.height;
        if (boid.x < 0) boid.x += canvas.width;
        if (boid.y < 0) boid.y += canvas.height;


    });
    // now we can draw
    draw();
    // and loop
    window.requestAnimationFrame(loop);


}
// start the loop with the first iteration
window.requestAnimationFrame(loop);
