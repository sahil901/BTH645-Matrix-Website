
// for the position on the page 
function setup() 
{
  var pos;
  pos = createCanvas(400, 400);
  pos.position(300,200);
}

// for the images to show up 
  let img;
  let img2;
  
function preload() 
{
  img = loadImage('moon.jpg');
  img2 = loadImage('star.jpg');
}



function draw()
{
  background(0,0,0);
  
  // roof
  stroke(0);
  fill(90,86,52);
  triangle(75, 150, 327, 152, 200, 40);
  
  // house
  fill(245, 245, 220);
  rect(75,150,250,250);
  
  // door
  fill(139,69,19);
  rect(150,250, 75,150);
  
  // door knob
  fill(0,0,0);
  noStroke();
  ellipse(160, 330, 10,10);
  
  // moon
  image(img, 60, 60, 30, 30);
  
  // shooting star
  image(img2, 300, 50, 75, 75);

  
   //it colored the street light pole
  fill(	192, 192, 192);
  //it made the pole of street light
  rect(5,200,10,200);
  //it colored the street light
  fill(255,255,255);
  //it made the steet light
  rect(5,200,50,5);
  fill(255,255,0);
  //it made the light bulb 
  ellipse(40,210,12);
  //it made the pole of street light
  rect(250,200,70,50);
  
  // text on the house 
  textSize(10);
  fill(0, 0, 0);
  text('1 Crew Court',250, 225);

}