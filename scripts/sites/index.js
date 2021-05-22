import themes from '/data/global/themes.js'
import { idReferences, paths } from '/data/global/names.js'
import { formFieldsInfo, sneakPeeksInfo } from '/data/informations/index.js'
import {
  skillsDescription,
  aboutDescription,
} from '/data/descriptions/index.js'
import {
  Audio,
  Form,
  SneakPeeks,
  Theme,
  Particles,
  DescriptionArrange,
} from '/scripts/objects/index.js'

new DescriptionArrange({
  container: idReferences.about.description,
  description: aboutDescription,
})
new DescriptionArrange({
  container: idReferences.skills.description,
  description: skillsDescription,
})
new Theme({
  container: idReferences.theme.main,
  themesObj: themes,
  background: {
    Object: Particles,
    objContainer: idReferences.global.mainContainer,
  },
})
new Audio({
  container: idReferences.global.leftContainer,
  trigger: idReferences.sneakPeeks.trigger,
  path: paths.mainPageIntroduction,
})
new Form({
  container: idReferences.global.leftContainer,
  trigger: idReferences.sneakPeeks.trigger,
  data: formFieldsInfo,
})

new SneakPeeks({
  container: idReferences.sneakPeeks.main,
  trigger: idReferences.sneakPeeks.trigger,
  wrapper: idReferences.sneakPeeks.wrapper,
  data: sneakPeeksInfo,
})
