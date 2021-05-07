import themes from '/data/global/themes.js'
import { idReferences } from '/data/global/names.js'
import {
  sneakPeeks,
  skillsDescription,
  aboutDescription,
} from '/data/descriptions/index.js'
import {
  Sound,
  Form,
  Posts,
  Theme,
  Particles,
  DataArrange,
} from '../objects/index.js'

new DataArrange(idReferences.about.description, aboutDescription)
new DataArrange(idReferences.skills.description, skillsDescription)
new Sound(idReferences.global.leftContainer, idReferences.posts.trigger)
new Form(idReferences.global.leftContainer, idReferences.posts.trigger)
new Theme(idReferences.theme.main, themes, Particles)
new Posts(
  idReferences.posts.main,
  idReferences.posts.trigger,
  idReferences.posts.wrapper,
  sneakPeeks
)
