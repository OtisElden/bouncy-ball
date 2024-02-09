//Setups for the rest of the page



//Get the canvas element from the HTML page
const canvas = document.getElementById('canvas');

//Get the 2D rendering context for the canvas
const ctx = canvas.getContext('2d');



//Ball
let ballX = 50;
let ballY = 50;
let ballRadius = 15;
let ballVelocityX = 0;
let ballVelocityY = 0;
const gravity = 0.2;  


//Box properties
const boxWidth = 200;
const boxHeight = 100;
const boxX = (canvas.width - boxWidth) / 2;
const boxY = canvas.height - boxHeight - 20; 


function drawBall() {
    ctx.beginPath();
    ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = 'blue';
    ctx.fill();
    ctx.closePath();
}

function drawBox() {
    ctx.fillStyle = 'brown';
    ctx.fillRect(boxX, boxY, boxWidth, boxHeight);
}

function update() {
    // Apply gravity
    ballVelocityY += gravity;

    // Move the ball
    ballX += ballVelocityX;
    ballY += ballVelocityY;

    // Collision with bottom of canvas
    if (ballY + ballRadius > canvas.height) {
        ballY = canvas.height - ballRadius;
        ballVelocityY *= -0.8; // Bounce (losing some energy)
    }
}

// Collision with box sides
if (ballX + ballRadius > boxX &&
    ballX - ballRadius < boxX + boxWidth &&
    ballY + ballRadius > boxY &&
    ballY - ballRadius < boxY + boxHeight) {
    // Handle collision (reverse velocity for now)
    ballVelocityX *= -1;
    ballVelocityY *= -1;
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    update();
    drawBall();
    drawBox();

    requestAnimationFrame(gameLoop);
}

gameLoop(); // Start the animation 