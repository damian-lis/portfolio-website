import themes from '/data/global/themes.js'
import { idReferences, paths } from '/data/global/names.js'
import {
  sneakPeeksDescription,
  skillsDescription,
  aboutDescription,
  formFeidlsDescription,
} from '/data/descriptions/index.js'
import {
  Audio,
  Form,
  SneakPeeks,
  Theme,
  Particles,
  DescriptionArrange,
} from '/scripts/objects/index.js'

new DescriptionArrange(idReferences.about.description, aboutDescription)
new DescriptionArrange(idReferences.skills.description, skillsDescription)
new Audio(
  idReferences.global.leftContainer,
  paths.mainPageIntroduction,
  idReferences.sneakPeeks.trigger
)
new Form(
  idReferences.global.leftContainer,
  idReferences.sneakPeeks.trigger,
  formFeidlsDescription
)
new Theme(idReferences.theme.main, themes, Particles)
new SneakPeeks(
  idReferences.sneakPeeks.main,
  idReferences.sneakPeeks.trigger,
  idReferences.sneakPeeks.wrapper,
  sneakPeeksDescription
)
