class Box{
constructor(x,y){
    var options = {
        density: 1,
        friction: 0.7,
    }
    this.body=  Bodies.rectangle(x,y,80,80,options);
    this.width = 80;
    this.height = 80;

    World.add(world, this.body);
}
display(){
   var pos = this.body.position;
   push();
   //to translate the origin to center of the body
   translate(pos.x,pos.y)
   rotate(this.body.angle)
   rectMode(CENTER);
   fill("pink");
   stroke("blue");
   strokeWeight(4);
   rect(0,0,this.width,this.height);
  pop();
}
}