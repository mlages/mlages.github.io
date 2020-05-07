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

  //creating buttons for each date and then triggering functions
  let button0 = createButton(dateArray[0]);
  button0.mousePressed(date0);

  let button1 = createButton(dateArray[1]);
  button1.mousePressed(date1);

  let button2 = createButton(dateArray[2]);
  button2.mousePressed(date2);

  let button3 = createButton(dateArray[3]);
  button3.mousePressed(date3);

  let button4 = createButton(dateArray[4]);
  button4.mousePressed(date4);

  let button5 = createButton(dateArray[5]);
  button5.mousePressed(date5);

  let button6 = createButton(dateArray[6]);
  button6.mousePressed(date6);

  let button7 = createButton(dateArray[7]);
  button7.mousePressed(date7);

  let button8 = createButton(dateArray[8]);
  button8.mousePressed(date8);

  let button9 = createButton(dateArray[9]);
  button9.mousePressed(date9);

  let button10 = createButton(dateArray[10]);
  button10.mousePressed(date10);




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
function date2(){
   background(10, 20, 95);

    //mapping the first position in the sleep quality array
    //the range in percentage is 0-100 and the range of
    //arc in 0-360
  sleepQualityMapped = map(sleepQualityArray[2], 0, 100, 0, 360);
  print(sleepQualityMapped);

  strokeWeight(20);

  noFill();
  stroke(300, 30);

  //use the mapped value with the arc
  arc(450, 200, 100, 100, 0, radians(sleepQualityMapped));
}

function date3(){
   background(10, 20, 95);

    //mapping the first position in the sleep quality array
    //the range in percentage is 0-100 and the range of
    //arc in 0-360
  sleepQualityMapped = map(sleepQualityArray[3], 0, 100, 0, 360);
  print(sleepQualityMapped);

  strokeWeight(20);

  noFill();
  stroke(300, 30);

  //use the mapped value with the arc
  arc(450, 200, 100, 100, 0, radians(sleepQualityMapped));
}

function date4(){
   background(10, 20, 95);

    //mapping the first position in the sleep quality array
    //the range in percentage is 0-100 and the range of
    //arc in 0-360
  sleepQualityMapped = map(sleepQualityArray[4], 0, 100, 0, 360);
  print(sleepQualityMapped);

  strokeWeight(20);

  noFill();
  stroke(300, 30);

  //use the mapped value with the arc
  arc(450, 200, 100, 100, 0, radians(sleepQualityMapped));
}

function date5(){
   background(10, 20, 95);

    //mapping the first position in the sleep quality array
    //the range in percentage is 0-100 and the range of
    //arc in 0-360
  sleepQualityMapped = map(sleepQualityArray[5], 0, 100, 0, 360);
  print(sleepQualityMapped);

  strokeWeight(20);

  noFill();
  stroke(300, 30);

  //use the mapped value with the arc
  arc(450, 200, 100, 100, 0, radians(sleepQualityMapped));
}

function date6(){
   background(10, 20, 95);

    //mapping the first position in the sleep quality array
    //the range in percentage is 0-100 and the range of
    //arc in 0-360
  sleepQualityMapped = map(sleepQualityArray[6], 0, 100, 0, 360);
  print(sleepQualityMapped);

  strokeWeight(20);

  noFill();
  stroke(300, 30);

  //use the mapped value with the arc
  arc(450, 200, 100, 100, 0, radians(sleepQualityMapped));
}

function date7(){
   background(10, 20, 95);

    //mapping the first position in the sleep quality array
    //the range in percentage is 0-100 and the range of
    //arc in 0-360
  sleepQualityMapped = map(sleepQualityArray[7], 0, 100, 0, 360);
  print(sleepQualityMapped);

  strokeWeight(20);

  noFill();
  stroke(300, 30);

  //use the mapped value with the arc
  arc(450, 200, 100, 100, 0, radians(sleepQualityMapped));
}

function date8(){
   background(10, 20, 95);

    //mapping the first position in the sleep quality array
    //the range in percentage is 0-100 and the range of
    //arc in 0-360
  sleepQualityMapped = map(sleepQualityArray[8], 0, 100, 0, 360);
  print(sleepQualityMapped);

  strokeWeight(20);

  noFill();
  stroke(300, 30);

  //use the mapped value with the arc
  arc(450, 200, 100, 100, 0, radians(sleepQualityMapped));
}

function date9(){
   background(10, 20, 95);

    //mapping the first position in the sleep quality array
    //the range in percentage is 0-100 and the range of
    //arc in 0-360
  sleepQualityMapped = map(sleepQualityArray[9], 0, 100, 0, 360);
  print(sleepQualityMapped);

  strokeWeight(20);

  noFill();
  stroke(300, 30);

  //use the mapped value with the arc
  arc(450, 200, 100, 100, 0, radians(sleepQualityMapped));
}

function date10(){
   background(10, 20, 95);

    //mapping the first position in the sleep quality array
    //the range in percentage is 0-100 and the range of
    //arc in 0-360
  sleepQualityMapped = map(sleepQualityArray[10], 0, 100, 0, 360);
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
