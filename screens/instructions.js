instructions = function() {
  var sceneObjects = []
  sceneObjects.push(new Background("background1") );
   sceneObjects.push(new Button('menu',0,0,60,60, "home") );

  return sceneObjects;
};