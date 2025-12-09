// this is all the arrays that kinda make the game function 
var hazardXs = [];
var hazardYs = [];
var hazardSizes = [];
var hazardSpeedsX = [];
var hazardSpeedsY = [];
var hazardTypes = []; 


// The player 
var playerX = 300;
var playerY = 350;

// This is a fake exit although its not as cool as I had hoped 
var fakeExitX = 350;
var fakeExitY = 50;
var exitSize = 30;

// This is actually the real exit 
var realExitX = 50;
var realExitY = 350;
var realExitSize = 30;

function setup() {
    createCanvas(400, 400);
    
    // This is for the moving squares 
    for (var i = 0; i < 12; i++) {
        hazardXs[i] = random(width);
        hazardYs[i] = random(height);
        hazardSizes[i] = random(17, 14);
        hazardTypes[i] = floor(random(2)); 
        
        // Speed them up a little
        hazardSpeedsX[i] = random(-2, 5);
        hazardSpeedsY[i] = random(-2, 3);
    }
}

function draw() {
    // this is just for the backround color
    background(3, 24, 25); // was going for a off white salmon or blue but then said.. no its black 

    // this if the walls and ther thickness
    stroke(52); //
    strokeWeight(13); 
    noFill();

    // This is jsut the outer walls 
    rect(10, 10, width - 200, height - 20);
    // some inner walls to create the ilusion of a few rooms 
    line(10, 150, 200, 150); 
    // this is for the little doorways 
    stroke(230, 240, 250); 
    strokeWeight(6);
    line(95, 150, 125, 150);
    
    // more walls, how fun 
    stroke(50);
    strokeWeight(4);
    line(200, 250, width - 10, 250);
    // some more doors 
    stroke(230, 240, 250);
    strokeWeight(6);
    line(250, 250, 280, 250);

    // this is specifically for the vertical walls 
    stroke(50);
    strokeWeight(4);
    line(200, 10, 200, 150);
    
    stroke(230, 240, 250);
    strokeWeight(6);
    line(200, 70, 200, 100);


    // this is where the exit goes but wait.. its a trap! 
    noStroke();
    fill(0, 200, 0); // some color here so you can at least see the exit
    rect(fakeExitX, fakeExitY, exitSize, exitSize);
    fill(255);
    textSize(10);
    text("EXIT", fakeExitX + 2, fakeExitY + exitSize / 2 + 3);

    // this is the real exit so, don't be fooled 
    fill(11); 
    rect(realExitX, realExitY, realExitSize, realExitSize);
    fill(255);
    text("?", realExitX + 10, realExitY + realExitSize / 2 + 4); // putting a question mark here so you don't get confused on how to beat the game. 


    // this is the player and all its glory 
    fill(255); // made it white for a strong contrast so you can see it clearly 
    noStroke();
    circle(playerX, playerY, 12);

    // player controls are simple, jsut W,A,S,D to move the little circle around 
    if (keyIsDown(87)) { // W key - move UP
        playerY -= 2;
    }
    if (keyIsDown(83)) { // S key - move DOWN
        playerY += 2;
    }
    if (keyIsDown(65)) { // A key - move LEFT
        playerX -= 2;
    }
    if (keyIsDown(68)) { // D key - move RIGHT
        playerX += 2;
    }

    // this is some moving obsticles I decided to put in towrds the end to make it harder. 
    fill(200, 0, 0); // a very bright red so nothing clashes with the black background. 
    noStroke();
    for (var i = 0; i < hazardXs.length; i++) {

        if (hazardTypes[i] === 0) {
            circle(hazardXs[i], hazardYs[i], hazardSizes[i]); // circles 
        } else {
            rect(hazardXs[i], hazardYs[i], hazardSizes[i], hazardSizes[i]); // squares 
        }

        // some moving shapes 
        hazardXs[i] += hazardSpeedsX[i];
        hazardYs[i] += hazardSpeedsY[i]; 

        // this is so the shapes can wrap around the screen
        if (hazardXs[i] > width) {
            hazardXs[i] = 0;
        }
        if (hazardXs[i] < 0) {
            hazardXs[i] = width;
        }
        if (hazardYs[i] > height) {
            hazardYs[i] = 0;
        }
        if (hazardYs[i] < 0) {
            hazardYs[i] = height;
        }
    }

    // this is for the win or escaped screen. 
    if (playerX > realExitX && playerX < realExitX + realExitSize && playerY > realExitY && playerY < realExitY + realExitSize) {
        background(230, 240, 250);
        fill(50);
        textSize(28);
        text("You Escaped.", 100, 200);
        noLoop();
    }
}
// some extra notes to myself, was going to add triagnles because I thought it looked too boring but man that's like next to impossible. 
// umm also it just looks very simple in general but I can confirm it wasn't.. Kinda drove me crazy in some parts but the end result looks.. ok. I like the rooms I just wish I could utilize my actual art skills. 
