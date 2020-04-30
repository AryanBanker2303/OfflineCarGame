var player,enemyGroup;
var road,roadImg;
var lives = 5;
var score = 0;
var playerImg,enemyImg;

function preload(){
roadImg = loadImage("images/track.png");
playerImg = loadImage("images/car3.png");  
enemyImg = loadImage("images/car2.png");
}

function setup() {
  createCanvas(400, 500);


  road = createSprite(200,300,20,20);
  player = createSprite(200,300,20,20);
 enemyGroup = new Group();
  
  road.addImage("track",roadImg);
  player.addImage("car3",playerImg);
   road.scale = 2
}

function draw() {
  background(220);
  spawnEnemies();
 
  
  road.velocityY = 10;
  if(road.y>600){
road.y= height/2;

}

if(keyDown("RIGHT_ARROW")){
   player.velocityX =2;
  player.velocityX +=0.3;
   }
 
if(keyDown("LEFT_ARROW")){
  player.velocityX = -2;
player.velocityX-=0.3;
  }
  
  
  if(lives ===0){
    fill("red");
    stroke("orange");
    strokeWeight(23);
    rect(200,300,500,500);
  text("GAME ENDED",200,300);
    nostroke();
  }
 
  
  text("score: "+score,300,30);
  text("lives: "+lives,20,30);
 
  drawSprites();
}

function spawnEnemies(){
  if(frameCount % 75 ===0){
var enemy = createSprite(random(20,380),-20,10,10)
enemy.addImage("car2",enemyImg);
enemy.velocityY = random(4,6);
enemyGroup.add(enemy);

  }

}