import posts from '../../data/sets/posts.js'
import { postHandler, themeHandler } from '../handlers/index.js'
import Sound from '../objects/Sound.js'
import Form from '../objects/Form.js'

themeHandler()
postHandler(posts)
new Sound('#container-global')
new Form('#container-global')
