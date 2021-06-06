// Hello anyone who is reading this Code I am Dhruv from the past 
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ship ;
var asteroid
var asteroid1
var asteroid2
var asteroid3
var asteroid4
var laser 
var x 
var y 
var r 
var x1 
var y1
var r1
var x2 
var y2 
var r2 
var x3 
var y3
var r3
var gameState = "start"
var rules 
var start
var rules1
var restart
var score = 0 
function preload(){
    rules = loadImage("sprites/gameRules.png");
    start = loadImage("sprites/start.png");
    restart = loadImage("sprites/restart.png");

}
function setup(){
    var canvas = createCanvas(800,800);
    x = random(0,width)
    y = random(0,height)
   r = random(30,60)
   x1 = random(0,width)
   y1 = random(0,height)
  r1= random(30,60)
  x2 = random(0,width)
  y2 = random(0,height)
 r2 = random(35,60)
 x3 = random(0,width)
 y3 = random(0,height)
r3= random(40,60)
x4 = random(0,width)
 y4 = random(0,height)
r4= random(40,60)
    engine = Engine.create();
    world = engine.world;
  ship = new Ship(width/2,height/2,80,150);
  engine.world.gravity.y = random(-0.001,0.0001)
  engine.world.gravity.x = random(-0.001,0.0001)
asteroid = new Astroid(x,y,r);
asteroid1 = new Astroid(x1,y1,r1);
asteroid2 = new Astroid(x2,y2,r2);
asteroid3 = new Astroid(x3,y3,r3);
asteroid4 = new Astroid(x4,y4,r4);

}
function draw(){
        background(0,0,0,20);
        if(gameState === "play"){
            move()
            createStar();
            asteroid.display();
            asteroid1.display();
            asteroid2.display();
            asteroid3.display();
            asteroid4.display();
            asteroid.move();
            asteroid1.move();
            asteroid2.move();
            asteroid3.move();
            asteroid4.move();
            ship.display();
            asteroid.comeBack();
            asteroid1.comeBack();
            asteroid2.comeBack();
            asteroid3.comeBack();
            asteroid4.comeBack();
            gameEnd()
            score1();

        }
        if(gameState ==="start"){
            imageMode(CENTER)
            image(rules, 400, 650,800,300);
           image(start,400,300,400,400);
           fill(255);
           text("Asteroid Overload",200,100);
           textSize(50)
        }
        if(gameState === "restart"){
          imageMode(CENTER);
          textFont('Hammersmith One');
          push();
          textSize(150);
          text("Score : "+ score , width /2 - 300  , height/2 - 100 );
          image(restart,width/2 , height/2 + 100)
          pop();
          push();
          textSize(50)
          text("Reload the Page to Restart ",width/2 - 240 ,height  - 100)
          pop();
        }

    Engine.update(engine);
}
function createStar(){
    var galaxy = {
        x: random(width),
        y: random(height),
        size: random(1,6)
    }
    ellipse(galaxy.x,galaxy.y,galaxy.size,galaxy.size);
    
}
function move(){
    if (keyIsDown(UP_ARROW)) {
        ship.moveUp(); 
    }
      if (keyIsDown(DOWN_ARROW)) {
        ship.moveDown();
      } if (keyIsDown(LEFT_ARROW)) {
        ship.moveLeft();
      } if (keyIsDown(RIGHT_ARROW)) {
        ship.moveRight();
      }
}
function mousePressed(){
  if(gameState === "start"){
    ship.body.position.x  = width/2
        ship.body.position.x  = height/2
        gameState = "play"

  }

        
  }
  function keyPressed(){
    if(keyCode === '32'|| gameState === "restart"){
      gameState = "play"
    }
  }


function score1(){
  if(frameCount % 60 === 0 ){
    score += 1  }
  fill(255);
text("Score : " + score, width - 230 , 40)
}
function gameEnd(){
  if(ship.body.position.x > width||ship.body.position.x <0||ship.body.position.y > height||ship.body.position.y < 0  ){
    gameState = "restart"
}}
