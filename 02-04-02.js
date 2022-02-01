// JavaScript file to be filled in by the student for Box 4-2
// we'll give you something to get started...

// you should start by getting the canvas
// then draw whatever you want!

function RedCircles() {
    var canvas = document.getElementById('canvas1');
    if (canvas.getContext) {
       var ctx = canvas.getContext('2d');
        
      ctx.fillStyle = "#BD3E27";
      ctx.strokeStyle = "#F0371F";
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.arc(100, 80,75, 0, Math.PI * 2, true);
      ctx.fill();
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(170, 100,75, 0, Math.PI * 2, true);
      ctx.stroke();
      ctx.beginPath();
      ctx.fill();
      ctx.arc(170, 100, 55, 0, Math.PI * 2, false);
      ctx.stroke();
      ctx.beginPath();
      ctx.fill();
      ctx.arc(270, 80,75, 0, Math.PI * 2, false);
      ctx.fill();
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(325, 60, 50, 0, Math.PI * 2, true);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(355, 110, 45, 0, Math.PI * 2, true);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(425, 110, 70, 0, Math.PI * 2, true);
      ctx.fill();
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(445, 60, 40, 0, Math.PI * 2, true);
      ctx.stroke();
    }
  }
  RedCircles();

  function orangeCircles() {
    var canvas = document.getElementById('canvas1');
    if (canvas.getContext) {
       var ctx = canvas.getContext('2d');
        
      ctx.fillStyle = "#F0715D";
      ctx.strokeStyle = "#D46300";
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.arc(110, 220, 75, 0, Math.PI * 2, true);
      ctx.fill();
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(160, 190, 75, 0, Math.PI * 2, true);
      ctx.stroke();
      ctx.beginPath();
      ctx.fill();
      ctx.arc(170, 190, 55, 0, Math.PI * 2, false);
      ctx.stroke();
      ctx.beginPath();
      ctx.fill();
      ctx.arc(200, 240,55, 0, Math.PI * 2, false);
      ctx.fill();
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(250, 200, 50, 0, Math.PI * 2, true);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(285, 230, 45, 0, Math.PI * 2, true);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(405, 230, 70, 0, Math.PI * 2, true);
      ctx.fill();
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(335, 190, 40, 0, Math.PI * 2, true);
      ctx.stroke();
    }
  }
  orangeCircles();

  function pinkCircles() {
    var canvas = document.getElementById('canvas1');
    if (canvas.getContext) {
       var ctx = canvas.getContext('2d');
        
      ctx.fillStyle = "#F5B7B0";
      ctx.strokeStyle = "#F27D6F";
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.arc(110, 370, 75, 0, Math.PI * 2, true);
      ctx.fill();
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(160, 350, 75, 0, Math.PI * 2, true);
      ctx.stroke();
      ctx.beginPath();
      ctx.fill();
      ctx.arc(170, 350, 55, 0, Math.PI * 2, false);
      ctx.stroke();
      ctx.beginPath();
      ctx.fill();
      ctx.arc(250, 340,55, 0, Math.PI * 2, false);
      ctx.fill();
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(250, 370, 50, 0, Math.PI * 2, true);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(315, 380, 45, 0, Math.PI * 2, true);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(405, 350, 70, 0, Math.PI * 2, true);
      ctx.fill();
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(335, 350, 40, 0, Math.PI * 2, true);
      ctx.stroke();
    }
  }
  pinkCircles();