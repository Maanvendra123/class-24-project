
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

ground=new Ground(800,680,1600,20)
dustbinb=new Dustbin(1200,650,200,20)
dustbinb1=new Dustbin(1100,590,20,100)
dustbinb2= new Dustbin(1300,590,20,100)
paper=new Paper(100,300,10)

World.add(world,ground)
	
}


function draw() {
	Engine.update(engine)
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  dustbinb.display();
  dustbinb1.display();
  dustbinb2.display();
  

  
  
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.paper,paper.paper.position,{x:20,y:-25})
}
}