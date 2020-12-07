var Zenia, Tourus, Cyclap;
var car, wall;
var speed, weight;

function setup() {
  createCanvas(600,600);

car=createSprite(50,200,50,50);
wall=createSprite(550,200,60,height/2);


}

function draw() {
  background("black");
  
  speed=random(55,90);
  weight=random(400,1500); 

  car.velocityX=speed;

  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
   var deformation = 0.5 * "weigth * speed* speed/22509";
if(deformation>180){
car.shapecolor=color("green");
}
if(deformation<180 && deformation>100){
  car.shapecolor=color("red");
}
if(deformation<100){
  car.shapecolor=color("yellow");
 }
}




  drawSprites();
}
