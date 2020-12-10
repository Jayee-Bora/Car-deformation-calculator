var car,wall, speed, weight, deformation ;
function setup() {
  createCanvas(1600,400);
  car =createSprite(50, 200, 50, 50);
  wall= createSprite(1500,200,60, 100);
  speed= random(55,90);
  weight= random(400,1500);
  car.velocityX= speed;
}

function draw() {
  background(255,255,255);  
  drawSprites();

  if(wall.x-car.x< car.width/2+wall.width/2){
    car.velocityX=0;
    deformation= 0.5*weight*speed*speed/22500;
    if(deformation<100){
      car.shapeColor="green";
    }
    if(deformation<180 && deformation>100){
      car.shapeColor="yellow";
    }
    if(deformation>180){
      car.shapeColor="red";
    }
  }
}