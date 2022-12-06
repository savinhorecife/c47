var bg,bgimg;
var ryo;
var ryoImage;
function preload(){
    bgimg=loadImage("assets/bgbg.jpg");
    ryoImage=loadAnimation("assets/RYO1.png","assets/RYO.png");
}
function setup(){
createCanvas(windowWidth,windowHeight)
    bg=createSprite(700,0)
    bg.addImage("bg",bgimg)
    bg.velocityX=5
    bg.scale=2.2

    ryo=createSprite(50,650,50,50)
    ryo.addAnimation("r",ryoImage)
    ryo.scale=0.5
}
function draw(){
background(0)
if(bg.x>910){
    bg.x=750
}
drawSprites();

}