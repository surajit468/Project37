const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function preload() {
//preload the images here
backgroundIMG=loadImage("GamingBackground.png");
heroImg=loadImage("Superhero-01.png");
}

function setup() {
  createCanvas(3000, 800);
  // create sprites here
  ground = new Ground(1500,380,3000,20);
}

function draw() {
  background(backgroundIMG);
  ground.display();

  Engine.update(engine);


}

 