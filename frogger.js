function setup() {
  createCanvas(400, 400);
  colorMode(HSL);
  laneHeight = height / 8;
  carPerRow = 2;
  spriteWidth = 50;
  carList = [];
  logLane = [laneHeight*2, laneHeight*3, laneHeight*4];
  carLane = [laneHeight*5, laneHeight*6];
  
  //add frog
  myFrog = new Frog(width/2, laneHeight*7);
  
  //add 2 cars to each lane, random color, random speed
  for(i = 0; i < carLane.length; i++){
    for(cars = 0; cars < carPerRow; cars++){
      let x = random(width);
      let y = carLane[i];
      let carHue = floor(random(360));
      let addX = (random(1, 2));
      carList.push(new Car(x, y, carHue, addX));
    }
  }
}

function draw() {
  background(0);
  rect(0, 0, width, laneHeight); //top
  rect(0, laneHeight * 4, width, laneHeight); //mid
  rect(0, laneHeight * 7, width, laneHeight); //bottom
  
  push();
  fill("yellow");
  rect(0, laneHeight*6-1, 40, 2);
  rect(80, laneHeight*6-1, 40, 2);
  rect(160, laneHeight*6-1, 40, 2);
  rect(240, laneHeight*6-1, 40, 2);
  rect(320, laneHeight*6-1, 40, 2);
  pop();
  
  //update frog
  myFrog.show();
  
  //update car
  for (i = 0; i < carList.length; i++){
    carList[i].show();
    carList[i].move();
    if (isTouching(myFrog, carList[i])) {
      myFrog.x = width/2;
      myFrog.y = laneHeight*7;
      break;
    }
  }
}

function keyPressed(){
  if(keyCode == UP_ARROW){
    myFrog.y -= laneHeight;
  }if(keyCode == DOWN_ARROW){
    myFrog.y += laneHeight;
  }if(keyCode == RIGHT_ARROW){
    myFrog.x += 50;
  }if(keyCode == LEFT_ARROW){
    myFrog.x -= 50;
  }
}

function isTouching(frog, car){
  let colliding = dist(frog.x, frog.y, car.x, car.y);
  if(colliding < spriteWidth){
    return true;
  } else {
    return false;
  }
}

class Frog {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  show() {
    push();
    translate(this.x, this.y);
    fill("green");
    rect(0, 0, laneHeight); //starts in middle
    pop();
  }
}

class Car {
  constructor(x, y, hue, addX) {
    this.x = x;
    this.y = y;
    this.hue = hue;
    this.addX = addX;
  }
  move() {
    this.x = this.x + this.addX;
    let dotIsTooFarLeft = (this.x < 0);
    let dotIsTooFarRight = (this.x > width);
    if (dotIsTooFarLeft || dotIsTooFarRight ) {
      this.addX = - this.addX;
    }
  }
  show() {
    push();
    fill(this.hue, 100, 50);
    stroke("black");
    rect(this.x, this.y, laneHeight);
    pop();
  }
}
