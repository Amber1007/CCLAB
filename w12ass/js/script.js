let cam;


function setup() {
  createCanvas(640, 480);
  cam = createCapture(VIDEO);
  cam.hide();
}

function draw() {
  background(0);

  let gridSize=30;
  cam.loadPixels();

  for(let x=0; x< cam.width;x+=gridSize){
    for(let y=0; y<cam.height;y+=gridSize){
      let index =(x+y*cam.width)*4;

      let r=cam.pixels[index+0];
      let g=cam.pixels[index+1];
      let b=cam.pixels[index+2];
      let avg= (r+g+b)/3


      let dia = map(avg,0,255,1,gridSize);
      if(x<width/2){
        fill(255,0,0);
      }else{
        fill(0,0,255);
      }
      noStroke();
      ellipse(x,y,dia,dia);

    }
  }


}
