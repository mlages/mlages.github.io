let furbyBrushBool = false;
let ellipseBrushBool = false;
let dim;

let snowflakes = [];
let furby;
let rotation = 0;


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
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  pg = createGraphics(800, 250);
  
  furbyX = random(21, width-21);
  furbyY = random(21, height-21);

  furbyXspeed = 2;
  furbyYspeed = 2;




  imageMode(CENTER);


}




function draw() {

let t = frameCount / 60;
for (let i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake()); // append snowflake object
  }
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }

  background(0);

  fill(0, 12);
  rect(0, 0, width, height);
  fill(255);
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
  ellipse(mouseX, mouseY, 80, 80);
  pg.background(51);
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
  image(power, width/2, height/2, 50, 50);

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
  image(furby, width/2, height/2, mouseX, mouseY);
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
function keyTyped(){
  if(key === 'f'){
    furbyBrushBool = true;
    ellipseBrushBool = false;
  }
  if(key === 'e'){
    ellipseBrushBool = true;
    furbyBrushBool = false;
  }
}
