var pacman, pacmanImage;
var ghost;
var pellet;


function preload() {
 pacmanImage = loadAnimation("images/pacman1.png", "images/pacman2.png", "images/pacman3.png"); 
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  pacman = createSprite(40,40,20,50);
 pacman.addAnimation("moving", pacmanImage);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}