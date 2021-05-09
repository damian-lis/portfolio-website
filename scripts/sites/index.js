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
  SneakPeeks,
  Theme,
  Particles,
  DescriptionArrange,
} from '/scripts/objects/index.js'

new DescriptionArrange(idReferences.about.description, aboutDescription)
new DescriptionArrange(idReferences.skills.description, skillsDescription)
new Sound(idReferences.global.leftContainer, idReferences.sneakPeeks.trigger)
new Form(idReferences.global.leftContainer, idReferences.sneakPeeks.trigger)
new Theme(idReferences.theme.main, themes, Particles)
new SneakPeeks(
  idReferences.sneakPeeks.main,
  idReferences.sneakPeeks.trigger,
  idReferences.sneakPeeks.wrapper,
  sneakPeeks
)
