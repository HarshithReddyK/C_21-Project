var canvas;
var b1,b2,b3,b4;
var ball, edges;
var music;

function preload(){
    // load sound here
    music = loadImage("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    //creating blocks and ball
    b1 = createSprite(050,580,200,30);
    b1.shapeColor = "blue";

    b2 = createSprite(250,580,200,30);
    b2.shapeColor = "orange";
    
    b3 = createSprite(450,580,150,30);
    b3.shapeColor = "red";

    b4 = createSprite(650,580,150,30);
    b4.shapeColor = "yellow";

    ball = createSprite(random(50,750),400, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY
    ball.velocityX = 3;
    ball.velocityY = 3;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    ball.bounceOff(b1);
    ball.bounceOff(b2);
    ball.bounceOff(b3);
    ball.bounceOff(b4);  

    
    //write code to bounce off ball from the block1 
    if(b1.isTouching(ball) && ball.bounceOff(b1)){
        ball.shapeColor = "blue";
        music.play();
    }

    if(b2.isTouching(ball) && ball.bounceOff(b2)) {
        ball.shapeColor = "orange";
        music.play();
    }

    if(b3.isTouching(ball) && ball.bounceOff(b3)) {
        ball.shapeColor = "red";
        music.play();
    }

    if(b4.isTouching(ball) && ball.bounceOff(b4)) {
        ball.shapeColor = "yellow";
        music.play();
    }
    //write code to set velocityX and velocityY of ball as 0

    //write code to stop music
    if (b1.isTouching && b2.isTouching && b3.isTouching && b4.isTouching === false) {
       music.play() === false
    }
    //write code to bounce off ball from the blocks
 
    drawSprites();
}
