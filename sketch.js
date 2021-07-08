
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var angle=60;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  var wedge_options ={
    isStatic: true
  };
 

 wedge = Bodies.rectangle(100,200,70,20,wedge_options);
 World.add(world,wedge);

  var wall_options ={
    isStatic: true
  };
 

 wall = Bodies.rectangle(300,200,70,20,wall_options);
 World.add(world,wall);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);

  var rock_options = 
  {
    restitution: 0.85,
  }
  rock = Bodies.circle(300,20,20,rock_options);
  World.add(world,rock);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20);
  ellipse(rock.position.x,rock.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  rect(wall.position.x,wall.position.y,70,20);
  
  Matter.Body.rotate(wedge,angle)
  push();
translate(wedge.position.x,wedge.position.y)
  rotate(angle)
  rect(0,0,70,20);
  pop ()
angle+=0.1;


}

