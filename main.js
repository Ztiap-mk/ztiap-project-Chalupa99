

const resourceManager = new ResourceManager();


window.onmousemove = function (event){
  game.onmousemove(event);
}
window.onmousedown = function (event){
  game.onmousedown(event);
}
window.onmouseup = function (event){
  game.onmouseup(event);
}
window.onkyedown = function (event){
  game.onkeydown(event);
}

const game = new Game();
    game.start();


