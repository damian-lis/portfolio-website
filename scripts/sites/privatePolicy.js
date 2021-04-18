import themes from '/data/global/themes.js'
import data from '/data/sets/privatePolicy.js'
import {
  DataArrange,
  Theme,
  Particles,
  Form,
  BackBtn,
  Sound,
} from '../objects/index.js'
import { idReferences } from '../../data/global/names.js'

new Theme(idReferences.theme.main, themes, Particles)
new DataArrange(idReferences.project.description, data)
new BackBtn(idReferences.global.leftContainer)
new Sound(idReferences.global.leftContainer, idReferences.posts.trigger)
new Form(idReferences.global.leftContainer)
