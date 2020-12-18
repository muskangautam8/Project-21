var bullet,wall;
var speed,weight;
var thickness;
function setup() {
  createCanvas(1600,400);
  weight=random(30,52);
  speed=random(223,321);
  thickness=random(22,83);
  bullet=createSprite(100, 200, 50, 5);
  wall=createSprite(1200,200,thickness,200);
  
  bullet.velocityX=speed;
}

function draw() {
  background(0);

 if(hasCollided(bullet,wall)){
   bullet.velocityX=0;
   var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
   if(damage>10){
     wall.shapeColor=color(255,0,0);
   }
   if(damage<10){
     wall.shapeColor=color(0,255,0);
   }
 }
  drawSprites();
}
function hasCollided(lbullet,lwall){
  bulletRightedge=lbullet.x+lbullet.width;
  wallLeftedge=lwall.x;
  if(bulletRightedge>=wallLeftedge){
    return true
  }
  return false;
}