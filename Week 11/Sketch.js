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
function setup() {
  createCanvas(600, 400);
}
//this is all the variables and sutup for the canvas 
function draw() {
  background(0);
 //Background is black to have a good contrast for the other objects. 
  stroke(255, 0, 0);
  strokeWeight(10);
  noFill();
  // This is for the little opening.
  rect(0, 0, width, height);
  noStroke();
  fill(0);
  rect(width - 10, exitGapTop, 10, exitGapBottom - exitGapTop);
  // This is the exit text 
  fill(255);
  textSize(20);
  text("EXIT?", width - 60, exitGapTop - 10);
  // Moveing the character (W A S D) 
  if (keyIsDown(65)) { playerX = playerX - 2; } // w
  if (keyIsDown(68)) { playerX = playerX + 2; } // a
  if (keyIsDown(87)) { playerY = playerY - 2; } // s
  if (keyIsDown(83)) { playerY = playerY + 2; } // d
  // This is for the player to move in all directions. 
  fill(255);
  rect(playerX, playerY, 20, 20);
  // This is for the random moving obsticles but it dosen't look too exciting becasue there is no collision added so the player just goes through the object. 
  fill(255, 255, 0);
  obs1X += obs1XSpeed;
  obs1Y += obs1YSpeed;
  wrap1();
  rect(obs1X, obs1Y, 50, 30);
  obs2X += obs2XSpeed;
  obs2Y += obs2YSpeed;
  wrap2();
  rect(obs2X, obs2Y, 40, 60);
 
  rect(clickObsX, clickObsY, 40, 40);
  // This is text indicating that you have won the game. 
  if (playerX > width - 20 && playerY > exitGapTop && playerY < exitGapBottom) {
    fill(255);
    textSize(35);
    text("WOW,YOU DID IT!", 220, 200);
    noLoop(); // This just ends the game
  }
}
function mousePressed() {
  clickObsX = mouseX;
  clickObsY = mouseY;
}
// this is just for an object to appear but it doesn't stay on the screen becasue the player is drawing over said object.  
function wrap1() {
  if (obs1X > width) obs1X = 0;
  if (obs1X < 0) obs1X = width;
  if (obs1Y > height) obs1Y = 0;
  if (obs1Y < 0) obs1Y = height;
}
function wrap2() {
  if (obs2X > width) obs2X = 0;
  if (obs2X < 0) obs2X = width;
  if (obs2Y > height) obs2Y = 0;
  if (obs2Y < 0) obs2Y = height;
}
// I now realize how hard it is to make something.. at least for me it is. I'd much rather jsut do the art in like aesprite and have somneone else code..
