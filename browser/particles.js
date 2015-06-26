var Particles = require('canvas-particles');
var randColor = require('randomcolor');

var canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;

// falling particles with random x velocity and random origin
var range = 50;
var xMax = ((canvas.width / 2) + range);
var xMin = ((canvas.width/2) - range);
var yMax = ((canvas.height / 2) + range);
var yMin = ((canvas.height/2) - range);

var particles = Particles({
  density: 0,
  gravity: 0.001,
  vx: function() {
    return Math.random() * 0.2 - 0.1;
  },
  vy: 0.5,
  origin: function() {
    return {
      x: Math.random() * (xMax - xMin) + xMin,
      y: Math.random() * (yMax - yMin) + yMin
    };
  },
  wobble: function() {
    return (Math.random() *0.2) - 0.1;
  },
  color: randColor
}).loop(canvas, function(ctx) {
  ctx.fillStyle = "rgba(255, 255, 255, 1)";
  ctx.fillRect(0,0, canvas.width, canvas.height);
});
