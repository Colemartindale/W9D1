const Astroid = require('./astroid.js')
const GAMECONSTANTS = {
  DIM_X: 1013,
  DIM_Y: 970,
  NUM_ASTROIDS: 22
}

function Game (ctx){
  this.astroids = [];
  this.addAstroids();
  this.draw(ctx)
  console.log(this.astroids)
}

Game.prototype.addAstroids = function (){
  for (let i = 0; i < GAMECONSTANTS.NUM_ASTROIDS; i++) {
    this.astroids.push(new Astroid(this.randomPosition()));
  }
}

Game.prototype.randomPosition = function() {
  return [(Math.random() * GAMECONSTANTS.DIM_X), (Math.random() * GAMECONSTANTS.DIM_Y)];
}

Game.prototype.draw = function (ctx) {
  ctx.clearRect(0, 0, GAMECONSTANTS.DIM_Y, GAMECONSTANTS.DIM_Y);
  this.astroids.forEach( (astroid) => {
    console.log(astroid);
    astroid.draw(ctx);
  })
}

Game.prototype.moveObjects = function () {

}

module.exports = Game;