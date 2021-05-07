import themes from '/data/global/themes.js'
import { idReferences } from '/data/global/names.js'
import { privatePolicyDescription } from '/data/descriptions/index.js'
import {
  DescriptionArrange,
  Theme,
  Particles,
  Form,
  BackBtn,
  Sound,
} from '/scripts/objects/index.js'

new Theme(idReferences.theme.main, themes, Particles)
new BackBtn(idReferences.global.leftContainer)
new Sound(idReferences.global.leftContainer)
new Form(idReferences.global.leftContainer)
new DescriptionArrange(
  idReferences.project.description,
  privatePolicyDescription
)
