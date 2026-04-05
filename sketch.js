function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function mousePressed() {
  userStartAudio();
}

function keyPressed() {
  sayOuch();
  background(random(10));
}

function sayOuch() {
  let msg = new SpeechSynthesisUtterance("ouch");
  msg.pitch = 0.8;
  msg.rate = 1.0;
  msg.volume = 1.0;
  speechSynthesis.speak(msg);
}
