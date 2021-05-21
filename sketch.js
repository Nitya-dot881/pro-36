var dog,happydog
var foodStock,foodS,database;


function preload()
{
	this.IMG=loadImage("happydog.png")
  this.IMG2=loadImage("Dog.png")

}

function setup() {
  database = firebase.database();
	createCanvas(800, 700);
  
}


function draw() {  

  drawSprites();
  //add styles here

}



