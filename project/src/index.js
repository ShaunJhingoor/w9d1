import MovingObject from "./moving_object.js";
document.addEventListener("DOMContentLoaded", () => {
window.MovingObject = MovingObject;
const canvas = document.getElementById("game-canvas")
const ctx = canvas.getContext('2d')
console.log(canvas)
console.log(ctx)
const mo = new MovingObject(
    [30,30],
    [10, 10],
    5,
    "#00FF00",
    ctx
  );
  mo.draw()
  mo.move()
  mo.draw()
})