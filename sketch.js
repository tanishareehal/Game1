var Play = 0;
var Pause = 1;
var Resume = 2;
var End = 3;
var gameState = Play;

var bg

var money=0;

var pc, npc1, npc2, npc3, npc4, resumeButton, textbox;
var ground, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5;
var obstacle6,obstacle7,obstacle8,obstacle9,obstacle10,obstacle11;
var obstacle12,obstacle13,obstacle14,obstacle15,obstacle16,obstacle17;
var obstacleImage, obstacleImage2, obstacleImage3, obstacleImage4;

var wall1, wall2, wall3, wall4;


function preload()
{
  obstacleImage = loadImage("IMG_3689.png");
  obstacleImage2 = loadImage("IMG_3690.png");
  obstacleImage3 = loadImage("IMG_3689.png");
  bg = loadImage("IMG_3680.jpg");
  button = loadImage("button.png")
}

function setup() {
createCanvas(1200,400);



textbox = createSprite(1075, 200, 700, 350);


resumeButton = createSprite(1400, 270, 45, 40);
resumeButton.addImage(button);
resumeButton.scale = 0.50;

pc = createSprite(100,400,30,150);

wall1 = createSprite(1000,350,30,150);
//wall1.visible = false;

npc1 = createSprite(1060,350,30,150);

obstacle1 = createSprite(300, 340, 40, 40);
obstacle1.addImage(obstacleImage);
obstacle1.scale = 0.157;

obstacle2 = createSprite(600, 355, 40, 100);
obstacle2.addImage(obstacleImage2);
obstacle2.scale = 0.25;

obstacle3 = createSprite(900, 325, 40, 60);
obstacle3.addImage(obstacleImage3);
obstacle3.scale = 0.24;

obstacle4 = createSprite(1150, 360, 40, 60);

ground = createSprite(10,400,10000,20);
  ground.x = ground.width /2;
  money = 0;
  
}


function draw() {
background(bg);

if(gameState === Play) {

  textbox.visible = false;
  resumeButton.visible = false;

  if(keyDown("SPACE") ) {
    pc.velocityY = -10;
  }
  pc.velocityY = pc.velocityY + 0.5
  if(keyDown("RIGHT_ARROW")) {
    changePosition(5,0);
  }

  if(keyDown("LEFT_ARROW")) {
    changePosition(-5,0);
  }

      if (pc.isTouching(wall1)){
        gameState = Pause;
      }
}
else if (gameState === Pause) {
  if(keyDown("SPACE")) {
  pc.velocityY = 0;
  }

  if(keyDown("RIGHT_ARROW")) {
    changePosition(0,0);
  }

  if(keyDown("LEFT_ARROW")) {
    changePosition(0,0);
  }

    resumeButton.visible = true;
    textbox.visible = true;

    if(mousePressedOver(resumeButton)) {
      gameState = Play;
    }
}
 else if (gameState === Resume) {

  textbox.visible = false;
  resumeButton.visible = false;

  if(keyDown("SPACE") ) {
    pc.velocityY = -10;
  }
  pc.velocityY = pc.velocityY + 0.5
  if(keyDown("RIGHT_ARROW")) {
    changePosition(5,0);
  }
  if(keyDown("LEFT_ARROW")) {
    changePosition(-5,0);




  }
    
 }

text("$ "+ money, 1000,50);

camera.position.x = pc.x;

  if (ground.x > 1200){
    ground.x = ground.width/2;
  }

  function changePosition(x,y){
    pc.x = pc.x + x;
    pc.y = pc.y + y;
  }

pc.collide(ground);

 drawSprites();
}
