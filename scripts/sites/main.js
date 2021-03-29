import posts from '../../data/sets/posts.js'
import themes from '../../data/global/themes.js'
import { Sound, Form, Posts, Theme, Particles } from '../objects/index.js'

new Sound('#global-left-container', '#posts-trigger')
new Form('#global-left-container', '#posts-trigger')
new Theme('#theme', themes, Particles)
new Posts('#posts', '#posts-trigger', '#posts-wrapper', posts)
