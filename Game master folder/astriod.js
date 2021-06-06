class Astroid{
    constructor(x,y,r){
        var options = {
            restitution:0.8,
            friction:1.0,
            density:1.0,
            isStatic: false
        }
         this.x = x
         this.y = y 
         this.r = r 
         this.body = Bodies.circle( this.x,this.y,this.r,options); 
         World.add(world,this.body)
         this.image = loadImage("sprites/astreiod 1.png");
    }
    move(){
          this.speed = 2
          if(frameCount % 60 === 0 ){
              this.speed = this.speed + 4
          }
        this.body.position.x += random(this.speed);
        this.body.position.y += random(this.speed);
        this.body.position.x -= random(this.speed);
        this.body.position.y -= random(this.speed);
      }
    display(){
        push();
        var pos = this.body.position
        imageMode(CENTER);
        translate(pos.x, pos.y);
        image(this.image, 0, 0, this.r*2, this.r*2);
        pop();
      }
     comeBack(){
         if(this.body.position.x >=  800){
            this.body.position.x = 795
        }
         if(this.body.position.x <= 0){
            this.body.position.x = 5
           }
           if(this.body.position.y >= 800){
            this.body.position.y = 795
           }
           if(this.body.position.y <= 0){
            this.body.position.y = 5
           }
     }
}