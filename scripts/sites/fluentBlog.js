import themes from '/data/global/themes.js'
import { idReferences } from '/data/global/names.js'
import { fluentBlogDescription } from '/data/descriptions/index.js'
import {
  DescriptionArrange,
  Theme,
  Particles,
  Form,
  BackBtn,
  Audio,
} from '/scripts/objects/index.js'

new Theme(idReferences.theme.main, themes, Particles)
new DescriptionArrange(idReferences.project.description, fluentBlogDescription)
new BackBtn(idReferences.global.leftContainer)
new Audio(idReferences.global.leftContainer, paths.fluentBlogPageInfo)
new Form(idReferences.global.leftContainer)
