let mouseDist;
let pointX;
let sleepPattern;
let time;
let sleepQuality;
let hoursSlept;



function preload(){
  sleepPattern = loadTable('sleepPattern.csv', 'csv', 'header');

}

function setup(){
  createCanvas(900, 400);
  canvas.id("myChart");

}

function draw(){
  background(10, 20, 95);
  mouseDist = dist(mouseX, mouseY, pmouseX, pmouseY)
  print(mouseDist);

  strokeWeight(20);

  ellipse(width/4, height/2, 200, 200);
  arc(225, 200, +90, -90, -80, HALF_PI);
noFill();
stroke(300, 30);

ellipse(width/2, height/5, 200, 200);
arc(450, 79, -100, 100, 40, HALF_PI);
noFill();
}
