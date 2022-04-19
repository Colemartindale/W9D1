function MovingObject(object) {
  this.pos = object.pos;
  this.vel = object.vel;
  this.radius = object.radius;
  this.color = object.color;
}

// MovingObject.prototype.render = function (ctx) {
//   console.log(ctx)
//   ctx.fillStyle = this.color;
//   ctx.beginPath();

//   ctx.arc(
//     this.centerX,
//     this.centerY,
//     this.radius,
//     0,
//     2 * Math.PI,
//     false
//   );

//   ctx.fill();
// };

MovingObject.prototype.draw = function(ctx) {
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = this.color;
  ctx.fill();
}



module.exports = MovingObject;

