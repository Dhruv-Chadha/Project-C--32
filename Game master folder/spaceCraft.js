class Ship{
    constructor(x, y, width, height) {
        var options = {
            restitution:0.8,
            friction:1.0,
            density :0.5,
            isStatic : false
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
      
        this.image = loadImage("sprites/spaceship.png");
        World.add(world, this.body);
      }
      display(){
        push();
       var pos = this.body.position
        translate(pos.x, pos.y);
        rotate(0);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
      moveUp(){
      this.body.position.y -= 0.1
        }
        moveDown(){
            this.body.position.y += 0.1

              }
        moveRight(){
                this.body.position.x += 0.1;

    }
         moveLeft(){
        this.body.position.x -= 0.1
          }

          
      }
