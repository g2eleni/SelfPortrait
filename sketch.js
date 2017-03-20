function setup() {
  fill(200,250,90);
  createCanvas(1000,1000);
  
}

function draw() {
  noStroke();
  background(255,280,214);
  fill(70,50,50);
  rect(435,180,150,190);
  fill(229,220,192);
  strokeWeight(10);
  ellipse(510,260,120,130);
  fill(100,90,90);
  rect(450,340,120,100);
  fill(30,10,10);
  rect(450,440,120,100);
  fill(0);
  ellipse(485,260,20,20);
  ellipse(545,260,20,20);
  rect(520,540,60,30);
  rect(440,540,60,30);
  noFill();
  strokeWeight(1);
  if(mouseIsPressed){
  fill(0);
  ellipse(513,300,30,30);
  ellipse(485,260,30,30);
  ellipse(545,260,30,30);
  rect(470,240,30,10);
  rect(530,240,30,10);
  fill(229,220,192);
  rect(490,300,40,20);
  }
  
  
  
}