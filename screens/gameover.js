gameover = function() {
  var sceneObjects = []
  sceneObjects.push(new Background("gameover") );
  sceneObjects.push(new Button('menu',430,200,60,60, "play") );
  sceneObjects.push(new Score())
  //statistiky, body

  return sceneObjects;
};