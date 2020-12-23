const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var backgroundimg,lava

function preload()
{
	Dustbinimg=loadImage("dustbingreen.png")
	backgroundimg=loadImage("baground.jpg")
	lava=loadImage("lava.png")
}

function setup() {
	createCanvas(1500,750);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	groundSprite=createSprite(width/2, height, width,10);
	groundSprite.addImage(lava)
    groundSprite.scale=2
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	paper= new Paper(50,400,30)
	box1= new Box(570, 600,10,100)
	box2= new Box(730, 600,10,100)
	box3= new Box(650, 650,150,10)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundimg);

  box1.display();
  box2.display();
  box3.display();
  paper.display();
  image(Dustbinimg,650,550,200,150)
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on

Matter.Body.applyForce(paper.body,paper.body.position,{x:145,y:-140});
  }
}

