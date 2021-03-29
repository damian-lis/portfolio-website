import themes from '../../data/global/themes.js'
import data from '../../data/sets/projects/fluentBlog.js'
import { DataArrange, Theme, Particles, Form } from '../objects/index.js'

new Theme('#theme', themes, Particles)
new Form('#global-left-container')
new DataArrange('#project-description', data)
