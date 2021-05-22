import themes from '/data/global/themes.js'
import { idReferences } from '/data/global/names.js'
import { formFieldsInfo } from '/data/informations/index.js'
import { fluentBlogDescription } from '/data/descriptions/index.js'
import {
  DescriptionArrange,
  Theme,
  Particles,
  Form,
  Back,
  Audio,
} from '/scripts/objects/index.js'

new DescriptionArrange({
  container: idReferences.project.description,
  description: fluentBlogDescription,
})
new Theme({
  container: idReferences.theme.main,
  themesObj: themes,
  background: {
    Object: Particles,
    objContainer: idReferences.global.mainContainer,
  },
})
new Back({ container: idReferences.global.leftContainer })
new Audio({
  container: idReferences.global.leftContainer,
  path: paths.fluentBlogPageInfo,
})
new Form({
  container: idReferences.global.leftContainer,
  data: formFieldsInfo,
})
