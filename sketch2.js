//variables for each image
let sky
let airplane

// for the position on the page 
function setup() 
{
  // variable for position 
  var pos;

  // setting the canvas size to the variable
  pos = createCanvas(600, 400);

  // setting the position of the canvas onto the html page
  pos.position(300,200);
}

// loading both the images 
function preload()
{
    sky = loadImage ('cloud.jpeg');
    airplane = loadImage ('plane.png');
}

// drawing the elements 
  function draw() {
   
    // setting the first image (sky) as the background
    background (sky,400,400); 
    
    // the text in the top left and updating it each time the mouse cursor moves 
    text(mouseX + "," + mouseY, 20, 20);
    
    // airplane image moving. Only the x axis is able to move from left to right
    image(airplane,mouseX,110,150,150);
}