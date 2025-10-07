let xMax = 400; // variabili globali
let yMax = 600;

let xrocket = xMax/2; // il razzone parte a metà foglio
let yrocket = yMax*0.6;

let table;
let star_img;

function preload() {
  table = loadTable("stars.csv", "csv", "header");
  star_img = loadImage("star.png");
}

function setup() {
  createCanvas(xMax, yMax);
  frameRate(10);
}

function drawSingleStarFromFile(index, posX, posY){
  let starSize = table.getNum(index, "starSize")
  image(star_img, posX, posY, starSize, starSize);
}

function drawStarsFromFile() {
  for(let k = 0; k < table.getRowCount(); k++);
  let starx = (k*37) % width + (k*3) * 5;
    let stary = ((k*73) % height) + (k%7);
    
  drawSingleStarFromFile(k, starx, stary);
}

function drawSingleStar (i, starx, stary, random_transparency, random_size) {
      if ( i % 2 == 0 ){
        // stella a
        fill(255,255,150, random_transparency);
        strokeWeight(0);
        ellipse (starx, stary, random_size);
      } else if( i % 3){
        // stella b 
        fill (200, 100, 255, random_transparency);
        strokeWeight(0);
        ellipse(starx,stary, random_size)
      } else {
        // stella c
        fill(255, 255, 100, random_transparency);
        strokeWeight(0);
        ellipse(starx,stary, random_size)
      }
}

function drawStars (num_stars=120) {
  for (let i=0; i <num_stars; i++) {
    let starx = (i*37) % width + (i*3) * 5;
    let stary = ((i*73) % height) + (i%7);

    let random_transparency = random(150, 255);
    let random_size = random(6.8, 15.0)
    drawSingleStar(i, starx, stary, random_transparency, random_size)
  }
}

function drawRocket (xrocket, yrocket) {
  push();
  fill("#DDA0DD");
  stroke(40);

  // alternativa
  rectMode(CENTER);
  strokeWeight(0);
  rect(xrocket, yrocket+30, 80, 180, 20); // ultimo valore è per gli angoli arrotondati

  // triangolo top
  fill("#F4A460");
  strokeWeight(0);
  triangle(xrocket-40, yrocket-60, xrocket+40, 
          yrocket-60, xrocket, yrocket-120);
  // triangolo dx

  // cerchio
  fill("#E6E6FA");
  stroke(255);
  strokeWeight(3);
  ellipse(xrocket, yrocket, 48, 48);

  // chiudere contesto
  pop();
}

function draw() {
  background("#003399"); // colore background
  fill(255); // bianco
  textSize(15); // per ingradire testo
  // stringa, x, y
  text("mouseX: " + mouseX + 
    "  |  mouseY: " + mouseY,20,20)

    for(let i=0; i < 120; i++){ 
      let starx = (i*37) % width + (i%3) * 5;
      let stary = ((i*73) % height) + (i%7);

    random_size = random(0,6);
    random_transparency = random(100, 200)
  
    drawStars(num_stars=120)
    }

  push()
  noStroke();
  drawStarsFromFile();
  pop();
  
drawRocket(xrocket, yrocket);

  // il razzo si mouove veros dx
  //xrocket = (xrocket + 1) % xMax;

  // razzo che si muove verso l'alto
  yrocket = (yrocket - 2);
  // quando il razzo sarà oltre una certa soglia 
  // allora dobbiamoresettare la yrocket
  let soglia = - (yMax * 0.6);
  if(yrocket < soglia){
    yrocket = yMax;
  }

}

