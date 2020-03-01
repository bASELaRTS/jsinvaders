class Game extends Engine {      
  constructor(){
    super();
    
    this.images = [];
    
    this.gameState = 0; //0=game 1=paused 2=winner 3=gameover 4=start
    this.gameStateGame = null;
  }
  setup(){
    // 0
    this.images.push(new Bitmap("data/player0.png"));

    // 1-2
    this.images.push(new Bitmap("data/bullit0.png"));
    this.images.push(new Bitmap("data/bullit1.png"));
    
    // 3-10
    this.images.push(new Bitmap("data/enemy0.png"));
    this.images.push(new Bitmap("data/enemy1.png"));
    this.images.push(new Bitmap("data/enemy2.png"));
    this.images.push(new Bitmap("data/enemy3.png"));
    this.images.push(new Bitmap("data/enemy4.png"));
    this.images.push(new Bitmap("data/enemy5.png"));
    this.images.push(new Bitmap("data/enemy6.png"));
    this.images.push(new Bitmap("data/enemy7.png"));

    // 11-13
    this.images.push(new Bitmap("data/enemyufo0.png"));
    this.images.push(new Bitmap("data/enemyufo1.png"));
    this.images.push(new Bitmap("data/enemyufo2.png"));

    while(!this.imagesLoaded()){}
    
    var gameState = null;
    gameState=new GameStateGame(this);
    gameState.setup();
    this.gameStateGame = gameState;
    this.entities.add(gameState);
  }
  imagesLoaded(){
    var i=0;
    for(i=0;i<this.images.loaded;i++){
      if (!this.images[i].loaded) {
        return false;
      }
    }
    return true;
  }
}      
