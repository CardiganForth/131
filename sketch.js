let sceneNum = -1;
var img = [];
var cx = 400,
  cy = 30;
var ccx = 8,
  ccy = 6;
let ct = 0;
var index=1;
let k=1;
let mo=1;
  let no=1;
  let noo=1;

function setup() {
  createCanvas(400, 400);
  frameRate(30);

}

function preload() {
  for (let i = 1; i < 14; i++) {
    img.push(loadImage("assets/" + i + ".png"));
  }
}

function draw() {
  imageMode(CENTER);
  textAlign(CENTER);
  
  if(frameCount%255==0){
    mo*=-2;
    }
     no+=mo;
     noo+=2*mo;
    background(noo,no,50);
    let x = mouseX;
    let y = mouseY;  
    image(img[0], 280, 80);
    image(img[1], 120, 90);
    image(img[2], 110, 220,300,300);
    image(img[10], 270, 220,300,300);
    if (x > 250 && x < 290 && y > 60 && y < 105) {
      image(img[9], 270, 130);
    }
    if (x > 105 && x < 130 && y > 65 && y < 105) {
      image(img[8], 120, 130);
    }
    
    if (x > 230 && x < 300 && y > 200 && y < 260) {
      image(img[7], 280, 280);
      if (mouseIsPressed) {
        fill(180,80,80);
        textStyle(BOLD);
        text(" The bread flour can be used for bread.\n Bucause its protein content is higher than 13%.\n It has high reinforcement, ductility and elasticity.\nTry to PULL AND PUSH.", 200, 325);
           
    }
    }
    if (x > 80 && x < 140 && y > 200 && y < 260) {
      image(img[7], 115, 280);
      if (mouseIsPressed) {
        // function di(e){
        //   loctionX=e.x;
        //    loctionY=e.y;
           fill(180,80,80);
           textStyle(BOLD);
           text(" The all purpuse flour can be used for cupcake.\n Bucause its protein content is about 11%.\nIt has low reinforcement, ductility and elasticity.\nTry to PULL AND PUSH.", 200, 325);
      }
    }
    if (x > 80 && x < 140 && mouseIsPressed) {
    if(y>260||y<200){
      sceneNum=0;
      
     }
    }
     
    if (x > 230 && x < 300 && mouseIsPressed) {
      if(y>260||y<200){
        sceneNum=1;
      }
    
    }
    switch (sceneNum) {
      case 0:
        scene0();
        console.log("scene 0");
        break;
      case 1:
        scene1();
        console.log("scene 1");
        break;
    }
    }
 
// }

//image(img[11], x, y);

function scene0() {
if (y > 300 || y < 360 && mouseIsPressed){
  img[2].resize(300,300+Math.abs(300-y));
}
if(frameCount%400==250){
  sceneNum=-1;
    }

}

function scene1() {
  
  fill(255);
noStroke();
  rect(240, 255, 70, -1.5*frameCount%400, 20);
  image(img[11], 270, 310-1.5*frameCount%400,400,400);
  image(img[12], 200, 300,400,400);
  if(frameCount%400==250){
sceneNum=-1;

  }
  }
  
