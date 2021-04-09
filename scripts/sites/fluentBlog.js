import themes from '../../data/global/themes.js'
import data from '../../data/sets/projects/fluentBlog.js'
import { DataArrange, Theme, Particles, Form } from '../objects/index.js'
import { idReferences } from '../../data/global/names.js'

new Theme(idReferences.theme.main, themes, Particles)
new Form(idReferences.global.leftContainer)
new DataArrange(idReferences.project.description, data)
