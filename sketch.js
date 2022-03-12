var bgImg;
var bg;
var sharkImg;
var shark;
var surferImg;
var sufer;

function preload() {
  bgImg = loadImage("images/bg.jpg");
  surferImg = loadImage("images/surfer.png");
  sharkImg = loadAnimation("images/shark1.png","images/shark2.png");
}


function setup() {
    createCanvas(600, 1000);
    bg = createSprite(300,0);
    bg.addImage("ocean",bgImg);
    bg.velocityY = +3;
    shark = createSprite(300,930);
    shark.addAnimation("shark",sharkImg);
    shark.scale = 1.5
    surfer = createSprite(300,740);
    surfer.addImage("surfista",surferImg)
    surfer.scale = 0.08;
}

function draw() {
    edges = createEdgeSprites();
    
    background("black");
    if(bg.y>500){
        bg.y = 100;
    }
   
    // Agregar el código para Cambio de estado a END
    drawSprites();
}