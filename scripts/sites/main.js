import posts from '../../data/sets/posts.js'
import themes from '../../data/global/themes.js'
import { Sound, Form, Posts, Theme, Particles } from '../objects/index.js'

new Sound('#container-global')
new Theme('#theme-settings', themes, Particles)
new Form('#container-global')
new Posts('.post-wrapper', '#post-section', posts)
