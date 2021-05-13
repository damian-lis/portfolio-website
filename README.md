# Portfolio website

This project provides information about me and projects that I have done and allows You to contact me via the contact form (the sent data is handled by my backend application [Emails Handler](https://github.com/damian-lis/Emails-handler), which is responsible for sending e-mails).

<br/>

Desktop version:

<!--  -->

<br/>

Mobile version:

<!--  -->

### Live version is available [here](https://damianlis.pl/).

## Table of Contents

1. Technologies
2. Setup
3. Solutions

## 1. Technologies

The following technologies were used in the project:

- HTML (semantically)
- CSS (own framework)
- Javascript (OOP)

  <br/>

## 2. Setup

You don't need any commands to run this project

<br/>

## 3. Solutions

The entire project is built using OOP javascript (for a very in-depth understanding of the language) and using its own framework that refers to the css frameworks like tailwindCSS (utility-first CSS) and Bootsrap (for better understand how css works).

The list of the most interesting solutions is presented below:

### &nbsp; &nbsp; 3.1. General: <br/>

&nbsp; &nbsp; &nbsp; &nbsp; 3.1.1. The structure and content of the data folder <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.1.2. The structure and content of the scripts folder <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.1.3. The structure and content of the styles folder <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.1.4. Characteristics of html files<br/>

<br/>

### &nbsp; &nbsp; 3.2. Specific: <br/>

&nbsp; &nbsp; &nbsp; &nbsp; 3.2.1. Logic of background animation by Particles object<br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.2.2. Option to set the site theme by Theme object<br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.2.3. Audio support on the site by Sound object<br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.2.4. A Curtain object that allows to attach components dynamically<br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.2.5. Dynamic form creation by Form object<br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.2.6. Possibility to go back to the home page by BackBtn object<br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.2.7. Create project sneak peeks by SneakPeeks object<br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.2.8. Create descriptions by DescriptionArrange object<br/>

<br/>
<br/>

## 3.1. General

### 3.1.1. The structure and contents of the data folder

There are two folders in the data folder: descriptions and global.

The structure of the data folder is shown below:

<!-- Zdjęcie data folderu -->

First, let me explain the global folder. Below is an example of the global folder structure:

<!-- Zdjęcie folderu global -->

As we can see above, there are two files: names.js, which contains all names in the project (string types written as variables to avoid typos), and themes.js, which contains three themes (appropriate color combinations) that can be set by the user via the Theme.js object (this process is explained later).

The following is an example of abbreviated names.js file (data/global/names.j):

```
export const common = {
  headline: 'headline',
  title: 'title',
  image: 'image',
  paragraph: 'paragraph',
  link: 'link',
  code: 'code',
  theme: 'theme',
  submit: 'submit',
  fieldname: 'fieldname',
  message: 'message',
  listeners: 'listeners',
  attributes: 'attributes',
  classes: 'classes',
  styles: 'styles',
  TEXTAREA: 'TEXTAREA',
  type: 'type',
  string: 'string',
  object: 'object',
  header: 'header',
  list: 'list',
  image: 'image',
  on: 'on',
  off: 'off',
}

export const elements = {
  canvas: 'canvas',
  div: 'div',
  button: 'button',
  input: 'input',
  img: 'img',
  audio: 'audio',
  h: (value) => `h${value}`,
  a: 'a',
  p: 'p',
  pre: 'pre',
  code: 'code',
  form: 'form',
  label: 'label',
  textarea: 'textarea',
  span: 'span',
  ul: 'ul',
  li: 'li',
}
```

Below is an example of the content of the themes.js file (data/global/themes.js):

```
export default {
  blue: {
    mainColor: '#15202b',
    secondaryColor: '#192734',

    borderColor: 'rgb(57, 119, 179)',

    strokeColor: '57, 119, 179',
    ctxFillStyle: 'rgb(57, 119, 179)',

    mainText: '#fff',
    secondaryText: '#eeeeee',

    themeDotBorder: '#fff',

    previewBg: 'rgb(25, 39, 52, 0.8)',
    previewShadow: '#111921',

    buttonColor: '#214569',
  },
  green: {
    mainColor: '#606b56',
    secondaryColor: '#515a48',

    borderColor: 'rgb(169, 209, 132)',

    strokeColor: '169, 209, 132',
    ctxFillStyle: 'rgb(169, 209, 132)',

    mainText: '#fff',
    secondaryText: '#eeeeee',

    themeDotBorder: '#fff',

    previewBg: 'rgb(81, 90, 72, 0.8)',
    previewShadow: '#2a2f25',

    buttonColor: '#6b8059',
  },
  purple: {
    mainColor: '#46344e',
    secondaryColor: '#382a3f',

    borderColor: 'rgb(154, 0, 154)',

    strokeColor: '154, 0, 154',
    ctxFillStyle: 'rgb(154, 0, 154)',

    mainText: '#fff',
    secondaryText: '#eeeeee',

    themeDotBorder: '#fff',

    previewBg: 'rgb(29, 21, 32, 0.8)',
    previewShadow: '#2b202f',

    buttonColor: '#5c3669',
  },
}
```

<br/>

In the case of the next folder called descriptions, there are files with descriptions of my person, my skills, project sneaks and projects.

Below are examples of description files:

<!-- Zdjęcie descriptions -->

In order to illustrate the content of the files regarding the description below, there is an example file with information about my skills (data/descriptions/skills.js):

```
import { common, classNames, elements } from '/data/global/names.js'

export default [
  {
    type: common.headline,
    element: elements.h(3),
    content: 'My skills',
    classes: [
      classNames.utilities.margin('t', 10),
      classNames.utilities.text.center,
    ],
  },

  {
    type: common.header,
    element: elements.h(5),
    content: '1. Level enough to write more advanced frontend',
    classes: [classNames.utilities.margin('t', 30), ,],
  },
  {
    type: common.list,
    elements: {
      list: elements.ul,
      listItem: elements.li,
    },
    content: [
      '- HTML (Semanthic writing),',
      '- CSS (SASS, BEM, TailwindCSS and basic level of Bootstrap),',
      '- JavaScript (OOP, Design Patterns, Functional Programming),',
      '- React (Redux, Hooks, Styled Components, Compound Components etc.),',
      '- Next (basic understanding the concept of server side rendering),',
    ],
    classes: {
      listItem: [
        classNames.utilities.margin('b', 15, classNames.utilities.dash),
      ],
    },
  },
  {
    type: common.header,
    element: elements.h(5),
    content: '2. Level enough to write basic backend',
    classes: [classNames.utilities.margin('t', 30), ,],
  },
  {
    type: common.list,
    elements: {
      list: elements.ul,
      listItem: elements.li,
    },
    content: [
      '- Node/Express (simple E-COMMERCE backend with REST API),',
      '- MongoDB (simple handle with Express)',
    ],
    classes: {
      listItem: [
        classNames.utilities.margin('b', 15, classNames.utilities.dash),
      ],
    },
  },
  {
    type: common.header,
    element: elements.h(5),
    content: '3. When i have a free time',
    classes: [classNames.utilities.margin('t', 30), ,],
  },
  {
    type: common.list,
    elements: {
      list: elements.ul,
      listItem: elements.li,
    },
    content: ['- PHP (basic level)'],
    classes: {
      listItem: [
        classNames.utilities.margin('b', 0, classNames.utilities.dash),
      ],
    },
  },
]
```

As we can see in the above example, the content is properly prepared on the basis of which the DescriptionArrange object, using its methods, is able to generate the appropriate description elements and add them to the transferred container (this process is explained later).

<br/>
<br/>

### 3.1.2. The structure and content of the scripts folder

The scripts folder contains four folders: helpers, objects, plugins and sites.

The scripts folder structure is shown below:

<!-- Zdjęce Struktura folderu scripts -->

In the case of the helpers folder, we deal with files that contain functions that are responsible for specific logic and are reusable throughout the project (they can also be used in other projects). They play the role of support functions that increase the readability of the code and the developer experience.

Below is an example of the helpers folder structure:

<!-- Zdjęcie folderu helpers -->

<br/>

To illustrate what the helper functions look like, an example of the createElementFn function was used, and its code is presented below (scripts/helpers.createElementFn.js):

```
import { common } from '/data/global/names.js'

export default ({ element, ...rest }) => {
  const createdElement = document.createElement(element)

  if (Object.keys(rest).length) {
    for (const propEl in rest) {
      switch (propEl) {
        case common.listeners:
          rest[propEl].map((listener) => {
            const { event, cb } = listener
            createdElement.addEventListener(event, (e) => cb(e))
          })
          break

        case common.attributes:
          rest[propEl].map((attribute) =>
            createdElement.setAttribute(
              `${attribute.name}`,
              `${attribute.value}`
            )
          )
          break

        case common.classes:
          createdElement.classList.add(...rest[propEl])
          break

        case common.styles:
          rest[propEl].map(
            (styleObj) => (createdElement.style[styleObj.name] = styleObj.value)
          )
          break

        default:
          if (
            createdElement.tagName === common.TEXTAREA &&
            propEl === common.type
          ) {
            break
          } else createdElement[propEl] = rest[propEl]

          break
      }
    }
  }
  return createdElement
}
```

As we can see in the above example, on the basis of the arguments passed, the function creates a given html element with appropriate properties.

<br/>

To better understand the operation of the createElementFn function, below is a fragment of the createMainElements method of Form.js, in which this helper was used to create the appropriate elements (scripts/objects/Form.js):

```
createMainElements() {
  this.mainContainer = createElementFn({
    element: elements.div,
    classes: [classNames.form.mainContainer],
    listeners: [{ event: events.click, cb: (e) => e.stopPropagation() }],
  })

  this.mainContainerInner = createElementFn({
    element: elements.div,
    classes: [classNames.form.mainContainerInner],
  })

  more code here...
}
```

In the above example, we can see that thanks to this helper, we can very easily create interesting elements with different properties.

<br/>

Moving down the scripts folder structure we have an objects folder, the contents of which look like this:

<!-- Zdjęcie plików w folderze objects -->

The objects folder contains various objects (classes) files with appropriate methods, the structure of which is very similar due to the use of helper functions.

These class objects were introduced to help manage the logic of certain components on the pages and to practice deeply object oriented programming.

Below is an example of a combination of two objects (SneakPeeks.js and Sound.js) to show the similarities of properties and methods (scripts/objects/SneakPeeks.js):

```
import {
  createElementFn,
  triggerActionOnWindowScrollFn,
  appendElementsToContainerFn,
  setClassesFn,
} from '/scripts/helpers/index.js'
import { classNames, info, elements } from '/data/global/names.js'

class SneakPeeks {
  constructor(container, trigger, wrapper, data) {
    const containerSent = document.querySelector(container)
    this.data = data

    this.createElements()
    this.createComponents()
    appendElementsToContainerFn([this.mainComponent], containerSent)

    if (trigger) {
      this.triggerElement = document.querySelector(trigger)
      this.wrapperToRelease = document.querySelector(wrapper)
      triggerActionOnWindowScrollFn({
        onWhatElement: this.triggerElement,
        cbOnEnterTriggerEl: () => this.handleOnEnterTriggerEl(),
      })
    }
  }

  createElements() {
    this.mainContainer = createElementFn({
      element: elements.div,
      classes: [classNames.sneakPeeks.container],
    })

    more code here...
  }

  createComponents() {
   more code here...

    this.mainComponent = appendElementsToContainerFn(
      this.sneakPeekComponents,
      this.mainContainer
    )
  }
  more code here...
}


```

(scripts/objects/Sound.js):

```
import {
  createElementFn,
  triggerActionOnWindowScrollFn,
  appendElementsToContainerFn,
  setPropsFn,
} from '/scripts/helpers/index.js'
import {
  classNames,
  paths,
  common,
  elements,
  styleProps,
  events,
} from '/data/global/names.js'

class Sound {
  constructor(container, trigger) {
    const containerSent = document.querySelector(container)
    this.play = false

    this.createElements()
    this.createComponents()
    appendElementsToContainerFn([this.mainComponent], containerSent)

    if (trigger) {
      const triggerElement = document.querySelector(trigger)
      triggerActionOnWindowScrollFn({
        onWhatElement: triggerElement,
        cbOnEnterTriggerEl: () => this.toggleBtnComponent(common.on),
        cbOnExitTriggerEl: () => this.toggleBtnComponent(common.off),
        modifier: 0.8,
      })
    }
  }

  createElements() {
    this.audio = createElementFn({
      element: elements.audio,
      src: paths.audioRecord,
    })

    this.btn = createElementFn({
      element: elements.button,
      classes: [classNames.global.leftBtn],
      listeners: [{ event: events.click, cb: () => this.handleAudio() }],
    })

    this.audioImg = createElementFn({
      element: elements.img,
      src: paths.pauseImg,
    })
  }

  createComponents() {
    this.mainComponent = appendElementsToContainerFn([this.audioImg], this.btn)
  }

  more code here...
}
```

We can see in the above examples that methods such as createElements, createComponents and used helpers such as createElementsFn, appendElementsToContainerFn and triggerActionOnWindowScrollFn in both objects are the same (the rest of the objects are very similar).

Such a structure was designed to ensure ease of development and increase the developer experience.

The createElements method is responsible for creating elements with properties through the createElementFn helper, and the createComponents method for creating components from previously created elements.
The appendElementsToContainerFn helper is used to attach the given component or a components to the container object sent to it. The triggerActionOnWindowScrollFn helper is used to trigger the appropriate action when scrolling on the appropriate trigger element (in the following parts of the description, there will be a detailed explanation of how this helper works).

<br/>

The next folder is the plugins folder, which contains files related to various packages that help in the development of the project.

The structure of this folder is shown below:

<!-- Struktura folderu plugins -->

As we can see above, in the plugins folder there is only the prism.js file, which is responsible for the appropriate arrangement of the code presented on the page. The second file of this package is in the styles/plugins/prism.css folder, which is responsible for the appropriate styles in the presented code. (examples will be later in the description).

<br/>

The last folder in this scripts folder structure is the sites folder, the contents of which are shown below:

<!-- Zdjęcie struktury sites folder -->

In the example above, we can see that the sites folder contains various files that act as files that directly relate to a given html file.

Below is an overview of the html files with the files from the sites folder:

<!-- Przykład zestawienia html i js -->

Each of the files in sites folder presented above is responsible for generating appropriate instances of classes that play a specific role on the site.

To illustrate the content of these files, index.js was used, which corresponds to the index.html file (scripts/sites/index.js):

```
import themes from '/data/global/themes.js'
import { idReferences } from '/data/global/names.js'
import {
  sneakPeeks,
  skillsDescription,
  aboutDescription,
} from '/data/descriptions/index.js'
import {
  Sound,
  Form,
  SneakPeeks,
  Theme,
  Particles,
  DescriptionArrange,
} from '/scripts/objects/index.js'

new DescriptionArrange(idReferences.about.description, aboutDescription)
new DescriptionArrange(idReferences.skills.description, skillsDescription)
new Sound(idReferences.global.leftContainer, idReferences.sneakPeeks.trigger)
new Form(idReferences.global.leftContainer, idReferences.sneakPeeks.trigger)
new Theme(idReferences.theme.main, themes, Particles)
new SneakPeeks(
  idReferences.sneakPeeks.main,
  idReferences.sneakPeeks.trigger,
  idReferences.sneakPeeks.wrapper,
  sneakPeeks
)
```

In the example above, we can see that various class objects are imported into the file, which are used to create instances of these classes. Each of the created instances is responsible for some part of the logic on the page, e.g. on the main page we have to create a description of my person and my skills (new DescriptionArrange), sound (new Sound), form (new Form), theme (new Form) and sneak peeks (new SneakPeeks).

Each of the created instances accepts various elements such as a container (to which the elements created by createElementFn helper are to be attached), a trigger element (e.g. triggering an animation through the triggerActionOnWindowScrollFn helper) and various data on the basis of which the description structure is created.

To attach such a js file to the html file, we use a simple script tag, thanks to which we can import the entire solution to a given page (in this case to the index.html homepage):

```
<script type="module" type="text/javascript" src="/scripts/sites/main.js"></script>
```

Thanks to this solution, it is very easy to add new functionalities to our website while keeping the code clean (the logic of each of the presented objects will be described later).

<br/>
<br/>

### 3.1.3. The structure and contents of the styles folder

The styles folder consists of the components, global, plugins, and utilities folders (index.css at the end, which exports all local files).

The following is an example of the styles folder structure:

<!-- Zdjęcie folderu styles -->

In the case of the first folder named components, we have style files in it that describe the individual components on the page.

Below is an example of the components folder structure:

<!-- Zdjęcie folderu components -->

In order to illustrate the content of the files, the fragment of form.css file was used, which contains classes and properties related to the form component (styles/components/form.css):

```
.form-main-container {
 width: 100%;
 max-width: 500px;
 height: 100%;
 max-height: 600px;
 padding: 10px;
 border: var(--borderColor) 1px solid;
 border-radius: 5px;
 background-color: var(--secondaryColor);
 opacity: 0;
 transform: translateX(200%);
 animation: slideInFromRight 0.5s 0.5s ease-in forwards;
}

.form-main-container-inner {
 display: flex;
 flex-direction: column;
 height: 100%;
 overflow-y: auto;
}

.form-title-container {
 top: 0;
 min-height: 70px;
 display: flex;
 flex-basis: 15%;
 justify-content: center;
 align-items: center;
}

.form-title {
 text-align: center;
}

more code here...
```

<br/>

In the case of the next folder named global, we deal with global styles.

The structure of this folder is shown below:

<!-- Zdjęcie struktury folderu global -->

As we can see in the above example, we deal with files such as keyframes.css, in which the logic of individual animations is created, normalize.css with css style normalization, and variables.css, in which the theme structure is initialized, which is then dynamically overwritten using the methods of the Theme.js object (then this process will be described).

<br/>

The next folder in the sequence is the plugins folder with styles, which contains external files styling the given elements on the page.

The structure of this folder is shown below:

<!-- Zdjęcie struktury plugins style -->

As we can see above, in this folder there is only one file called prism.css, thanks to which we have the appropriate coloring placed on the code page (part of the Prism.js package, the rest of which is in scripts/plugins/prism.js).

<br/>

The last folder in the styles folder is called utilities, in which files containing appropriate classes were created that refer to the TailwindCSS and Bootstrap frameworks (a custom combination was created).

The structure of this folder is shown below:

<!-- Zdjęcie struktury utilities -->

As we can see in the example above, we have a many style files that correspond to some style property. We also have sets of various properties that are often used together in a project, e.g. the card.css file.

Below is an example of the card.css file (styles/utilities/card.css):

```
.card {
  padding: 10px;
  border: var(--borderColor) 1px solid;
  border-radius: 5px;
  background-color: var(--secondaryColor);
}

.card-inner {
  border-radius: 5px;
  background-color: var(--previewShadow);
}
```

<br/>

It is also worth mentioning that the file structure.css is inspired by the Bootstrap framework, which includes row and column properties (with some own modifications).

Below is an example of the structure.css file (styles/utilities/structure.css):

```
/* Row */
.row-xy {
  display: flex;
}

.row-x {
  display: flex;
}

.row-y {
  display: flex;
  flex-direction: column;
}

/* Column */
.col-10 {
  flex-basis: 10%;
}

.col-15 {
  flex-basis: 15%;
}

.col-20 {
  flex-basis: 20%;
}

.col-25 {
  flex-basis: 25%;
}

.col-30 {
  flex-basis: 30%;
}

.col-35 {
  flex-basis: 35%;
}

.col-40 {
  flex-basis: 40%;
}

.col-45 {
  flex-basis: 45%;
}

.col-50 {
  flex-basis: 50%;
}

.col-55 {
  flex-basis: 55%;
}

.col-60 {
  flex-basis: 60%;
}

.col-65 {
  flex-basis: 65%;
}

.col-70 {
  flex-basis: 70%;
}

.col-75 {
  flex-basis: 75%;
}

.col-80 {
  flex-basis: 80%;
}

.col-85 {
  flex-basis: 85%;
}

.col-90 {
  flex-basis: 90%;
}

.col-95 {
  flex-basis: 95%;
}

.col-100 {
  flex-basis: 100%;
}

@media screen and (max-width: 800px) {
  .row-xy {
    flex-direction: column;
  }
}
```

To understand well how to use the styles presented above, I will use a fragment of the index.html structure (index.html):

```
<section class="mb-40">
    <div class="card element-center sm-wrap-x-500 slideInFromLeft">
       <div class="row-xy py-10">
           <div  class="col-50 content-center-xy p-10 showObject">
            <img class="wrap-x-400 w-full rounded" src="/images/about/me.jpg" alt="">
           </div>
           <div class="col-50 content-center-xy p-10 sm-mt-20  showObject">
            <div class="card-inner pl-30 pt-30 sm-pl-0">
                <div class="preview-container">
                    <div id="preview-corner-tl" class="preview-corner"></div>
                    <div id="preview-corner-tr" class="preview-corner"></div>
                    <h3>What I Do?</h3>
                    <p>I am a Frontend Developer</p>
                    <p>who creates web applications,</p>
                    <p>services and many other web solutions</p>
                    <div id="preview-corner-br" class="preview-corner"></div>
                    <div id="preview-corner-bl" class="preview-corner"></div>
                </div>
            </div>
           </div>
       </div>
    </div>
</section>
```

As we can see in the example above, we have a section element with only one class (mb-40) that contains a div element that takes the appearance of a card with additional styles (slideInFromLeft is an animation class).

In the element inside we have a structure well known from Bootstrap, in which a row has been defined and two columns of 50% width (ShowObject is an animation class).

Due to the fact that the second column contains more complex styles, a component inside a card-inner element, has been separated here, the styles of which have been moved to the (styles/components/preview.css) folder in order not to make a mess in the code (such a solution was introduced in the entire project).

So the general principle of creating styles in the project is that if the elements contain a large number of styles, the component is extracted and a css file for a given component is created.
If there are fewer styles for a given element, classes from the utilities folder are used.

<br/>
<br/>

### 3.1.4. Characteristics of html files

In the case of html files, in addition to what was presented in the previous subsection, there is a global element that acts as a container, in which each part of the page is represented by a separate section.

In the project, we are dealing with the main page, the privacy policy page and pages with descriptions of individual projects created by me.

In some section elements, the html structure includes element marked with the id property that contain a <--JS--> comment to indicate that this is where some elements are being injected via javascript (exactly through the appropriate js object).

Below is an example of such a solution (index.html):

```
<section class="mb-30">
    <div class="card element-center wrap-x-700 px-30 pb-30 pt-30 sm-p-20 sm-wrap-x-500 slideInFromLeft">
        <div class="row-y ">
            <div class="col-100 showObject">
                <div id="skills-description"  class="card-inner row-y element-center p-20">
                     <!-- JS -->
               </div>
            </div>
        </div>
     </div>
</section>
```

In the example above, we have an element with id skills-description, which is a container for description elements generated by the DescriptionArrange object (scripts/objects/DescriptionArrange.js).

<br/>
<br/>
<br/>

## 3.2. Specific

### 3.2.1. Logic of background animation (ok)

In order to obtain a better user experience while using the website, an animated background has been introduced, which contains movable the so-called particles that connect with each other by means of lines when they are brought closer to each other.

Below is a visual example of the applied background:

<!-- Przykład animacji tła -->

To achieve the above effect, Particle and Particles objects were created.

The following is an example of a Particle object (scripts/objects/Particle.js):

```
class Particle {
  constructor(x, y, directionX, directionY, size, canvas, ctx) {
    this.canvas = canvas
    this.ctx = ctx
    this.x = x
    this.y = y
    this.directionX = directionX
    this.directionY = directionY
    this.size = size
    this.speedX = this.directionX
    this.speedY = this.directionY
  }

  draw() {
    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false)
    this.ctx.fill()
  }

  update() {
    if (this.x > this.canvas.width || this.x < 0) {
      this.directionX = -this.directionX
      this.speedX = this.directionX
    }
    if (this.y + this.size > this.canvas.height || this.y - this.size < 0) {
      this.directionY = -this.directionY
      this.speedY = this.directionY
    }

    this.x += this.directionX
    this.y += this.directionY

    this.draw()
  }
}

export default Particle
```

As we can see in the above example, the Particle object takes various parameters related to coordinates, direction, size, canvas and context (these parameters are passed through the Particles object, which will be explained in a moment).

The draw method draws a given particle on the canvas, and the update method updates the location on this canvas with the sent values (when the particles try to exceed the width and height of the canvas, the direction of the particle is changed, which gives the illusion of reflecting from the edge of the screen).

The whole process of the particle's movement is carried out by the for loop, which each time updates the position of the particle via the update method (will be presented in a moment in Particles object).

<br/>

In order to be able to create many such particles and make it move, the Particles object was created with appropriate methods that enable it.

The Particles object is shown below (scripts/objects/Particles.js):

```
import Particle from './Particle.js'
import {
  createElementFn,
  appendElementsToContainerFn,
} from '/scripts/helpers/index.js'
import { idNames, events, elements } from '/data/global/names.js'

class Particles {
  constructor() {
    this.canvas = createElementFn({
      element: elements.canvas,
      id: idNames.theme.canvas,
    })
    this.particleArray = []
    this.theme = {}
    this.mouse = {
      x: null,
      y: null,
      radius: (this.canvas.height / 80) * (this.canvas.width / 80),
    }

    this.setContext()
    this.listenForResize()
    appendElementsToContainerFn([this.canvas], document.body)
  }

  setContext() {
    this.ctx = this.canvas.getContext('2d')
    this.ctx.canvas.width = window.innerWidth
    this.ctx.canvas.height = window.innerHeight
  }

  setTheme(theme) {
    this.theme = theme
    this.strokeColor = theme.strokeColor
    this.ctx.fillStyle = theme.ctxFillStyle
  }

  start(theme) {
    this.setTheme(theme)
    this.init()
    this.animate()
    this.update()
  }

  connect() {
    let opacityValue = 1
    for (let a = 0; a < this.particleArray.length; a++) {
      for (let b = a; b < this.particleArray.length; b++) {
        let distance =
          (this.particleArray[a].x - this.particleArray[b].x) *
            (this.particleArray[a].x - this.particleArray[b].x) +
          (this.particleArray[a].y - this.particleArray[b].y) *
            (this.particleArray[a].y - this.particleArray[b].y)
        if (distance < (this.canvas.width / 7) * (this.canvas.height / 7)) {
          opacityValue = 1 - distance / 10000
          this.ctx.strokeStyle = `rgba(${this.strokeColor}, ${opacityValue} )`
          this.ctx.beginPath()
          this.ctx.lineWidth = 2
          this.ctx.moveTo(this.particleArray[a].x, this.particleArray[a].y)
          this.ctx.lineTo(this.particleArray[b].x, this.particleArray[b].y)
          this.ctx.stroke()
        }
      }
    }
  }

  init() {
    this.strokeColor = this.theme.strokeColor
    this.ctx.fillStyle = this.theme.ctxFillStyle
    let numberOfParticles = (this.canvas.height * this.canvas.width) / 9000
    for (let i = 0; i < numberOfParticles; i++) {
      let size = Math.random() * 5 + 1
      let x = Math.random() * (innerWidth - size * 2 - size * 2) + size * 2
      let y = Math.random() * (innerHeight - size * 2 - size * 2) + size * 2
      let directionX = Math.random() * 2 - 1
      let directionY = Math.random() * 2 - 1

      this.particleArray.push(
        new Particle(x, y, directionX, directionY, size, this.canvas, this.ctx)
      )
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, innerWidth, innerHeight)

    for (let i = 0; i < this.particleArray.length; i++) {
      this.particleArray[i].update()
    }
    this.connect()
  }

  update() {
    const updateFn = () => {
      requestAnimationFrame(updateFn)
      this.animate()
    }
    updateFn()
  }

  listenForResize() {
    window.addEventListener(events.resize, () => this.resize())
  }

  resize() {
    this.particleArray = []
    this.canvas.width = innerWidth
    this.canvas.height = innerHeight
    this.init()
  }
}

export default Particles
```

Due to the complexity of the processes that occur in above example of Particles object, only the most important methods are listed and described.

The most important methods and their brief description:

1. setContext, which sets 2d context on the created canvas (in the constructor),
2. start, which starts the entire particle formation process (this method is called by one of the methods of Theme object that will be discussed in the next section), which includes methods such as:
   - setTheme, which sets the theme based on an externally submitted object (an example will be in the next subsection when discussing the Theme object)
   - init, which initializes the particles by calculating their number based on the width and height of the canvas (here Particle instances and lines connecting the particles are created),
   - animate, which sets the particles in motion by sending new coordinates to each instance of the Particle object
   - update, thanks to which the particle animation process is continuous by calling the animate method infinitely,
3. listenForResize, thanks to which the particles are recreated when the screen size is changed, thus avoiding errors

<br/>
<br/>

### 3.2.2. Option to set the page theme (ok)

Each page has an option to set the theme in three colors: blue, green and purple via the theme setting pane.

Below is an example of setting the three mentioned themes:

<!-- GIF USTAWIANIA MOTYWU -->

<br/>

The above logic is possible thanks to the Theme object, an instance of which is created in a file that is the main script of a given page.

For the home page, the instance is created in the index.js file as shown below (scripts/objects/index.js):

```
new Theme(idReferences.theme.main, themes, Particles)
```

Above is an example of creating an instance of the Theme object within several others that correspond to different functionality (they will be discussed in the next sub-points of the description).

To the discussed instance of Theme object the container element is passed (on the basis of which the appropriate element from the DOM structure will be retrieved, to which the component responsible for setting the theme will be attached), an object containing information about themes and the previously discussed background object (Particles)

The implementation of this Theme object is shown below (scripts/objects/Theme.js):

```
import {
  createElementFn,
  appendElementsToContainerFn,
  setActiveFn,
} from '/scripts/helpers/index.js'
import {
  classNames,
  common,
  info,
  elements,
  events,
} from '/data/global/names.js'

class Theme {
  constructor(container, themesObject, BackgroundObj) {
    const containerSent = document.querySelector(container)
    this.themesObject = themesObject
    this.BackgroundObj = BackgroundObj
    this.initialThemeName = this.setInitialThemeName()
    this.initialThemeObject = this.setInitialThemeObject()

    this.createElements()
    this.createComponents()
    this.setGlobalVariables()
    this.createBackgroundAnimation()

    appendElementsToContainerFn([this.mainComponent], containerSent)
  }

  createElements() {
    this.background = new this.BackgroundObj()

    this.mainContainer = createElementFn({
      element: elements.div,
      classes: [classNames.theme.container],
    })

    this.title = createElementFn({
      element: elements.h(5),
      textContent: info.personalizeTheme,
    })

    this.optionsContainer = createElementFn({
      element: elements.div,
      classes: [classNames.theme.optionsContainer],
    })

    this.optionsDots = Object.keys(this.themesObject).map((themeName) => {
      return createElementFn({
        element: elements.div,
        classes: [
          classNames.theme.optionsDot,
          themeName === this.initialThemeName &&
            classNames.theme.optionsDotActive,
        ],
        id: themeName,
        listeners: [
          {
            event: events.click,
            cb: (e) => this.handleDotClick({ element: e.target, themeName }),
          },
        ],
      })
    })

    this.note = createElementFn({
      element: elements.p,
      classes: [classNames.theme.note],
      textContent: info.themeNote,
    })
  }

  createComponents() {
    this.optionsComponent = appendElementsToContainerFn(
      this.optionsDots,
      this.optionsContainer
    )

    this.mainComponent = appendElementsToContainerFn(
      [this.title, this.optionsComponent, this.note],
      this.mainContainer
    )
  }

  handleDotClick({ element, themeName }) {
    const themeObject = this.themesObject[themeName]

    setActiveFn({
      setOn: element,
      removeFrom: this.optionsDots,
      classes: [classNames.theme.optionsDotActive],
    })
    this.setGlobalVariables(themeObject)
    this.background.setTheme(themeObject)
    this.saveThemeNameInLocalStorage(themeName)
  }

  setGlobalVariables(themeObject) {
    for (const property in themeObject
      ? themeObject
      : this.initialThemeObject) {
      document.documentElement.style.setProperty(
        `--${property}`,
        themeObject ? themeObject[property] : this.initialThemeObject[property]
      )
    }
  }

  setInitialThemeName() {
    return (
      localStorage.getItem(common.theme) || Object.keys(this.themesObject)[0]
    )
  }

  setInitialThemeObject() {
    return this.themesObject[this.initialThemeName]
  }

  saveThemeNameInLocalStorage(theme) {
    localStorage.setItem(common.theme, theme)
  }

  createBackgroundAnimation() {
    this.background.start(this.initialThemeObject)
  }
}

export default Theme

```

First in the constructor of the discussed object, the passed theme object and the animation object are assigned to the variables (this.themesObject, this.BackgroundObj) and based on the sent reference of the container element, the element is retrieved from the DOM structure and assigned to the containerSent variable.

Next, the method setInitialThemeName is called based on which the theme name is set .Implementation of this method is presented below (scripts/objects/Theme.js):

```
  setInitialThemeName() {
    return (
      localStorage.getItem(common.theme) || Object.keys(this.themesObject)[0]
    )
  }
```

As we can see above, it is a simple method that either takes the theme name saved in local storage or if it is not there, it sets the default theme name.

After setting the name of the theme using the above-mentioned method, the setInitialThemeObject method is called, which, based on the previously determined name of the theme, selects the appropriate theme object. The implementation of this method is below (scripts/objects/Theme.js):

```
setInitialThemeObject() {
    return this.themesObject[this.initialThemeName]
  }
```

Next, in the constructor logic, the createElements method (which uses the createElementFn helper - implementation is here scripts/helpers/createElementFn) is called (at this stage, an instance of the passed background object is also created), which is responsible for creating the appropriate elements of this object (this method is not described below because it is simple and occurs in every object).

From these created elements, through the createComponents (which uses the appendElementsToContainerFn helper - implementation is here scripts/helpers/appendElementsToContainerFn) method, individual components are created, which at the end are combined into the main component named this.mainContainer (this method is not described below because it is simple and occurs in every object).

At the end part of the constructor logic of discussed object, the method setGlobalVariables responsible for overwriting the values of global variables with the properties of a given theme is called and the method createBackgroundAnimation responsible for starting the background creation mechanism based on the selected theme are called (here the particles animation starts).

The implementation of the first of the methods (setGlobalVariables) discussed above is presented below (scripts/objects/Theme.js):

```
  setGlobalVariables(themeObject) {
    for (const property in themeObject
      ? themeObject
      : this.initialThemeObject) {
      document.documentElement.style.setProperty(
        `--${property}`,
        themeObject ? themeObject[property] : this.initialThemeObject[property]
      )
    }
  }
```

As we can see above, this method, depending on whether a given theme object has been sent or not (if it has not been sent, the object set at the time of creating the instance is taken - this.initialThemeObject) sets global styles (global variables), thanks to which the colors of individual elements are side are changed.

In the case of the second, previously mentioned method (createBackgroundAnimation) its implementation is as follows (scripts/objects/Theme.js):

```
  createBackgroundAnimation() {
    this.background.start(this.initialThemeObject)
  }
```

At the very end of the constructor logic the main component (this.mainComponent) are attached to the transferred container using appendElementsToContainerFn helper (which was also used to combine individual elements into components).

<br/>

Describing the rest of the operation of the Theme object, changing the theme is possible through the so-called dots elements (created via the createElement method), which listen for a click and call the handleDotClick method, to which the appropriate name of the theme and the clicked element are passed.

Below is a fragment of the createElements method, in which we can see the process of creating dots elements with the event listener set to click to call the handleDotClick method with passing the clicked element and the name of the theme (scripts/objects/Theme.js):

```
    this.optionsDots = Object.keys(this.themesObject).map((themeName) => {
      return createElementFn({
        element: elements.div,
        classes: [
          classNames.theme.optionsDot,
          themeName === this.initialThemeName &&
            classNames.theme.optionsDotActive,
        ],
        id: themeName,
        listeners: [
          {
            event: events.click,
            cb: (e) => this.handleDotClick({ element: e.target, themeName }),
          },
        ],
      })
    })
```

<br/>

The handleDotClick method is shown below (the rest of the methods used in the example below are in the code example above):

```
  handleDotClick({ element, themeName }) {
    const themeObject = this.themesObject[themeName]

    setActiveFn({
      setOn: element,
      removeFrom: this.optionsDots,
      classes: [classNames.theme.optionsDotActive],
    })
    this.setGlobalVariables(themeObject)
    this.background.setTheme(themeObject)
    this.saveThemeNameInLocalStorage(themeName)
  }
```

In the above method, the appropriate theme object is first selected based on the dynamically sent theme name (through the appropriate option dot). Next the class active is set to mark the dot element as clicked (using setActiveFn helper - implementation is here scripts/helpers/setActiveFn) and finally, the three methods are called: setGlobalVariables (which was discussed earlier but in this case is the theme object passed to it), background.setTheme (method for setting the theme of the animation object - the implementation is here scripts/objects/Particles.js) and saveThemeNameInLocalStorage, the implementation of which is shown below:

```
  saveThemeNameInLocalStorage(theme) {
    localStorage.setItem(common.theme, theme)
  }
```

As we can see above, it is a simple method that sets the chosen theme name in the local storage of the browser (from which this theme name is then retrieve when creating a new instance when re-entering the page)

<br/>
<br/>

### 3.2.3. Audio support on the site

Before the audio support will be described on the website, it should be mentioned that each additional functionality is triggered by buttons located on the left side of the screen (eg turn background music on and off, which will be described in a moment, the form create handling and back to the main page option, which will be explained in the following sections).

Below is a visual example of discussed buttons on the private policy page:

<!-- Przykład zestawu buttonów po lewej x 3 -->

<br/>

It is also worth adding that the buttons container has appropriate styles, thanks to which the buttons inside take the right place next to each other. In turn, each button in the discussed container has the same styles, which facilitates the development process.

The styles for the discussed solution are presented below (styles/components/globalLeftContainer.css):

```
#global-left-container {
  position: fixed;
  top: 0;
  left: 0%;
  width: 0px;
  height: 100%;
  transform: translateX(-50px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: slideInFromLeft 0.3s 2s ease-in forwards;
  z-index: 2;
}

.global-left-btn {
  position: relative;
  left: 0px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 2px 7px 2px 0;
  border: 1px solid var(--borderColor);
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left: none;
  opacity: 0.9;
  z-index: 1;
}

.global-left-btn img {
  width: 40px;
  margin-left: 3px;
}

@media screen and (max-width: 1050px) {
  .global-left-btn {
    height: 50px;
    padding: 0;
    padding-right: 5px;
  }

  .global-left-btn img {
    width: 27px;
    margin-left: 3px;
  }
}
```

It is also worth adding that the buttons container (with global-left-container id) is included in every html file , but the buttons with all logic are dynamically created with javascript for better logic maintenance (this will be explained with specific examples).

<br/>

Moving on to the correct thread, the Sound object is responsible for the sound handling logic on the website (background sound on or off).

The code of the Sound object is shown below (scripts/objects/Sound.js):

```
import {
  createElementFn,
  triggerActionOnWindowScrollFn,
  appendElementsToContainerFn,
  setPropsFn,
} from '/scripts/helpers/index.js'
import {
  classNames,
  paths,
  common,
  elements,
  styleProps,
  events,
} from '/data/global/names.js'

class Sound {
  constructor(container, trigger) {
    const containerSent = document.querySelector(container)
    this.play = false

    this.createElements()
    this.createComponents()
    appendElementsToContainerFn([this.mainComponent], containerSent)

    if (trigger) {
      const triggerElement = document.querySelector(trigger)
      triggerActionOnWindowScrollFn({
        onWhatElement: triggerElement,
        cbOnEnterTriggerEl: () => this.toggleBtnComponent(common.on),
        cbOnExitTriggerEl: () => this.toggleBtnComponent(common.off),
        modifier: 0.8,
      })
    }
  }

  createElements() {
    this.audio = createElementFn({
      element: elements.audio,
      src: paths.audioRecord,
    })

    this.btn = createElementFn({
      element: elements.button,
      classes: [classNames.global.leftBtn],
      listeners: [{ event: events.click, cb: () => this.handleAudio() }],
    })

    this.audioImg = createElementFn({
      element: elements.img,
      src: paths.pauseImg,
    })
  }

  createComponents() {
    this.mainComponent = appendElementsToContainerFn([this.audioImg], this.btn)
  }

  handleAudio() {
    switch (this.play) {
      case true:
        this.img.src = paths.pauseImg
        this.audio.pause()
        this.play = false
        break

      case false:
        this.audio.play()
        this.img.src = paths.playImg
        this.play = true
        break

      default:
        break
    }
  }

  toggleBtnComponent(toggle) {
    setPropsFn([
      {
        elements: [this.mainComponent],
        styleProps: [
          {
            name: styleProps.names.transform,
            value:
              toggle === common.on
                ? styleProps.values.translateX(-100)
                : styleProps.values.translateX(0),
          },
        ],
      },
    ])
  }
}

export default Sound
```

As we can see in the above example, the createElements method are used to create individual elements and the createComponents method are used to combine them into components. In the case of the createComponents method, when creating components from previously created elements, the appendElementsToContainerFn helper is used, which is also responsible for attaching the main component to the transferred container. Thanks to this process, a button appears on the page that allows us to handle the background sound.

Before going any further it should be mentioned that the website uses such a solution that which allows to trigger an action on a specific element of the DOM structure.

On the main page, the trigger effect is about hiding the buttons on the left side of the page when you scroll to the section element related to the sneak peeks of comlpeted projects (the reverse process when we leave this section element).

Below is a visual example of this effect on the main page:

<!-- Przykład chowania się i pokazywania buttonów -->

The above solution can be achieved through a helper called triggerActionOnWindowScrollFn which can be seen at the end of the constructor structure in the discussed Sound object (this function is only called when such trigger is sent to the object).

The logic of this helper is shown below (scripts/helpers/triggerActionOnWindowScrollFn.js):

```
import { common, events } from '/data/global/names.js'

export default ({
  onWhatElement: trigerElement,
  cbOnEnterTriggerEl = () => {},
  cbOnExitTriggerEl = () => {},
  modifier = 1,
}) => {
  if (!trigerElement) return

  let element = trigerElement

  if (typeof trigerElement === common.string) {
    element = document.querySelector(trigerElement)
  }

  window.addEventListener(events.scroll, () => {
    window.innerHeight + window.pageYOffset * modifier > element.offsetTop
      ? cbOnEnterTriggerEl(element)
      : cbOnExitTriggerEl(element)
  })
}
```

As we can see in the above example, the function takes an object in which we define an triggerElement on which a some action is to be triggered when the browser screen scrolls (triggerElement), a function that is to be called when a triggerElement is exceeded by the bottom edge of the browser screen (cbOnEnterTriggerEl), what function is to be triggered when the bottom edge of the browser screen leaves the triggerElement (cbOnExitTriggerEl) and the so-called modifier, which allows you to influence the earlier or later triggering of an action in relation to the basic settings (modification of calculations).

Overall the logic of this helper's operation is to determine the position of the upper edge of a given triggerElement (offsetTop property) and to call appropriate functions when this edge is crossed(cbOnEnterTriggerEl) or lowered during the scrolling of the screen (cbOnExitTriggerEl).

<br/>

In the case of the Sound class, we pass the triggerElement with the id sneakPeeks-trigger to the mentioned helper (below is an example from the index.html file):

```
<section id="sneakPeeks-trigger">
    <div id="sneakPeeks-wrapper" class="row-y mb-30">
        <div class="col-100 mt-20 mb-40">
            <div class="card wrap-x-250 element-center text-center p-20 sm-wrap-x-200">
                <h3>My projects</h3>
            </div>
        </div>
         <div id="sneakPeeks" class="col-100">
              <!-- JS -->
         </div>
    </div>
</section>
```

<br/>

Below is an example of passing this trigger element next to the container to the created instance of Sound object through the main script of index.html page (scripts/sites/index.js)

```
new Sound(idReferences.global.leftContainer, idReferences.sneakPeeks.trigger)
```

To understand the next description, I will provide a fragment of the Sound object constructor with a triggerActionOnWindowScrollFn helper:

```
    if (trigger) {
      const triggerElement = document.querySelector(trigger)
      triggerActionOnWindowScrollFn({
        onWhatElement: triggerElement,
        cbOnEnterTriggerEl: () => this.toggleBtnComponent(common.on),
        cbOnExitTriggerEl: () => this.toggleBtnComponent(common.off),
        modifier: 0.8,
      })
    }
```

So when we already have a triggerElement assigned to the onWhatElement property of the transferred object, we define the functions that are to be called when we scroll to the trigger element or exit it.

Such a function in this case is the toggleBtnComponent method, the implementation of which is presented below (scripts/objects/Sound.js):

```
  toggleBtnComponent(toggle) {
    setPropsFn([
      {
        elements: [this.mainComponent],
        styleProps: [
          {
            name: styleProps.names.transform,
            value:
              toggle === common.on
                ? styleProps.values.translateX(-100)
                : styleProps.values.translateX(0),
          },
        ],
      },
    ])
  }
```

As we can see in the above example, this method uses the setPropsFn helper to set the appropriate style properties on the this.mainComponent component (depending on the value of toggle, the component either hides or shows)

Summarizing, thanks to this solution, when the trigger element is crossed, discussed the toggleBtnComponent method will be called with the "on" argument during the scroll, and the toggleBtnComponent method with the "off" argument will be called when the trigger element is exited.

<br/>

It is also worth mentioning that the handleAudio method, which is called when the button is clicked, is responsible for turning the sound on and off.

This solution is presented below (scripts/objects/Sound.js):

```
  handleAudio() {
    switch (this.play) {
      case true:
        this.img.src = paths.pauseImg
        this.audio.pause()
        this.play = false
        break

      case false:
        this.audio.play()
        this.img.src = paths.playImg
        this.play = true
        break

      default:
        break
    }
  }
```

<br/>
<br/>

### 3.2.4. A Curtain object that allows to attach components dynamically (ok)

Before I go on to the description of the next functionality related to the creation of a form component(which is called via the next button of the left side of page), the Curtain object, which plays a key role in the process of creating a form, must be described.

The discussed object is responsible for creating the container element (curtain), to which various components can be dynamically added and removed using appropriate methods of Curtain object.

At the beginning I would like to mention that this container element (curtain) appears in the form of a dark background with the simultaneous immobilization of the page, which can be seen in the example below when creating the form component:

<!-- Przedstawienie klikniecia formularza i jego stworzenia -->

<br/>

Based on the example presented above, we can see that after click on the button on the left side of the main page (this solution is also available on every subpage) a form component appears (after the short animation) with the curtain simultaneously.

In fact, this form component is dynamically created when the button is clicked, and the Curtain object attaches it to itself using appropriate methods - so we can see it on the page (this process will be described in more detail based on a code example).

When closing form component via the "X" icon or by clicking a container (curtain), such a component is removed from the Curtain object and the curtain element hides without children (the curtain element is ready to attach new component).

Thanks to this solution, some components (for example form component) can exists only at the time of its use and this logic allows to dynamically display components one after another e.g. login window, advertising, popup etc. (on the website now there is only a form component but there may be other components in the future).

For a better understanding of the logic behind the solution described above, below is an implementation of the Curtain object (scripts/objects/Curtain.js):

```
import {
  createElementFn,
  appendElementsToContainerFn,
  setPropsFn,
  toggleClassesFn,
} from '/scripts/helpers/index.js'

import {
  classNames,
  idReferences,
  common,
  elements,
  events,
  styleProps,
} from '/data/global/names.js'

class Curtain {
  constructor(container) {
    if (Curtain.instance == null) {
      Curtain.instance = this
      const sentContainer = document.querySelector(container)
      this.preventHidden = false
      this.cbsToCallOnHidden = []
      this.children = []

      this.createElements()
      appendElementsToContainerFn([this.mainContainer], sentContainer)
    }
    return (Curtain.instance = this)
  }

  createElements() {
    this.mainContainer = createElementFn({
      element: elements.div,
      classes: [classNames.curtain.container],
      listeners: [
        {
          event: events.click,
          cb: () => this.toggleShow(common.off),
        },
      ],
    })
  }

  toggleShow(toggle, { appendElements, cbsToCallOnHidden } = {}) {
    switch (toggle) {
      case common.on:
        this.addCbsToCallOnHidden(cbsToCallOnHidden)
        this.appendElements(appendElements)
        break

      case common.off:
        if (this.preventHidden) return
        this.callCbsOnHidden()
        this.clear({ after: 200 })

        break

      default:
        break
    }

    this.toggleBodyOverflow(toggle)
    this.toggleActive(toggle)
  }

  addElToChildren(el) {
    this.children.push(el)
  }

  appendElements(elements) {
    elements.map((el) => {
      this.mainContainer.appendChild(el)
      this.addElToChildren(el)
    })
  }

  addCbsToCallOnHidden(cbs) {
    cbs.map((cb) => {
      this.cbsToCallOnHidden.push(cb)
    })
  }

  toggleBodyOverflow(toggle) {
    setPropsFn([
      {
        elements: [document.body],
        styleProps: [
          {
            name: styleProps.names.overflow,
            value:
              toggle === common.on
                ? styleProps.values.hidden
                : styleProps.values.auto,
          },
        ],
      },
    ])
  }

  toggleActive(toggle) {
    toggleClassesFn(toggle, {
      elements: [this.mainContainer],
      classes: [classNames.curtain.active],
    })
  }

  togglePreventHidden(toggle) {
    this.preventHidden = toggle === common.on ? true : false
  }

  callCbsOnHidden() {
    this.cbsToCallOnHidden.map((cb) => cb())
  }

  clearCbsToCallOnHidden() {
    this.cbsToCallOnHidden = []
  }

  clearChildren() {
    this.children = []
  }

  clear({ after }) {
    this.clearCbsToCallOnHidden()
    setTimeout(() => {
      this.children.map((child) => {
        child.remove()
      })
      this.clearChildren()
    }, after)
  }
}

const curtain = new Curtain(idReferences.global.mainContainer)

export default curtain
```

The first thing that stands out about the example above is that the logic of Curtain object was designed on the principles of the Singleton design pattern. Therefore the instance of this object is created once and is valid for the lifetime of the page.

At the very beginning, in the constructor of discussed object, when there is no instance (condition), we see the logic responsible for assigning the container element found on the basis of a reference to the sentContainer variable, assigning default values to three variables (this.preventHidden, this.cbsToCallOnHidden, this.children), calling the createElements method (which uses the helper createElementFn - the implementation is here scripts/helpers/createElementFn.js), which creates only one element called this.mainContainer (acts as a curtain).

At the very end of the discussed constructor logic we have the attaching the created element (this.mainContainer) to the sentContainer (global page container) by helper appendElementsToContainerFn (implementation he is here scripts/helpers/appendElementsToContainerFn.js).

<!--  -->

Moving on to the methods of this object, the main heart of Curtain object is the toggleShow method, which depending on the value of the toggle parameter ("on" or "off"), handles the logic responsible for showing or hiding the so-called curtain

The discussed method takes in addition to the value of toggle ("on", "off") an object with elements to attach and callbacks to call on the curtain hide.

<br/>

Below is an example of this method of the Curtain object (scripts/objects/Curtain.js):

```
  toggleShow(toggle, { appendElements, cbsToCallOnHidden } = {}) {
    switch (toggle) {
      case common.on:
        this.addCbsToCallOnHidden(cbsToCallOnHidden)
        this.appendElements(appendElements)
        break

      case common.off:
        if (this.preventHidden) return
        this.callCbsOnHidden()
        this.clear({ after: 200 })

        break

      default:
        break
    }

    this.toggleBodyOverflow(toggle)
    this.toggleActive(toggle)
  }
```

In a scenario where toggleShow method is called with toggle value "on", the sent callbacks are added to the this.cbsToCallOnHidden array via the addCbsToCallOnHidden method (the callbacks will be called when the curtain is hidden).

The following is an implementation of the addCbsToCallOnHidden method (scripts/objects/Curtain.js):

```
  addCbsToCallOnHidden(cbs) {
    cbs.map((cb) => {
      this.cbsToCallOnHidden.push(cb)
    })
  }
```

As we can see above, this is a simple method that iterates through adds the sent callbacks to the this.cbsToCallOnHidden array.

Next, in the toggleShow method (with the toggle parameter value set to "on") the sent elements to this method are attached to the this.curtain element via the appendElements method (e.g. .form component, which I will describe in the next subsection).

The following is an implementation of the appendElementsmethod (scripts/objects/Curtain.js):

```
  appendElements(elements) {
    elements.map((el) => {
      this.mainContainer.appendChild(el)
      this.addElToChildren(el)
    })
  }
```

As we can see above, it is also a simple method which, during the interaction, attaches elements to the previously created this.mainContainer element (so called curtain) and calls the addElToChildren method, the implementation of which is shown below (scripts/objects/Curtain.js):

```
  addElToChildren(el) {
    this.children.push(el)
  }
```

As we can see above, this method is only responsible for adding the submitted elements to the array named this.children (to be able to refer to these elements later)

At the very end of the toggleShow method two more methods are called, the first (toggleBodyOverflow) through the setPropsFn helper sets the overflow style property to hidden and the second (toggleActive) sets the appropriate class for the this.mainContainer element, thanks to which the background becomes darker.

The implementation of the toggleBodyOverflow method is shown below (scripts/objects/Curtain.js):

```
  toggleBodyOverflow(toggle) {
    setPropsFn([
      {
        elements: [document.body],
        styleProps: [
          {
            name: styleProps.names.overflow,
            value:
              toggle === common.on
                ? styleProps.values.hidden
                : styleProps.values.auto,
          },
        ],
      },
    ])
  }
```

As we can see in the example above, this method uses the setPropsFn helper (implementation is here scripts/helpers/setPropsFn.js), thanks to which it sets the appropriate styles depends on toggle value on the body element (when the value of the toggle parameter is "on", the overflow property of the body ejst element is set to hidden, which causes the screen to freeze and vice versa).
)
<br/>

The implementation of the toggleActive method is shown below (scripts/objects/Curtain.js):

```
  toggleActive(toggle) {
    toggleClassesFn(toggle, {
      elements: [this.mainContainer],
      classes: [classNames.curtain.active],
    })
  }
```

As we can see above, the toggleActive method through the helper toggleClassesFn (implementation is here scripts/helpers/toggleClassesFn.js)) sets or removes the appropriate class thanks to which we have a visible curtain.

