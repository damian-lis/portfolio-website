import themes from '../../data/global/themes.js'
import data from '../../data/sets/projects/fluentBlog.js'
import { DataArrange, Theme, Particles } from '../objects/index.js'

new Theme('#theme-settings', themes, Particles)
new DataArrange('#container', data)
