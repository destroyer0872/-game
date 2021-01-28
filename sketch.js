var bg,bgimg
var player,playerAniR,playerAniL

function preload(){
  bgimg = loadImage("game background.png");
 // playerAniR = loadAnimation("r1.png","r2.png","r3.png","r4.png","r5.png","r6.png","r7.png","r8.png","r9.png")
 // playerAniL = loadAnimation("l1.png","l2.png","l3.png","l4.png","l5.png","l6.png","l7.png","l8.png","l9.png")
}


function setup() {
  createCanvas(1000,460);
  bg = createSprite(500, 230, 800, 400);
bg.addImage("background",bgimg)
bg.scale = 0.88

bg.x = bg.width/8
}

function draw() {
  background(0); 
  
  bg.velocityX = 4
  if(bg.x>1000){
    bg.x = bg.width/8
  }
  
  drawSprites();
}