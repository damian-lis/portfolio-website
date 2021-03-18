class Curtain {
  constructor() {
    this.curtain = this.createCurtain()
    this.attachToBody()
    this.callbacks = []
  }

  createCurtain() {
    const curtain = document.createElement('div')
    curtain.classList.add('curtain')
    curtain.addEventListener('click', () => {
      this.hidden()
    })
    return curtain
  }

  addCallback(cb) {
    this.callbacks.push(cb)
  }

  attachToBody() {
    document.body.appendChild(this.curtain)
  }

  show() {
    this.curtain.classList.add('active-curtain')
    document.body.style.overflow = 'hidden'
  }

  runCbs() {
    this.callbacks.map((cb) => {
      cb()
    })
  }

  hidden() {
    this.runCbs()
    this.curtain.classList.remove('active-curtain')
    document.body.style.overflow = 'auto'
  }
}

const curtain = new Curtain()
export default curtain
