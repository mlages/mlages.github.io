let mouseDist;
let pointX;
let date;
let sleepPattern;
let time;
let sleepQuality;
let sleepQualityNum;
let hoursSlept;

let dateArray = [];
let sleepQualityArray = [];
let sleepQualityMapped;

let canvas;


function preload(){
  sleepPattern = loadTable('sleepPattern.csv', 'csv', 'header');

}

function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.style('z-index', '-1');
  canvas.position(0,0);

  background(10, 20, 95);

  //parsing through the table
  for (let i = 0; i < sleepPattern.getRowCount(); i++) {

    //grabbing dates
    date = String(sleepPattern.getString(i, 'Date'));
    //pushing date values into the array
    dateArray.push(date);

    // get each sleep quality percentage, then splice the % character
     sleepQuality = String(sleepPattern.getString(i, 'Sleep Quality')).replace('%', '');

     //converting string without the % to a Number
     sleepQualityNum = Number(sleepQuality);

     //store all the sleep quality numbers in an array
     sleepQualityArray.push(sleepQualityNum);

  }

  //craeting buttons for each date and then triggering functions
  let button0 = createButton(dateArray[0]);
  button0.mousePressed(date0);

  let button1 = createButton(dateArray[1]);
  button1.mousePressed(date1);
}

//date functions...two at the moment 
function date0(){
    background(10, 20, 95);

    //mapping the first position in the sleep quality array
    //the range in percentage is 0-100 and the range of
    //arc in 0-360
  sleepQualityMapped = map(sleepQualityArray[0], 0, 100, 0, 360);
  print(sleepQualityMapped);

  strokeWeight(20);

  noFill();
  stroke(300, 30);

  //use the mapped value with the arc
  arc(450, 200, 100, 100, 0, radians(sleepQualityMapped));

}

function date1(){
    background(10, 20, 95);

    //mapping the first position in the sleep quality array
    //the range in percentage is 0-100 and the range of
    //arc in 0-360
  sleepQualityMapped = map(sleepQualityArray[1], 0, 100, 0, 360);
  print(sleepQualityMapped);

  strokeWeight(20);

  noFill();
  stroke(300, 30);

  //use the mapped value with the arc
  arc(450, 200, 100, 100, 0, radians(sleepQualityMapped));

}

function draw(){

  mouseDist = dist(mouseX, mouseY, pmouseX, pmouseY)



//   ellipse(width/4, height/2, 200, 200);
//   arc(225, 200, +90, -90, -80, HALF_PI);
// noFill();
// stroke(300, 30);
//
// ellipse(width/2, height/5, 200, 200);
// arc(450, 79, -100, 100, 40, HALF_PI);
// noFill();
}
