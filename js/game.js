// Get the canvas element
const canvas = document.getElementById("gameCanvas");

// Set the canvas size
canvas.width = 800;
canvas.height = 600;

// Get the canvas context
const ctx = canvas.getContext("2d");

// Draw a rectangle
ctx.fillStyle = "red";
ctx.fillRect(100, 100, 50, 50);