<br/>

In order to better understand the next description (if toggle is set to "off"), the toggleShow method has been quoted below once again to make it easier to refer to the described logic below (scripts/objects/Curtain.js):

```
  toggleShow(toggle, { appendElements, cbsToCallOnHidden } = {}) {
    switch (toggle) {
      case common.on:
        this.addCbsToCallOnHidden(cbsToCallOnHidden)
        this.appendElements(appendElements)
        break

      case common.off:
        if (this.preventHidden) return
        this.callCbsOnHidden()
        this.clear({ after: 200 })

        break

      default:
        break
    }

    this.toggleBodyOverflow(toggle)
    this.toggleActive(toggle)
  }
```

In the case when toggleShow method is called with toggle value "off", at the beginning the condition is checked whether the value of this.preventHidden is true (this value is set by the simply togglePreventHidden method). If it is true, the whole function is return (this option is set when the form is sent to the backend so that the component cannot be removed).

Below is an example of an implementation of the togglePreventHidden method thanks to which we can set the value of the this.preventHidden variable (scripts/objects/Curtain.js):

```
  togglePreventHidden(toggle) {
    this.preventHidden = toggle === common.on ? true : false
  }
```

Below is a visual example that shows the inability to close the form component when sending data to the server:

<!-- Brak moliwości usunięcia formularza gif -->

