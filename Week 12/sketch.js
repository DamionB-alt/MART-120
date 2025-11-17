
//Variables, there are a lot.. 

var playerX = 50;
var playerY = 50;
var obs1X = 100;
var obs1Y = 200;
var obs1XSpeed = 4;
var obs1YSpeed = 3;
var obs2X = 300;
var obs2Y = 100;
var obs2XSpeed = -1;
var obs2YSpeed = 2;
var clickObsX = -100;
var clickObsY = -100;
var exitGapTop = 250;
var exitGapBottom = 350;

// Setup

function setup() {
  createCanvas(600, 400);
}

// this is just the main draw loop 

function draw() {
  background(0);
  borders();
  exit();
  movePlayer();
  player();
  moveObstacles();
  drawObstacles();
  clickObstacle();
  checkWin();
}

// here are all the functions, didn't think it could look cleaner.. 

//this is for the borders and screen outline 
function borders() {
  stroke(255, 0, 0);
  strokeWeight(10);
  noFill();
  rect(0, 0, width, height);
}
// this is for the exit/text 
function exit() {
  noStroke();
  fill(0);
  rect(width - 10, exitGapTop, 10, exitGapBottom - exitGapTop);
  fill(255);
  textSize(20);
  text("EXIT?", width - 60, exitGapTop - 10);
}
// Movement controls using wasd 
function movePlayer() {
  if (keyIsDown(65)) { playerX -= 2; } // w
  if (keyIsDown(68)) { playerX += 2; } // a
  if (keyIsDown(87)) { playerY -= 2; } // s
  if (keyIsDown(83)) { playerY += 2; } // d
}
// this is the player 
function player() {
  fill(255);
  rect(playerX, playerY, 20, 20);
}
// moving asteroids? 
function moveObstacles() {
  obs1X += obs1XSpeed;
  obs1Y += obs1YSpeed;
  wrap1();
  obs2X += obs2XSpeed;
  obs2Y += obs2YSpeed;
  wrap2();
}
//  this is a function for drawing the obsticles 
function drawObstacles() {
  fill(255, 255, 0);
  rect(obs1X, obs1Y, 50, 30);
  rect(obs2X, obs2Y, 40, 60);
}
// this draws mouse placed objects
function clickObstacle() {
  fill(255, 255, 0);
  rect(clickObsX, clickObsY, 40, 40);
}
// YOU WIN!!! 
function checkWin() {
  if (playerX > width - 20 && playerY > exitGapTop && playerY < exitGapBottom) {
    fill(255);
    textSize(35);
    text("WOW, YOU DID IT!", 220, 200);
    noLoop();
  }
}
// this function creates a new obsticle 
function mousePressed() {
  clickObsX = mouseX;
  clickObsY = mouseY;
}
// this creates the first wrapping effect 
function wrap1() {
  if (obs1X > width) obs1X = 0;
  if (obs1X < 0) obs1X = width;
  if (obs1Y > height) obs1Y = 0;
  if (obs1Y < 0) obs1Y = height;
}
// this creates the second wrapping effect 
function wrap2() {
  if (obs2X > width) obs2X = 0;
  if (obs2X < 0) obs2X = width;
  if (obs2Y > height) obs2Y = 0;
  if (obs2Y < 0) obs2Y = height;
}