
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var ball;
var engine , world;

function preload()
{
	bg = loadImage("city.jpg");
	bin = loadImage("dustbingreen.png")
}
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	ball = new Paper(100,600,30);

	
	dustbiN = createSprite(1450,600,30,15);
	dustbiN.addImage(bin);
	dustbiN.scale = 0.56
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1400,600,15,173);
	dustbinObj2=new dustbin(1500,600,15,173);
	dustbinObj3=new dustbin(1450,670,110,15);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);
 Engine.update(engine);
keyPressed();
ball.y = ball.y +20;

  groundObject.display();
  dustbinObj.display();
  dustbinObj2.display();
  dustbinObj3.display();
  ball.display();
 drawSprites();
}
function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(ball.body,ball.body.position,{x:0.7,y:-0.5});
		//Matter.Body.Render() 
	}
}

