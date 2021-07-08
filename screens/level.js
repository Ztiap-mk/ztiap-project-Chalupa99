level = function() {
  var sceneObjects = []
  sceneObjects.push(new Background("background") );
  sceneObjects.push(new Button('menu',0,0,60,60, "home") );
  sceneObjects.push(new Button('sound',900,0,60,60, "soundon") );
  sceneObjects.push(new Button('gameover',500,200,60,120, "postava") );
  for(let j = 0; j < 4; j++){
    for (let i = 0; i < 16; i++) {
          sceneObjects.push(new Brick(i*60, 320 + j*60));
        }
      }

  sceneObjects.push(new Cerveny() );       
  sceneObjects.push(new Modry() );
  sceneObjects.push(new Postava() );
  return sceneObjects;
};