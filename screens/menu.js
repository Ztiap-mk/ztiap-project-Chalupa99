menu = function() {
  var sceneObjects = []
  sceneObjects.push(new Background("background1") );
   sceneObjects.push(new Button('level', 100,100,130,60, "play") );
   sceneObjects.push(new Button('instructions', 100,180,270,60, "instructions") );

  return sceneObjects;
};