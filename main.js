// Get canvas element
var canvas = document.querySelector('canvas');
// Allows us to manipulate canvas
var ctx = canvas.getContext("2d");

//Starting point
var a = 150;
var b = 150;
//move Direction
var da = 2;
var db = 2;

// Variable for ball radius
var ballradius = 40;

// We should use an array to keep track of all enemies and their info
var enemies = [];

// An array for all bullets and their info (ex. position, velocity)
var bullets = [];

var platform = {
  width : 20,
  height: 5,
  x : 50,
  y : 50,
  // These will make it easier to calculate collisions
  bottom_bound : y + (height / 2),
  left_bound : x - (width / 2),
  top_bound : y - (height / 2),
  right_bound : x + (width / 2)
}
}

// Object containing information about shooter
var shooter = {
  // Position on canvas
  position : {
    x:0,
    y:0
  },
  // Current velocity on canvas
  velocity : {
    x:0,
    y:0
  },
  // Acceleration value to be used when direction is being pressed
  acceleration : 2,
  // Maximum speed
  velocity_cap : 20,
  // Direction shooter is facing, in radians
  direction : 0,

  /* Function that updates direction field each frame
  I made this because I was thinking about drawing a triangle as the
  shooter, and this would determine which direction the triangle
  is facing. EDIT: when I thought we were making a top-down
  */
  /* NOTE: this function will have to be changed in order to handle the event
  that only one of velocity.y or velocity.x is 0
  NOTE: This function won't be useful anymore. Nevermind.
  */
  update_direction : function() {
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
  //Clear the pass of the trail
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Draw a ball that acts as a shooter. We'll worry about graphics later.
  // This will have to be put into a function
  ctx.beginPath();
  // x-axis, y-axis, radius, starting angle, and ending angle
  ctx.arc(a, b, 40, 0, Math.PI*2);
  // Color of circle
  ctx.fillStyle = "#9b59b6";
  // Texts the ctx to actually draw the circle on the canvas
  ctx.fill();
  ctx.closePath();
  //update variable of a & b location
  a += da;
  b += db;
  // Check for collisions next frame
  wallCollisions(shooter);
  platformCollisions(shooter);
}
// Repeat function draw every 10 ms
setInterval(draw, 10);

/*
Given a shooter object, wallCollisions checks for collisions that will
happen in the next frame and prevent them.
*/
function wallCollisions(shooter) {
  // Grab position data for readability
  var x = shooter.position.x;
  var dx = shooter.velocity.x;
  var y = shooter.position.y;
  var dy = shooter.velocity.y;
  // Calculate position in next frame
  var nextX = x + dx;
  var nextY = y + dy;

  // If it will collide with wall in next frame, set velocity to 0
  if (nextX > canvas.width || next X < 0) {
    shooter.velocity.x = 0;
  }
  if (nextY > canvas.height || nextY < 0) {
    shooter.velocity.y = 0;
  }
}

/*
For each platform in the platforms array, check if shooter will collide.
If so, let him land on the platform without falling through.
Ignores collisions if shooter has a positive Y velocity (jumping).
*/
function platformCollisions(shooter) {
  // Placeholder
  var platforms = []
  // Grab position data for readability
  var y = shooter.position.y;
  var dy = shooter.velocity.y;
  // Calculate position in next frame
  var nextY = y + dy;

  // No need to check X because platforms will only affect Y velocity

  // If player is jumping, no collisions
  if (dy > 0) {
    // Exit method
    return;
  }

  for (platform in platforms) {
    // If player will land on platform
    if (nextY < platform.top_bound) {
      shooter.velocity.y = 0; // Set his y velocity to 0
    }
  }
}

/*
Shoot function will take in the object of the player who issued the command,
find out which direction that player is facing, and spawn a bullet with the
correct velocity and position for that player. Bullets disappear when they
travel off-screen or collide with a player.
*/
function shoot(player) {
  
}
