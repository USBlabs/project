// Get canvas element
var canvas = document.querySelector('canvas');
// Allows us to manipulate canvas
var ctx = canvas.getContext("2d");

// Variable for ball radius
var ballradius = 40;

// Draw a ball that acts as a shooter. We'll worry about graphics later.
// This will have to be put into a function
ctx.beginPath();
// x-axis, y-axis, radius, starting angle, ending angle, direction to measure
// angle (false for clockwise (default), true for counterclockwise)
ctx.arc(150, 150, ballradius, 0, Math.PI*2, false);
// Color of circle
ctx.fillStyle = "#9b59b6";
// Texts the ctx to actually draw the circle on the canvas
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(200, 300, 0, Math.PI, true);
ctx.strokeStyle = "yellow";
ctx.stroke();
ctx.closePath();
