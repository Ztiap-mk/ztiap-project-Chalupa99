class Postava {
    // Initialization
    constructor() {
        this.canvas = document.getElementById("canvas");
        this.image = resourceManager.getImageSource('postava');
    
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.dx = Math.random() * 50 - 25
        this.dy = Math.random() * 50 - 25
        this.width = 50
        this.height = 100
    }
  
    // Movement logic
    move(dt) {
		 this.x = game.mousePosition.x;
		  this.y = game.mousePosition.y;
      if(game.mousePressed){
		  game.clickSound.play();
		  
		 //tu mozem dat pocitadlo bodov a ked dosiahiem ciet tak zovolam napr gamerover scenu
		  
	  }
    }
  
    // Render self
    draw(ctx) {
      ctx.save()
      ctx.translate(this.x, this.y)     
      ctx.drawImage(
        this.image, 
        -this.width, 
        -this.height, 
        this.width, 
        this.height)  
      ctx.restore()
    }
}