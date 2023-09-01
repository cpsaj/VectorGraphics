x1 = -100;
y1 = -100;

x2 = 100;
y2 = -100;

x3 = 100;
y3 = 100;

x4 = -100;
y4 = 100;

skalar = 0;
xFlyt = 100;
yFlyt = 100;

function setup() 
{
  createCanvas(400, 400);
  sliderScale = createSlider(0, 2, 1, 0.05);
  sliderScale.position(300, 10);

  sliderX = createSlider(0, 400, 200, 0.05);
  sliderX.position(300, 30);
  
  sliderY = createSlider(0, 400, 200, 0.05);
  sliderY.position(300, 40);
}

function draw() 
{
  background(220);

  skalar = sliderScale.value();
  xFlyt = sliderX.value();
  yFlyt = sliderY.value();  

  point(x1 * skalar + xFlyt, y1 * skalar + yFlyt);
  point(x2 * skalar + xFlyt, y2 * skalar + yFlyt);
  point(x3 * skalar + xFlyt, y3 * skalar + yFlyt);
  point(x4 * skalar + xFlyt, y4 * skalar + yFlyt);

  line(x1 * skalar + xFlyt, y1 * skalar + yFlyt, x2 * skalar + xFlyt, y2 * skalar + yFlyt);
  line(x3 * skalar + xFlyt, y3 * skalar + yFlyt, x2 * skalar + xFlyt, y2 * skalar + yFlyt);
  line(x3 * skalar + xFlyt, y3 * skalar + yFlyt, x4 * skalar + xFlyt, y4 * skalar + yFlyt);
  line(x1 * skalar + xFlyt, y1 * skalar + yFlyt, x4 * skalar + xFlyt, y4 * skalar + yFlyt);
}
