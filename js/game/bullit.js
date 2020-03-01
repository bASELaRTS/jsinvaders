class Bullit extends Entity {
  constructor(engine){
    super(engine);
    this.key="bullit";
    this.position.setCoordinates(73,96,0);
    this.size.setCoordinates(6,9,0);
    
    this.animation = new Animation();
    this.animation.addFrame(new AnimationFrame(1,100));
    this.animation.addFrame(new AnimationFrame(2,100));
  }
  update(){
    var p = new Vector3();
    var s = new Vector3();
    var a = new Vector3();
    
    p.setVector(this.position);
    s.setVector(this.speed);
    
    p.y-=2;
    if (p.y<-10){
      this.remove=true;
      this.visible=false;
    }
    
    this.position.setVector(p);
    this.speed.setVector(s);
    
    this.animation.update();
  }
  paint(){
    var x = (this.position.x|0);
    var y = (this.position.y|0);
    var w = (this.size.x|0);
    var h = (this.size.y|0);
    
    //this.engine.graphics.fillRect(x,y,w,h,"#ffff00");
    var frame = this.animation.getFrameCurrent();
    var bmp = this.engine.images[frame.imageIndex];
    var img = bmp.image;
    this.engine.graphics.drawImage(img,x,y);
  }
}
