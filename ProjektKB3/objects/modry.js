class Modry {
    // Initialization
    constructor() {
        this.canvas = document.getElementById("canvas");
        this.image = resourceManager.getImageSource('modry');
    
        this.x = Math.random() * canvas.width
        this.y = Math.random() * (320 - 60)
        this.dx = Math.random() * 50 - 25
        this.dy = Math.random() * 50 - 25
        this.size = 60
    }
  
    // Movement logic
    move(dt) {
        const canvas = this.canvas;
        if (this.x + this.size > canvas.width) {
            this.x = canvas.width - this.size
            this.dx = -Math.abs(this.dx)
        }
        if (this.x < 0) {
            this.x = 0
            this.dx = Math.abs(this.dx)
        }
        if (this.y + this.size > 320) {
            this.y = 320 - this.size
            this.dy = -Math.abs(this.dy)
        }
        if (this.y < 0) {
            this.y = 0
            this.dy = Math.abs(this.dy) 
        }
    
        // Movement
        this.x += this.dx * dt
        this.y += 0 * dt
    }
  
    // Render self
    draw(ctx) {
      ctx.save()
      ctx.translate(this.x, this.y)
      ctx.drawImage(this.image, 0, 0, this.size, this.size)  
      ctx.restore()
    }
}