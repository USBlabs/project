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


// We should use an array to keep track of all enemies and their info
var enemies = [];

// An array for all bullets and their info (ex. position, velocity)
var bullets = [];

// Object containing information about shooter
var shooter = {
  // Radius for shooter
  radius : 40,
  // Position on canvas
  position : {
    x:150,
    y:150
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
  // Acceleration downwards due to gravity
  gravity : 0.05,

  // Function that updates direction field each frame
  /* NOTE: this function will have to be changed in order to handle the event
      that only one of velocity.y or velocity.x is 0
  */
  updateDirection : function() {
    var velocity = this.velocity;
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
      } else if (velocity.x < 0) { // Must be going left
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
      } else if (velocity.x < 0) { // Must be going left
        // Shift to quadrant 2
        direction = angle + Math.PI / 2;
        return;
      }
    }
  },

  updateGravity : function() {

      var velocity = this.velocity;
      // Gravity
      velocity.y += this.gravity;
      this.position.y += velocity.y;

      var floor = canvas.height - this.radius;
      if (this.position.y > floor) {
          this.position.y = floor;
      }
  }
}

function drawShooter() {
    // Draw a ball that acts as a shooter. We'll worry about graphics later.
    // This will have to be put into a function
    ctx.beginPath();

    // Create new shooter
    var s = shooter;
    // x-axis, y-axis, radius, starting angle, and ending angle
    ctx.arc(s.position.x, s.position.y, s.radius, 0, Math.PI*2);

    // Color of circle
    ctx.fillStyle = "#9b59b6";
    // Texts the ctx to actually draw the circle on the canvas
    ctx.fill();
    ctx.closePath();
    s.updateDirection();
    s.updateGravity();
}

function draw() {
    //Clear the pass of the trail
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //drawBall();

    drawShooter();
}

// Repeat function draw every 10 ms
setInterval(draw, 10);
