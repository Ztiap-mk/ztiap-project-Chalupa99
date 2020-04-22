class Brick {
    constructor(x, y) {
        this.canvas = document.getElementById("canvas");
        this.image = resourceManager.getImageSource('zem');
  
      this.x = x;
      this.y = y;
      this.width = 60;
      this.height = 60;
  
      this.game = game;
    }
    update() {}
    draw(ctx) {
      ctx.drawImage(
        this.image,
        this.x,
        this.y,
        this.width,
        this.height
      );
    }
  }