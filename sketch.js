let lastPlayed = 0;
let cooldown = 300;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  textAlign(CENTER, CENTER);
  textSize(120);
}

function mousePressed() {
  userStartAudio();
}

function draw() {
  background(0);

  fill(255, 50, 50);
  text("♥", width / 2, height / 2);
}

function keyPressed() {
  if (millis() - lastPlayed > cooldown) {
    sayOuch();
    lastPlayed = millis();
  }
}

function sayOuch() {
  let msg = new SpeechSynthesisUtterance("ouch");
  msg.pitch = 0.8;
  msg.rate = 1.0;
  msg.volume = 1.0;
  speechSynthesis.cancel();
  speechSynthesis.speak(msg);
}
