class Dustbin{
    constructor(x,y,width,height) {
        var options = {
           
            'restitution':0.2,
            'friction':0.2,
            'density':1.0,
            'isStatic':true

        }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;

    World.add(world,this.body);
    }
    display(){
        rectMode(CENTER);
  
        fill("cyan");
  
        rect(this.body.position.x, this.body.position.y, this.width, this. height);
      }
}