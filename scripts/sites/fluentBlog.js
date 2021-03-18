import '../theme.js'
import { DataArrange } from '../objects/index.js'
import data from '../../data/sets/projects/fluentBlog.js'

const container = document.querySelector('#container')

const dataArrange = new DataArrange(container)
dataArrange.attachToMainContainer(data)
