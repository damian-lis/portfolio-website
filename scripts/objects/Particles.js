import Particle from './Particle.js'
import {
  createElementFn,
  appendElementsToContainerFn,
} from '../helpers/index.js'
import { idNames } from '../../data/global/names.js'

class Particles {
  constructor() {
    this.canvas = createElementFn({
      element: 'canvas',
      id: idNames.theme.canvas,
    })
    this.particleArray = []
    this.theme = {}
    this.mouse = {
      x: null,
      y: null,
      radius: (this.canvas.height / 80) * (this.canvas.width / 80),
    }

    this.setContext()
    this.listenForResize()
    appendElementsToContainerFn([this.canvas], document.body)
  }

  setContext() {
    this.ctx = this.canvas.getContext('2d')
    this.ctx.canvas.width = window.innerWidth
    this.ctx.canvas.height = window.innerHeight
  }

  setTheme(theme) {
    this.theme = theme
    this.strokeColor = theme.strokeColor
    this.ctx.fillStyle = theme.ctxFillStyle
  }

  start(theme) {
    this.setTheme(theme)
    this.init()
    this.animate()
    this.update()
  }

  connect() {
    let opacityValue = 1
    for (let a = 0; a < this.particleArray.length; a++) {
      for (let b = a; b < this.particleArray.length; b++) {
        let distance =
          (this.particleArray[a].x - this.particleArray[b].x) *
            (this.particleArray[a].x - this.particleArray[b].x) +
          (this.particleArray[a].y - this.particleArray[b].y) *
            (this.particleArray[a].y - this.particleArray[b].y)
        if (distance < (this.canvas.width / 7) * (this.canvas.height / 7)) {
          opacityValue = 1 - distance / 10000
          this.ctx.strokeStyle = `rgba(${this.strokeColor}, ${opacityValue} )`
          this.ctx.beginPath()
          this.ctx.lineWidth = 2
          this.ctx.moveTo(this.particleArray[a].x, this.particleArray[a].y)
          this.ctx.lineTo(this.particleArray[b].x, this.particleArray[b].y)
          this.ctx.stroke()
        }
      }
    }
  }

  init() {
    this.strokeColor = this.theme.strokeColor
    this.ctx.fillStyle = this.theme.ctxFillStyle
    let numberOfParticles = (this.canvas.height * this.canvas.width) / 9000
    for (let i = 0; i < numberOfParticles; i++) {
      let size = Math.random() * 5 + 1
      let x = Math.random() * (innerWidth - size * 2 - size * 2) + size * 2
      let y = Math.random() * (innerHeight - size * 2 - size * 2) + size * 2
      let directionX = Math.random() * 2 - 1
      let directionY = Math.random() * 2 - 1

      this.particleArray.push(
        new Particle(x, y, directionX, directionY, size, this.canvas, this.ctx)
      )
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, innerWidth, innerHeight)

    for (let i = 0; i < this.particleArray.length; i++) {
      this.particleArray[i].update()
    }
    this.connect()
  }

  update() {
    const updateFn = () => {
      requestAnimationFrame(updateFn)
      this.animate()
    }
    updateFn()
  }

  listenForResize() {
    window.addEventListener('resize', () => this.resize())
  }

  resize() {
    this.particleArray = []
    this.canvas.width = innerWidth
    this.canvas.height = innerHeight
    this.init()
  }
}

export default Particles
