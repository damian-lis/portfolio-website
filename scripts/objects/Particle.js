class Particle {
  constructor(x, y, directionX, directionY, size, canvas, ctx) {
    this.canvas = canvas
    this.ctx = ctx
    this.x = x
    this.y = y
    this.directionX = directionX
    this.directionY = directionY
    this.size = size
    this.speedX = this.directionX
    this.speedY = this.directionY
  }

  draw() {
    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false)
    this.ctx.fill()
  }

  update() {
    if (this.x > this.canvas.width || this.x < 0) {
      this.directionX = -this.directionX
      this.speedX = this.directionX
    }
    if (this.y + this.size > this.canvas.height || this.y - this.size < 0) {
      this.directionY = -this.directionY
      this.speedY = this.directionY
    }

    this.x += this.directionX
    this.y += this.directionY

    this.draw()
  }
}

export default Particle
