// Get canvas element
var canvas = document.querySelector('canvas');
// Allows us to manipulate canvas
var ctx = canvas.getContext("2d");

// Variable for ball radius
var ballradius = 40;

// Object containing information about shooter
var shooter = {
  // Position on canvas
  position = {
    x:0,
    y:0
  }
  // Current velocity on canvas
  velocity = {
    x:0,
    y:0
  }
  // Acceleration value to be used when direction is being pressed
  acceleration = 2;
  // Maximum speed
  velocity_cap = 20;
  // Direction shooter is facing, in radians
  direction = 0;

  // Function that updates direction field each frame
  /* NOTE: this function will have to be changed in order to handle the event
      that only one of velocity.y or velocity.x is 0
  */
  function update_direction = {
    // If velocities are zero, don't change direction
    if (velocity.y == 0 && velocity.x == 0) {
      return;
    }
    // arctan function; returns value in radians
    var angle = Math.atan(Math.abs(velocity.y) / Math.abs(velocity.x));
    // If going down
    if (velocity.y > 0) {
      // And to the right
      if (velocity.x > 0) {
        // Shift around unit circle to quadrant 4
        direction = angle + Math.PI * 3 / 2;
        return;
      }
      else if (velocity.x < 0){ // Must be going left
        // Shift to quadrant 3
        direction = angle + Math.PI;
        return;
      }
    }
    // If going up
    if (velocity.y < 0) {
      // And to the right
      if (velocity.x > 0) {
        // No shift needed
        direction = angle;
        return;
      }
      else if (velocity.x < 0) { // Must be going left
        // Shift to quadrant 2
        direction = angle + Math.PI / 2;
        return;
      }
    }
  }
}

function draw() {
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
}

// Repeat function draw every 10 ms
setInterval(draw, 10);
