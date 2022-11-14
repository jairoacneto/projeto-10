var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//INFORMAÇÕES == = comparar valores

//caixas de baixo
var box1 = createSprite(25, 75, 50, 50);
box1.shapeColor="red";
var box2 = createSprite(75, 75, 50, 50);
box2.shapeColor="cyan";
var box3 = createSprite(125, 75, 50, 50);
box3.shapeColor="red";
var box4 = createSprite(175, 75, 50, 50);
box4.shapeColor="cyan";
var box5 = createSprite(225, 75, 50, 50);
box5.shapeColor="red";
var box6 = createSprite(275, 75, 50, 50);
box6.shapeColor="cyan";
var box7 = createSprite(325, 75, 50, 50);
box7.shapeColor="red";
var box8 = createSprite(375, 75, 50, 50);
box8.shapeColor="cyan";

//caixas de cima
var box9 = createSprite(25, 125, 50, 50);
box9.shapeColor="cyan";
var box10 = createSprite(75, 125, 50, 50);
box10.shapeColor="red";
var box11 = createSprite(125, 125, 50, 50);
box11.shapeColor="cyan";
var box12 = createSprite(175, 125, 50, 50);
box12.shapeColor="red";
var box13 = createSprite(225,125, 50, 50);
box13.shapeColor="cyan";
var box14 = createSprite(275, 125, 50, 50);
box14.shapeColor="red";
var box15 = createSprite(325, 125, 50, 50);
box15.shapeColor="cyan";
var box16 = createSprite(375, 125, 50, 50);
box16.shapeColor="red";

//criação da bola e da raquete
var paddle=createSprite(200,390,100,20);
paddle.shapeColor="WHITE";
var ball=createSprite(180,200,20,20);
ball.shapeColor="red";
var ball2=createSprite(220,200,20,20);
ball2.shapeColor="blue";

//variáveis
var score = 0;
var gameState = "serve"; //lançar

function draw() {
  //plano de fundo
  background("black");
  
  //pontuação
  textFont("Verdana");
  stroke("red");
  fill("red");
  textSize(20);
  text("pontuação: "+score,250,25);
  
  //if serve
  if (gameState == "serve") {
  textFont("Verdana");
  stroke("red");
  fill("red");
  textSize(15);
  text("pressione ENTER para começar",90,240);
  
  if (keyDown("ENTER")) {
  ball.velocityX = 8;
  ball.velocityY = 9;
  ball2.velocityX = -13;
  ball2.velocityY = -9;
  gameState = "play";
  }
  }
  //if play
  if (gameState == "play") {
  //movimento da raquete
  paddle.x = World.mouseX;
  if (ball.isTouching(bottomEdge)||score==16){
  gameState = "end";
  }
  if (ball2.isTouching(bottomEdge)||score==16){
  gameState = "end";
  }
  }
  //if end
  if (gameState == "end") {
  ball.velocityX = 0;
  ball.velocityY = 0;
  ball2.velocityX = 0;
  ball2.velocityY = 0;
  
  textSize(80);
  text("FIM",130,250);
  }
  
  //permitir a bola rebater
  ball.bounceOff(paddle);
  createEdgeSprites();
  ball2.bounceOff(rightEdge);
  ball2.bounceOff(topEdge);
  ball2.bounceOff(leftEdge);
  ball2.bounceOff(paddle);
  ball.bounceOff(rightEdge);
  ball.bounceOff(topEdge);
  ball.bounceOff(leftEdge);
  
    //destruir as caixas
    if(ball.isTouching(box1)|ball2.isTouching(box1)) {
    ball.bounceOff(box1);
    ball2.bounceOff(box1);
    box1.destroy();
    score=score+1;
  }
    if(ball.isTouching(box2)|ball2.isTouching(box2)) {
    ball.bounceOff(box2);
    ball2.bounceOff(box2);
    box2.destroy();
    score=score+1;
  }
    if(ball.isTouching(box3)|ball2.isTouching(box3)) {
      ball.bounceOff(box3);
    ball2.bounceOff(box3);
    box3.destroy();
    score=score+1;
  }
    if(ball.isTouching(box4)|ball2.isTouching(box4)) {
      ball.bounceOff(box4);
    ball2.bounceOff(box4);
    box4.destroy();
    score=score+1;
  }
    if(ball.isTouching(box5)|ball2.isTouching(box5)) {
      ball.bounceOff(box5);
    ball2.bounceOff(box5);
    box5.destroy();
    score=score+1;
  }
    if(ball.isTouching(box6)|ball2.isTouching(box6)) {
      ball.bounceOff(box6);
    ball2.bounceOff(box6);
    box6.destroy();
    score=score+1;
  }
    if(ball.isTouching(box7)|ball2.isTouching(box7)) {
      ball.bounceOff(box7);
    ball2.bounceOff(box7);
    box7.destroy();
    score=score+1;
  }
    if(ball.isTouching(box8)|ball2.isTouching(box8)) {
      ball.bounceOff(box8);
    ball2.bounceOff(box8);
    box8.destroy();
    score=score+1;
  }
    if(ball.isTouching(box9)|ball2.isTouching(box9)) {
    ball.bounceOff(box9);
    ball2.bounceOff(box9);
    box9.destroy();
    score=score+1;
  }
    if(ball.isTouching(box10)|ball2.isTouching(box10)) {
      ball.bounceOff(box10);
    ball2.bounceOff(box10);
    box10.destroy();
    score=score+1;
  }
    if(ball.isTouching(box11)|ball2.isTouching(box11)) {
      ball.bounceOff(box11);
    ball2.bounceOff(box11);
    box11.destroy();
    score=score+1;
  }
    if(ball.isTouching(box12)|ball2.isTouching(box12)) {
      ball.bounceOff(box12);
    ball2.bounceOff(box12);
    box12.destroy();
    score=score+1;
  }
    if(ball.isTouching(box13)|ball2.isTouching(box13)) {
      ball.bounceOff(box13);
    ball2.bounceOff(box13);
    box13.destroy();
    score=score+1;
  }
    if(ball.isTouching(box14)|ball2.isTouching(box14)) {
      ball.bounceOff(box14);
    ball2.bounceOff(box14);
    box14.destroy();
    score=score+1;
  }
    if(ball.isTouching(box15)|ball2.isTouching(box15)) {
      ball.bounceOff(box15);
    ball2.bounceOff(box15);
    box15.destroy();
    score=score+1;
  }
    if(ball.isTouching(box16)|ball2.isTouching(box16)) {
      ball.bounceOff(box16);
    ball2.bounceOff(box16);
    box16.destroy();
    score=score+1;
  }
  
 
 
 
  
  drawSprites();
}




// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
