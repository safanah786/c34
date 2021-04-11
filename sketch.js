const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
    
    wBall= Bodies.circle(200,200,50);
    World.add(world,wBall);

    ground= new Ground(width/2,height-30,width,30);
    box1= new Box(550,100);
    box2= new Box(550,150);
    box3= new Box(550,200);
    box4= new Box(550,250);
    box5= new Box(550,300);
    box7= new Box(550,350);
    rope= new Rope(wBall,{x: 100,y: 50})
}

function draw(){
    Engine.update(engine);
    background("orange");
    ellipseMode(RADIUS);
    ellipse(wBall.position.x,wBall.position.y,50);
   // console.log(ground);
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box7.display();
    rope.display();
    
}
function mouseDragged(){
    Matter.Body.setPosition(wBall,{x: mouseX,y: mouseY})
}