import themes from '/data/global/themes.js'
import { idReferences, paths } from '/data/global/names.js'
import { privatePolicyDescription } from '/data/descriptions/index.js'
import {
  DescriptionArrange,
  Theme,
  Particles,
  Form,
  BackBtn,
  Audio,
} from '/scripts/objects/index.js'

new Theme(idReferences.theme.main, themes, Particles)
new BackBtn(idReferences.global.leftContainer)
new Audio(idReferences.global.leftContainer, paths.privatePolicyIntroduction)
new Form(idReferences.global.leftContainer)
new DescriptionArrange(
  idReferences.privatePolicy.description,
  privatePolicyDescription
)
