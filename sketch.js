var dog,happyDog;
var database,foodS,foodStock;
var dogImage,dogSmileImage;

function preload()
{
  dogImage = loadImage("images/dogImg.png");
  dogSmileImage = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(800, 700);

 dog = createSprite(200,200,5,10);
 dog.addImage(dogImage);

 happyDog = createSprite(200,140,5,10);
 happyDog.addImage(dogSmileImage);

 database = firebase.database();
 foodStock = database.ref('Food');
 foodStock.on("value",readStock);

  
  
}


function draw() {  
   background("46,139,87");

   if(keyDown(UP_ARROW)){
     writeStock(foodS);
     dog.addImage(happyDog);
   }

   dog.display();
   happyDog.display();

  drawSprites();
  //add styles here

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })

}



