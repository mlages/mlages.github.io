let mouseDist;
let pointX;
let triY;

function setup() {
  createCanvas(900, 500);
  pointX = 600
  triY = 300

  rectMode(CENTER);
  print(pointX);
  background(170, 50, 26);
  pointX = 600
  triY = 300

}

function draw() {
  background(170, 50, 26);

mouseDist = dist(mouseX, mouseY, pmouseX, pmouseY)
print(mouseDist);
smooth();

strokeWeight(70);

point(pointX, 400);

strokeWeight(mouseDist);

line (mouseX, mouseY, pmouseX, pmouseY);

noStroke();
fill(200, 27, 13, 57);

stroke(random(255), random(255), random(255));

strokeWeight(mouseDist);
ellipse(width/2, height/2, 200, 100);

noFill();
stroke(120, 150, 150);
strokeWeight(30);
triangle(700, 13, 862, 200, 800, triY);

rect(width/4, height/4, mouseX, 200);


  if(mouseIsPressed){
    pointX = 200;
  } else {
    pointX = 600;

  }
  if(keyIsPressed){
    triY = 600;
  } else {
  triY = 300;

  }


}
