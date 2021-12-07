let r =255;
let g =212;
let b =0;
let cars =[];
let bicycles=[];
let walks=[];
let counter=0;

let description=document.getElementById('description');

function setup(){
  let canvas=createCanvas(750,600);
  canvas.parent="mycontainer";
  background(r,g,b);

}


function draw(){
  let r =255;
  let g =map(counter*7,0,200,212,160);
  let b =0;
  background(r,g,b);

  push();
  fill(255,206,0);
  noStroke();
  ellipse(355,105,175,175);
  stroke(0);
  strokeWeight(8);
  line(200,600,350,250);
  line(530,600,350,250);
  pop();

  push();
  let r1=255;
  let g1=map(counter*7,0,200,118,80);
  let b1=0;
  fill(r1,g1,b1);
  noStroke();
  beginShape();
  vertex(0, 250);
  vertex(346, 250);
  vertex(281, 400);
  vertex(0, 400);
  endShape(CLOSE);

  noStroke();
  beginShape();
  vertex(750, 250);
  vertex(355, 250);
  vertex(535, 600);
  vertex(750, 600);
  endShape(CLOSE);
  pop();

  push();
  let g2=map(counter*7,0,200,100,0);
  fill(255,g2,0);

  beginShape();
  noStroke();
  vertex(0,400);
  vertex(282,400);
  vertex(195,600);
  vertex(0,600);
  endShape();

  beginShape();
  noStroke();
  vertex(750,400);
  vertex(432,400);
  vertex(536,600);
  vertex(750,600);
  endShape();
  pop();

  push();
  noFill();
  curve(5,190,5,190,50,140,100,170);
  curve(5,190,50,140,100,170,140,180);
  curve(50,140,100,170,140,180,150,190);

  curve(100,160,100,160,120,150,140,145);
  curve(100,160,120,150,140,145,160,155);
  curve(120,150,140,145,160,155,180,160);
  curve(140,145,160,155,185,160,220,165);

  curve(150,190,150,190,200,170,250,130);
  curve(150,190,200,170,267,130,300,150);

  curve(450,120,450,120,560,140,600,100);
  curve(500,120,500,120,580,75,700,100);
  curve(500,120,580,75,680,120,750,120);
  curve(660,130,660,140,780,100,800,130);
  pop();

  push();
  noStroke();
  fill(100);
  triangle(203,600,350,250,527,600);
  pop();

  push();
  noStroke();
  fill(254,228,7);
  triangle(345,600,350,250,355,600);
  pop();

  push();
  noStroke();
  fill(255);
  triangle(215,600,350,250,220,600);
  triangle(512,600,350,250,507,600);
  pop();

  for (let i1=0; i1<cars.length;i1++){
    let c = cars[i1];
    c.move();
    c.display();
    c.check();
  }
  for(let i2=0; i2<bicycles.length;i2++){
    let b = bicycles[i2];
    b.move();
    b.display();
    b.check();
  }
  for(let i3=0; i3<walks.length;i3++){
    let w = walks[i3];
    w.move();
    w.display();
    w.check();
  }





  for (let i1 = cars.length-1;i1>=0;i1--){
    let c = cars[i1];
    if (c.isDone==true){
      cars.splice(i1,1);
    }
  }
  for (let i2= bicycles.length-1;i2>=0;i2--){
    let b = bicycles[i2];
    if (b.isDone==true){
      bicycles.splice(i2,1);
    }
  }
  for (let i3 = walks.length-1;i3>=0;i3--){
    let w = walks[i3];
    if (w.isDone==true){
      walks.splice(i3,1);
    }
  }

}



  function car(){
      counter+=1;
      description.innerHTML="The carbon dioxide emission (litre per kilometre) is : "+counter*7;

    cars.push(new Car(random(300,330),random(300,600)));
  }

  function bicycle(){
    bicycles.push(new Bicycle(random(330,390),random(400,600)));
  }

  function walk(){
    walks.push(new Walk(random(390,450),random(400,600)));
  }

class Car{
  constructor(x1,y1){
    this.x1=x1;
    this.y1=y1;
  }
  check(){
    if (this.y1<250){
      this.isDone=true;
    }
  }
  move(){
    this.y1-=0.05
  }
  display(){
    push();
    translate(this.x1,this.y1);
    rect(0,0,20,20);
    ellipse(5,20,5,5);
    ellipse(15,20,5,5);
    pop();
  }

}


class Bicycle{
  constructor(x2,y2){
    this.x2=x2;
    this.y2=y2;
  }
  check(){
    if (this.y2<250){
      this.isDone=true;
    }
  }
  move(){
    this.y2-=0.05
  }
  display(){
    push();
    translate(this.x2,this.y2);
    noFill();
    triangle(5,-10,0,-13,8,-13);
    line(5,-10,0,0);
    line(5,-10,16,-10);
    line(0,0,15,-10);
    line(20,0,15,-17);
    arc(15,-13,13,-10,PI+HALF_PI,TWO_PI);
    ellipse(0,0,5,5);
    ellipse(20,0,5,5);
    pop();
  }
}

class Walk{
  constructor(x3,y3){
    this.x3=x3;
    this.y3=y3;
  }
  check(){
    if (this.y3<250){
      this.isDone=true;
    }
  }
  move(){
    this.y3-=0.05
  }
  display(){
    push();
    translate(this.x3,this.y3);
    noFill();
    ellipse(0,0,5,5);
    line(0,2.5,-5,5);
    line(0,2.5,5,5);
    line(0,2.5,0,5);
    line(0,5,-2.5,10);
    line(0,5,2.5,10);
    pop();
  }
}