If the value of this.preventHidden is false previously passed callbacks (sent when toggle value was "on") are called via callCbsOnHidden method the implementation of which is below (scripts/objects/Curtain.js):

```
 callCbsOnHidden() {
    this.cbsToCallOnHidden.map((cb) => cb())
  }
```

As we can see above, it is a simple method that calls elements (callbacks) while iterating through the array.

The next method that is called in sequence is clear method which after a specified time removes the children of this.mainContainer element (the so-called curtain), removes the array with children (in the case at hand, form component) and callbacks (sent when toggle value was "on").

Below is an implementation of the clear method with accompanying methods (scripts/objects/Curtain.js):

```
  clearCbsToCallOnHidden() {
    this.cbsToCallOnHidden = []
  }

  clearChildren() {
    this.children = []
  }

  clear({ after }) {
    this.clearCbsToCallOnHidden()
    setTimeout(() => {
      this.children.map((child) => {
        child.remove()
      })
      this.clearChildren()
    }, after)
  }
```

As we can see above, this method first calls the clearCbsToCallOnHidden method, which clears the array related to sent callbacks. Then thanks to the setTimeout function, after a certain time, an iteration on the array with curtain children is called, during which children are removed from the curtain structure (by remove function), and then the array is removed by clearChildren method, which contained information about children.

