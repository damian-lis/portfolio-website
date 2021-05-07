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
  DescriptionArrange,
} from '/scripts/objects/index.js'

new DescriptionArrange(idReferences.about.description, aboutDescription)
new DescriptionArrange(idReferences.skills.description, skillsDescription)
new Sound(idReferences.global.leftContainer, idReferences.posts.trigger)
new Form(idReferences.global.leftContainer, idReferences.posts.trigger)
new Theme(idReferences.theme.main, themes, Particles)
new Posts(
  idReferences.posts.main,
  idReferences.posts.trigger,
  idReferences.posts.wrapper,
  sneakPeeks
)
