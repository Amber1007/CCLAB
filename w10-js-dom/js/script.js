let x = 0;
let g = 0;


function add(){
  let newElt = document.createElement("div");
  newElt.style.backgroundColor ="gray";
  newElt.style.width ="50px";
  newElt.style.height ="50px";
  newElt.style.margin ="30px";

  //create an HTML getElement
  //change properties
  //attach the elt to the document
  document.getElementById('box').appendChild(newElt);

}
function change(){
x +=20;

let b =
document.getElementById('box');
console.log(b);
b.innerHTML = "WOW!"
b.style.left= x+"px";
b.style.backgroundColor = "rgb(255," + g + ",0)";
}
