export default class DataArrange {
  constructor(container) {
    this.mainContainer = container
  }

  createTitle() {
    const title = document.createElement('h3')
    return title
  }

  createTitleContainer() {
    const titleContainer = document.createElement('div')
    titleContainer.classList.add('col', 'mt-40', 'mb-10')
    return titleContainer
  }

  createTextContainer() {
    const textContainer = document.createElement('div')
    textContainer.classList.add('col', 'text-justify', 'text-lh-25')
    return textContainer
  }

  createText() {
    const text = document.createElement('p')
    text.classList.add('my-10')
    return text
  }

  createImageContainer() {
    const imageContainer = document.createElement('div')
    imageContainer.classList.add('col', 'my-20')
    return imageContainer
  }

  createImage() {
    const image = document.createElement('img')
    image.classList.add('rounded', 'w-full')
    return image
  }

  createLinksContainer() {
    const linksContainer = document.createElement('div')
    linksContainer.classList.add('col', 'text-justify', 'sm-text-left')
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
        const titleContainer = this.createTitleContainer()
        titleContainer.appendChild(title)
        this.mainContainer.appendChild(titleContainer)
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
