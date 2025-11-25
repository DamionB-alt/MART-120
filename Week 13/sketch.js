//here are the arrays for the moving obstacles
var myXs = [];
var myYs = [];
var mySizes = [];
var mySpeedsX = [];
var mySpeedsY = [];
var myColors = [];
//this is for the non-moving shapes
var staticXs = [];
var staticYs = [];
var staticSizes = [];
var staticColors = [];
// This is for the players position 
var playerX = 20;
var playerY = 20;
// this is the exit and position size 
var exitX = 350;
var exitY = 350;
var exitSize = 40;
function setup() {
  createCanvas(400, 400);
  // Create 5 moving obstacles
  for (var i = 0; i < 10; i++) {
    myXs[i] = random(width);
    myYs[i] = random(height);
    mySizes[i] = random(20, 40);
    mySpeedsX[i] = random(-2, 2);
    mySpeedsY[i] = random(-2, 2);
    myColors[i] = color(random(255), random(255), random(255));
  }
}
function draw() {
  background(20);
  //this is just for the exit text 
  fill(0, 255, 0);
  rect(exitX, exitY, exitSize, exitSize);
  fill(0);
  textSize(12);
  text("EXIT", exitX + 5, exitY + exitSize / 2 + 4);
  //the player
  fill(255);
  circle(playerX, playerY, 20);
  // this is the wasd controls 
  if (keyIsDown(87)) {    // w
    playerY -= 2;
  }
  if (keyIsDown(83)) {    // a
    playerY += 2;
  }
  if (keyIsDown(65)) {    // s
    playerX -= 2;
  }
  if (keyIsDown(68)) {    // d
    playerX += 2;
  }
  //this is all the moveing shapes 
  for (var i = 0; i < myXs.length; i++) {
    fill(myColors[i]);
    circle(myXs[i], myYs[i], mySizes[i]);
    // Movement of the shapes 
    myXs[i] += mySpeedsX[i];
    myYs[i] += mySpeedsY[i];
    //we call this the wrap around
    if (myXs[i] > width) {
      myXs[i] = 0;
    }
    if (myXs[i] < 0) {
      myXs[i] = width;
    }
    if (myYs[i] > height) {
      myYs[i] = 0;
    }
    if (myYs[i] < 0) {
      myYs[i] = height;
    }
  }
  //this is the still obstalces 
  for (var j = 0; j < staticXs.length; j++) {
    fill(staticColors[j]);
    rect(staticXs[j], staticYs[j], staticSizes[j], staticSizes[j]);
  }
  //this is a quote from "Batman" (1966)
  if (
    playerX > exitX &&
    playerX < exitX + exitSize &&
    playerY > exitY &&
    playerY < exitY + exitSize
  ) {
    fill(255);
    textSize(32);
    text("Holy Cinderella Batman!", 20, 200);
    noLoop();
  }
}
// this is to add fun random squares all over the screen
function mousePressed() {
  staticXs.push(mouseX);
  staticYs.push(mouseY);
  staticSizes.push(random(20, 40));
  staticColors.push(color(random(255), random(255), random(255)));
}
//I could see this being quite the challenge with more shapes and collision implemented.. 