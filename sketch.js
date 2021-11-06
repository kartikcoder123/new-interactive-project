var ball, obstacle;
var edges;

function setup() 
{
  createCanvas(500,700);
  ball = createSprite(200,200,20,10);
  ball.shapeColor = "red"
  obstacle = createSprite(300,400,20,10);
  obstacle1 = createSprite(300,100,20,10);
  obstacle2 = createSprite(178,200,20,10);
  obstacle3 = createSprite(130,367,20,10);
  obstacle4 = createSprite(117,468,20,10);
  obstacle5 = createSprite(160,500,20,10);
  
  obstacle1.velocityY = 3
  obstacle1.velocityX = 3
  obstacle2.velocityX = 3
  obstacle2.velocityY = 3
  obstacle3.velocityX = 3
  obstacle3.velocityY = 3
  obstacle4.velocityX = 3
  obstacle4.veloctiyY = 3
  obstacle5.velocityX = 5
  obstacle5.velocityY = 5



   edges = createEdgeSprites();
  
  
}

function draw() 
{
  background("teal");
 
  if(keyDown(LEFT_ARROW)){
    ball.x -= 2
  }

  if(keyDown(RIGHT_ARROW)){
    ball.x += 2
  }

  if(keyDown(UP_ARROW)){
    ball.y -= 2

  }

  if(keyDown(DOWN_ARROW)){
    ball.y += 2
  }
  
  ball.bounceOff(edges);
  ball.bounceOff(obstacle1);
  ball.bounceOff(obstacle2);
  ball.bounceOff(obstacle3);
  ball.bounceOff(obstacle4);
  ball.bounceOff(obstacle5);

  obstacle1.bounceOff(edges);
  obstacle2.bounceOff(edges);
  obstacle3.bounceOff(edges);
  obstacle4.bounceOff(edges);
  obstacle5.bounceOff(edges);
 drawSprites();
   
}

