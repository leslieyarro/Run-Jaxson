var track,runner, leftBoundary, rightBoundary
var trackImg,runnerImg

function preload(){
  trackImg = loadImage("path.png");
  runnerImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){

  createCanvas(400,400);
  
track = createSprite(200,200);
track.addImage(trackImg);
track.velocityY = 4;
track.scale = 1.2;

runner = createSprite(180,340,30,30);
runner.scale = 0.08;
runner.addAnimation("Walking",runnerImg);

leftBoundary = createSprite (0,0,100,800);
leftBoundary.visible = false;

rightBoundary = createSprite (410,0,100,800);
rightBoundary.visible = false;
}

function draw(){
  background(0);
  track.velocityY = 4;

  runner.x = World.mouseX;

  edges = createEdgeSprites();
  runner.collide(edges[3]);
  runner.collide(leftBoundary);
  runner.collide(rightBoundary);

  
  if(track.y > 400){
    track.y = height/2
  }

  drawSprites();
}