var wall,thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);

  bullet = createSprite(50,200,50,20);
  bullet.velocityX = Math.round(random(223,321));
  bullet.shapeColor=color(255);

  wall = createSprite(1500,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);

  speed = Math.round(random(223,321));
  weight = Math.round(random(30,52));
  thickness = Math.round(random(22,83));

}

function draw() {
  background(0);

  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage=0.5 * weight * speed*speed/(thickness *thickness*thickness);
    
    if(damage>10){
      bullet.shapeColor = color(255,0,0);
    }

    if(damage<10){
      bullet.shapeColor = color(0,255,0);
    }

  }
  

  drawSprites();
}

function hasCollided(bullet, wall){
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge >= wallLeftEdge){
    return true
  }
return false;
}