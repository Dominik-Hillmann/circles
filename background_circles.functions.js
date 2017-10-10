// cursor cunstructor, already used in vibrating lines project
var Cursor = function()
{

}

// cirlce constructor
var Circle = function(x, y)
{
   this.pos =
   {
      x : x,
      y : y,
   };

   this.display = () =>
   {
      ellipse(this.pos.x, this.pos.y, CIRCLE_RADIUS);
   }
}
