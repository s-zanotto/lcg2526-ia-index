function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES); // angoli calcolati in gradi e non radianti
  noStroke(); // non contorno di nessuna forma
}

function draw() {
  background("#fff2c2");
  fill("#ED5485"); // bianco
  textSize(20); // per ingradire testo
  text("mouseX: " + mouseX + 
    "  |  mouseY: " + mouseY,20,20)

  // parametri
  let cx = width / 2;
  let cy = height / 2;
  let petals = 12;        // numero di petali
  let petalDist = 110;    // distanza del centro del petalo dal centro del fiore
  let petalW = 180;       // larghezza del petalo (ellipse width)
  let petalH = 70;        // altezza del petalo (ellipse height)

  push();
  translate(cx, cy);
  // anima lenta della rotazione per farlo "vivere"
  rotate(frameCount * 1.4);
  
  for (let i = 0; i < petals; i++) {
    push();
    rotate(i * 360 / petals);      // distribuisci i petali
    translate(petalDist, 0);       // sposta il petalo fuori dal centro
    fill(10, 80 + i * 10 % 120, 140, 220);
      // colore rgba -> a sta per trasparenza
      // il secondo valore g -> dipende dal numero del petalo i
      // quindi ogni petalo ha una sfumatura diversa
    ellipse(0, 0, petalW, petalH);
    pop();
  }

  // centro del fiore
  fill("#ED5485");
  ellipse(0, 0, 120, 120);
  pop();
}


