let xMax = 400; // variabili globali
let yMax = 600;

let xrocket = xMax/2; // il razzone parte a metà foglio
let yrocket = yMax*0.6;

function setup() {
  createCanvas(xMax, yMax); // dimensioni canva
}

function draw() {
  background("#003399"); // colore background
  fill(255); // bianco
  textSize(15); // per ingradire testo
  // stringa, x, y
  text("mouseX: " + mouseX + 
    "  |  mouseY: " + mouseY,20,20)

// stelle -> 120 di tre tipi (a, b, c)
    push();
    // ciclo 1 specifica stella a, 40
    // i=0 il -> ciclo inizia da 0
    // i < 40 -> il ciclo arrivo fino a 40 senza superare il  numero (compreso 40)
    // i++ -> ad ogni giro ilnum nuemro aumenta uno
    for(let i=0; i < 120; i++){ 
      let starx = (i*37) % width + (i%3) * 5;
      let stary = ((i*73) % height) + (i%7);
      // operatore modulo %
      // stella a quando i è pari

      if ( i % 2 == 0 ){
        // stella a
        fill(255,255,150);
        strokeWeight(0);
        ellipse (starx, stary, 2);
      } else if( i % 3){
        // stella b c'è per ogni i divisibile per 3
        fill ("#FFFFFF");
        strokeWeight(0);
        ellipse(starx,stary,3.5)
      } else {
        // stella c
        fill("#FFFF00");
        strokeWeight(0);
        ellipse(starx,stary,4.8)
      }
    }
    pop();
  //aprire contesto di disegno --> ogni cosa che faccio tra push e pop 
  // non andrà ad influire sul resto dello skecth
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

