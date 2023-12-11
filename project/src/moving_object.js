class MovingObject{
    constructor(pos, vel,radius,color,ctx){
        
    this.pos = pos; 
    this.vel = vel; 
    this.radius = radius; 
    this.color = color;
    this.ctx = ctx;
    }
    draw(){
        this.ctx.fillstyle = this.color 
        this.ctx.beginPath()
        this.ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI)
        this.ctx.fill()
        this.ctx.restore()
    }
}

  module.exports = MovingObject