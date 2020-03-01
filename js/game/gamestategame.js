class GameStateGame extends Entity {
  constructor(engine){
    super(engine);
    this.key="gamestategame";
    this.position.setCoordinates(0,0,0);
    this.size.setCoordinates(0,0,0);
    
    this.entities = new EntityManager();
    
    this.state = 0; // 0=running 1=winner 2=lost
    
    this.enemyxspeed=0.5;
    this.enemyxdirection=1;
    this.enemyufotimestamp = new Date();    
  }
  setup() {
    var tilemap = new Tilemap(this.engine);
    var player = new Player(this.engine);
    var enemy = null;
    
    this.entities.clear();
    this.entities.add(tilemap);

    var i = 0;
    var j = 0;
    var w = 6;
    var pw = 18;
    var pxs = ((this.engine.graphics.width - (w*pw))*0.5)|0;
    var px = pxs;
    var py = 16;
    for(j=0;j<4;j++){
      for(i=0;i<w;i++){
        enemy = new Enemy(this.engine);
        enemy.position.x = px;
        enemy.position.y = py;
        enemy.animationIndex = j%4;
        this.entities.add(enemy);
        px+=pw;
      }
      px=pxs;
      py+=12;
    }

    this.entities.add(player);
  }
  update(){
    this.entities.update();

    var dtm = new Date();
    var yspeed = 0;
    var i = 0;
    var e = null;
    var o = null;
    o = this.entities.first();
    while(o!=null){
      e = o.object;
      if (e.key=="enemy"){
        if (this.enemyxdirection>0){
          if (e.position.x+this.enemyxspeed+e.size.x>this.engine.graphics.width) {
            this.enemyxdirection=-1;
            yspeed = 4;
            break;
          }
        } else if (this.enemyxdirection<0) {
          if (e.position.x<0){
            this.enemyxdirection=1;
            yspeed = 4;
            break;
          }
        }
      }
      o=o.next;
    }
    
    i = 0;
    o = this.entities.first();
    while(o!=null){
      e = o.object;
      if (e.key=="enemy"){
        e.position.x+=(this.enemyxspeed*this.enemyxdirection);
        e.position.y+=yspeed;
        i++;
      }
      o=o.next;
    }
    
    if ((dtm-this.enemyufotimestamp)>=5000){
      this.enemyufotimestamp=dtm;
      if ((Math.random()*100)>80){
        var ufo = new EnemyUfo(this.engine);
        ufo.position.x = this.engine.graphics.width + 10;
        ufo.position.y = 8;
        this.entities.add(ufo);
      }
    }
    
    if (i==0){
      this.state=1;
    }
  }
  paint(){
    this.entities.paint();

    var span = document.getElementById("lblMessage");
    span.innerText  = ""+this.engine.timer.fps;
    span.innerText += "\r\n"+this.entities.count();
  }
}
