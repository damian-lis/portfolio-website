import '../theme.js'
import { DataArrange } from '../objects/index.js'
import data from '../../data/sets/projects/fluentBlog.js'
import { addAnimationToEl } from '../helpers/index.js'

const container = document.querySelector('#container')

addAnimationToEl({
  element: '#theme-settings',
  animationClass: 'shakeAnimation',
  after: 1700,
})

const dataArrange = new DataArrange(container)
dataArrange.attachToMainContainer(data)
