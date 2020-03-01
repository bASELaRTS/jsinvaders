var engine = new Game();

function setup(){
  engine.setup();
  
  document.addEventListener('keydown',(event)=>{
    engine.keyboard.setState(event.keyCode,true);
  });
  document.addEventListener('keyup',(event)=>{
    engine.keyboard.setState(event.keyCode,false);
  });
}

function loop(){
  engine.loop();
  window.requestAnimationFrame(loop);
}
