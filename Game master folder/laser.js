class Laser{
    constructor(x,y){
        var options = {
            restitution:0.8,
            friction:1.0,
            density:1.0,
            isStatic: false
        }
         this.x = x
         this.y = y 
         this.r = 10 
         this.body = Bodies.circle( this.x,this.y,this.r,options); 
         World.add(world,this.body)
         this.image = loadImage("sprites/beam.png");
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r*2, this.r*2);
        pop();
      }
      move(){
        this.body.position.y -= 5
      }
    }
