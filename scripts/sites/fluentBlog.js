import themes from '/data/global/themes.js'
import { idReferences } from '/data/global/names.js'
import { fluentBlogDescription } from '/data/descriptions/index.js'
import {
  DataArrange,
  Theme,
  Particles,
  Form,
  BackBtn,
  Sound,
} from '../objects/index.js'

new Theme(idReferences.theme.main, themes, Particles)
new DataArrange(idReferences.project.description, fluentBlogDescription)
new BackBtn(idReferences.global.leftContainer)
new Sound(idReferences.global.leftContainer, idReferences.posts.trigger)
new Form(idReferences.global.leftContainer)
