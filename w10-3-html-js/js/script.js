let sliderbgR;
let sliderbgG;
let sliderbgB;
function setup(){
  createCanvas(400,500);
  sliderbgR = document.getElementById('bg-r')
  sliderbgG = document.getElementById('bg-g')
  sliderbgB = document.getElementById('bg-b')
}

function draw(){
  //background(255,255,0);
  let r = sliderbgR.value;
  let g = sliderbgG.value;
  let b = sliderbgB.value;
  background(r,g,b);
}



function drawCircle(){
  let x = random(width);
  let y = random(height);
  let dia = random(100,200);
  fill(255);
  ellipse(x,y,dia,dia);
}
