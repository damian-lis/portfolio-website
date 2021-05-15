import themes from '/data/global/themes.js'
import { idReferences, paths } from '/data/global/names.js'
import { privacyPolicyDescription } from '/data/descriptions/index.js'
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
new Audio(idReferences.global.leftContainer, paths.privacyPolicyIntroduction)
new Form(idReferences.global.leftContainer)
new DescriptionArrange(
  idReferences.privacyPolicy.description,
  privacyPolicyDescription
)
