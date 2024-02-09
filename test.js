// Get the canvas element from the HTML page
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');




let gravity = 1;


// Ball Class
class Ball {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocityX = 0;
        this.velocityY = 0;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    update() {
        this.x += this.velocityX;
        this.y += this.velocityY;
    }
}


// Create a ball object
const myBall = new Ball(50, 50, 15, 'blue');


// Update Function (Modified)
function update() {
    //Apply gravity
    myBall.velocityY += gravity;

    //Update ball position (using the object now)
    myBall.update();

    //Collision with bottom of canvas
    if (myBall.y + myBall.radius > canvas.height) {
        myBall.y = canvas.height - myBall.radius;
        myBall.velocityY *= -0.9; // Bounce with energy loss
    }

    // Collision detection with the box (adjust as needed) 
    // You'll need to make similar adjustments here in terms 
    // of referencing myBall.x, myBall.y, etc. 
}


//Speed counter updater
function updateSpeed() {
    document.getElementById("speed").innerHTML = "Speed: " + Math.round(myBall.velocityY);
}



// Game Loop (Modified)
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    update();
    myBall.draw();  // Draw using the ball object's method
    updateSpeed();
    requestAnimationFrame(gameLoop);
}

gameLoop(); // Start the animation