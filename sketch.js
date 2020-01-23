//our custom variables
let pointX;
let mouseDist;


function setup() {


// put setup code here
createCanvas(900, 500);
//giving pointX a value of 300
pointX= 300;


background(168, 50, 153);
rectMode(CENTER);
}

function draw() {

mouseDist = dist(mouseX, mouseY, pmouseX, pmouseY);
  smooth();
  fill(30, 120, 45);
  // put drawing code here
  // point expects an x and y coordinate
  point(300, 300);
  // line expects two x, y coordinates
  // then connects the coordinates
  line(50, 100, mouseX, mouseY);

  fill(190, 55, 12);


  // ellipse expects an x, and y coordinate
  // and width and Height
  ellipse(width/2, height/2, 200, 100);

  stroke(255);
  strokeWeight(mouseDist);

  // fills in shape with color
  // affects shapes that come After
  fill(30, 120, 45);
  // rect expecting an x, and y coordinates
  // and width and height

  rect(width/3, height/23, 300, 100);

  fill(100, 100, 255);
  // triangle expects three set of x, y
  triangle(800, 12, 850, 200, 700, 300);
  //print(mouseX);
}
