const MovingObject = require("./moving_object.js");
const Asteroid = require("./astroid.js")
const Game = require("./game.js")
window.MovingObject = MovingObject;
console.log("webpack is here, bro!")

window.addEventListener('DOMContentLoaded', (event) => {
  const canvas = document.getElementById('game-canvas');
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  let ctx = canvas.getContext("2d");
  ctx.fillStyle = "black"
  ctx.fillRect(0, 0, canvas.height, canvas.width)
  // const mo = new Asteroid([50,500]);
  //   console.log(mo)
  //   mo.draw(ctx)
  //   window.ctx = ctx
  //   console.log(ctx)
  const ga = new Game(ctx)
  // ga.draw(ctx)
});



