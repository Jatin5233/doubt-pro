
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree;
var stone;
var chain;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  
	stone=new Stone();
	
tree=new Tree();
chain=new Chain(gravity.body,{x:200,y:100});
	Engine.run(engine);
  
}


function draw() {
  
  background(255);
  tree.display();
  gravity.display();
  chain.display();
  drawSprites();
 
}



