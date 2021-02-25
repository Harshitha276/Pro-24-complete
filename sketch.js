
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    


	
	 
	//Create the Bodies Here.
	dustbin1 = new Dustbin(620,610,10,100);
	dustbin2 = new Dustbin(665,655,100,10);
	dustbin3 = new Dustbin(720,610,10,100);
	paper1 = new Paper(50,610,10)
	ground = new Ground(400, 680, 800, 20);

	Engine.run(engine);

	
  
}


function draw() {
	
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
  
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper1.display();
  ground.display();
  

  drawSprites();

  
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		
		Matter.Body.applyForce(paper1.body, paper1.body.position,
			 {x:15, y: -15})
	}

}



