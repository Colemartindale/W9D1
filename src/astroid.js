let Util = require("./util.js")
let MovingObject = require("./moving_object.js")

function Astroid(pos){
  let object = {};
  // console.log(this)
  object.color = "yellow";
  object.radius = 25;
  object.pos = pos;
  object.vel = Util.randomVec(4)
  MovingObject.call(this, object)
};

Util.inherits(Astroid, MovingObject);

module.exports = Astroid;