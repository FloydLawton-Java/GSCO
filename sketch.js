var ball, wall
var speed, weight;
function setup() {
  createCanvas(1600,400);
  wall= createSprite(1500, 200, 60, 400);
  wall.shapeColor= "grey";
  ball= createSprite(50, 100, 60, 30);
  ball.shapeColor= "white";

  speed= random(55, 90);
  weight= random(400, 1500);

  ball.velocityX= speed;
}

function draw() {
  background(0);  
  var deformation= 0.5 * weight * speed * speed/ 22500;
  if (ball.collide(wall)){
    if (deformation>180){
      ball.shapeColor= "green";
    }
    if (deformation < 180 && deformation > 100){
      ball.shapeColor= "yellow";
    }
    if (deformation < 100){
      ball.shapeColor= "red";
    }
  }
  drawSprites();
}
