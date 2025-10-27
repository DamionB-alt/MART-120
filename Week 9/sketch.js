function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // Top.
  textSize(20);
  text('totally me, I swear',30, 30);
  
   // Middle.
  textSize(14);
  text('The Curious Man', 10, 240);
  
  
  // Bottom.
  textSize(20);
  text('Damion B', 20, 400);
  
  line(45, 45, 100, 90);
  
   triangle(10, 75,20, 100, 35, 100);
  
  square(20, 250, 100);
     square(125,320, 30);

  
  fill(26, 87, 56);
    circle(250,250,175);
  
   fill(499, 100, 100);
    circle(250,100,175);
  
   line(25, 80, 5, 50);
  
  line(25, 100,47, 100);

  fill(0, 0, 0);
  rect(265,70, 10,5);
  
    fill(0, 0, 0);
  rect(310, 70, 10, 5);
  
   fill(0, 0, 0);
  rect(290,90,15, 3);
  
   fill(0,0, 0);
  rect(100,200,100, 3);
  
   fill(0, 0, 0);
  rect(320,100,3,100);

   fill(0, 0, 0);
  rect(290,90,15, 3);
  
   fill(26, 87, 56);
    
  rect(200,335,5,50);
    rect(290,335,5,50);
  
    triangle(5, 25, 100, 100, 25, 75);
  
   // Top-left.
  let a = createVector(30, 20);
  point(a);

  // Top-right.
  let b = createVector(70, 20);
  point(b);

  // Bottom-right.
  let c = createVector(70, 80);
  point(c);

  // Bottom-left.
  let d = createVector(30, 80);
  point(d);
   
}