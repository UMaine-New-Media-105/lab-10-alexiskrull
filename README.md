For this lab, the goal was to make a mock-up of the game frogger. I made a small square frog to represent the frog, small squares of random colors to represent cars, and had the cars spawn in 2 pre-defined lanes near the bottom of the screen using:
```
  for(i = 0; i < carLane.length; i++){
    for(cars = 0; cars < carPerRow; cars++){
      let x = random(width);
      let y = carLane[i];
      let carHue = floor(random(360));
      let addX = (random(1, 2));
      carList.push(new Car(x, y, carHue, addX));
    }
  }
```
where carLane held a list of what y values the lanes were at, and carPerRow was set at 2. Cars have a random speed between 1 and 2. 

For the frog, I made a simple frog class and set it to start at the bottom ```myFrog = new Frog(width/2, laneHeight*7);```

For collisions, I used the dist() function to make a new function that compared the x and y coordinates of 2 sprites, the frog and the cars, while looping through the carList array. If the distance was smaller than the sprite width, I reset the frog to the bottom:
```
    if (isTouching(myFrog, carList[i])) {
      myFrog.x = width/2;
      myFrog.y = laneHeight*7;
      break;
    }
```

LINK: https://editor.p5js.org/alexis.krull/sketches/La_XpLHvd
