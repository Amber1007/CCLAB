let img;

function preload(){
  img = loadImage("asset/colorful.png");
  circleImg = loadImage("asset/sprite.png");
}
function setup() {
  createCanvas(400, 500);
  background(220);
  img = loadImage("asset/colorful.png");
}

function keyPressed(){
  if (key== ""){
    saveCanvas("mysketch" "png");
  }
}

function draw() {
  background(0);
  push();
  imageMode(CENTER);
  let dia =map(sin(frameCount*0.03),-1,1,50,100);
  image(circleImg,mouseX,mouseY,dia,dia);
  pop();
  //tint(255,255,255,50);//take out color
  //image(img,0,0,width,height);//(img,x,y,(w),(h))
  //filter(INVERT);
}
