const CIRCLE_RADIUS = 10;
const NUM_CIRC_WIDTH = 150;
const NUM_CIRC_HEIGHT = 70;

var circleContainer = [];

function setup()
{
   var canvas = createCanvas(CIRCLE_RADIUS * NUM_CIRC_WIDTH, CIRCLE_RADIUS * NUM_CIRC_HEIGHT);
   canvas.parent("sketch-holder");


   for(var x = CIRCLE_RADIUS, i = 0; x < NUM_CIRC_HEIGHT; i++, x += CIRCLE_RADIUS)
   {
      circleContainer.push([]);
      for(var y = CIRCLE_RADIUS, j = 0; j < NUM_CIRC_WIDTH; j++, y += CIRCLE_RADIUS)
         circleContainer[i].push(new Circle(x, y));
   }
   console.log(circleContainer);
}

function draw()
{
   background(0, 0, 0);
   ellipse(10, 10, 10);
   for(var i = 1; i < NUM_CIRC_HEIGHT; i++)
      circleContainer[0][i].display();
/*
   for(var i = 0; i < NUM_CIRC_WIDTH; i++)
      for(var j = 0; j < NUM_CIRC_HEIGHT; j++)
         circleContainer[i][j].display();*/
}
