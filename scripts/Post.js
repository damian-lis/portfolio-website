import Post from './objects/Post.js'
import posts from '../data/sets/posts.js'

const postWrapper = document.querySelector('.post-wrapper')
const postSection = document.querySelector('#post-section')

posts.map((post) => new Post(postWrapper, post))

let postSectionHeight = postSection.clientHeight

window.addEventListener('resize', () => {
  postSectionHeight = postSection.clientHeight
})

window.onscroll = function () {
  if (
    window.innerHeight + window.pageYOffset + postSectionHeight >=
    document.body.offsetHeight
  ) {
    postSection.classList.add('slideInFromTop')
    window.onscroll = null
  }
}
