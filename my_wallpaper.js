//your parameter variables go here!
//LB = lightning bolt 
let LB1X = -40 //sets the X value for LB1
let LB1Y = 30  //sets the Y value for LB1
let LB2X = 40 //sets the X value for LB2
let LB2Y = 180  //sets the Y value for LB2
let LB3X = -90 //sets the X value for LB3
let LB3Y = -70  //sets the Y value for LB3

let LB1S = 2   //sets the scale for LB1
let LB2S = 1   //sets the scale for LB2
let LB3S = 1  // sets the scale for LB3

let StrokeMode = false; //if StrokeMode is true then no Stroke

let LB1C = [245, 225, 49] //sets the colour for LB1
let LB2C = [245, 225, 49]  //sets the colour for LB2
let LB3C = [245, 225, 49]  //sets the colour for LB3


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(A3);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 300;
  pWallpaper.grid_settings.row_offset  = 100;
}

function wallpaper_background() {
background(201, 15, 12)
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

strokeWeight(4.5)
if(StrokeMode){ 
noStroke()
}

DrawLB1(LB1X,LB1Y,LB1C) //draws lightning bolt 1

DrawLB2(LB2X,LB2Y,LB2C) //draws lightning bolt 2

DrawLB3(LB3X,LB3Y,LB3C) //draws lihgtning bolt 3


}
  
function DrawLB1(LB1X,LB1Y,LB1C = [252, 232, 45]){
  push();
  translate(LB1X,LB1Y)
  scale(LB1S)
  fill(LB1C)
  beginShape();
  vertex(185,15)
  vertex(150,60)
  vertex(165,60)
  vertex(155,100)
  vertex(190,50)
  vertex(175,50)
  endShape(CLOSE);
  pop();
}

function DrawLB2(LB2X,LB2Y,LB2C = [252, 232, 45]){
  push();
  translate(LB2X,LB2Y)
  scale(LB2S)
  fill(LB2C)
  beginShape();
  vertex(135,15)
  vertex(110,15)
  vertex(100,55)
  vertex(110,55)
  vertex(100,100)
  vertex(137,40)
  vertex(125,40)
  endShape(CLOSE);
  pop();
}
function DrawLB3(LB3X,LB3Y,LB3C = [252, 232, 45]){
  push();
  translate(LB3X,LB3Y)
  scale(LB3S)
  fill(LB3C)
  beginShape();
  vertex(145,92)
  vertex(120,95)
  vertex(110,125)
  vertex(120,125)
  vertex(110,150)
  vertex(120,150)
  vertex(112,190)
  vertex(145,140)
  vertex(132,140)
  vertex(145,115)
  vertex(135,115)
  endShape(CLOSE);
  pop();
}



