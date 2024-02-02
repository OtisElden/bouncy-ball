//Get the canvas element
const canvas = document.getElementById("black-box");
const ctx = canvas.getContext("2d");

//Set canvas dimensions
canvas.width = 600;
canvas.height = 600;

//Create a black box
ctx.fillStyle = "black"; // Set the fill color to black
ctx.fillRect(200, 200, 300, 300); // Draw a black rectangle (x, y, width, height)