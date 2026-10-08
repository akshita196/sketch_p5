let canvasWidth = 600;
let canvasHeight = 400;

let skyColor = '#0b1026';
let starColor = '#ffffff';
let bigStarColor = '#ffb36b';
let lineColor = '#7f8fd1';
let groundColor = '#121829';
let mountainColor = '#1b2440';

let groupX = 380;
let groupY = 190;
let groupAngle = -10;

let starSize = 10;
let bigStarSize = 18;

let star1X = 0;     let star1Y = 0;
let star2X = -60;   let star2Y = -40;
let star3X = -230;  let star3Y = -130;
let star4X = -230;  let star4Y = 40;
let bigStarX = -75; let bigStarY = 25;

let groundY = 330;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  angleMode(DEGREES);
}

function draw() {
  background(skyColor);

  push();
  translate(groupX, groupY);
  rotate(groupAngle);

  fill(lineColor);
  stroke(lineColor);
  strokeWeight(1.5);
  line(star1X, star1Y, star2X, star2Y);
  line(star2X, star2Y, star3X, star3Y);
  line(star1X, star1Y, bigStarX, bigStarY);
  line(bigStarX, bigStarY, star4X, star4Y);

  fill(starColor);
  stroke('white');
  strokeWeight(1);
  ellipse(star1X, star1Y, starSize, starSize);
  ellipse(star2X, star2Y, starSize, starSize);
  ellipse(star3X, star3Y, starSize, starSize);
  ellipse(star4X, star4Y, starSize, starSize);

  fill(bigStarColor);
  stroke('orange');
  ellipse(bigStarX, bigStarY, bigStarSize, bigStarSize);
  pop();

  fill(mountainColor);
  stroke(mountainColor);
  triangle(150, groundY, 330, 240, 510, groundY);

  fill(groundColor);
  stroke(groundColor);
  rect(0, groundY, canvasWidth, canvasHeight - groundY);
}