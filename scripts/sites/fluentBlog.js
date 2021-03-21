import { themeHandler } from '../handlers/index.js'
import { DataArrange } from '../objects/index.js'
import data from '../../data/sets/projects/fluentBlog.js'

themeHandler()
new DataArrange('#container', data)
