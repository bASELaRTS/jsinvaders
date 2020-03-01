class Engine {
  constructor(){
    this.graphics = new Graphics();
    this.keyboard = new Keyboard();
    this.entities = new EntityManager();
    this.timer = new Timer();
  }
  setup(){}
  loop(){
    this.timer.update();
    this.update();
    this.paint();
  }
  update(){
    this.entities.update();
  }
  paint(){
    this.graphics.clear();
    
    this.entities.paint();
  }
}
