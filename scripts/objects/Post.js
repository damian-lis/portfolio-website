export default class Post {
  constructor(container, post) {
    this.mainContainer = container
    this.post = post
    this.linkContainer = this.createLinkContainer()
    this.postContainer = this.createPostContainer()
    this.thubnail = this.createThubnail()
    this.postPrevContainer = this.createPostPrevContainer()
    this.postTitle = this.createPostTitle()
    this.postIntro = this.createPostIntro()
    this.iconsContainer = this.createIconsContainer()
    this.icons = this.createIcons()
    this.attachElementsToContainers()
  }

  attachElementsToContainers() {
    this.postPrevContainer.appendChild(this.postTitle)
    this.postPrevContainer.appendChild(this.postIntro)

    this.icons.map((icon) => this.iconsContainer.appendChild(icon))

    this.postContainer.appendChild(this.thubnail)
    this.postContainer.appendChild(this.postPrevContainer)
    this.postContainer.appendChild(this.iconsContainer)

    this.linkContainer.appendChild(this.postContainer)
    this.mainContainer.appendChild(this.linkContainer)
  }

  createLinkContainer() {
    const link = document.createElement('a')
    link.target = '_blank'
    link.href = this.post.route
    return link
  }

  createPostContainer() {
    const postContainer = document.createElement('div')
    postContainer.classList.add('post')
    return postContainer
  }

  createThubnail() {
    const thubnail = document.createElement('img')
    thubnail.src = this.post.image
    thubnail.alt = this.post.alt
    thubnail.classList.add('thubnail')
    return thubnail
  }

  createPostPrevContainer() {
    const postPrevContainer = document.createElement('div')
    postPrevContainer.classList.add('post-preview')
    return postPrevContainer
  }

  createPostTitle() {
    const postTitle = document.createElement('h6')
    postTitle.classList.add('post-title')
    postTitle.textContent = this.post.title
    return postTitle
  }

  createPostIntro() {
    const postIntro = document.createElement('p')
    postIntro.classList.add('post-intro')
    postIntro.textContent = this.post.intro
    return postIntro
  }

  createIconsContainer() {
    const iconsContainer = document.createElement('div')
    iconsContainer.classList.add('icons-container')
    return iconsContainer
  }

  createIcons() {
    return this.post.icons.map((iconEl) => {
      const icon = document.createElement('img')
      icon.src = iconEl.image
      return icon
    })
  }
}
