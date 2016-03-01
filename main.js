// Get canvas element
var canvas = document.querySelector('canvas');
// Allows us to manipulate canvas
var ctx = canvas.getContext("2d");

// Draw a ball that acts as a shooter. We'll worry about graphics later.
// This will have to be put into a function
ctx.beginPath();
// x-axis, y-axis, radius, starting angle, and ending angle
ctx.arc(150, 150, 40, 0, Math.PI*2);
// Color of circle
ctx.fillStyle = "#9b59b6";
// Texts the ctx to actually draw the circle on the canvas
ctx.fill();
ctx.closePath();