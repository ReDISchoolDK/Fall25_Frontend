// Get references to the canvas and input elements
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

// Set canvas dimensions (you can adjust these as needed)
canvas.width = 600;
canvas.height = 400;

// Calculate the center of the canvas
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const baseCircleRadius = 10; // Base radius of the circles

// Function to draw a circle at a given position with a specified radius and color
function drawCircle(x, y, radius, color) {
  context.fillStyle = color;
  context.beginPath();
  context.arc(x, y, radius, 0, Math.PI * 2);
  context.fill();
}

// Function to generate a random HSL color
function getRandomHslColor() {
  // Generate a random color in HSL format
  const h = Math.floor(Math.random() * 360);
  const s = Math.floor(Math.random() * 100);
  const l = Math.floor(Math.random() * 100);
  return `hsl(${h}, ${s}%, ${l}%)`;
}

// Function to redraw the art based on input values
function drawArt() {
  // Clear the canvas before drawing
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the central circle
  drawCircle(centerX, centerY, baseCircleRadius, getRandomHslColor());

  // TODO: Add a for loop to draw circles

  // TODO: Add a while loop to draw circles
}

// Initial draw
drawArt();
