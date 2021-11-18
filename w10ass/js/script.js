let x =0;
function setup() {
  let canvas=createCanvas(400, 500);
  canvas.parent="mycontainer";
  background(0);


}

function draw() {


}

function drawRabbit(){
  console.log("clicked!");

  translate(200,200);
   drawEar(-50,-10,360,365,0.25);
   drawEar(50,-10,0,5,3.75);
   drawHead(0,10);
   drawcircle(-15,0);
   drawcircle(15,0);
   drawEye1(0,-2);
   drawEye2(0,-2);
   ellipse(0,20,25,15);

}

function drawEar(x1,y1,a1,a2,r){
  push();

  rotate(PI * r)
  let sinValue = sin(frameCount*0.05);
  let angle = map(sinValue,-1,1,a1,a2);
  rotate(radians(angle));


  ellipse(x1,y1,75,30);
  noStroke();
  fill(254,175,209);
  ellipse(x1,y1,50,20);
  pop();
}
function drawHead(x2,y2){
  ellipse(x2,y2,100,90);
}
function drawcircle(x4,y4){
  circle(x4,y4,15);
}
function drawEye1(x3,y3){

  push();
  translate(-15,-2);
  let angle = radians(frameCount);
  rotate(angle);
  fill(0);
  circle(x3,y3,6);
  pop();
}
  function drawEye2(x4,y4){

  push();
  translate(15,-2);
  let angle = radians(frameCount);
  rotate(angle);
  fill(0);
  circle(x4,y4,6);
  pop();

  }



  function goup(){
    x=30;
  }
