class Entity {
  constructor(engine){
    this.engine = engine;
    this.key="";
    this.position = new Vector3();
    this.size = new Vector3();
    this.speed = new Vector3();
    this.visible = true;
    this.remove = false;
  }
  update(){}
  paint(){}
}

class EntityManager {
  constructor() {
    this.list = new LinkedList();
  }
  update(){
    var i=0;
    var e=null;
    var o=this.list.first;
    var n=null;
    while(o!=null){
      n=o.next;
      e=o.object;
      if (e.remove){
        this.list.remove(o);
      } else {
        e.update();
      }
      o=n;
    }
  }
  paint(){
    var i=0;
    var e=null;
    var o=this.list.first;
    while(o!=null){
      e=o.object;
      if (e.visible){
        e.paint();
      }
      o=o.next;
    }
  }
  clear(){this.list.clear();}
  count(){return this.list.count();}
  add(entity){
    var llo = new LinkedListObject();
    llo.object=entity;
    this.list.add(llo);
  }
  get(key){
    var i=0;
    var e=null;
    var o=this.list.first;
    while(o!=null){
      e=o.object;
      if (e.key==key){
        return e;
      }
      o=o.next;
    }
    return null;
  }
  first(){return this.list.first;}
}
