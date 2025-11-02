//let's redo this and organize things much better. 
// Colors
var redColor = 123;
var greenColor = 39;
var blueColor = 21;
// SHAPE POSITIONS
var greenCircleX = 250;  
var greenTriangleX = 10; 
var bigSquareY = 250;    
var blackRectY = 335;   
var blackRectX = 100;  
var pinkCircleX = 250;   
var pinkCircleY = 100;
// MOVEMENT SPEEDS
var move1 = 3;
var move2 = 2;
var move3 = 4;
var move4 = 1.5;
var diagX = 7;
var diagY = 2;
// TEXT SIZE 
var titleSize = 30;
var titleGrow = true;
var steps =0;
function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(255);
  // --- TITLE TEXT SIZE CHANGE ---
  if (titleGrow) {
    titleSize++;
    steps++;
    if (steps >= 5) {
      titleGrow = false;
    }
  } else {
    titleSize = 30;
    steps--;
    if (steps <= 0) {
      titleGrow = true;
    }
  }
  // DRAW TITLE
  textSize(titleSize);
  text('The Curious Man', 10, 240);
   // Black REC Left (left-right)
  blackRectX += move1;
  if (blackRectX > width || blackRectX < 0) move1 *= -1;
  // Big GREEN CIRCLE (left-right)
  greenCircleX += move1;
  if (greenCircleX > width || greenCircleX < 0) move1 *= -1;
  // Big GREEN TRIANGLE (left-right)
  greenTriangleX += move2;
  if (greenTriangleX > width || greenTriangleX < 0) move2 *= -1;
  // Big SQUARE (up-down)
  bigSquareY += move3;
  if (bigSquareY > height || bigSquareY < 0) move3 *= -1;
  // Black REC bottom left (up-down)
  blackRectY += move4;
  if (blackRectY > height || blackRectY < 0) move4 *= -1;
  // PINK CIRCLE (diagonal)
  pinkCircleX += diagX;
  pinkCircleY += diagY;
  if (pinkCircleX > width || pinkCircleX < 0) diagX *= -1;
  if (pinkCircleY > height || pinkCircleY < 0) diagY *= -1;
  // big green circle
  fill(26, 87, 56);
  circle(greenCircleX, 250, 175);
  // pinkish circle (diagonal)
  fill(255, 100, 100);
  circle(pinkCircleX, pinkCircleY, 175);
  // big square bottom-left (up-down)
  fill(26, 87, 56);
  square(20, bigSquareY, 100);
  // small black vertical rectangle (up-down)
  fill(0);
  rect(320, blackRectY, 3, 100);
   rect(100, blackRectX, 3, 200);
  // big green triangle (left-right)
  fill(26, 87, 56);
  triangle(greenTriangleX, 25, greenTriangleX + 90, 100, greenTriangleX + 25, 75);
  // HANDS + FACE CIRCLE (static)
  square(125,320, 30);
  fill(255);
  //Right eye
 fill(0, 0, 0);
  rect(265,70, 10,5);
//Left eye
   fill(0, 0, 0);
  rect(310, 70, 10, 5);
  //Mouth
   fill(0, 0, 0);
  rect(290,90,15, 3);
  //Legs
   fill(26, 87, 56);
   rect(200,335,5,50);
    rect(290,335,5,50);
    //Points
     // 1
  let a = createVector(30, 20);
  point(a);

  // 2
  let b = createVector(70, 20);
  point(b);

  // 3
  let c = createVector(70, 80);
  point(c);

  // 4
  let d = createVector(30, 80);
  point(d);
  //I don't see the point to these..
  fill(blueColor);
  textSize(20);
  text('totally me, I swear', 30, 30);
  text('Damion B', 20, 390);
  // I've found that if I have the preview open as I work things are much easier to understand..
  //This stuff is so outside my wheel house, I think I'm calling it for this. 

  //Note to self - I would like to know how to slow down the "Curious man text" we can figure it out later. 
  //Extra Note - *= -1; reverses the direction of an object, so remember this. 
}