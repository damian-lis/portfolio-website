export default class DataArrange {
  constructor(container) {
    this.mainContainer = container
  }

  createTitle() {
    const title = document.createElement('h3')
    title.classList.add('mt-40', 'mb-20')
    return title
  }

  createTextContainer() {
    const textContainer = document.createElement('div')
    textContainer.classList.add('text-justify', 'my-30')
    return textContainer
  }

  createText() {
    const text = document.createElement('p')
    return text
  }

  createImageContainer() {
    const imageContainer = document.createElement('div')
    return imageContainer
  }

  createImage() {
    const image = document.createElement('img')
    image.classList.add('rounded')
    return image
  }

  createLinksContainer() {
    const linksContainer = document.createElement('div')
    linksContainer.classList.add('text-justify', 'sm-text-left')
    return linksContainer
  }

  createLink() {
    const link = document.createElement('a')
    link.target = '_blank'
    return link
  }

  attachToMainContainer(elements) {
    elements.map((element) => {
      if (element.title) {
        const title = this.createTitle()
        title.textContent = element.title
        this.mainContainer.appendChild(title)
      } else if (element.image) {
        const image = this.createImage()
        image.src = element.image
        const imageContainer = this.createImageContainer()
        imageContainer.appendChild(image)
        this.mainContainer.appendChild(imageContainer)
      } else if (element.text) {
        element.text.map((el) => {
          const text = this.createText()
          text.textContent = el
          const textContainer = this.createTextContainer()
          textContainer.appendChild(text)
          this.mainContainer.appendChild(textContainer)
        })
      } else if (element.links) {
        element.links.map((linkEl) => {
          const link = this.createLink()
          link.href = linkEl.path
          link.textContent = linkEl.linkText

          const text = this.createText()
          text.textContent = linkEl.label

          text.appendChild(link)
          const linkContainer = this.createLinksContainer()
          linkContainer.appendChild(text)
          this.mainContainer.appendChild(linkContainer)
        })
      }
    })
  }
}
