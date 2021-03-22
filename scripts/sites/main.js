import posts from '../../data/sets/posts.js'
import { Sound, Form, Posts } from '../objects/index.js'
import { themeHandler } from '../handlers/index.js'

themeHandler()
new Sound('#container-global')
new Form('#container-global')
new Posts('.post-wrapper', '#post-section', posts)