At the very end of toggleShow method in the case of toggle is "off", the same methods that I described earlier (toggleBodyOverflow, toggleActive) are called, but in the opposite way.

Below is a visual example of removing the form by clicking on the curtain and by clicking on the X button of the form component (during this operation in both cases the toggleShow method is called with the toggle parameter set to "off", which was described above):

<!-- Usunięcie formularza gif -->

<br/>
<br/>

### 3.2.5. Dynamic form creation by Form object (ok)

In this section, I would like to focus on explaining the creation of the form component along with its entire logic of operation along with sending data to the server (my backend application [Emails Handler](https://github.com/damian-lis/Emails-handler)).

Below is one more visual example of the logic of form component (an example also used when discussing the Curtain object):

<!-- Przykład tworzenia formularza wizualny -->

The form component shown above is created by a Form object.

Due to the large number of methods of the discussed object, I will not present the entire content of the file at once, but I will present certain code fragments with a detailed description (all code is in scripts/objects/Form.js).

<br/>

Before I go on to describe the logic of the discussed object, I would like to mention that an instance of this object is created at the beginning, to which various arguments are passed (as in the case of the previously discussed functionalities).

Below is an example of creating an instance of a Form object (among many other instances) for the home page (scripts/sites/index.js):

```
new Form(idReferences.global.leftContainer, idReferences.sneakPeeks.trigger)
```

As we can see in the example above, a reference to the container element (regarding the button) and a reference to the trigger element that triggers the action (similar to Sound object) are passed to the newly created instance.

Moving on to the very logic of the discussed object, first I would like to focus on the constructor of the object, which is very simple and is presented below (scripts/objects/Form.js):

```
class Form {
  constructor(container, trigger) {
    const containerSent = document.querySelector(container)
    this.dataFromUser = {}

    this.createInitialElements()
    this.createInitialComponents()
    appendElementsToContainerFn([this.btnComponent], containerSent)

    if (trigger) {
      const triggerElement = document.querySelector(trigger)
      triggerActionOnWindowScrollFn({
        onWhatElement: triggerElement,
        cbOnEnterTriggerEl: () => this.toggleBtnComponent(common.off),
        cbOnExitTriggerEl: () => this.toggleBtnComponent(common.on),
      })
    }
  }

more code here...
}
```

As we can see above, at the beginning of the constructor a variable is created with the container element taken from the DOM structure (containerSent). Then we have to assign an empty object as the default value for the this.dataFromUser variable (then it will be overwritten dynamically by filling the form by the user).

In the next stage, we call two methods: createInitialElements and createInitialComponents, which are responsible for creating the button that is visible on the left side of the screen (the word initial has been added to the methods because in this object, elements and components related to the form itself are also created - to distinguish the methods)

Below is an example of the implementation of the createInitialElements and createInitialComponents methods (scripts/objects/Form.js):

```
createInitialElements() {
    this.btn = createElementFn({
      element: elements.button,
      classes: [classNames.global.leftBtn],
      listeners: [
        {
          event: events.click,
          cb: () => this.handleMainComponentCreate(),
        },
      ],
    })

    this.emailImg = createElementFn({
      element: elements.img,
      classes: [classNames.utilities.margin('t', 5)],
      src: paths.emailImg,
    })
  }

  createInitialComponents() {
    this.btnComponent = appendElementsToContainerFn([this.emailImg], this.btn)
  }
```

As we can see in the example above, the createInitialElements method creates button elements such as this.btn and this.emailImg (form icon) through the createElementFn helper (implementation is here scripts/helpers/createElementsFn.js), and the createInitialComponents method combines this.emailImg with this.btn via the appendElementsToContainerFn helper (implementation is here scripts/helpers/appendElementsToContainerFn.js) to create this.btnComponent.

It should also be mentioned that when creating this.btn element in the createInitialElement method, an event listener is added for the event click, which calls handleMainComponentCreate, which will be described in a moment (responsible for creating the form component).

After creating the this.btnComponent component through the appendElementsToContainer helper (the same helper used with createInitialComponents), it is connected to the container element (sentContainer).

Finally, in the constructor, we are dealing with a triggerActionOnWindowScrollFn helper (implementation is here scripts/helpers/triggerActionOnWindowScrollFn.js - a full explanation of this helper can be found in the previous subsection) thanks to which we have the ability to manipulate the button when scrolling the screen into section related to the project sneak peeks (the same process as for the Sound object).

<br/>

Now I would like to focus on explaining the handleMainComponentCreate method, which, as I mentioned before, is called via event click on the button with the form icon.

An example of this method is shown below (scripts/objects/Form.js):

```
  handleMainComponentCreate() {
    this.toggleBtnComponent(common.off)
    this.createMainElements()
    this.createMainComponents()
    curtain.toggleShow(common.on, {
      appendElements: [this.mainComponent],
      cbsToCallOnHidden: [
        () => {
          this.toggleBtnComponent(common.on)
          this.resetFormInputsValue()
          this.resetDataFromUser()
        },
      ],
    })
  }
```

As we can see above, it is quite a complex method which first calls the toggleBtnComponent method with passing the oggle parameter to "off"

Below is an implementation of this solution (scripts/objects/Form.js):

```
  toggleBtnComponent(toggle) {
    setPropsFn([
      {
        elements: [this.btnComponent],
        styleProps: [
          {
            name: styleProps.names.transform,
            value:
              toggle === common.on
                ? styleProps.values.translateX(0)
                : styleProps.values.translateX(-100),
          },
        ],
      },
    ])
  }
```

This is a simple method that uses the setPropsFn helper (implementation is here scripts/helpers/setPropsFn.js) to set the appropriate styles on the button depending on the toggle value (in this case, the styles that allow to hide the button - toggle value "off")

Going forward, we have the createMainElements method responsible for creating elements (which, as in the case of createInitialElements, uses the createElementFn helper) that in the next stage will be connected in the appropriate way into a form component by createMainComponents (which, as in the case of createInitialComponents, uses the appendElementsToContainer helper).

Due to the large number of elements created in the createMainElements method I would like to focus on explaining the more complex ones (numbering has also been used, which will facilitate navigation in the description).

<br/>

#### List of touched threads in the createMainElements method:

1. Overview of creating a this.formFields element.
2. Overview of creating a this.formFieldsElements array.
3. Overview of creating all field elements specifying the input element in createFormFieldElements method.
4. Overview of the logic of the created input elements in createFormFieldElements method.
5. Overview of creating a label element in createFormFieldElements method.
6. Overview of creating a notification element with logic in createFormFieldElements method.
7. Overview of how to arrange the created inputs (form fields element) in the createMainElements method.
8. Overview of creating a form element with logic in createMainElements method.
9. Overview of creating a this.btnDelete element with logic in createMainElements method.

<br/>

1. Overview of creating a this.formFields element.

First of all, I would like to focus on the elements that form the basis of the form itself.

At the begining of create form elements by createMainElements method, I'd like to describe the process of creating an array containing container elements (form fields) for form field elements assigned to this.formFields variable (scripts/objects/Form.js):

```
    this.formFields = formFieldsContent.map((field) =>
      createElementFn({
        element: elements.div,
        classes: [
          classNames.form.field,
          `${classNames.form.field}-${field.name}`,
        ],
      })
    )
```

As we can see in the above example, the this.formFields array contains several elements (containers for form field elements) that were created on the base of formFieldsContent array (that contains objects with the information about individual elements of the field forms).

Below is an example of mentioned formFieldsContent array with objects (data/global/names.js):

```
export const formFieldsContent = [
  {
    label: 'Name',
    type: 'text',
    name: 'name',
    notification: 'name is required 😡',
  },
  {
    label: 'Subject',
    type: 'text',
    name: 'subject',
    notification: 'subject is required 😡',
  },
  {
    label: 'Email',
    type: 'email',
    name: 'email',
    notification: 'email is required 😡',
  },
  {
    label: 'Message',
    name: 'message',
    type: 'textarea',
    notification: 'message is required 😡',
  },
  {
    type: 'submit',
    value: 'Wyślij',
    name: 'submit',
    notification: 'Please wait a moment more! 🕐',
  },
]
```

As we can see above, formFieldsContent is an array with objects that contain information, thanks to which we will be able to more easily characterize the individual elements of field forms as they are created (I will describe this process in detail in a moment).

<br/>

2. Overview of creating a this.formFieldsElements array.

Now I would like to move on to discuss the logic responsible for creating individual elements of forms fields. This solution is also included in the createMainElements method and is shown below (scripts/objects/Form.js):

```
    this.formFieldsElements = formFieldsContent.map((fieldContent) =>
      this.createFormFieldElements(fieldContent)
    )
```

As we can see above, to create individual elements of form fields during the interaction on the formFieldsContent array (which was also used to create form fields), the method this.createFormFieldElements is used, to which an object containing information about form field elements is passed (this solution was introduced to keep the codes readable).

Below is an implementation of the method createFormFieldElements which is responsible for creating the individual elements of the form field (scripts/objects/Form.js):

```
createFormFieldElements({ label, type, name, value, notification }) {
let lab, input

    switch (type) {
      case common.submit:
        input = createElementFn({
          element: elements.input,
          type,
          name,
          id: name,
          value,
        })
        break

      default:
        lab = createElementFn({
          element: elements.label,
          textContent: label,
          htmlFor: name,
        })
        input = createElementFn({
          element:
            type === elements.textarea ? elements.textarea : elements.input,
          type,
          name,
          id: name,
          listeners: [
            {
              event: events.input,
              cb: (e) => this.handleFormInputTyping(e, name),
            },
            {
              event: events.focus,
              cb: (e) => this.handleFormInputFocus(e),
            },
          ],
        })
        break
    }
    const notificationEl = createElementFn({
      element: elements.span,
      attributes: [{ name: common.fieldname, value: name }],
      classes: [
        type === common.submit
          ? classNames.form.fieldSubmitNotification
          : classNames.form.fieldInputNotification,
      ],
      innerHTML: notification,
      listeners: [
        {
          event: events.click,
          cb: (e) =>
            type !== common.submit && this.handleFormNotificationClick(e),
        },
      ],
    })

    return lab ? { lab, input, notificationEl } : { input, notificationEl }

}
```

As we can see in the above example, the object that comes to the createFormFieldElements method is destructurized, which allows to immediately refer to its value.

<br/>

3. Overview of creating all field elements specifying the input element in createFormFieldElements method.

In the case of the submitted object containing the submit type, input of type submit is created, which is responsible for sending the entered data to the form to the server. Due to the fact that this type of input does not have a label element, this stage is skipped (it is not needed) and at the very end a notificationEl element is created, which is responsible for displaying appropriate notifications when submitting the form (its operation will be explained later).

Next, when another type of object is passed to the discussed method, e.g. text, email, textarea, an imput is created, which is responsible for entering data into the form, a label element is also created, which informs about the type of data that should be entered into the input element and the notificationEl element is created, which is activated in a form of red warning notification when the user wants to send the form without entering data into the given input (this notificationEl element behaves differently than for an input of type submit - description will be explained later).

It should be added that in the case of an object of the textarea type, instead of the input element, a textarea element is created, which makes it easier to enter longer messages (this element has also been assigned to the input variable to make it easier to manage the code).

<br/>

4. Overview of the logic of the created input elements in createFormFieldElements method.

Now I would like to delve into the logic of the individual elements that have been mentioned above.

I'd like to start with the input elements that each of them (except the input type submit) has practically the same properties (they differ only in their passed values). Each of them has two event listeners: the first one related to inputting a value into input (input event), which calls the handleFormInputTyping method, and the second one, related to input focus (focus event), which calls the handleFormInputFocus method.

For a better explanation of the above-mentioned methods, below is a fragment of the createFormFieldElements method that concerns creating input (scripts/objects/Form.js):

```
        input = createElementFn({
          element:
            type === elements.textarea ? elements.textarea : elements.input,
          type,
          name,
          id: name,
          listeners: [
            {
              event: events.input,
              cb: (e) => this.handleFormInputTyping(e, name),
            },
            {
              event: events.focus,
              cb: (e) => this.handleFormInputFocus(e),
            },
          ],
        })
```

First, I would like to explain the logic of the handleFormInputTyping method, which is called on event input, to which the event (e) and the name of the input are passed (based on it, the object property is dynamically created for the data entered into the input).

The implementation of this method is presented below (scripts/objects/Form.js):

```
  handleFormInputTyping(e, name) {
    this.dataFromUser[name] = e.target.value
  }
```

<br/>

As we can see above, it is a very simple method that dynamically creates the appropriate property of the object named this.dataFromUser based on the name of the input to which the input value is assigned (e.target.value). This collected data through the input elements are used in the case of sending to the server (my backend application named [Emails Handler](https://github.com/damian-lis/Emails-handler) that supports sending e-mails).

Next method I would like to describe is handleFormInputFocus method which is called on the event focus of input element to which the event (e) is passed

The implementation of this method is presented below (scripts/objects/Form.js):

```
  handleFormInputFocus(e) {
    this.toggleBorderDanger(common.off, {
      element: e.target,
    })
    this.toggleAlertMessage(common.off, {
      element: e.target.parentElement.querySelector(elements.span),
    })
  }
```

As we can see in the above example, this method calls two more: toggleBorderDanger passing the toggle value "off" and focused element to it and toggleAlertMessage to which toggle value "off" and the notification element (span) of this input is passed.

The above-mentioned methods are applicable when a given warning notification is displayed to the user when a specific field of the form is not completed (they allow to hide the notification along with the red highlighting of the input border). When discussing the form submit event, we will discuss the process of certain notifications appearing when the form fields are empty.

For a better illustration of hiding specific form field notifications on event focus of input element, below is a visual example of this process:

<!-- Wizualny przykłąd chowania notyfikacji -->

Below is the implementation of the two mentioned methods : toggleBorderDanger and toggleAlertMessage, which in this case are responsible for hiding the notification of a specific form field (passed toggle value "off") (scripts/objects/Form.js):

```
  toggleBorderDanger(toggle, { element }) {
    toggleClassesFn(toggle, {
      elements: [element],
      classes: [classNames.utilities.border.danger],
    })
  }

  toggleAlertMessage(toggle, { element }) {
    setPropsFn([
      {
        elements: [element],
        styleProps: [
          {
            name: styleProps.names.visibility,
            value:
              toggle === common.on
                ? styleProps.values.visible
                : styleProps.values.hidden,
          },
          {
            name: styleProps.names.opacity,
            value: toggle === common.on ? 1 : 0,
          },
        ],
      },
    ])
  }
```

In the case of the first of the above presented methods (toggleBorderDanger), a helper called toggleClassesFn (implementation is here scripts/helpers/toggleClassesFn) is used, which sets or removes the given class name. In this case, the class responsible for the red input border is removed (toggle value "off").

In the case of the second method (toggleAlertMessage), the setPropsFn helper (implementation is here scripts/helpers/setPropsFn) was used, thanks to which the passed element related to the notification is hidden (toggle value "off").

<br/>

The operation of the input element of type submit will be explained when discussing a form element that has an event listener set to event submit, which is called via the mentioned input element (this input element itself does not have any event listener).

<br/>

5. Overview of creating a label element in createFormFieldElements method.

Next, I'd like to discuss the label element which is assigned to the lab variable, which is only created for inputs of a type other than submit. Below is an excerpt from the createFormFieldElements method that shows the process of creating a label element (scripts/objects/Form.js):

```
        lab = createElementFn({
          element: elements.label,
          textContent: label,
          htmlFor: name,
        })
```

As we can see in the example above, this is a simple process using the createElementFn helper that occurs every time you create different elements.

Thanks to this label element, we have a short, small header for a given input element and an option thanks to which, after clicking on this element, an event focus will be triggered on the associated input element.

<br/>

6. Overview of creating a notification element with logic in createFormFieldElements method.

At the very end of the createFormFieldElements method, the so-called notifications that occur in each case of the input element (also in the case of input of the submit type).

Below is an excerpt from the createFormFieldElements method that shows the process of creating a notification element (scripts/objects/Form.js):

```
    const notificationEl = createElementFn({
      element: elements.span,
      attributes: [{ name: common.fieldname, value: name }],
      classes: [
        type === common.submit
          ? classNames.form.fieldSubmitNotification
          : classNames.form.fieldInputNotification,
      ],
      innerHTML: notification,
      listeners: [
        {
          event: events.click,
          cb: (e) =>
            type !== common.submit && this.handleFormNotificationClick(e),
        },
      ],
    })

```

As we can see in the above example, the notification element being created assigned to the notificationEl variable, in addition to a few additional properties, contains an event listener which is set to event click, which calls the handleFormNotificationClick method with the passing of the event (e) to it.

Below is an implementation of the mentioned handleFormNotificationClick method (scripts/objects/Form.js):

```
  handleFormNotificationClick(e) {
    e.target.parentElement
      .querySelector(
        e.target.attributes.fieldname.value === common.message
          ? elements.textarea
          : elements.input
      )
      .focus()
  }
```

As we can see above, this method searches for the input or textarea element associated with the clicked element (e.target) and sets the event focus on it by calling the focus function. Thanks to this, the previously discussed handleFormInputFocus method is triggered on input element, and it regains the event focus (the same logic as if we clicked directly on the input element).

This solution was introduced because the notification takes up part of the space of the input element and if you want to enter some values, it might not hit the input directly (improve user experience). Therefore, the focus on the input element is also triggered when clicking on the associated notification.

Below is a visual example of this solution:

<!-- Przykład kliknięcia w notyfikację -->

<br/>

7. Overview of how to arrange the created inputs (form fields element) in the createMainElements method.

After discussing the creation of elements of individual field forms, I would like to mention that the input elements created for better management have been separated (their references) into two variables: this.formSubmitInput and this.formTextInputs.

Below is an example of this solution (scripts/objects/Form.js):

```
    this.formSubmitInput = (() => {
      let submitInput
      this.formFieldsElements.map((formFieldElements) => {
        if (formFieldElements.input.type === common.submit)
          submitInput = formFieldElements.input
      })
      return submitInput
    })()

    this.formTextInputs = (() => {
      let textInputs = []
      this.formFieldsElements.map((formFieldElements) => {
        if (formFieldElements.input.type !== common.submit)
          textInputs.push(formFieldElements.input)
      })

      return textInputs
    })()

```

As we can see in the example above, both variables contain self-moving functions that return a specific input element in the iteration process over the array of form fields elements.

In the case of the this.formSubmitInput variable, input of the submit type is returned, and in the case of the this.formTextInputs variable, the remaining inputs related to entering data into the form are returned.

<br/>

8. Overview of creating a form element with logic in createMainElements method.

After the individual elements of form fields have been created, along with the elements of containers for these elements (form fields), it is time to discuss the form element, which is a container for the mentioned elements.

Below is an example of creating this element in a createMainElements method (scripts/objects/Form.js):

```
    this.form = createElementFn({
      element: elements.form,
      classes: [classNames.form.main],
      listeners: [
        { event: events.submit, cb: (e) => this.handleFormSubmit(e) },
      ],
    })
```

As we can see above, this element has a simple property structure with event listener set to event form submit that calls the handleFormSubmit method to which the event(e) is passed.

The implementation of the mentioned method is presented below (scripts/objects/Form.js):

```
  async handleFormSubmit(e) {
    e.preventDefault()
    const areEmptyFormInputsValue = this.checkIfEmptyFormInputsValue()
    if (areEmptyFormInputsValue) return

    this.disableFormInputs()
    this.toggleDeleteBtnComponent(common.on)
    this.toggleSpinnerComponent(common.on)
    this.toggleSubmitlNotifications(common.on, {
      firstNotificationDelay: 2000,
      secondNotificationDelay: 8000,
      thirdNotificationDelay: 15000,
    })
    curtain.togglePreventHidden(common.on)
    await this.handleEmailSent()
    this.toggleDeleteBtnComponent(common.off)
    this.toggleSpinnerComponent(common.off)
    this.toggleSubmitlNotifications(common.off, {})
    curtain.togglePreventHidden(common.off)
  }
```

As we can see in the example above, this is an asynchronous method because in this method we have a handleEmailSent asynchronous method too which is responsible for sending the form data to the server and which takes time to receive a response (this process will be described later).

At the very beginning of the discussed handleFormSubmit method, we have the default event blocked by preventDefault method and next we have a method checkIfEmptyFormInputsValue that checks if the values have been entered into the form inputs.

The implementation of the checkIfEmptyFormInputsValue method is presented below (scripts/objects/Form.js):

```
  checkIfEmptyFormInputsValue() {
    let isEmptyInputValue = false
    this.formTextInputs.map((input) => {
      if (input.value === '') {
        this.toggleBorderDanger(common.on, { element: input })
        this.toggleAlertMessage(common.on, {
          element: input.parentElement.querySelector(elements.span),
        })
        isEmptyInputValue = true
      }
    })

    return isEmptyInputValue
  }
```

As we can see in the above example, we are dealing with an iteration on the array of inputs (this.formTextInputs), during which it is checked whether the input value has been entered by the user or not. If it has not been entered, two methods are called: toggleBorderDanger and toggleAlertMessage, which have already been described earlier, but in this case they are called inversely (toggle value "on") to show the notification and the red border of the given input (previously these methods were called at the moment of the event focus on the input element or clicking on a given notification element - with toggle value "off").

Below is a visual example of a notification when a given input has no value entered by the user:

<!-- Wizualny przykład pojawienia się notyfikacji -->

Going further into the operation of the handleFormSubmit method, if the previously discussed checkIfEmptyFormInputsValue method returns true, the entire handleFormSubmit method is returned and will not send any data to the server (the user gets a notification that he must complete the form fields). If all the form fields are filled correctly (the email is checked by the email validator available in html5 in the email type input), before sending the user data, a series of methods is called to turn something on.

To make the description easier to read, I will present the handleFormSubmit method one more time below (scripts/objects/Form.js):

```
  async handleFormSubmit(e) {
    e.preventDefault()
    const areEmptyFormInputsValue = this.checkIfEmptyFormInputsValue()
    if (areEmptyFormInputsValue) return

    this.disableFormInputs()
    this.toggleDeleteBtnComponent(common.off)
    this.toggleSpinnerComponent(common.on)
    this.toggleSubmitlNotifications(common.on, {
      firstNotificationDelay: 2000,
      secondNotificationDelay: 8000,
      thirdNotificationDelay: 15000,
    })
    curtain.togglePreventHidden(common.on)
    await this.handleEmailSent()
    this.toggleDeleteBtnComponent(common.off)
    this.toggleSpinnerComponent(common.off)
    this.toggleSubmitlNotifications(common.off, {})
    curtain.togglePreventHidden(common.off)
  }
```

As we can see above, the first method after checking the condition of returned value of checkIfEmptyFormInputsValue method is disableFormInputs method.

Its implementation is shown below (scripts/objects/Form.js):

```
disableFormInputs() {
const formInputs = [this.formSubmitInput, ...this.formTextInputs]

    formInputs.map((input) =>
      setPropsFn([
        {
          elements: [input],
          props: [
            {
              name: elementProps.names.disabled,
              value: true,
            },
          ],
          styleProps: [
            {
              name: styleProps.names.opacity,
              value: 0.4,
            },
          ],
        },
      ])
    )

}
```

As we can see above, it is a simple method which, through the setPropsFn helper, sets all the inputs of the form (also including the submit type input) to off (setting slightly transparent inputs for a better user experience). This solution was introduced so that the user could not enter anything when sending the data form.

A visual example of excluding inputs from use is shown below:

<!-- Wizualny przykłąd wyłączenia inputów z uzytku -->

<br/>

The next method that is called after the mentioned method is the toggleDeleteBtnComponent method, the implementation of which is as follows (scripts/objects/Form.js):

```
  toggleDeleteBtnComponent(toggle) {
    setPropsFn([
      {
        elements: [this.btnDeleteComponent],
        styleProps: [
          {
            name: styleProps.names.visibility,
            value:
              toggle === common.off
                ? styleProps.values.hidden
                : styleProps.values.visible,
          },
          {
            name: styleProps.names.opacity,
            value: toggle === common.off ? 0 : 1,
          },
        ],
      },
    ])
  }
```

As we can see in the above example, through the setPropsFn helper, styles are set, which hide the button (toggle value "off")that is responsible for removing the form after clicking (this was entered so that the user could not remove the window of form durign the data when sending).

The same process as mentioned above is the case with the next method (togglePreventHidden), this time the method called on an instance of the Curtain object, which also prevents the form from being deleted through the curtain element (this process is described in subsection 3.2.4 regarding the Curtain object).

Below is a visual example of this solution:

<!-- Przykład braku moliwosci usuniecia formularza przez kurtynę -->

<br/>

The next method that is called in sequence is the toggleSpinnerComponent method, the implementation of which is shown below (scripts/objects/Form.js):

```
  toggleSpinnerComponent(toggle) {
    setPropsFn([
      {
        elements: [this.formSubmitInput],
        styleProps: [
          {
            name: styleProps.names.display,
            value:
              toggle === common.on
                ? styleProps.values.none
                : styleProps.values.block,
          },
        ],
      },
      {
        elements: [this.formSpinnerComponent],
        styleProps: [
          {
            name: styleProps.names.display,
            value:
              toggle === common.on
                ? styleProps.values.flex
                : styleProps.values.none,
          },
        ],
      },
    ])
  }
```

As we can see above, this simple method, through the setPropsFn helper, in the case of passed toggle value "on" allows to hide the input type submit and show the loading spinner (for a better user experience during sending form data to server).

Below is a visual example of this solution:

<!-- Przykład spinnera -->

<br/>

The penultimate method before calling the asynchronous method responsible for sending data is the toggleSubmitlNotifications method, the implementation of which is presented below (scripts/objects/Form.js):

```
  toggleSubmitlNotifications(
    toggle,
    { firstNotificationDelay, secondNotificationDelay, thirdNotificationDelay }
  ) {
    const formSubmitnotification = this.formSubmitInput.parentElement.querySelector(
      elements.span
    )

    switch (toggle) {
      case common.on:
        this.showNotificationTimeout = setPropsFn(
          [
            {
              elements: [formSubmitnotification],
              styleProps: [
                {
                  name: styleProps.names.visibility,
                  value: styleProps.values.visible,
                },
                {
                  name: styleProps.names.opacity,
                  value: 1,
                },
              ],
            },
          ],
          firstNotificationDelay
        )
        this.changeFirstNotificationTimout = setPropsFn(
          [
            {
              elements: [formSubmitnotification],
              props: [
                {
                  name: elementProps.names.innerHTML,
                  value: info.momentLonger,
                },
              ],
            },
          ],
          secondNotificationDelay
        )
        this.changeSecondNotificationTimout = setPropsFn(
          [
            {
              elements: [formSubmitnotification],
              props: [
                {
                  name: elementProps.names.innerHTML,
                  value: info.sendingNow,
                },
              ],
            },
          ],
          thirdNotificationDelay
        )
        break

      case common.off:
        clearInterval(this.showNotificationTimeout)
        clearInterval(this.changeFirstNotificationTimout)
        clearInterval(this.changeSecondNotificationTimout)
        setPropsFn([
          {
            elements: [formSubmitnotification],
            styleProps: [
              {
                name: styleProps.names.visibility,
                value: styleProps.values.hidden,
              },
              {
                name: styleProps.names.opacity,
                value: 0,
              },
            ],
          },
        ])

      default:
        break
    }
  }
```

As we can see above, this method takes the toggle value and an object with three time values after which the appropriate notifications are to be triggered.

Each setTimeout function, which calls the setPropsFn helper after some time (responsible for displaying the appropriate information for the user), is assigned to a variable so that when this method is called again with the value toggle "off", it can clear the setTimeout function that has not yet been called (because previously received a response from the server).

<br/>

The very last method before calling the asynchronous handleEmailSent method (responsible for sending data) is the togglePreventHidden method of instance of Curtain object which prevents the removal of the form by clicking on the curtain element (this process was explained when describing the Curtain object)

Below is a visual example of this solution:

<!-- Wizualny przykład braku molwiosci usunięcia formularza poprzez klikniecie na element kurtyny -->

In order to better illustrate the following descriptions, I will present the entire handleFormSubmit( method once again (scripts/objects/Form.js):

```
  async handleFormSubmit(e) {
    e.preventDefault()
    const areEmptyFormInputsValue = this.checkIfEmptyFormInputsValue()
    if (areEmptyFormInputsValue) return

    this.disableFormInputs()
    this.toggleDeleteBtnComponent(common.off)
    this.toggleSpinnerComponent(common.on)
    this.toggleSubmitlNotifications(common.on, {
      firstNotificationDelay: 2000,
      secondNotificationDelay: 8000,
      thirdNotificationDelay: 15000,
    })
    curtain.togglePreventHidden(common.on)
    await this.handleEmailSent()
    this.toggleDeleteBtnComponent(common.off)
    this.toggleSpinnerComponent(common.off)
    this.toggleSubmitlNotifications(common.off, {})
    curtain.togglePreventHidden(common.off)
  }
```

As we can see above, after calling the previously described methods, the asynchronous handleEmailSent method is called, which is responsible for sending the form data to the server.

The implementation of this method is below (scripts/objects/Form.js):

```
  async handleEmailSent() {
    return await fetch(mailEndPoint, {
      method: fetchProps.methods.POST,
      headers: {
        [fetchProps.headers.props.ContentType]:
          fetchProps.headers.values.applicationJson,
      },
      body: JSON.stringify(this.dataFromUser),
    })
      .then((response) => response.json())
      .then((data) =>
        data.success
          ? this.showMessageAfterSubmit(info.messageSent)
          : this.showMessageAfterSubmit(info.somethingWentWrong)
      )
      .catch(() => this.showMessageAfterSubmit(info.unableToConnecte))
  }
```

As we can see above, this method is a simple method which uses the fetch function, which takes the appropriate endpoint (here is the endpoint related to my server application [Emails Handler](https://github.com/damian-lis/Emails-handler)) and sends the data collected form data using the POST method. At the end of this method, depending on the response from the server, a different message is sent to the showMessageAfterSubmit method.

The implementation of method responsible for displaying the final messages depending on the response from the server is presented below (scripts/objects/Form.js):

```
showMessageAfterSubmit(message) {
    this.resetFormInputsValue()
    setPropsFn(
      [
        {
          elements: [this.titleComponent],
          styleProps: [
            {
              name: styleProps.names.top,
              value: '50%',
            },
            {
              name: styleProps.names.transition,
              value: '0.9s',
            },
            {
              name: styleProps.names.position,
              value: styleProps.values.relative,
            },
            {
              name: styleProps.names.transform,
              value: styleProps.values.translateY(-50),
            },
          ],
        },

        {
          elements: [this.formComponent],
          styleProps: [
            {
              name: styleProps.names.transition,
              value: '0.3s',
            },
            {
              name: styleProps.names.height,
              value: '0px',
            },
            {
              name: styleProps.names.overflow,
              value: styleProps.values.hidden,
            },
            {
              name: styleProps.names.opacity,
              value: 0,
            },
            {
              name: styleProps.names.visibility,
              value: styleProps.values.hidden,
            },
          ],
        },
        {
          elements: [this.title],
          props: [
            {
              name: elementProps.names.innerHTML,
              value: message,
            },
          ],
        },
      ],
      300
    )
  }
```

As we can see above, this method initially removes the input values via the resetFormInputsValue method (which is very simple and will not be described in detail here). Then, using the setPropsFn helper and the message sent to the discussed method, the appropriate message is displayed to the user (by changing the styles and properties of various elements).

Below is a visual example of this solution:

<!-- Wizualny przykłąd końcowych wiaodmości -->

After receiving a response from the server regarding whether the email with the sent form data has been sent or not, the methods (toggleDeleteBtnComponent, toggleSpinnerComponent, toggleSubmitlNotifications togglePreventHidden) that were already described earlier are called, but in the opposite way (I will not describe the operation of this methods because their logic is just opposite.)

Here is one more example of the handleFormSubmit method in which these methods follow the handleEmailSent method.(scripts/objects/Form.js):

```
  async handleFormSubmit(e) {
    e.preventDefault()
    const areEmptyFormInputsValue = this.checkIfEmptyFormInputsValue()
    if (areEmptyFormInputsValue) return

    this.disableFormInputs()
    this.toggleDeleteBtnComponent(common.off)
    this.toggleSpinnerComponent(common.on)
    this.toggleSubmitlNotifications(common.on, {
      firstNotificationDelay: 2000,
      secondNotificationDelay: 8000,
      thirdNotificationDelay: 15000,
    })
    curtain.togglePreventHidden(common.on)
    await this.handleEmailSent()
    this.toggleDeleteBtnComponent(common.off)
    this.toggleSpinnerComponent(common.off)
    this.toggleSubmitlNotifications(common.off, {})
    curtain.togglePreventHidden(common.off)
  }
```

<br/>

9. Overview of creating a this.btnDelete element with logic in createMainElements method.

Before I finish discussing the createMainElements method, which, as we know, is responsible for creating the above-mentioned elements, I would like to comment on the element (this.btnDelete) responsible for removing the form component and its creation method is presented below (scripts/objects/Form.js):

```
    this.btnDelete = createElementFn({
      element: elements.button,
      classes: [classNames.form.btnDelete],
      textContent: 'X',
      listeners: [
        {
          event: events.click,
          cb: () => curtain.toggleShow(common.off),
        },
      ],
    })
```

As we can see in the above example, the presented element has an event listener for the event click, after which the toggleShow method of the Curtain object is called with the toggle value set to "off". With this method, the previously added form component (by the toggleShow method of Curtain object called with toggle set to "on" - this process will be presented in a moment) is removed from the structure of container element(curtain) of Curtain object.

It is worth mentioning here that the discussed form component can be removed by clicking on the curtain element of the Curtain object, which triggers the same method.

An example of the discussed element (curtain) is shown below for the Curtain object:(scripts/objects/Curtain.js):

```
    this.mainContainer = createElementFn({
      element: elements.div,
      classes: [classNames.curtain.container],
      listeners: [
        {
          event: events.click,
          cb: () => this.toggleShow(common.off),
        },
      ],
    })
```

As we can see above, the same as in the this.btnDelete element, the this.mainContainer element (curtain) has an event listener, on event click, which calls the toggleShow method passing toggle with the value "off".

Below is a visual example of removing a form component by clicking its button (this.btnDelete) and by clicking a curtain (this.mainContainer of Curtain object):

<!-- Przykład usunięcia formularza przez X oraz kurtynę -->

<br/>

For a small summary, the above detailed description was about the most complex elements and their logic (this is also where the numbering ends), which were created by the createMainElements method in the handleMainComponentCreate method, which is called as previously described by clicking on the button on the left side of the form icon page.

As a reminder, an example of the handleMainComponentCreate method is shown below once again (scripts/objects/Form.js):

```
  handleMainComponentCreate() {
    this.toggleBtnComponent(common.off)
    this.createMainElements()
    this.createMainComponents()
    curtain.toggleShow(common.on, {
      appendElements: [this.mainComponent],
      cbsToCallOnHidden: [
        () => {
          this.toggleBtnComponent(common.on)
          this.resetFormInputsValue()
          this.resetDataFromUser()
        },
      ],
    })
  }
```

As we can see above, the next method after discussed earlier createMainElements method is the createMainComponents method, which combines previously created elements into components.

Below is an implementation of the createMainComponents method (scripts/objects/Form.js):

```
  createMainComponents() {
    this.formSpinnerComponent = appendElementsToContainerFn(
      [this.formSpinner],
      this.formSpinnerContainer
    )

    this.formFieldComponents = this.formFields.map((field, index) => {
      const { lab, input, notificationEl } = Object.entries(
        this.formFieldsElements
      )[index][1]

      lab
        ? appendElementsToContainerFn([lab, input, notificationEl], field)
        : appendElementsToContainerFn(
            [input, notificationEl, this.formSpinnerComponent],
            field
          )

      return field
    })

    this.formComponent = (() => {
      this.formFieldComponents.map((fieldComponent) =>
        this.form.appendChild(fieldComponent)
      )
      this.formContainer.appendChild(this.form)

      return this.formContainer
    })()

    this.titleComponent = appendElementsToContainerFn(
      [this.title],
      this.titleContainer
    )

    this.cardInnerComponent = appendElementsToContainerFn(
      [this.titleComponent, this.formComponent],
      this.mainContainerInner
    )

    this.btnDeleteComponent = appendElementsToContainerFn(
      [this.btnDelete],
      this.btnDeleteContainer
    )

    this.mainComponent = appendElementsToContainerFn(
      [this.btnDeleteComponent, this.cardInnerComponent],
      this.mainContainer
    )

    return this.mainComponent
  }
```

As we can see above, it is a simple method that properly combines previously created elements into components using the appendElementsToContainer helper. It is simply process of attaching elements to a container elements, in which each container with attached elements is assigned to the component variable to highlight the element with children. At the very end of this method, after the various components are properly combined, the this.mainComponent is created, which is returned from the createMainComponents method.

Next the mentioned component (this.mainComponent) is sent through the toggleShow method of Curtain object (last fragment of the handleMainComponentCreate method) to attach this component to curtain element (the entire logic of the toggleShow method of Curtain object is explained when discussing the Curtain object in section 3.2.4.).

An example of calling this method is shown below (scripts/objects/Form.js):

```
     curtain.toggleShow(common.on, {
      appendElements: [this.mainComponent],
      cbsToCallOnHidden: [
        () => {
          this.toggleBtnComponent(common.on)
          this.resetFormInputsValue()
          this.resetDataFromUser()
        },
      ],
    })

```

As we can see above, to toggleShow method is sent the toggle value "on" (process of curtain show), an object with elements to be attached (the mentioned this.mainComponent) and a callback, which is to call 3 methods (this toggleBtnComponent, this.resetFormInputsValue, this.resetDataFromUser) after the logic of hiding the curtain element (mentioned methods whose operation is very simple wont be described here - entire implementation is here scripts/objects/Form.js).

Finally, below is a visual example of the process of creating a form component and its attachment to the container (curtain) element of a Curtain object:

<!-- Przyykład tworznia formularza -->

<br/>
<br/>

### 3.2.6. Possibility to go back to the home page by BackBtn object (ok)

The functionality that I would like to describe here concerns the possibility of going back to the home page from each subpage.

As in the case of sound handling and creating a form, this functionality is called by the button on the left side of the screen (for obvious reasons, this button is only available on subpages).

Below is a visual example of this solution on the privacy policy page (the same solution applies to subpages related to the descriptions of projects I have created):

<!-- Zdjęcie buttona cofania na private policy -->

In order to implement the logic we see above, an instance of the BackBtn object is created in the file, which constitutes the main script for the privacy policy page (the same operation as for the previous objects discussed).

The solution looks as follows (scripts/sites/privatePolicy.js):

```

new BackBtn(idReferences.global.leftContainer)

```

As we can see in the example presented above, only the reference of the container element is passed to the created instance (on the basis of which the appropriate element of the DOM structure is searched for and the component responsible for the return button to the home page is attached to it).

<br/>

The logic of the discussed BackBtn object is implemented as follows: (scripts/objects/BackBtn.js):

```

import {
createElementFn,
appendElementsToContainerFn,
} from '/scripts/helpers/index.js'
import { classNames, paths, elements } from '/data/global/names.js'

class BackBtn {
constructor(container) {
const containerSent = document.querySelector(container)
this.createElements()
this.createComponents()

    appendElementsToContainerFn([this.mainComponent], containerSent)

}

createElements() {
this.mainContainer = createElementFn({
element: elements.a,
href: '/',
classes: [classNames.global.leftBtn],
})
this.arrowImg = createElementFn({
element: elements.img,
src: paths.arrowImg,
})
}

createComponents() {
this.mainComponent = appendElementsToContainerFn(
[this.arrowImg],
this.mainContainer
)
}
}

export default BackBtn

```

As we can see above, it is a very simple object that closely resembles a Sound object. In this BackBtn object by createElements method (which uses the createElement helper - the implementation is here scripts/helpers/createElementFn.js) are created two individual elements: this.mainContainer and this.arrowImg element is responsible for the link to the home page and container.

Thanks to createComponents method (which uses the appendElementsToContainerFn helper - the implementation is here scripts/helpers/appendElementsToContainer.js)) a component named this.mainComponent was created by combining the previously mentioned elements which is attached to the containerSent (element found with the sent reference to the object) by appendElementsToContainerFn helper at the end of constructor (the same logic of creating and connecting elements as in the case of the previously discussed objects).

<br/>
<br/>

### 3.2.7. Create project sneak peeks by SneakPeeks object (ok)

Sneak peeks of the projects that I have created appear at the bottom of the main page. It looks like this:

<!-- Przykład z zajawkami -->

<br/>

Before I go to the description of the logic of this object, which is responsible for creating the sneak peeks presented above, I would like to present the process of creating its instance with the transfer of appropriate parameters.

The following is the index.js file, which is the main script for the index.html page that instantiates a SneakPeeks object alongside other object instances (scripts/sites/index.js):

```

new SneakPeeks(
idReferences.sneakPeeks.main,
idReferences.sneakPeeks.trigger,
idReferences.sneakPeeks.wrapper,
sneakPeeks
)

```

As we can see in the example above, the following parameters are passed to the SneakPeeks object: idReferences.sneakPeeks.main (reference to the container to which the object with created snippets will be attached), idReferences.sneakPeeks.trigger (reference to the action trigger element, which we know from the description earlier objects), idReferences.sneakPeeks.wrapper (reference to the element that is closely related to the trigger), and sneakPeeks (data on the basis of which sneak peeks elements are created).

After the presentation of creating an instance of a SneakPeeks object, I can now move on to presenting the logic behind this object.

Below is the implementation of the discussed object (due to the quite extensive methods createElements and createComponents of this object, this methods have been shortened) (scripts/objects/SneakPeeks.js):

```

import {
createElementFn,
triggerActionOnWindowScrollFn,
appendElementsToContainerFn,
setClassesFn,
} from '/scripts/helpers/index.js'
import { classNames, info, elements } from '/data/global/names.js'

class SneakPeeks {
constructor(container, trigger, wrapper, data) {
const containerSent = document.querySelector(container)
this.data = data

    this.createElements()
    this.createComponents()
    appendElementsToContainerFn([this.mainComponent], containerSent)

    if (trigger) {
      this.triggerElement = document.querySelector(trigger)
      this.wrapperToRelease = document.querySelector(wrapper)
      triggerActionOnWindowScrollFn({
        onWhatElement: this.triggerElement,
        cbOnEnterTriggerEl: () => this.handleOnEnterTriggerEl(),
      })
    }

}

createElements() {
this.mainContainer = createElementFn({
element: elements.div,
classes: [classNames.sneakPeeks.container],
})

    this.elements = this.data.map((dataPortion) => {
      const linkWrapper = dataPortion.duringDevelopment
        ? createElementFn({
            element: elements.a,
            classes: [classNames.sneakPeek.linkWrapper],
          })
        : createElementFn({
            element: elements.a,
            classes: [classNames.sneakPeek.linkWrapper],
            href: dataPortion.route,
          })

      const container = createElementFn({
        element: elements.div,
        classes: [classNames.sneakPeek.container],
      })

      more code here...
    })

}

createComponents() {
this.sneakPeekComponents = this.elements.map(
({
linkWrapper,
container,
thubnail,
prevContainer,
title,
intro,
iconsContainer,
icons,
ribbonContainer,
ribbonText,
}) => {
const prevComponent = appendElementsToContainerFn(
[title, intro],
prevContainer
)

       more code here...
      }
    )

    this.mainComponent = appendElementsToContainerFn(
      this.sneakPeekComponents,
      this.mainContainer
    )

}

handleOnEnterTriggerEl() {
setClassesFn([
{
element: this.triggerElement,
classes: [classNames.utilities.height.full],
},
{
element: this.wrapperToRelease,
classes: [classNames.utilities.animations.slideInFromTop],
},
])
}
}

export default SneakPeeks

```

As we can see above, the course of the logic of this object is very similar to the objects discussed earlier. In the constructor, firstly, we search for elements based on the sent references and assign them to variables (conditionally in the case of a reference sent to the trigger element), assign the transferred data to a variable, call the createElements, createComponents methods, appendElementsToContainerFn (implementation is in scripts/helper/appendElementsToContainerFn.js) and triggerActionOnWindowScrollFn helper (implementation is in scripts/helper/triggerActionOnWindowScrollFn.js and is described in detail in section 3.2.3).

In the case of the createElements method, elements are created (as in the case of the previously discussed objects, based on the createElementFn helper - implementation is in scripts/helper/createElementFn.js) based on the transferred data, which an excerpt is shown below (scripts/objects/SneakPeeks.js):

```

export default [
{
route: '/fluentBlog.html',
image: '/images/projects/FluentBlog/browseArticle.gif',
alt: 'FluentBlog',
title: 'FluentBlog',
intro: 'A small blog that uses server side rendering in next.js',
icons: [
{ image: '/images/icons/technologies/tailwindcss.jpg' },
{ image: '/images/icons/technologies/next.jpg' },
],
},
{
route: '/',
image: '',
alt: 'Talk to Gisapia and the Others',
title: 'Talk to Gisapia and the Others',
intro:
'This little game will let you chat with amazing characters who will remember and understand your answers!',
icons: [
{ image: '/images/icons/technologies/html.jpg' },
{ image: '/images/icons/technologies/css.jpg' },
{ image: '/images/icons/technologies/js.jpg' },
{ image: '/images/icons/technologies/nodejs.jpg' },
{ image: '/images/icons/technologies/sendgrid.jpg' },
],
},

more code here...

```

As we can see in the above example, data is an array of objects, each of which has an appropriate information structure, thanks to which the createElements method of the SneakPeeks object easily allows to create appropriate elements with appropriate properties (thanks to the array, the whole process takes place during iteration).

In the case of the createComponents method that follows the createElements method, appropriate components are created based on previously created elements (using the appendElementsToContainerFn helper), such as: this.sneakPeekComponents (the variable refers to an array of components created from a combination of elements related to a single sneak peek) and this.mainComponent (the variable refers to to the container with attached components of the sneak peek).

Next, the created main component (this.mainComponent) containing the components of individual sneak peek is attached to the container assigned to the containerSent variable using the appendElementsToContainerFn helper (as in the case of creating components in the createComponents method).

Finally, the triggerActionOnWindowScrollFn helper is executed in the object's constructor, which works a bit differently than the objects mentioned earlier.

The action of the mentioned helper applies to all the sneak peeks about the projects when you scroll to sections with id sneakPeeks-trigger (our trigger element).

A visual example of this process is shown below:

<!-- Wizualny przykład pokazania sneak peeks -->

In order to describe in detail the operation of the above example, I will present below the logic of the triggerActionOnWindowScrollFn helper without other constructor elements of the discussed object (scripts/objects/SneakPeeks.js):

```

    if (trigger) {
      this.triggerElement = document.querySelector(trigger)
      this.wrapperToRelease = document.querySelector(wrapper)
      triggerActionOnWindowScrollFn({
        onWhatElement: this.triggerElement,
        cbOnEnterTriggerEl: () => this.handleOnEnterTriggerEl(),
      })
    }

```

As we can see in the above example, the discussed helper can only be called when the reference to the trigger element is sent to the object (this was introduced because in some cases this element is not sent).

After checking the condition, before the helper is called, the appropriate elements of the DOM structure are downloaded: trigger and wrapper.

Then, after retrieving the appropriate elements from the DOM structure, the discussed helper is called, to which retrieved elements such as this.triggerElement, within which the action of sneak peeks show should be called and the handleOnEnterTriggerEl method, which is responsible for the above-mentioned action are passed (this.wrapperToRelease element is used in the this.handleOnEnterTriggerEl method, which will be described below).

The following is an implementation of the handleOnEnterTriggerEl method which is responsible for the sneak peeks (scripts/objects/SneakPeeks.js):

```

handleOnEnterTriggerEl() {
setClassesFn([
{
element: this.triggerElement,
classes: [classNames.utilities.height.full],
},
{
element: this.wrapperToRelease,
classes: [classNames.utilities.animations.slideInFromTop],
},
])
}

```

As we can see above, it is a simple method which, using the setClassesFn helper (the entire implementation is in scripts/helper/setClassesFn.js), sets the class associated with the full height on the this.triggerElement element and on the this.wrapperToRelease element the class with the slideInFromTop animation responsible for the effect of sliding from the top.

Below, there is once again a visual example of the appearance of teasers about the projects I have created:

<!-- Wizualne wyjedanie sneak peeksów -->

<br/>
<br/>

### 3.2.8. Create descriptions by DescriptionArrange object (ok)

Some of the larger descriptions on the page were created using the DescriptionArrange object. This solution was introduced because creating descriptions in the html file itself is not readable.

In the case of the home page, there is a description of my person and my skills created dynamically by the DescriptionArrange object (such a dynamic description is also created on the private policy page and on each page with the description of the created project - a visual example of them is provided at the end of this subsection).

Below is a visual example of my person and my skills descriptions on the home page:

<!-- Przykłady opisów na stronie głównej -->

<br/>

In order to create the descriptions shown above, two instances of the DescriptionArrange object were created in the index.js file, which is the main script file for the main page (along with other object instances).

Below is an example of this solution (scripts/sites/index.js):

```

new DescriptionArrange(idReferences.about.description, aboutDescription)
new DescriptionArrange(idReferences.skills.description, skillsDescription)

```

Created instances of the DescriptionArrange object, as we can see above, take the reference to container element to which the element (container) found through this reference will be attached elements created on the basis of the data sent regarding the description (aboutDescription and skillsDescription).

The object itself, which is responsible for creating the description is presented below (scripts/objects/DescriptionArrange.js):

```

import {
createElementFn,
appendElementsToContainerFn,
} from '/scripts/helpers/index.js'
import { common, elementProps } from '/data/global/names.js'

class DataArrange {
constructor(container, description) {
this.containerSent = document.querySelector(container)
this.description = description

    this.createElements()
    appendElementsToContainerFn(this.elements, this.containerSent)

}

createElements() {
this.elements = this.description.map((object) => {
switch (object.type) {
case common.headline:
const headline = createElementFn({
element: object.element,
classes: object.classes,
textContent: object.content,
})

          return headline

        case common.header:
          const title = createElementFn({
            element: object.element,
            textContent: object.content,
            classes: object.classes,
          })

          return title

        case common.image:
          const image = createElementFn({
            element: object.element,
            classes: object.classes,
            src: object.content,
          })

          return image

        case common.paragraph:
          return object.content.map((paragraphContent) => {
            const paragraph = createElementFn({
              element: object.element,
              classes: object.classes,
              textContent: paragraphContent,
            })

            return paragraph
          })

        case common.link:
          const link = createElementFn({
            element: object.elements.link,
            target: elementProps.values.sblank,
            classes: object.classes.link,
            href: object.path,
            textContent: object.content.link,
          })
          const paragraph = createElementFn({
            element: object.elements.paragraph,
            classes: object.classes.paragraph,
            textContent: object.content.paragraph,
          })
          paragraph.appendChild(link)

          return paragraph

        case common.list:
          const list = createElementFn({
            element: object.elements.list,
          })

          const listItems = object.content.map((listItemContent) =>
            createElementFn({
              element: object.elements.listItem,
              classes: object.classes.listItem,
              textContent: listItemContent,
            })
          )

          listItems.map((listItem) => list.appendChild(listItem))

          return list

        case common.code:
          const pre = createElementFn({
            element: common.elements.pre,
          })
          const code = createElementFn({
            element: common.elements.code,
            classes: [common.classNames.prism.languageJS],
            textContent: object.value,
          })
          pre.appendChild(code)

          return pre

        default:
          break
      }
    })

}
}

export default DataArrange

```

As we can see in the example above, the object is big but has a very simple logic and is responsible for create elements based on the transferred data (description) through a well-known method from previous objects called createElements ((which uses a createElementsFn helper - the implementation is here scripts/helpers/createElementsFn.js)) and and is responsible for attaching these elements to the this.containerSent (found based on the provided container reference).

In order to understand well how given description elements are created, below is a file (data) describing my skills on the basis of which these elements were created (data/descriptions/skills.js):

```

import { common, classNames, elements } from '/data/global/names.js'

export default [
{
type: common.headline,
element: elements.h(3),
content: 'My skills',
classes: [
classNames.utilities.margin('t', 10),
classNames.utilities.text.center,
],
},

{
type: common.header,
element: elements.h(5),
content: '1. Level enough to write more advanced frontend',
classes: [classNames.utilities.margin('t', 30), ,],
},
{
type: common.list,
elements: {
list: elements.ul,
listItem: elements.li,
},
content: [
'- HTML (Semanthic writing),',
'- CSS (SASS, BEM, TailwindCSS and basic level of Bootstrap),',
'- JavaScript (OOP, Design Patterns, Functional Programming),',
'- React (Redux, Hooks, Styled Components, Compound Components etc.),',
'- Next (basic understanding the concept of server side rendering),',
],
classes: {
listItem: [
classNames.utilities.margin('b', 15, classNames.utilities.dash),
],
},
},
{
type: common.header,
element: elements.h(5),
content: '2. Level enough to write basic backend',
classes: [classNames.utilities.margin('t', 30), ,],
},
{
type: common.list,
elements: {
list: elements.ul,
listItem: elements.li,
},
content: [
'- Node/Express (simple E-COMMERCE backend with REST API),',
'- MongoDB (simple handle with Express)',
],
classes: {
listItem: [
classNames.utilities.margin('b', 15, classNames.utilities.dash),
],
},
},
{
type: common.header,
element: elements.h(5),
content: '3. When i have a free time',
classes: [classNames.utilities.margin('t', 30), ,],
},
{
type: common.list,
elements: {
list: elements.ul,
listItem: elements.li,
},
content: ['- PHP (basic level)'],
classes: {
listItem: [
classNames.utilities.margin('b', 0, classNames.utilities.dash),
],
},
},
]

```

In the above example, we see an array that has several objects that contain the characteristics of individual parts of the description (e.g. type, element, content and classes). Thanks to this arrangement of data related to the skills description, it can dynamically create a description that will contain appropriate elements, styles and content (based on the switch statement in the createElements method of the object).

In the case of the privacy policy page and pages regarding created projects, the same principle applies.
Data related to the description of the private policy page can be found here data/descriptions/privatePolicy.js, and data related to the descriptions of individual projects in the data/descriptions/projects folder (due to the same operation, they are not described here).

Below is just a visual example of the TalkToGisapiaAndTheOthers project description and the privacy policy description created dynamically through the DescriptionArrange object:

<!-- Pokazanie opisu projektu oraz private policy-->

```

```
