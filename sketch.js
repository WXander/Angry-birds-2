//namespacing
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine, world;
var ground;
var box1, box2, box3, box4, box5;
var pig1, pig2;
var log1, log2, log3, log4;
var bird;
var scene;

function preload(){
  scene = loadImage("sprites/bg.png")
}


function setup() {
  createCanvas(1200,600); 
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 590, 1200, 20);
  
  box1 = new Box(800,550,70,70);
  box2 = new Box(1000,550,70,70);
  pig1 = new Pig(900,530);
  log1 = new Log(900, 500, 300,PI/2);
  
  box3 = new Box(800,450,70,70);
  box4 = new Box(1000,450,70,70);
  pig2 = new Pig(900,430);
  log2 = new Log(900, 400, 300,PI/2);

  box5 = new Box(900,350,70,70);
  log3 = new Log(800, 300, 150, PI/8);
  log4 = new Log(1000, 300, 150, -PI/8);

  bird = new Bird(100,100);
}

function draw() {
  background(scene);
  Engine.update(engine); 
  
  ground.display();
  box1.display();
  box2.display(); 
  pig1.display();
  log1.display();

  box3.display();
  box4.display(); 
  pig2.display();
  log2.display();

  box5.display();
  log3.display();
  log4.display();

  bird.display();
}