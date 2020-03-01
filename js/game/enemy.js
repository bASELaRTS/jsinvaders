class Enemy extends Entity {
  constructor(engine){
    super(engine);
    this.key="enemy";
    this.position.setCoordinates(72,55,0);
    this.size.setCoordinates(15,10,0);
    
    this.animationIndex = 0;
    this.animations = [];
    
    var animation = null;
    animation = new Animation();
    animation.addFrame(new AnimationFrame(3,200));
    animation.addFrame(new AnimationFrame(4,200));
    this.animations.push(animation);
    animation = new Animation();
    animation.addFrame(new AnimationFrame(5,200));
    animation.addFrame(new AnimationFrame(6,200));
    this.animations.push(animation);
    animation = new Animation();
    animation.addFrame(new AnimationFrame(7,200));
    animation.addFrame(new AnimationFrame(8,200));
    this.animations.push(animation);
    animation = new Animation();
    animation.addFrame(new AnimationFrame(9,200));
    animation.addFrame(new AnimationFrame(10,200));
    this.animations.push(animation);
  }
  update(){
    var p = new Vector3();
    var s = new Vector3();
    var a = new Vector3();
    
    p.setVector(this.position);
    s.setVector(this.speed);
    
    var o = this.engine.gameStateGame.entities.first();
    var e = null;
    while((o!=null)&&(!this.remove)){
      e = o.object;
      if ((e.key=="bullit")&&(!e.remove)){
        if (collisionBoxBox(
          this.position.x,this.position.y,this.size.x,this.size.y,
          e.position.x,e.position.y,e.size.x,e.size.y
        )){
          this.remove=true;
          this.visible=false;
          
          e.remove=true;
          e.visible=false;
        }
      }
      o = o.next;
    }
    
    this.position.setVector(p);
    this.speed.setVector(s);
    
    this.animations[this.animationIndex].update();
  }
  paint(){
    var x = (this.position.x|0);
    var y = (this.position.y|0);
    var w = (this.size.x|0);
    var h = (this.size.y|0);
    
    //this.engine.graphics.fillRect(x,y,w,h,"#ffff00");
    var animation = this.animations[this.animationIndex];
    var frame = animation.getFrameCurrent();
    var bmp = this.engine.images[frame.imageIndex];
    var img = bmp.image;
    this.engine.graphics.drawImage(img,x,y);
  }
}
