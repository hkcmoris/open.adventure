// Get the canvas element
const canvas = document.getElementById("gameCanvas");

// Set the canvas size
canvas.width = 1024;
canvas.height = 1024;

// Get the canvas context
const ctx = canvas.getContext("2d");

// Draw grass texture
let grassTexture = new Image();
let scale = 512;
// grassTexture.src = 'resources/textures/grass_'+scale+'x'+scale+'.png';
grassTexture.src = 'resources/textures/grass_512x512.png';
grassTexture.addEventListener('load', function() {
    // Code to run after the grass texture has finished loading
    ctx.drawImage(grassTexture, 0, 0, scale, scale);
    ctx.drawImage(grassTexture, scale, 0, scale, scale);
    ctx.drawImage(grassTexture, 0, scale, scale, scale);
    ctx.drawImage(grassTexture, scale, scale, scale, scale);
});
