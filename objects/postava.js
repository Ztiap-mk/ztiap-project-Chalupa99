class Postava {
    // Initialization
    constructor() {
        this.canvas = document.getElementById("canvas");
        this.image = resourceManager.getImageSource('postava');
    
        this.x = 100
        this.y = 220
        this.width = 50
        this.height = 100

        this.maxSpeed = 7;
        this.speed = 0;
    }
    moveLeft() {
      this.speed = -this.maxSpeed;
    }
    moveRight() {
      this.speed = this.maxSpeed;
    }
  
    stop() {
      this.speed = 0;
    }
    jump(){
      //nedokoncena
    }
    // Movement logic
    move(dt) {
    /*document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        default:
          break;
        case 37:
          moveLeft();
          break;

        case 39:
          moveRight();
          break;

        case 38:
          jump();
          game.jumpSound.play();
          break;
      }
    });
    document.addEventListener("keyup", event => {
      switch (event.keyCode) {
        default:
          break;
        case 37:
          if (postava.speed < 0) stop();
          break;

        case 39:
          if (postava.speed > 0) stop();
          break;
    }
  });*/
}

  
    // Render self
    draw(ctx) {
      ctx.save()
     // ctx.translate(this.x, this.y)     
      ctx.drawImage(
        this.image, 
        this.x, 
        this.y, 
        this.width, 
        this.height)  
      ctx.restore()
    }
}