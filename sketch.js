var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var DropZoneR,DropZoneL,DropZoneB;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	DropZoneB=createSprite(width/2, 650, 200, 20);
	DropZoneB.shapeColor="red";

	DropZoneL=createSprite(500, 610, 20, 100);
	DropZoneL.shapeColor="red";

	DropZoneR=createSprite(300, 610, 20, 100);
	DropZoneR.shapeColor="red";


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 DropZoneB = Bodies.rectangle(width/2, 640, 200, 20 , {isStatic:true} );
	 World.add(world, DropZoneB);
	 

	 DropZoneL = Bodies.rectangle(510, 600, 20, 100 , {isStatic:true} );
	 World.add(world, DropZoneL);
	 

	 DropZoneR = Bodies.rectangle(310, 600, 20, 100 , {isStatic:true} );
	 World.add(world, DropZoneR);
	 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  /*
  if (keyCode === DOWN_ARROW) {
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y   
  }
  */
 
 packageSprite.x= packageBody.position.x 
 packageSprite.y= packageBody.position.y
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	 Matter.Body.setStatic(packageBody,false);
	 /*
    packageSprite.x=packageBody.position.x
    packageSprite.y=packageBody.position.y
  	*/
  }
}



