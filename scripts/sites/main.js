import posts from '/data/sets/posts.js'
import themes from '/data/global/themes.js'
import {
  Sound,
  Form,
  Posts,
  Theme,
  Particles,
  DataArrange,
} from '../objects/index.js'
import { idReferences } from '/data/global/names.js'
import skillsData from '/data/sets/skills.js'
import aboutData from '/data/sets/about.js'

new DataArrange(idReferences.about.description, aboutData)
new DataArrange(idReferences.skills.description, skillsData)
new Sound(idReferences.global.leftContainer, idReferences.posts.trigger)
new Form(idReferences.global.leftContainer, idReferences.posts.trigger)
new Theme(idReferences.theme.main, themes, Particles)
new Posts(
  idReferences.posts.main,
  idReferences.posts.trigger,
  idReferences.posts.wrapper,
  posts
)
