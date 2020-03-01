class Player extends Entity {
  constructor(engine){
    super(engine);
    this.key="player";
    this.position.setCoordinates(73,96,0);
    this.size.setCoordinates(14,8,0);
    
    this.fireTimestamp = new Date();
  }
  update(){
    var up=this.engine.keyboard.getState(38);
    var down=this.engine.keyboard.getState(40);
    var right=this.engine.keyboard.getState(39);
    var left=this.engine.keyboard.getState(37);
    var fire=this.engine.keyboard.getState(32);
    var dtm = new Date();    
    var p = new Vector3();
    var s = new Vector3();
    var a = new Vector3();
    
    p.setVector(this.position);
    s.setVector(this.speed);
    
    if (left) {
      p.x-=2;
    } else if (right){
      p.x+=2;
    }
    
    if ((fire)&&(this.engine.gameStateGame.state==0)) {
      if ((dtm-this.fireTimestamp)>=500){
        this.fireTimestamp = dtm;
        
        var bullit = new Bullit(this.engine);
        bullit.position.x = p.x + 5;
        bullit.position.y = p.y - 10;
        this.engine.gameStateGame.entities.add(bullit);
      }
    }

    if (p.x<0) p.x=0;
    if ((p.x+this.size.x)>this.engine.graphics.width) p.x=this.engine.graphics.width-this.size.x;
    
    this.position.setVector(p);
    this.speed.setVector(s);
  }
  paint(){
    var x = (this.position.x|0);
    var y = (this.position.y|0);
    var w = (this.size.x|0);
    var h = (this.size.y|0);
    
    //this.engine.graphics.fillRect(x,y,w,h,"#ffff00");
    var bmp = this.engine.images[0];
    var img = bmp.image;
    this.engine.graphics.drawImage(img,x,y);
  }
}
