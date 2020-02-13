let furbyBrushBool = false;
let ellipseBrushBool = false;
let pg;

let furby;
let rotation = 0;
let mj1;


let furbyX;
let furbyY;

let furbyXspeed;
let furbyYspeed;

let mouseCollide;

let score = 0;

let endScreenBool = false;
let power;

function preload(){
  furby = loadImage("images/furby.png");
  power= loadImage("images/power.png");
  mj1 = loadImage("images/mj1.png");


}


function setup() {
  createCanvas(windowWidth, windowHeight);
  pg = createGraphics(50, - 250);

  furbyX = random(21, width-21);
  furbyY = random(21, height-21);

  furbyXspeed = 2;
  furbyYspeed = 2;




  imageMode(CENTER);


}




function draw() {


  background(675, 90, 900);

  fill(0, 12);
  rect(0, 0, width, height);
  fill(255);
  noStroke();
  textSize(40);
  text("Score" + score + "00", width/2, 50);

  mouseCollide = dist(mouseX, mouseY, furbyX, furbyY);
  rotation++;
  furbyX = furbyX + furbyXspeed;
  furbyY = furbyY + furbyYspeed;



  // checks when the furby has reached the
  // sides of the screen and reverses


  if(furbyX >= width-20 || furbyX <= 20){
    furbyXspeed = furbyXspeed * -1;
  }

  if(furbyY >= height-20 || furbyY <= 20){
    furbyYspeed = furbyYspeed * -1;
  }
  image(power, mouseX, mouseY, 200, 200);
  pg.background(60);
  pg.noFill();
  pg.stroke(255);
  pg.ellipse(mouseX - 150, mouseY - 75, 60, 60);



  // push to a new layer
  // anything between these two push and pop
  // will be affected
  // translate function moves the furby around my mouse on the screen
  //push();
  // new 0,0 coordinate for the push pop
  //translate(width/2, height/2);
  //rotate(radians(rotation));
  //image(furby, 0, 0);

  //pop();
  // if the mouse collision is true
  // trigger all of this stuff
  

  image(mj1, width/19.2, height/1.12, 180, 140);

  image(furby, furbyX, furbyY, 40, 40);

  image(pg, 150, 75);



  if(mouseCollide < 20){
    score++;
    print(score);
    furbyX = random(21, width-21);
    furbyY = random(21, height-21);
    furbyXspeed = furbyXspeed*1.2;
    furbyYspeed = furbyYspeed*1.2;

  }

  if(score == 10){
    endScreenBool = true;
  }
  if (endScreenBool == true){
    endScreen();
  }
}


function  endScreen(){
  background(random(255), random(255), random(255));
  image(power, width/2, height/2, mouseX, mouseY);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
function mouseDragged(){
  // if the furbyBrushBool is true
  // call our furbyBrush function
  if(furbyBrushBool == true){
    furbyBrush();
  }
  if(ellipseBrushBool == true){
    ellipseBrush();
  }
}
