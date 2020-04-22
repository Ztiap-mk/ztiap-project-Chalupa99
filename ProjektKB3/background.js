class Background {
    // Initialization
    constructor(backgroundName) {
        this.canvas = document.getElementById("canvas");
		    this.image = resourceManager.getImageSource(backgroundName); 
    }
  
    // Movement logic
    move(dt) {
      
    }
  
    // Render self
    draw(ctx) {
      ctx.save()
      ctx.translate(this.x, this.y)      
      ctx.drawImage(this.image, 0, 0, 960, 500)  
      ctx.restore()
    }
}