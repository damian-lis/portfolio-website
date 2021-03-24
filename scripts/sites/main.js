import posts from '../../data/sets/posts.js'
import themes from '../../data/global/themes.js'
import { Sound, Form, Posts, Theme, Particles } from '../objects/index.js'

new Sound('.global-left-container')
new Form('.global-left-container')
new Theme('#theme-settings', themes, Particles)
new Posts('.post-wrapper', '#post-section', posts)
