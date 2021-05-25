# Portfolio website

This project provides information about me and projects that I have done and allows You to contact me via the contact form (the sent data is handled by my backend application [Emails Handler](https://github.com/damian-lis/Emails-handler), which is responsible for sending e-mails).

<br/>

Desktop version:

<!--  -->

<br/>

Mobile version:

<!--  -->

### Live version is available [here](https://damianlis.pl/).

<br/>

## Table of Contents

1. Technologies
2. Setup
3. Solutions

<br/>
<br/>

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

<br/>

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
&nbsp; &nbsp; &nbsp; &nbsp; 3.2.3. Functionalities on the website called through the buttons on the left side of the page <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.2.4. Audio support on the site by Audio object<br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.2.5. A Curtain object that allows to attach components dynamically<br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.2.6. Dynamic form creation by Form object<br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.2.7. Possibility to go back to the home page by BackBtn object<br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.2.8. Create project sneak peeks by SneakPeeks object<br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.2.9. Create descriptions by DescriptionArrange object<br/>

<br/>
<br/>

## 3.1. General

### 3.1.1. The structure and contents of the data folder

There are three folders in the data folder: descriptions, global and informations.

The structure of the data folder is shown below:

<!-- Zdjęcie data folderu -->

Table of content of this section:

1. Global folder
2. Descriptions folder
3. Informations folder

<br/>

#### 1. Global folder

First, let me explain the global folder (because many files depend on it).
Below is an example of the global folder structure:

<!-- Zdjęcie folderu global -->

As we can see above, there are two files: names.js, which contains all names in the project (string types written as variables to avoid typos), and themes.js, which contains three themes (appropriate color combinations) that can be set by the user via the Theme.js object (this process is explained later).

The following is an example of abbreviated names.js file (data/global/names.js):

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
  email: 'email',
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

more code here...
```

As we can see in the example above, objects contain properties in the form of different names that contain string values. In some cases, a function was used to make it easier to specify a given name, for example (data/global/themes.js)::

```
 h: (value) => `h${value}` .
```

Thanks to above solution, I can provide a different html value for the h tag)

<br/>

Below is an example of the content of the themes.js file (second file in global folder) (data/global/themes.js):

```
export default {
  black: {
    mainColor: 'rgb(18, 18, 18)',
    mainColorTransparent: 'rgba(18, 18, 18, 0.8)',

    secondaryColor: 'rgb(0,0,0)',
    secondaryColorTransparent: 'rgba(0, 0, 0, 0.8)',

    borderColor: 'rgb(85 ,85, 85)',

    strokeColor: '85 ,85, 85',
    ctxFillStyle: 'rgb(85 ,85, 85)',

    mainText: 'rgb(255,255,255)',
    secondaryText: 'rgb(238,238,238)',

    themeDotBorder: 'rgb(255,255,255)',

    previewBg: 'rgb(34,34,34)',
    previewShadow: 'rgb(18,18,18)',

    buttonColor: 'rgb(51,51,51)',
  },

  blue: {
    mainColor: 'rgb(21, 32, 43)',
    mainColorTransparent: 'rgba(21, 32, 43, 0.8)',

    secondaryColor: 'rgb(25, 39, 52)',
    secondaryColorTransparent: 'rgba(25, 39, 52, 0.8)',

    borderColor: 'rgb(57, 119, 179)',

    strokeColor: '57, 119, 179',
    ctxFillStyle: 'rgb(57, 119, 179)',

    mainText: 'rgb(255,255,255)',
    secondaryText: 'rgb(238,238,238)',

    themeDotBorder: 'rgb(255,255,255)',

    previewBg: 'rgb(25, 39, 52, 0.8)',
    previewShadow: 'rgb(17,25,33)',

    buttonColor: 'rgb(33,69,105)',
  },

  purple: {
    mainColor: 'rgb(70, 52, 78)',
    mainColorTransparent: 'rgba(70, 52, 78, 0.8)',

    secondaryColor: 'rgb(56, 42, 63)',
    secondaryColorTransparent: 'rgba(56, 42, 63, 0.8)',

    borderColor: 'rgb(154, 0, 154)',

    strokeColor: '154, 0, 154',
    ctxFillStyle: 'rgb(154, 0, 154)',

    mainText: 'rgb(255,255,255)',
    secondaryText: 'rgb(238,238,238)',

    themeDotBorder: 'rgb(255,255,255)',

    previewBg: 'rgb(29, 21, 32, 0.8)',
    previewShadow: 'rgb(43,32,47)',

    buttonColor: 'rgb(92,54,105)',
  },
}
```

As we can see above, the file contains three objects that have a different color combination for a given theme (black, blue and purple). It should be mentioned that the strokeColor property value of the theme object is specific because of one of the methods logic of the Particles object in which it is used (this will be explained when discussing the Particles object).

<br/>

#### 2. Descriptions folder

In the case of the next folder called descriptions (of data folder), there are files with descriptions of my person, my skills, my projects and privacy policy.

Below are examples of description files:

<!-- Zdjęcie descriptions -->

In order to illustrate the content of the files regarding the description, below there is an example file with information about my skills (data/descriptions/skills.js):

```
import { common, classNames, elements } from '/data/global/names.js'

export default [
  {
    type: common.headline,
    element: elements.h(3),
    content: 'Skills',
    classes: [
      classNames.utilities.m.t(10),
      classNames.utilities.text.center,
      classNames.utilities.text.underline,
    ],
  },
  {
    type: common.header,
    element: elements.h(5),
    content: '1. Frontend:',
    classes: [classNames.utilities.m.t(30), classNames.utilities.text.lh(30)],
  },
  {
    type: common.list,
    elements: {
      list: elements.ul,
      listItem: elements.li,
    },
    content: [
      'HTML (semantic),',
      'CSS (RWD, SASS, BEM, TailwindCSS, Bootstrap),',
      'JavaScript (OOP, Design Patterns),',
      'React (Redux, Hooks, Styled Components, Compound Components, Atomic Design),',
      'Next (basic knowledge of the concept of server side rendering and how to use it),',
      'TypeScript (basic knowledge of types)',
    ],
    classes: {
      list: [
        classNames.utilities.m.y(10),
        classNames.utilities.position.relative,
      ],
      listItem: [
        classNames.utilities.m.b(15),
        classNames.utilities.m.l(20),
        classNames.utilities.text.lh(25),
        classNames.utilities.text.dash,
      ],
      lastListItem: [
        classNames.utilities.m.l(20),
        classNames.utilities.text.lh(25),
        classNames.utilities.text.dash,
      ],
    },
  },
  {
    type: common.header,
    element: elements.h(5),
    content: '2. Backend:',
    classes: [classNames.utilities.m.t(40), classNames.utilities.text.lh(30)],
  },
  {
    type: common.list,
    elements: {
      list: elements.ul,
      listItem: elements.li,
    },
    content: [
      `Node/Express (e-commerce REST API's),`,
      'MongoDB (basic handling with Express),',
      'PHP (basic syntax and logic)',
    ],
    classes: {
      list: [
        classNames.utilities.m.t(10),
        classNames.utilities.m.b(0),
        classNames.utilities.position.relative,
      ],
      listItem: [
        classNames.utilities.m.b(15),
        classNames.utilities.m.l(20),
        classNames.utilities.text.lh(25),
        classNames.utilities.text.dash,
      ],
      lastListItem: [
        classNames.utilities.m.l(20),
        classNames.utilities.text.lh(25),
        classNames.utilities.text.dash,
      ],
    },
  },
]
```

As we can see in the above example, first, most of the data was written using various object properties that contain string values (I discussed this a moment ago).
Second, the content structure is properly prepared on the basis of which the DescriptionArrange object, using its methods, is able to generate the appropriate description elements and add them to the transferred container. This solution was used because it automates some work, is easier to maintain and expand (this process will be explained later).

<br/>

#### 1. Informations folder

The last folder in the data folder is named informations, which contains files with various data, e.g. information about form fields and projects sneak peeks.

In order to illustrate the content of the files regarding the informations folder, below there is an example file with informations about form fields (data/informations/formFields.js):

```
export default [
  {
    label: 'Name',
    type: 'text',
    name: 'name',
    notifications: ['name is required 😡'],
  },
  {
    label: 'Subject',
    type: 'text',
    name: 'subject',
    notifications: ['subject is required 😡'],
  },
  {
    label: 'Email',
    type: 'email',
    name: 'email',
    notifications: ['email is required 😡', 'invalid email 😡'],
  },
  {
    label: 'Message',
    type: 'textarea',
    name: 'message',
    notifications: ['message is required 😡'],
  },
  {
    type: 'submit',
    value: 'Wyślij',
    name: 'submit',
    notifications: [
      'Please wait a moment! 🕐',
      'literally a moment! 🛩',
      'almost, almost! 🚀',
    ],
  },
]
```

As we can see in the example above, it is a collection of information about form fields, which has a certain structure on the basis of which the Form object can use appropriate logic to build form fields elements (similar principle of operation as in the case of the files of the descriptions folder). The entire process will be explained when discussing the Form object.

<br/>

### 3.1.2. The structure and content of the scripts folder

The scripts folder contains four folders: helpers, objects, plugins and sites and its structure is shown below:

<!-- Zdjęce Struktura folderu scripts -->

Table of content of this section:

1. Helpers folder
2. Objects folder
3. Plugins folder
4. Sites folder

<br/>

#### 1. Helpers folder

In the case of the helpers folder, we deal with files that contain functions that are responsible for specific logic and are reusable throughout the project (they can also be used in other projects). They play the role of support functions that increase the readability of the code and the developer experience.

Below is an example of the helpers folder structure:

<!-- Zdjęcie folderu helpers -->

<br/>

To better understand the logic of the page, which I will describe in the general section, I would like to briefly explain the logic of each of the helpers.

Helpers list:

&nbsp; &nbsp; &nbsp; &nbsp; 1.1. appendElementsToContainerFn <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 1.2. createElementFn <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 1.3. setClassesFn <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 1.4. setPropsFn <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 1.5. setDelayFn <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 1.6. triggerActionOnWindowScrollFn <br/>

<br/>

#### 1.1 appendElementsToContainerFn

The first helper in the order is appendElementsToContainerFn which is responsible for attaching the transferred elements to the transferred container.

Its implementation is shown below (scripts/helpers/appendElementsToContainerFn.js):

```
import { common } from '/data/global/names.js'

export default ({ elements = [], container }) => {
  if (!container) return

  let containerEl = container

  if (typeof container === common.string) {
    containerEl = document.querySelector(container)
  }

  elements.length &&
    elements.map((element) => {
      let el = element

      if (typeof el === common.string) {
        el = document.querySelector(innerEl)
      }

      if (Array.isArray(el)) {
        const innerEls = el
        innerEls.map((innerElement) => {
          let innerEl = innerElement

          if (typeof el === common.string) {
            innerEl = document.querySelector(innerElement)
          }
          containerEl.appendChild(innerEl)
        })
      } else containerEl.appendChild(el)
    })

  return containerEl
}
```

As we can see above, it is a function that destructs an object into:

- an array with elements to be attached (elements),
- the container element (or element reference) to which these elements are to be attached.

<br/>

In the body of a function we have a logic in which:

- the passed values are checked,
- a DOM element is searched if the passed container element is a reference,
- the passed elements are attached to the passed container element based on the map method
  (you can also pass elements that are arrays).

<br/>

To understand how to use this helper in practice, below is an example of its use in createMainComponents method of Form object (scripts/objects/Form.js):

```
this.titleComponent = appendElementsToContainerFn({
  elements: [this.title, this.whisper, this.infoComponent],
  container: this.titleContainer,
})
```

As we can see in the above example, we pass to the helper function an object with elements (this.title, this.whisper, this.infoComponent) to be attached and a container (this.titleContainer) to which we want to attach these elements.

<br/>

#### 1.2. createElementFn

Another helper that I would like to briefly describe is createElementFn, which is used most often within the logic of the page and is used to create any html element with properties.

Its implementation is shown below (scripts/helpers/createElementFn.js):

```
import { common } from '/data/global/names.js'

export default ({ element, ...rest }) => {
  if (!element && !rest.length) return

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
          )
            break
          createdElement[propEl] = rest[propEl]
      }
    }
  }
  return createdElement
}
```

As we can see in the above example, the function destructs the passed object into:

- the element with element name (on this basis the element will be created),
- the properties of this element stored in the array thanks to the rest operator (properties which will be added to the created element).

<br/>

In the body of a function we have a logic in which:

- the passed element is created,
- a switch statement is used so that we can easily assign the passed properties to the created element in an appropriate way (a certain exception in the default case of the switch statement applies to the Form object that will be described later)
- at the end, the created element with its properties is returned

<br/>

To understand how to use this helper in practice, below is an example of its use in createElements method of Audio object (scripts/objects/Audio.js):

```
this.btn = createElementFn({
  element: elements.button,
  classes: [classNames.global.leftBtn],
  listeners: [{ event: events.click, cb: () => this.handleAudio() }],
})
```

As we can see in the above example, we pass an object with the name of button element, appropriate class refeferences (classNames.global.leftBtn) and listeners (with event and cb) to the function.

#### 1.3. setClassesFn

The next helper in the order is setClassesFn which is responsible for setting different classes for different elements.

Its implementation is shown below (scripts/helpers/setClassesFn.js):

```
import { common } from '/data/global/names.js'

export default ({ toggle, objs = [], delay }) => {
  const helperLogic = () =>
    objs.length &&
    objs.map(
      (obj) =>
        obj.elements &&
        obj.elements.map((el) => {
          let element = el

          if (typeof el === common.string) {
            element = document.querySelector(el)
          }

          obj.classes &&
            obj.classes.map((classEl) => {
              obj.removeFromEls &&
                obj.removeFromEls.map((removeFromEl) => {
                  removeFromEl.classList.remove(classEl)
                  removeFromEl.disabled = false
                })

              toggle
                ? toggle === common.on
                  ? element.classList.add(classEl)
                  : element.classList.remove(classEl)
                : element.classList.add(classEl)
            })
        })
    )
  if (delay) return setTimeout(helperLogic, delay)
  helperLogic()
}
```

As we can see in the above example, the function destructs the passed object into:

- toggle with "on" or "off" values thanks to which we can easily set or delete passed classes on passed elements,
- objs which containing an array of elements, classes and removeFromEls, in which we provide an additional elements from which we want to remove the passed classes,
- delay with time number so we can delay setting or deleting passed classes.

<br/>

In the body of a function we have a logic in which:

- the helperLogic function is created, in which, based on the values passed, the passed classes on the passed elements are added or removed (in case the toggle value is not passed the classes are only set on the given elements)
- at the very end, when the delay value has been passed, the setTimeout function called is returned (becouse of ID of this function) with the previously created helperLogic function (if delay value is not passed, the helperLogic function itself is called).

<br/>

To understand how to use this helper in practice, below is an example of its use in toggleFormTextInputsNotification method of Form object (scripts/objects/Form.js):

```
setClassesFn({
  toggle,
  objs: [
    {
      elements: inputs,
      classes: [classNames.utilities.border.danger],
    },
  ],
})
```

As we can see in the above example, to the helper an object is passed with a toggle value ("on"/"off") and objs with elements in the form of inputs and a class that changes the border color to red.

<br/>

#### 1.4. setPropsFn

The next helper in the sequence is called setPropsFn, whose logic is very similar to the previous setClassesFn helper and differs only in that instead of setting classes on the passed elements, it sets properties.

Its implementation is shown below (scripts/helpers/setPropsFn.js):

```
import { common } from '/data/global/names.js'

export default ({ toggle, objs = [], delay }) => {
  const helperLogic = () =>
    objs.length &&
    objs.map(
      (obj) =>
        obj.elements &&
        obj.elements.map((el) => {
          let element = el

          if (typeof el === common.string) {
            element = document.querySelector(el)
          }

          obj.listeners &&
            obj.listeners.map((listener) => {
              const { event, cb } = listener
              element.addEventListener(event, (e) => cb(e))
            })

          obj.styleProps &&
            obj.styleProps.map((prop) => {
              if (toggle) {
                element.style[prop.name] =
                  toggle === common.on ? prop.values.on : prop.values.off
              } else element.style[prop.name] = prop.value
            })

          obj.props &&
            obj.props.map((prop) => {
              if (toggle) {
                element[prop.name] =
                  toggle === common.on ? prop.values.on : prop.values.off
              } else element[prop.name] = prop.value
            })
        })
    )
  if (delay) return setTimeout(helperLogic, delay)
  helperLogic()
}
```

Due to the very similarity of logic to the previous helper, I will not focus on its description here.

<br/>

To understand how to use this helper in practice, below is an example of its use in toggleFormTextInputsNotification method of Form object (scripts/objects/Curtain.js):

```
setPropsFn({
  toggle,
  objs: [
    {
      elements: [document.body],
      styleProps: [
        {
          name: styleProps.names.overflow,
          values: {
            on: styleProps.values.hidden,
            off: styleProps.values.auto,
          },
        },
      ],
    },
  ],
})
```

As we can see above, the use of this helper is also very similar to the setClassesFn helper. The only difference is that instead of classes, we list here various properties along with their names and values.

<br/>

#### 1.5. setDelayFn

The next very short helper is setDelayFn, which allows you to set a delay for some functions.

Its implementation is shown below (scripts/helpers/setDelayFn.js):

```
export default async (delay = 0) => {
  typeof delay === 'number' &&
    (await new Promise((resolve) => setTimeout(() => resolve(), delay)))
}
```

As we can see in the example above, the function takes the value of delay, which is set to 0 by default.

In the body of a function we have a logic in which:

- the type of the passed delay value is checked (number),
- the operation of returning the so-called promise is performed, the delay (passed value) of which is simulated by the setTimeout function

<br/>

To understand how to use this helper in practice, below is an example of its use in handleFormSubmit method of Form object (scripts/objects/Form.js):

```
this.revealTitleWhisper()

await setDelayFn(2000)
this.setSelfDestructEventToMainComponent()
```

As we can see in the above example, the setSelfDestructEventToMainComponent method is executed
2 seconds later than the previous one due to the use of this helper.

<br/>

#### 1.6. triggerActionOnWindowScrollFn

The last of the helpers available in the project is triggerActionOnWindowScrollFn helper, which is responsible for triggering the appropriate actions within or outside the so-called trigger element.

Its implementation is shown below (scripts/helpers/triggerActionOnWindowScrollFn.js):

```
import { common, events } from '/data/global/names.js'

export default ({
  onWhatElement: trigerElement,
  cbOnEnterTriggerEl = () => {},
  cbOnExitTriggerEl = () => {},
  modifier = 0,
}) => {
  if (!trigerElement) return

  let flag = true
  let element = trigerElement

  if (typeof trigerElement === common.string) {
    element = document.querySelector(trigerElement)
  }

  window.addEventListener(events.scroll, () => {
    if (
      window.innerHeight + window.pageYOffset - modifier >
      element.offsetTop
    ) {
      flag && cbOnEnterTriggerEl(element)
      flag = false
    } else {
      !flag && cbOnExitTriggerEl(element)
      flag = true
    }
  })
}
```

As we can see in the above example, the function destructs the passed object into:

- triggerElement (renamed from onWhatElement) on the basis of which appropriate actions are triggered ,
- the cbOnEnterTriggerEl function that is to be called when the triggerElement is exceeded during the window scroll (by default it returns a function to avoid errors),
- the cbOnExitTriggerEl function to be called when the triggerElement is leaved during the window scroll (by default it returns a function to avoid errors),
- the so-called modifier, thanks to which we can slightly change the place where the action is triggered relative to the triggerElement (when there is no value given, the value of 0 is taken by default, where the action call stays in the point of the triggerElement).

<br/>

In the body of a function we have a logic in which:

- we check whether a given element trigger has been sent (if not, the whole function is returned to avoid an error)
- if a trigger element reference was sent to the function, then on its basis the given element is searched in the DOM structure and assigned to the variable element.
- at the very end we have an event listener whose event is set to scroll and calls a function in which when the screen scroll aligns with the top edge of the tigger element, the cbOnEnterTriggerEl function is triggered, otherwise the cbOnExitTriggerEl function (a flag is set to prevent nonsensical calls of the same function when scrolling)

I would also like to point out that when changing the screen layout, e.g. from desktop to mobile, the place where the action is triggered is recalculated.

To understand how to use this helper in practice, below is an example of its use in constructor of SneakPeeks object (scripts/objects/SneakPeeks.js):

```
triggerActionOnWindowScrollFn({
  onWhatElement: trigger,
  cbOnEnterTriggerEl: () => this.toggleBtnComponent({ toggle: common.off }),
  cbOnExitTriggerEl: () => this.toggleBtnComponent({ toggle: common.on }),
  modifier: 80,
})
```

As we can see above, an object with a trigger element is passed to the helper, toggleBtnComponent method that will be called with a different toggle value depending on the location of trigger element, and a modifier with a value of 80 which changes the trigger element location.

<br/>

### 2. Scripts folder

Moving down the scripts folder structure we have an objects folder, the contents of which look like this:

<!-- Zdjęcie plików w folderze objects -->

The objects folder contains files with objects (classes) with appropriate methods, the structure of which is very similar due to the use of helper functions.

These class objects were introduced to help manage the logic of certain components on the pages and to practice deeply object oriented programming.

Below is an example of a combination of two objects (SneakPeeks.js and Audio.js) to show the similarities of properties and methods (scripts/objects/SneakPeeks.js):

Below is an example of the SneakPeeks object (scripts/objects/SneakPeeks.js):

```
import {
  createElementFn,
  triggerActionOnWindowScrollFn,
  appendElementsToContainerFn,
  setClassesFn,
} from '/scripts/helpers/index.js'
import { classNames, info, elements } from '/data/global/names.js'

class SneakPeeks {
   constructor({ container, trigger, wrapper, data }) {
    this.sneakPeeksInfo = data

    this.createElements()
    this.createComponents()
    appendElementsToContainerFn({ elements: [this.mainComponent], container })

    if (trigger) {
      this.triggerElement = document.querySelector(trigger)
      this.wrapperElement = document.querySelector(wrapper)
      triggerActionOnWindowScrollFn({
        onWhatElement: trigger,
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

    this.mainComponent = appendElementsToContainerFn({
      elements: this.sneakPeekComponents,
      container: this.mainContainer,
    })
  }
  more code here...
}
```

<br/>

Below is an example of the SneakPeeks object (scripts/objects/Audio.js):

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

class Audio {
  constructor({ container, trigger, path }) {
    this.play = false
    this.path = path

    this.createElements()
    this.createComponents()
    appendElementsToContainerFn({ elements: [this.btnComponent], container })

    trigger &&
      triggerActionOnWindowScrollFn({
        onWhatElement: trigger,
        cbOnEnterTriggerEl: () =>
          this.toggleBtnComponent({ toggle: common.off }),
        cbOnExitTriggerEl: () => this.toggleBtnComponent({ toggle: common.on }),
        modifier: 80,
      })
  }

  createElements() {
    this.audio = createElementFn({
      element: elements.audio,
      src: this.path,
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
    this.btnComponent = appendElementsToContainerFn({
      elements: [this.audioImg],
      container: this.btn,
    })
  }

  more code here...
}
```

We can see in the above examples that methods such as createElements, createComponents and used helpers such as createElementsFn (implementation is here scripts/helpers/createElementFn.js), appendElementsToContainerFn (implementation is here scripts/helpers/appendElementsToContainerFn.js) and triggerActionOnWindowScrollFn (implementation is here scripts/helpers/triggerActionOnWindowScrollFn.js) in both objects are the same (the rest of the objects are very similar).

In constructor of the presented above objects we have similarities in:

- the createElements method that is responsible for creating elements with properties through the createElementFn helper
- the createComponents method by appendElementsToContainerFn helper for creating components from previously created elements.
- appending the created components to the container passed to the object by appendElementsToContainerFn
- calling the triggerActionOnWindowScrollFn helper with the appropriate elements

Such a structure was designed to ensure ease of development and increase the developer experience.

<br/>

### 3. Plugins folder

The next folder is the plugins folder, which contains files related to various packages that help in the development of the project.

The structure of this folder is shown below:

<!-- Struktura folderu plugins -->

As we can see above, in the plugins folder there is only the prism.js file, which is responsible for the appropriate arrangement of the code presented on the page. The second file of this package is in the styles/plugins/prism.css folder, which is responsible for the appropriate styles in the presented code. (examples will be later in the description).

Below is an visual example of using PrismJS plugin:

<!-- PrismJS kod visual-->

<br/>

### 4.Sites folder

The last folder in this scripts folder structure is the sites folder, the contents of which are shown below:

<!-- Zdjęcie struktury sites folder -->

In the example above, we can see that the sites folder contains various js files with the names of individual pages that act as main scripts used on the html files of a specific page.

To better illustrate the relationship in the name between the mentioned js files and html files, below is a comparison of these files with each other:

<!-- Przykład zestawienia html i js -->

Each of the js files in sites folder is responsible for generating appropriate instances of classes that play a specific role on the site (handling a specific functionality on the website).

To illustrate the content of these files, index.js file was used, which is the main script of index.html (scripts/sites/index.js):

```
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
  data: aboutDescription,
})
new DescriptionArrange({
  container: idReferences.skills.description,
  data: skillsDescription,
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
```

In the example above, we can see that various class objects are imported into the file, which are used to create instances of these classes. Each of the created instances is responsible for some part of the logic on the page, e.g. on the main page we have to create:

- a description of my person and my skills (new DescriptionArrange),
- audio support (new Audio),
- form support (new Form),
- theme support (new Theme)
- sneak peeks of completed projects (new SneakPeeks).

Each of the created instances accepts object with similar elements like container, trigger, data etc.

<br/>

To attach such a js file to the html file, we use a simple script tag, thanks to which we can import various functionalities to a given page (in this case to the index.html homepage):

```
<script type="module" type="text/javascript" src="/scripts/sites/main.js"></script>
```

Thanks to the solution presented in the whole point, it is very easy to add new functionalities to our website while keeping the code clean (the logic of each of the presented objects will be described later).

<br/>
<br/>

### 3.1.3. The structure and contents of the styles folder

The styles folder consists of the components, global, plugins, and utilities folders (index.css at the end, which exports all local files).

The following is an example of the styles folder structure:

<!-- Zdjęcie folderu styles -->

Table of content of this section:

1. Components folder
2. Global folder
3. Plugins folder
4. Utilities folder

<br/>

#### 1. Components folder

In the case of the first folder named components, we have style files in it that describe the individual components on the page.

Below is an example of the components folder structure:

<!-- Zdjęcie folderu components -->

In order to illustrate the content of the files, the fragment of form.css file was used, which contains classes and properties related to the form component (styles/components/form.css):

```
.form-main-container {
  width: 100%;
  max-width: 500px;
  height: 100%;
  max-height: 700px;
  padding: 10px;
  border: var(--borderColor) 1px solid;
  border-radius: 5px;
  background-color: var(--secondaryColor);
  transition: 1s;
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
  position: relative;
  top: 0;
  min-height: 70px;
  display: flex;
  flex-basis: 15%;
  justify-content: center;
  align-items: center;
  transition: 0.7s;
}

.form-title {
  text-align: center;
  transition: 0.7;
}

more code here...
```

As we can see above, a simple css file with different styles for individual form elements.

Below is a visual representation of the form component:

<!-- Zdjęcie komponentu form -->

<br/>

#### 2. Global folder

In the case of the next folder named global, we deal with global styles.

The structure of this folder is shown below:

<!-- Zdjęcie struktury folderu global -->

As we can see in the above example, we deal with files such as keyframes.css, in which the logic of individual animations is created, normalize.css with css style normalization, and variables.css, in which the theme structure is initialized, which is then dynamically overwritten using the methods of the Theme.js object (this process will be described later).

<br/>

#### 3. Plugins folder

The next folder in the sequence of styles folder is the plugins folder which contains external (downloaded from the internet) files of style.

The structure of this folder is shown below:

<!-- Zdjęcie struktury plugins style -->

As we can see above, in this folder there is only one file called prism.css, thanks to which we have the appropriate coloring placed on the code page (part of the Prism.js package, the rest of which is in scripts/plugins/prism.js).

Below is a visual example of this solution (in conjunction with scripts/plugins/prism.js):

<!-- Przykład prism js -->

<br/>

#### 4. Utilities folder

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

up to 100%...

@media screen and (max-width: 800px) {
  .row-xy {
    flex-direction: column;
  }
}
```

To understand well how to use the styles presented above, I will use a fragment of the index.html structure (index.html):

```
<section class="mb-40">
    <div class="card p-30 element-center pr-7 sm-wrap-x-500 sm-p-20 slideInFromLeft">
       <div class="row-xy">
           <div  class="col-45 content-center-xy sm-mb-10 showObject">
            <img class=" w-full rounded" src="/images/about/me.jpg" alt="">
           </div>
           <div class="col-55 content-center-xy sm-mt-10 showObject">
            <div class="card-inner pl-30 pt-30 sm-pl-0">
                <div class="preview-container">
                    <div id="preview-corner-tl" class="preview-corner"></div>
                    <div id="preview-corner-tr" class="preview-corner"></div>
                    <h3 class="mb-20 text-underline">What I do?</h3>
                    <p>I am a Frontend Developer</p>
                    <p>who creates web applications,</p>
                    <p>sites and many other web solutions</p>
                    <div id="preview-corner-br" class="preview-corner"></div>
                    <div id="preview-corner-bl" class="preview-corner"></div>
                </div>
            </div>
           </div>
       </div>
    </div>
</section>
```

As we can see in the example above, we have a section element with only one utility class named mb-40 (margin-bottom: 40px) that contains a div element with classes named:

- card (properties that give us the appearance of the card),
- p-30 (padding:30px),
- element-center (element centering - margin:0 auto),
- pr-7 (padding-right:7px),
- sm-wrap-x-500 (max-width: 500px under the screen width of 800px - mobile version is indicated by the prefix sm),
- sm-p-20 (padding:20px up to 800px width)
- slideInFromLeft (an animation).

In the middle of the aforementioned div element there is an another div element with the classes named: row-xy (which refers to Bootstrap and in this case arranges elements horizontally x and vertically y by flex property).

Going further into the discussed html structure, we have two elements which are so-called columns with a width of 45% (col-45) and 55% (col-55) (modeled on bootstrap framework and refers to the flex-basis property: 45% and 55% - i.e. the element covers 45% and 55% of the parent space). I will not go into details further because the logic of the class notation has been well explained in my opinion.

It should be mentioned that due to the fact that the second so-called column (55%) of element with row-xy class contains more complex styles, a component preview has been separated here, the styles of which have been moved to the (styles/components/preview.css) folder in order not to make a mess in the code (such a solution was introduced in the entire project).

So the general principle of creating styles in the project is that if the elements contain a large number of styles, the component is extracted and a css file for a given component is created.If there are fewer styles for a given element, classes from the utilities folder are used.

<br/>
<br/>

### 3.1.4. Characteristics of html files

In the case of html files, in addition to what was presented in the previous subsection, there is a global element that acts as a container, in which each part of the page is represented by a separate section.

In the project, we are dealing with the main page (index.html), the privacy policy page (privacyPolicy.html) and pages with descriptions of individual projects created by me (e.g fluentBlog.html).

In some section elements, the html structure includes element marked with the id property that contain a comment referring to the code created by the specific object, e.g. <-- Theme object -->, which refers to the scripts/objects/Theme.js object.

The mentioned element with the id property acts as a container for the elements produced by the specific js object.

<br/>

Below is an example of such a solution of the index.html file(index.html):

```
<section class="mb-30">
    <div class="card element-center wrap-x-700 px-30 pb-30 pt-30 sm-p-20 sm-wrap-x-500 slideInFromLeft">
        <div class="row-y ">
            <div class="col-100 showObject">
                <div id="skills-description"  class="card-inner row-y element-center p-20">
                     <!-- DescriptionArrange -->
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

### 3.2.1. Logic of background animation by Particles object

Table of content of this section:

1. Introdution
2. Description of Particle object
3. Description of Particles object

<br/>

#### 1. Introdution

In order to obtain a better user experience while using the website, an animated background has been introduced, which contains movable so-called particles that connect with each other by means of lines when they are brought closer to each other.

Below is a visual example of the applied background:

<!-- Przykład animacji tła -->

To achieve the above effect, Particle and Particles objects were created.

<br/>

#### 2. Description of Particle object

To make it easier to find yourself in the description below, there is a list of topics covered:

&nbsp; &nbsp; &nbsp; &nbsp; 2.1. Code example of Particle object <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 2.2. Description of constructor <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 2.3. Description of draw method <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 2.4. Description of update method <br/>

<br/>

#### 2.1. Code example of Particle object

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

#### 2.2. Description of object constructor

As we can see in the code example in the constructor we have only following variables:

- this.canvas which assign the passed canvas element for particle,
- this.ctx which assign the passed context of canvas element for particle,
- this.x which assign passed x coordinate for particle,
- this.y which assign passed y coordinate for particle,
- this.directionX which assign x direction for particle,
- this directionY which assign y direction for particle,
- this.size which assign the passed size for particle,
- this.speedX which assign the passed speed of x coordinate for particle,
- this.speedY which assign the passed speed of y coordinate for particle

#### 2.3. Description of draw method

Below is an implementation of draw method (scripts/objects/Particles.js):

```
  draw() {
    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false)
    this.ctx.fill()
  }
```

As we can see in the code example above, the draw method draws a given particle on the canvas using the methods of the ctx object (beginPath, arc, fill) based on the data that is in the constructor.

<br/>

#### 2.4. Description of update method

Below is an implementation of update method (scripts/objects/Particles.js):

```
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
```

As we can see in the code example above, the update method updates the location on this canvas with the sent values (when the particles try to exceed the width and height of the canvas, the direction of the particle is changed, which gives the illusion of reflecting from the edge of the screen).

It is worth adding here that the whole process of the particle's movement is carried out by the for loop, which each time updates the position of the particle via the update method (will be presented in a moment in Particles object).

<br/>

#### 3. Description of Particles object

In order to be able to create many such particles and make it move, the Particles object was created (which uses the previously discussed Particle object) with appropriate methods that enable it.

To make it easier to find yourself in the description below, there is a list of topics covered:

&nbsp; &nbsp; &nbsp; &nbsp; 3.1. Code example of constructor of Particle object <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.2. Description variables in object constructor <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.3. Description setIsMobile method (constructor) <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.4. Description createElements method (constructor) <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.5. Description setContext method (constructor) <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.6. Description listenForResize method (constructor) <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.7. Description start method <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.8. Description setTheme method <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.9. Description init method <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.10. Description animate method <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.11. Description connect method <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.12. Description update method <br/>

<br/>

#### 3.1. Code example of constructor of Particle object

The Particles object is shown below (scripts/objects/Particles.js):

```
import Particle from './Particle.js'
import {
  createElementFn,
  appendElementsToContainerFn,
} from '/scripts/helpers/index.js'
import { idNames, events, elements } from '/data/global/names.js'

class Particles {
  constructor({ container }) {
    this.particleArray = []
    this.theme = {}
    this.isMobile = this.setIsMobile()

    this.createElements()
    this.setContext()
    this.listenForResize()
    appendElementsToContainerFn({
      elements: [this.canvas],
      container,
    })
  }

  more code here...
}

export default Particles
```

<br/>

#### 3.2. Description variables in object constructor

As we can see in the code example above we have three variables in the constructor:

- this.particleArray which is an default empty array of particles
- this.theme which is an default empty object of theme
- this.isMobile which takes the return value from the setIsMobile method which checks whether the given window screen width counts for the size of the mobile or not

<br/>

#### 3.3. Description setIsMobile method (constructor)

Below is an implementation of setIsMobile method (scripts/objects/Particles.js):

```
  setIsMobile() {
    return window.innerWidth < 500
  }
```

As we can see above, it is a simple method in which the screen width is checked (it returns true below 500px otherwise false)

<br/>

#### 3.4. Description of createElements method (constructor)

After assigning values to variables, the createElements method is called, which uses the createElementFn helper (the implementation here is scripts/helpers/createElementFn.js) to create only one simple element: this.canvas.

Below is an example of this method (scripts/objects/Particles.js):

```
  createElements() {
    this.canvas = createElementFn({
      element: elements.canvas,
      id: idNames.theme.canvas,
    })
  }
```

<br/>

#### 3.5. Description of setContext method (constructor)

Below is an example of this method (scripts/objects/Particles.js):

```
  setContext() {
    this.ctx = this.canvas.getContext('2d')
    this.ctx.canvas.width = window.innerWidth
    this.ctx.canvas.height = window.innerHeight
  }
```

As we can see above, this method sets context 2d and canvas size to the size of the browser window (it is called in the constructor).

<br/>

#### 3.6. Description of listenForResize method and related resize method (constructor)

Below is an example of this method (scripts/objects/Particles.js):

```
  listenForResize() {
    window.addEventListener(events.resize, () => this.resize())
  }

  resize() {
    this.particleArray = []
    this.canvas.width = innerWidth
    this.canvas.height = innerHeight
    this.isMobile = this.setIsMobile()
    this.init()
    this.connect()
  }
```

As we can see above, the listenForResize method sets the event resize on the window object, which calls the resize method on each change of the screen width, which starts the process of creating particles from the beginning (to avoid errors).

<br/>

#### 3.7. Description of start method

Below is an implementation of this method (scripts/objects/Particles.js):

```
  start({ themeObj }) {
    this.setTheme({ themeObj })
    this.init()
    this.animate()
    this.update()
  }
```

As we can see above this method takes an object with themes and starts the entire particle formation process (this method is called by one of the methods of Theme object that will be discussed in the next section), which includes methods: setTheme, init, animate and update.

<br/>

#### 3.8. Description of setTheme method

Below is an implementation of this method (scripts/objects/Particles.js):

```
  setTheme({ themeObj }) {
    this.theme = themeObj
    this.strokeColor = themeObj.strokeColor
    this.ctx.fillStyle = themeObj.ctxFillStyle
  }
```

As we can see above, it is a method which, based on the passed theme, selects the color of the particle's (this.ctx.fillStyle and this.strokeColor).

<br/>

#### 3.9. Description of init method

Below is an implementation of this method (scripts/objects/Particles.js):

```
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
```

As we can see above, this is the method responsible for initialization the particles by calculating their number based on the width and height of the canvas (here a Particle instance is created).

<br/>

#### 3.10. Description of animate method

Below is an implementation of this method (scripts/objects/Particles.js):

```
  animate() {
    this.ctx.clearRect(0, 0, innerWidth, innerHeight)

    for (let i = 0; i < this.particleArray.length; i++) {
      this.particleArray[i].update()
    }
    this.connect()
  }
```

As we can see above, the animate method is responsible for setting the particles in motion by sending new coordinates to each instance of the Particle object and by calling the connect method (animation ofconnection of particles).

<br/>

#### 3.11. Description of connect method

Below is an implementation of this method (scripts/objects/Particles.js):

```
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
          opacityValue = 1 - distance / (this.isMobile ? 4000 : 10000)
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
```

As we can see in the example above, the connect method allows you to manipulate the line's opacity property (strokeStyle) depending on the location of the particles. Thanks to this, we have the illusion that when particles are closer to each other, they connect.

<br/>

#### 3.12. Description of update method

Below is an implementation of this method (scripts/objects/Particles.js):

```
  update() {
    const updateFn = () => {
      requestAnimationFrame(updateFn)
      this.animate()
    }
    updateFn()
  }
```

Thanks to this method we have logic which allows to keep all the animation running by calling the peviously mentioned animate method infinitely.

<br/>
<br/>

### 3.2.2. Option to set the page theme by Theme object

Table of content of this section:

1. Introdution
2. Description of creating an instance of Theme object
3. Description of Theme object logic

<br/>

#### 1. Introdution

Each page has an option to set the theme in three colors: black, blue and purple via the theme setting panel.

Below is an example of setting the three mentioned themes:

<!-- GIF USTAWIANIA MOTYWU -->

<br/>

#### 2. Description of creating an instance of Theme object

The above logic is possible thanks to the Theme object, an instance of which is created in a file that is the main script of a given page.

For example, for the home page, the instance of this object is created in the index.js file as shown below (scripts/objects/index.js):

```
new Theme({
  container: idReferences.theme.main,
  themesObj: themes,
  background: {
    Object: Particles,
    objContainer: idReferences.global.mainContainer,
  },
})
```

Above is an example of creating an instance of the Theme object within several others that correspond to different functionality (they will be discussed in the next sub-points of the description).

To the discussed instance of Theme object the container element is passed (on the basis of which the appropriate element from the DOM structure will be retrieved, to which the component responsible for setting the theme will be attached), an object containing information about themes and background object in which the animation object (previously discussed Particles object) and the container to which this object is to be attached are given.

#### 3.Description of Theme object logic

To make it easier to find yourself in the description below, there is a list of topics covered:

&nbsp; &nbsp; &nbsp; &nbsp; 3.1. Code example of constructor of Theme object <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.2. Description variables in object constructor <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.3. Description setInitialThemeName method (constructor) <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.4. Description setInitialThemeObject method (constructor) <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.5. Description createElements method (constructor) <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.6. Description createComponents method (constructor) <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.7. Description setGlobalVariables method (constructor) <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.8. Description createBackgroundAnimation method (constructor) <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.9. Description of use appendElementsToContainerFn helper (constructor) <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.10. Description of the logic for changing the theme and related handleDotClick method <br/>

<br/>

#### 3.1. Code example of constructor of Theme object

The implementation of this Theme object is shown below (scripts/objects/Theme.js):

```
import {
  createElementFn,
  appendElementsToContainerFn,
  setClassesFn,
} from '/scripts/helpers/index.js'
import {
  classNames,
  common,
  info,
  elements,
  events,
} from '/data/global/names.js'

class Theme {
  constructor({ container, themesObj, background }) {
    this.themesObj = themesObj
    this.background = background
    this.initialThemeName = this.setInitialThemeName()
    this.initialThemeObject = this.setInitialThemeObject()

    this.createElements()
    this.createComponents()
    this.setGlobalVariables()
    this.createBackgroundAnimation()

    appendElementsToContainerFn({ elements: [this.mainComponent], container })
  }

more code here...
}

export default Theme
```

#### 3.2. Description variables in object constructor

As we can see in the code example above, in the constructor we have following variables:

- this.themesObj to which the passed object with the theme is assigned,
- this.background to which the passed object with the background is assigned,
- this.initialThemeName which takes the return value from the setInitialThemeName method which chooses and returns the name of the theme based on the passed theme object method explained in the next subsection,
- this.initialThemeObject which takes the return value from the setInitialThemeObject method which, based on the selected name of the theme (through the previous method), returns the appropriate object with colors of the individual theme (method explained in the next subsection),

#### 3.3. Description setInitialThemeName method (constructor)

Implementation of the setInitialThemeNam method is presented below (scripts/objects/Theme.js):

```
  setInitialThemeName() {
    return (
      localStorage.getItem(common.theme) || Object.keys(this.themesObj)[1]
    )
  }
```

As we can see above, it is a simple method that either takes the theme name saved in local storage or if it is not there, it sets the default theme name on base of this.themesObj object.

#### 3.4. Description setInitialThemeObject method (constructor)

The implementation of the setInitialThemeObject method is below (scripts/objects/Theme.js):

```
setInitialThemeObject() {
    return this.themesObj[this.initialThemeName]
  }
```

As we can see in code example above this method, based on the previously determined name of the theme (this.initialThemeName), selects and return the appropriate theme object with a color combination from this.themesObj.

#### 3.5. Description createElements method (constructor)

Next, in the constructor logic, the createElements method (which uses the createElementFn helper - implementation is here scripts/helpers/createElementFn) is called (at this stage, an instance of the passed background object is also created), which is responsible for creating the appropriate elements of this object (this method is not described below because it is simple and occurs in every object).

#### 3.6. Description createComponents method (constructor)

From these created elements, through the createComponents (which uses the appendElementsToContainerFn helper - implementation is here scripts/helpers/appendElementsToContainerFn) method, individual components are created, which at the end are combined into the main component named this.mainContainer (this method is not described below because it is simple and occurs in every object).

#### 3.7. Description setGlobalVariables method (constructor)

At the end part of the constructor logic of discussed object, the method setGlobalVariables responsible for overwriting the values of global variables with the properties of a given theme is called.

The implementation of the first of this method is presented below (scripts/objects/Theme.js):

```
  setGlobalVariables({ themeObj } = {}) {
    for (const property in themeObj ? themeObj : this.initialThemeObject) {
      document.documentElement.style.setProperty(
        `--${property}`,
        themeObj ? themeObj[property] : this.initialThemeObject[property]
      )
    }
  }
```

As we can see above, this method, depending on whether a given theme object has been sent or not (if it has not been sent, the object set at the time of creating the instance is taken - this.initialThemeObject) sets global styles (global variables), thanks to which the colors of individual elements are side are changed.

#### 3.8. Description createBackgroundAnimation method (constructor)

The last method in the constructor is createBackgroundAnimation method which is responsible for starting the background creation mechanism based on the selected theme are called (here the particles animation starts).

In the case of the second, previously mentioned method (createBackgroundAnimation) its implementation is as follows (scripts/objects/Theme.js):

```
  createBackgroundAnimation() {
    this.background.start(this.initialThemeObject)
  }
```

As we can see above, it is the method responsible for calling the start method on the this.initialThemeObject (Particles) object - background animation.

<br/>

#### 3.9. Description of use appendElementsToContainerFn helper (constructor)

At the very end of the constructor logic the main component (this.mainComponent) are attached to the passed container using appendElementsToContainerFn helper (which was also used to combine individual elements into components).

<br/>

#### 3.10. Description of the logic for changing the theme and related handleDotClick method

Describing the rest of the operation of the Theme object, changing the theme is possible through the so-called dots elements (created via the createElements method), which listen for a click and call the handleDotClick method, to which the appropriate name of the theme and the clicked element are passed.

Below is a fragment of the createElements method, in which we can see the process of creating dots elements with the event listener set to click to call the handleDotClick method with passing the clicked element and the name of the theme (scripts/objects/Theme.js):

```
    this.optionsDots = Object.keys(this.themesObj).map((themeName) =>
      createElementFn({
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
    )
```

<br/>

The handleDotClick method is shown below (scripts/objects/Theme.js):

```
  handleDotClick({ element, themeName }) {
    const themeObj = this.themesObj[themeName]

    this.setGlobalVariables({ themeObj })
    this.background.setTheme({ themeObj })
    this.saveThemeNameInLocalStorage({ themeName })

    setClassesFn({
      objs: [
        {
          elements: [element],
          removeFromEls: this.optionsDots,
          classes: [classNames.theme.optionsDotActive],
        },
      ],
    })
  }
```

In the above method, the appropriate theme object is first selected based on the dynamically sent theme name (through the appropriate option dot).

Next three methods are called to which the object with the selected theme is passed:

- setGlobalVariables (which was discussed earlier but in this case is the theme object passed to it),
- background.setTheme (method for setting the theme of the animation object - the implementation is here scripts/objects/Particles.js) ,
- saveThemeNameInLocalStorage, the implementation of which is shown below:

```
  saveThemeNameInLocalStorage({ themeName }) {
    localStorage.setItem(common.theme, themeName)
  }
```

As we can see above, it is a simple method that sets the chosen theme name in the local storage of the browser (from which this theme name is then retrieve when creating a new instance when re-entering the page)

At the very end of handleDotClick method we have a setClassesFn helper (scripts/helpers/setClassesFn.js) which set to mark the dot element as clicked and removes the marking of other dot elements.

<br/>
<br/>

### 3.2.3. Functionalities on the website called through the buttons on the left side of the page

Table of content of this section:

1. Introdution
2. Description of the container for buttons

<br/>

#### 1. Introdution

Each additional functionality on the page is triggered by buttons located on the left side of each page (eg turn background music on and off, which will be described in the next subsection, the form create handling and back to the main page option, which will be described later).

Below is a visual example of discussed buttons on the privacy policy page (this example because we have a list of all buttons together):

<!-- Przykład zestawu buttonów po lewej x 3 -->

#### 2. Description of the container for buttons

The element of the container to which the buttons shown above are attached has appropriate styles, thanks to which the buttons inside take the right place next to each other. In turn, each button in the discussed container has the same styles, which facilitates the development process.

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

It also worth adding that the buttons container (with global-left-container id) is included in every html file , but the buttons with all logic are dynamically created with javascript for better logic maintenance (this will be explained with specific examples).

<br/>
<br/>

### 3.2.4. Audio support on the site

Table of content of this section:

1. Introdution
2. Description of creating an instance of an Audio object
3. Description of Audio object logic

<br/>

#### 1. Introdution

The first of the additional functionalities on the website which I would like to describe is related to audio support on the website (on or off).

#### 2. Description of creating an instance of an Audio object

Before I go on to the implementation of the Audio object, which is responsible for handling the audio on the page, I would like to focus on how to create an instance of this object.

The following is an example of creating an instance of the Audio object in sites/index.js file which is the main script for the index.html file (main page) (scripts/sites/index.js):

```
new Audio({
  container: idReferences.global.leftContainer,
  trigger: idReferences.sneakPeeks.trigger,
  path: paths.mainPageIntroduction,
})
```

And below is an example of creating an instance of the aforementioned object in sites/fluentBlog.js file (contains description of the FluentBlog project that was created ) which is the main script for the fluentBlog.html file (scripts/sites/index.js):

```
new Audio({
  container: idReferences.global.leftContainer,
  path: paths.fluentBlogPageInfo,
})
```

As we can see in the two examples above, to the instance, first is passed the reference of the container (on the basis of which the appropriate DOM element is searched for, which acts as a container for the elements created in Audio object), the path with the audio file (the audio file containing the audio small description of a given page with background music) and a reference to the trigger element (it is only sent in the case of the home page and on the basis of this reference the appropriate DOM element is searched for, which acts as an action trigger element, which will be described when discussing the Audio object in depth).

#### 3. Description of Audio object logic

To make it easier to find yourself in the description below, there is a list of topics covered:

&nbsp; &nbsp; &nbsp; &nbsp; 3.1. Code example of constructor of Audio object <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.2. Description variables in object constructor <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.3. Description createElements method (constructor) <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.4. Description createComponents method (constructor) <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.5. Description of use appendElementsToContainerFn helper (constructor)<br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.6. Description of use triggerActionOnWindowScrollFn helper with related toggleBtnComponent method (constructor) <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.7. Description handleAudio method <br/>

<br/>

#### 3.1. Code example

After explaining how the instances of the Audio object are created for different pages, now I would like to present the implementation of this object below (scripts/objects/Audio.js):

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

class Audio {
  constructor({ container, trigger, path }) {
    this.play = false
    this.path = path

    this.createElements()
    this.createComponents()
    appendElementsToContainerFn({ elements: [this.btnComponent], container })

    trigger &&
      triggerActionOnWindowScrollFn({
        onWhatElement: trigger,
        cbOnEnterTriggerEl: () =>
          this.toggleBtnComponent({ toggle: common.off }),
        cbOnExitTriggerEl: () => this.toggleBtnComponent({ toggle: common.on }),
        modifier: 80,
      })
  }

more code here...
}

export default Audio
```

<br/>

#### 3.2. Description variables in object constructor

As we can see in the code example above, in constructor of the object we have following variables:

- this.play which assign boolean values (true/false) thanks to which it will be possible to turn the audio on and off,
- this.path which assign the passed path to a specific audio file

<br/>

#### 3.3. Description createElements method (constructor)

After assigning values to variables, the createElements method is called, which uses the createElementFn helper (the implementation here is scripts/helpers/createElementFn.js) to create three very simple elements: this.audio, this.btn and this.audioImg.

Below is an example of this method (scripts/objects/Audio.js):

```
  createElements() {
    this.audio = createElementFn({
      element: elements.audio,
      src: this.path,
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
```

<br/>

#### 3.4. Description createComponents method (constructor)

Next, in the constructor of discussed object, we call the createComponents method, which, based on previously created elements (this.audioImg and this.btn), combines them into the so-called main component (this.mainComponent) via helper appendElementsToContainer (implementation is here).

Below is an example of this method (scripts/objects/Audio.js):

```
  createComponents() {
    this.btnComponent = appendElementsToContainerFn({
      elements: [this.audioImg],
      container: this.btn,
    })
  }
```

This component corresponds to the button we see on the left side of the page screen. Below is a visual example of this component:

<!-- Przykład komponentu przycisku Audio po lewej stronie -->

<br/>

#### 3.5. Description of use appendElementsToContainerFn helper (constructor)

After the above-mentioned methods, the created this.mainComponent component is connected to the container whose reference has been sent to the object (this connection is also made using the appendElementsToContainerFn helper).

<br/>

#### 3.6. Description of use triggerActionOnWindowScrollFn helper with related toggleBtnComponent method (constructor)

At the very end in the constructor logic there is a conditional call (depending on whether the trigger element reference has been sent) of the triggerActionOnWindowScrollFn helper, to which are passed:

- the trigger element,
- the toggleBtnComponent method with passing a different toggle value "on"/"off" depending on the position relative to the trigger element
- modifier with a value of 80 (a slight change of the place where the method is called toggleBtnComponent)

I will not discuss how this helper works here because it was done in the helpers description section.

Below is an implementation of the mentioned toggleBtnComponent method (scripts/objects/Form.js):

```
  toggleBtnComponent({ toggle }) {
    setPropsFn({
      toggle,
      objs: [
        {
          elements: [this.btnComponent],
          styleProps: [
            {
              name: styleProps.names.transform,
              values: {
                on: styleProps.values.translateX(0),
                off: styleProps.values.translateX(-100),
              },
            },
          ],
        },
      ],
    })
  }
```

As we can see in the above example, this method uses the setPropsFn helper (implementation is here scripts/helper/setPropsFn.js) to set the appropriate style properties on the this.btnComponent component (depending on the value of toggle, the component either hides or shows)

Below is a visual example of the above solution in which, when scrolled, the toggleBtnComponent method is called with a different toggle value depending on the position of the trigger:

<!-- Przykład chowania się i pokazywania buttonów -->

As we can see above, the button for sound handling hides and appears faster in relation to the adjacent form button due to the modifier discussed earlier (in a later section, I will explain how to create a form using the form button shown above).

Summarizing, thanks to this solution, when the trigger element is crossed during the page scroll, above discussed method will be called with the toggle value of "on" (styles are added thanks to which the button is hidden) and when the trigger element is leaved by scrolling, the same method is called but with toggle set to "off" (styles are added thanks to which the button is show).

#### 3.7. Description handleAudio method

In the case of the created this.btn element in createElements method, we have an event listener that is set to event click, which calls the handleAudio method, the implementation of which is below (scripts/objects/Audio.js):

```
  this.btn = createElementFn({
    element: elements.button,
    classes: [classNames.global.leftBtn],
    listeners: [{ event: events.click, cb: () => this.handleAudio() }],
  })

// above example is a part of createElements method

  handleAudio() {
    this.play = !this.play
    this.play ? this.audio.play() : this.audio.pause()
    this.audioImg.src = this.play ? paths.playImg : paths.pauseImg
  }
```

As we can see above, it is a simple method that first sets the opposite value in the this.play variable (thanks to it we have the option to turn on and stop the audio) and depending on whether the mentioned value is true or false, the appropriate icon set in this.audioImg element and on this.audio element the appropriate play (turn on audio) or pause (stop audio) method is called.

<br/>
<br/>

### 3.2.5. A Curtain object that allows to attach components dynamically

Table of content of this section:

1. Introdution
2. Description of Audio object logic

<br/>

#### 1. Introdution

Before I go on to the description of the next functionality related to the creation of a form component (which is called via the next button of the left side of page), the Curtain object, which plays a key role in the process of creating a form, must be described.

The discussed object is responsible for creating the container element (curtain), to which various components can be dynamically added and removed using appropriate methods of Curtain object.

At the beginning I would like to mention that this container element (curtain) appears in the form of a dark background with the simultaneous immobilization of the page, which can be seen in the example below when creating the form component:

<!-- Przedstawienie klikniecia formularza i jego stworzenia -->

<br/>

Based on the example presented above, we can see that after click on the button on the left side of the main page (this solution is also available on every subpage) a form component appears (after the short animation) with the curtain simultaneously.

In fact, this form component is dynamically created when the button is clicked, and the Curtain object attaches it to itself using appropriate methods - so we can see it on the page (this process will be described in more detail based on a code example).

When closing form component via the "X" icon or by clicking a container (curtain), such a component is removed from the Curtain object and the curtain element hides without children (the curtain element is ready to attach new component).

Thanks to this solution, some components (for example form component) can exists only at the time of its use and this logic allows to dynamically display components one after another e.g. login window, advertising, popup etc. (on the website now there is only a form component but there may be other components in the future).

<br/>

#### 2. Description of Curtain object logic

For a better understanding of the logic behind the solution described above, below is explanation of the operation of the Curtain object.

To make it easier to find yourself in the description below, there is a list of topics covered:

&nbsp; &nbsp; &nbsp; &nbsp; 2.1. Code example of constructor of Curtain object <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 2.2. General description of the constructor <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 2.3. Description of variables in object constructor <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 2.4. Description of createElements method (constructor) <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 2.5. Description of use appendElementsToContainerFn helper (constructor) </br>
&nbsp; &nbsp; &nbsp; &nbsp; 2.6. Description of toggleShow method (toggle "on")<br/>
&nbsp; &nbsp; &nbsp; &nbsp; 2.7. Description of addCbsToCallOnHidden method<br/>
&nbsp; &nbsp; &nbsp; &nbsp; 2.7. Description of appendElements method <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 2.8. Description of appendElements and related addElToChildren method <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 2.9. Description of toggleBodyFreeze <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 2.10. Description of toggleActive method <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 2.11. A visual example of adding a form component to the curtain <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 2.12. Description of toggleShow method (toggle "off") <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 2.13. Description of togglePreventHidden method <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 2.14. Description of callCbsOnHidden method <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 2.15. Description of clear method with related clearChildren and clearCbsToCallOnHidden methods <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 2.16. A visual example of removing a form component from a curtain <br/>

<br/>

#### 2.1. Code example of constructor of Curtain object

Below is an implementation of the Curtain object constructor (scripts/objects/Curtain.js):

```
import {
  createElementFn,
  appendElementsToContainerFn,
  setPropsFn,
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
      this.preventHidden = false
      this.cbsToCallOnHidden = []
      this.children = []

      this.createElements()
      appendElementsToContainerFn({ elements: [this.curtain], container })
    }
    return (Curtain.instance = this)
  }

  more code here...
}

const curtain = new Curtain(idReferences.global.mainContainer)

export default curtain
```

<br/>

#### 2.2. General description of the constructor

As we can see in the example above, in the constructor we are dealing with singleton design patter. Thanks to it, we can create only one instance of the Curtain object, which is the main source of saving various data (each time we want to create a new instance, the first one is returned (Curtain.instance = this)).

<br/>

#### 2.3. Description variables in object constructor

As we can see in the code example above in the object constructor we have following variables:

- this.preventHidden which assign boolean value (true/false) which prevents the so-called hiding the curtain
- this.cbsToCallOnHidden which assign callbacks that were sent to the object from outside
- this.children which assign elements to be attached to curtain

<br/>

#### 2.4. Description createElements method (constructor)

Next, in the constructor logic, the createElements method is called which creates only one element (this.curtain). Below is an example of this method (scripts/objects/Curtain.js):

```
  createElements() {
    this.curtain = createElementFn({
      element: elements.div,
      classes: [classNames.curtain.main],
      listeners: [
        {
          event: events.click,
          cb: () => this.toggleShow({ toggle: common.off }),
        },
      ],
    })
  }
```

As we can see, it is a simple method that creates the this.curtain element with the help of the createElementFn helper, which has the listener set to event clicks which calls the toggleShow method.

<br/>

#### 2.5. Description of use appendElementsToContainerFn helper (constructor)

At the end of the constructor logic created element (this.curtain) is attached to the passed container using appendElementsToContainerFn helper (the element is visible in the DOM structure).

<br/>

#### 2.6. Description of toggleShow method (toggle "on")

The main method that calls the rest of the Curtain object methods is the toggleShow method, the implementation of which is shown below (scripts/objects/Curtain.js):

```
  toggleShow({ toggle, appendElements, cbsToCallOnHidden } = {}) {
    switch (toggle) {
      case common.on:
        this.addCbsToCallOnHidden({ cbs: cbsToCallOnHidden })
        this.appendElements({ elements: appendElements })
        break

      case common.off:
        if (this.preventHidden) return
        this.callCbsOnHidden()
        this.clear({ after: 200 })

        break

      default:
        break
    }

    this.toggleBodyOverflow({ toggle })
    this.toggleActive({ toggle })
  }
```

As we can see above, this is a method that takes the following arguments:

- toggle (true / false),
- appendElements (elements to be attached to the curtain),
- callbacks (to be called when the curtain hides)

<br/>

Below I will describe two scenarios of calling the toggleShow method:

In first scenario where toggleShow method is called with toggle value "on", the sent callbacks are added to the this.cbsToCallOnHidden array via the addCbsToCallOnHidden method.

<br/>

#### 2.7. Description of addCbsToCallOnHidden method

The following is an implementation of the addCbsToCallOnHidden method (scripts/objects/Curtain.js):

```
  addCbsToCallOnHidden({ cbs }) {
    cbs.map((cb) => this.cbsToCallOnHidden.push(cb))
  }
```

As we can see above, this is a simple method that iterates through adds the sent callbacks to the this.cbsToCallOnHidden array.

<br/>

#### 2.8. Description of appendElements and related addElToChildren method

Next, in the toggleShow method (with the toggle parameter value set to "on") the sent elements to this method are attached to the this.curtain element via the appendElements method (e.g. .form component, which I will describe in the next subsection).

The following is an implementation of the appendElementsmethod (scripts/objects/Curtain.js):

```
  appendElements({ elements }) {
    elements.map((element) => {
      this.curtain.appendChild(element)
      this.addElToChildren({ element })
    })
  }
```

As we can see above, it is also a simple method which, during the interaction, attaches elements to the previously created this.curtain element and calls the addElToChildren method, the implementation of which is shown below (scripts/objects/Curtain.js):

```
  addElToChildren({ element }) {
    this.children.push(element)
  }
```

As we can see above, this method is only responsible for adding the passed element to the array named this.children (to be able to refer to these elements later)

<br/>

#### 2.9. Description of toggleBodyFreeze

At the very end of the toggleShow method two more methods are called, the first (toggleBodyOverflow) through the setPropsFn helper sets the overflow style property to hidden

The implementation of the toggleBodyFreeze method is shown below (scripts/objects/Curtain.js):

```
  toggleBodyFreeze({ toggle }) {
    setPropsFn({
      toggle,
      objs: [
        {
          elements: [document.body],
          styleProps: [
            {
              name: styleProps.names.overflow,
              values: {
                on: styleProps.values.hidden,
                off: styleProps.values.auto,
              },
            },
          ],
        },
      ],
    })
  }
```

As we can see in the example above, this method uses the setPropsFn helper (implementation is here scripts/helpers/setPropsFn.js), thanks to which it sets the appropriate styles depends on toggle value on the body element (in our scenario the value of the toggle parameter is "on" so the overflow property of the body element is set to hidden, which causes the screen to freeze).
)

<br/>

#### 2.10. Description of toggleActive method

The last method that is called in toggleShow is toggleActive method which sets the appropriate styles for the this.curtain element, thanks to which the background becomes darker.

The implementation of the toggleActive method is shown below (scripts/objects/Curtain.js):

```
  toggleActive({ toggle }) {
    setPropsFn({
      toggle,
      objs: [
        {
          elements: [this.curtain],
          styleProps: [
            {
              name: styleProps.names.visibility,
              values: {
                on: styleProps.values.visible,
                off: styleProps.values.hidden,
              },
            },
            {
              name: styleProps.names.opacity,
              values: {
                on: 1,
                off: 0,
              },
            },
          ],
        },
      ],
    })
  }
```

As we can see above, the toggleActive method through the helper setPropsFn, similar to the previous method, sets the appropriate styles (visibility and opacity) thanks to which we have a visible curtain (in scenario when we have toggle value on true).

<br/>

#### 2.11. A visual example of adding a form component to the curtain

Below is a visual example of adding a form component to a curtain by pressing the button with the form icon (this process will be discussed in the next section):

<!-- Przykład dodawania forumarza -->

The above operation is possible by calling the toggleShow method, to which the toggle "on" value is passed.

<br/>

#### 2.12. Description of toggleShow method (toggle "off")

In order to better understand the next description (if toggle is set to "off"), the toggleShow method has been quoted below once again to make it easier to refer to the described logic below (scripts/objects/Curtain.js):

```
  toggleShow({ toggle, appendElements, cbsToCallOnHidden } = {}) {
    switch (toggle) {
      case common.on:
        this.addCbsToCallOnHidden({ cbs: cbsToCallOnHidden })
        this.appendElements({ elements: appendElements })
        break

      case common.off:
        if (this.preventHidden) return
        this.callCbsOnHidden()
        this.clear({ after: 200 })

        break

      default:
        break
    }

    this.toggleBodyFreeze({ toggle })
    this.toggleActive({ toggle })
  }
```

In the case when toggleShow method is called with toggle value "off", at the beginning the condition is checked whether the value of this.preventHidden is true (this value is set by the simply togglePreventHidden method). If it is true, the whole function is return (this option is set when the form data is sent to the backend so that the component cannot be removed).

<br/>

#### 2.13. Description of togglePreventHidden method

Below is an example of an implementation of the togglePreventHidden method thanks to which we can set the value of the this.preventHidden variable (scripts/objects/Curtain.js):

```
  togglePreventHidden({ toggle }) {
    this.preventHidden = toggle === common.on ? true : false
  }
```

Below is a visual example that shows the inability to close the form component when sending data to the server:

<!-- Brak moliwości usunięcia formularza gif -->

<br/>

#### 2.14. Description of callCbsOnHidden method

If the value of this.preventHidden is false previously passed callbacks (sent when toggle value was "on") are called via callCbsOnHidden method the implementation of which is below (scripts/objects/Curtain.js):

```
 callCbsOnHidden() {
    this.cbsToCallOnHidden.map((cb) => cb())
  }
```

As we can see above, it is a simple method that calls elements (callbacks) while iterating through the array.

<br/>

#### 2.15. Description of clear method with related clearChildren and clearCbsToCallOnHidden methods

The next method that is called in sequence is clear method which after a specified time removes the children of this.curtain element, removes the array with children (in the case at hand, form component) and callbacks (sent when toggle value was "on").

Below is an implementation of the clear method with accompanying clearChildren and clearCbsToCallOnHidden methods (scripts/objects/Curtain.js):

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
      this.children.map((child) => child.remove())
      this.clearChildren()
    }, after)
  }
```

As we can see above, this method calls:

- the clearCbsToCallOnHidden method, which sets the default empty array of this.cbsToCallOnHidden (clearing the array),
- the setTimeout function, which after a certain time, calls function with an iteration on the array with curtain children, during which this children are removed from the curtain structure,
- clearChildren method, which sets the default empty array of this.children (clearing the array)

At the very end of toggleShow method in the case of toggle is "off", the same methods that I described earlier (toggleBodyOverflow, toggleActive) are called, but in the opposite way.

<br/>

#### 2.16. A visual example of removing a form component from a curtain

Below is a visual example of removing the component form by clicking on the curtain and by clicking on the X button of the form component (in both cases the toggleShow method is called with the toggle parameter set to "off" - for the X button of the form component, this process will be discussed in the next section):

<!-- Usunięcie formularza gif -->

<br/>
<br/>

### 3.2.6. Dynamic form creation by Form object

Table of content of this section:

1. Introdution
2. Description of creating an instance of an Form object
3. Description of Form object logic

<br/>

#### 1. Introdution

In this section, I would like to focus on explaining the creation of the form component along with its entire logic of operation along with sending data to the server (handled by my backend application [Emails Handler](https://github.com/damian-lis/Emails-handler)).

Below is one more visual example of the logic of form component which is create by a Form object(an example also used when discussing the Curtain object):

<!-- Przykład tworzenia formularza wizualny -->

<br/>

#### 2. Description of creating an instance of an Form object

Before I go on to the implementation of the Form object, which is responsible for handling the form on the page, I would like to focus on how to create an instance of this object.

The following is an example of creating an instance of the Form object in sites/index.js file which is the main script for the index.html file (main page) (scripts/sites/index.js):

```
new Form({
  container: idReferences.global.leftContainer,
  trigger: idReferences.sneakPeeks.trigger,
  data: formFieldsInfo,
})
```

As we can see in above code example, we pass to the instance of the Form object the following elements:

- container which is a a reference to the container element (regarding the form button),
- trigger which is a reference to the trigger element that triggers the action (similar to Audio object),
- data which is a set of data on the basis of which will be created form fields

<br/>

#### 3. Description of Form object logic

To make it easier to find yourself in the description below, there is a list of topics covered:

FORM BUTTON CREATING PART:

&nbsp; &nbsp; &nbsp; &nbsp; 3.1. Code example of constructor of Form object <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.2. Description of variables in object constructor <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.3. Description of createInitialElements method (constructor) <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.4. Description of createInitialComponents method (constructor) <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.5. Description of use appendElementsToContainerFn helper (constructor)<br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.6. Description of use triggerActionOnWindowScrollFn helper with related toggleBtnComponent method (constructor) <br/>

FORM COMPONENT CREATING PART:

&nbsp; &nbsp; &nbsp; &nbsp; 3.7. Description of handleMainComponentCreate method <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.8 Description of toggleBtnComponent method (toggle "off") (inside handleMainComponentCreate method ) <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.9 Description of createMainElements method (inside handleMainComponentCreate method) <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.10 Description of data/informations/formField file which consist the data passed to Form object which is closely related to the method of createMainElements (inside handleMainComponentCreate method) <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.11 Description of createFormFieldElements method which is closely related to the method of createMainElements (inside handleMainComponentCreate method) <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.12 Description of createMainComponents method (inside handleMainComponentCreate method) <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.13 Description of toggleShow Curtain object method (the last method inside handleMainComponentCreate method) <br/>

FORM INPUT LOGIC PART

&nbsp; &nbsp; &nbsp; &nbsp; 3.14 Description of the input (text, email and textarea) logic with handleFormTextInputTyping and handleFormTextInputFocus methods<br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.15 Description of the input (text, email and textarea) notifications logic with handleFormTextInputNotificationClick method <br/>

FORM SUBMIT LOGIC PART

&nbsp; &nbsp; &nbsp; &nbsp; 3.16 Description of the form submit logic with handleFormSubmit method<br/>

<br/>

#### 3.1. Code example of constructor of Form object

Moving on to the logic of the discussed object, first I would like to focus on the constructor of the object, which is very simple and is presented below (scripts/objects/Form.js):

```
class Form {
  constructor({ container, trigger, data }) {
    this.formFieldsInfo = data
    this.notificationTimeouts = []
    this.dataFromUser = {}

    this.createInitialElements()
    this.createInitialComponents()
    appendElementsToContainerFn({ elements: [this.btnComponent], container })

    trigger &&
      triggerActionOnWindowScrollFn({
        onWhatElement: trigger,
        cbOnEnterTriggerEl: () =>
          this.toggleBtnComponent({ toggle: common.off }),
        cbOnExitTriggerEl: () => this.toggleBtnComponent({ toggle: common.on }),
      })
  }

more code here...
}
```

<br/>

#### 3.2. Description of variables in object constructor

As we can see in the code example above we have following variables in the constructor:

- this.formFieldsInfo which is a set of data on the basis of which will be created form fields
- which is an array to which the setTimoeut id will be added regarding notifications(default is empty),
- this.dataFromUser which is an object to which data written via the form will be dynamically added

#### 3.3. Description of createInitialElements method (constructor)

Next, after variables in the constructor, the createInitialElements method is called, which uses the createElementFn helper (the implementation here is scripts/helpers/createElementFn.js) to create individual elements of form button (the one on the left side of page).

Below is an example of this method (scripts/objects/Form.js):

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
      classes: [classNames.utilities.m.t(5)],
      src: paths.emailImg,
    })
  }
```

As we can see in the example above, the createInitialElements method has simple logic in which creates button elements such as this.btn and this.emailImg (form icon) through the createElementFn helper.

It should be added here that the this.btn element has a listener that calls the handleMainComponentCreate method on the event click, which is responsible for creating the entire form component (this process will be explained later).

<br/>

#### 3.4. Description of createInitialComponents method (constructor)

Going further in the logic of the discussed object constructor, we have a call the createInitialComponents method, which, based on previously created elements (this.btn and this.emailImg)

Below is an example of this method (scripts/objects/Audio.js):

```
  createInitialComponents() {
    this.btnComponent = appendElementsToContainerFn({
      elements: [this.emailImg],
      container: this.btn,
    })
  }
```

As we can see in the code example above this method combines this.emailImg with this.btn via the appendElementsToContainerFn helper (implementation is here scripts/helpers/appendElementsToContainerFn.js) to create this.btnComponent.

<br/>

#### 3.5. Description of use appendElementsToContainerFn helper (constructor)

In the next part the previously created this.button Component is attached to the passed container to Form object and thus we have a visible button on the left side of the page.

<!-- Przykłąd form buttona po lewej stronie -->

<br/>

#### 3.6. Description of use triggerActionOnWindowScrollFn helper with related toggleBtnComponent method (constructor)

At the very end in the constructor logic there is a conditional call (depending on whether the trigger element reference has been sent) of the triggerActionOnWindowScrollFn helper, to which are passed:

- the trigger element,
- the toggleBtnComponent method with passing a different toggle value "on"/"off" depending on the position relative to the trigger element

I will not discuss how this helper works here because it was done in the helpers description section.

Below is an implementation of the mentioned toggleBtnComponent method (scripts/objects/Form.js):

```
  toggleBtnComponent({ toggle }) {
    setPropsFn({
      toggle,
      objs: [
        {
          elements: [this.btnComponent],
          styleProps: [
            {
              name: styleProps.names.transform,
              values: {
                on: styleProps.values.translateX(0),
                off: styleProps.values.translateX(-100),
              },
            },
          ],
        },
      ],
    })
  }
```

As we can see in the above example, this method uses the setPropsFn helper (implementation is here scripts/helper/setPropsFn.js) to set the appropriate style properties on the this.btnComponent component (depending on the value of toggle, the component either hides or shows)

Below is a visual example of the above solution in which, when scrolled, the toggleBtnComponent method is called with a different toggle value depending on the position of the trigger:

<!-- Przykład chowania się i pokazywania buttonów -->

<br/>

#### 3.7. Description of handleMainComponentCreate method (main method)

Now I would like to focus on explaining the handleMainComponentCreate method, which, as I mentioned before, is called via event click on the button with the form icon.

below is an example where this.btn element (which occurs in the createInitialElements method§) is compiled together with the handleMainComponentCreatem method which it calls (scripts/objects/Form.js):

```
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

  handleMainComponentCreate() {
    this.toggleBtnComponent({ toggle: common.off })
    this.createMainElements()
    this.createMainComponents()
    curtain.toggleShow({
      toggle: common.on,
      appendElements: [this.mainComponent],
      cbsToCallOnHidden: [
        () => {
          this.toggleBtnComponent({ toggle: common.on })
          this.resetFormTextInputsValue()
          this.resetDataFromUser()
        },
      ],
    })
  }
```

As we can see above, this.btn, when clicked, calls the x method, which includes several other methods, which will be described below .

#### 3.8 Description of toggleBtnComponent method (toggle "off") inside handleMainComponentCreate method

First, the toggleBtnComponent method is called with passing the toggle argument with "off" value.
This method has already been introduced when discussing the trigger helper, so I will just mention that thanks to it and the toggle argument that is "off", the form button on the left is hidden.

#### 3.9 Description of createMainElements method inside handleMainComponentCreate method

Going forward, we have the createMainElements method which is responsible for creating form component elements.

Below is an implementation of this method (scripts/objects/Form.js):

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

    this.btnDeleteContainer = createElementFn({
      element: elements.div,
      classes: [classNames.form.btnDeleteContainer],
    })

    this.btnDelete = createElementFn({
      element: elements.button,
      classes: [classNames.form.btnDelete],
      textContent: 'X',
      listeners: [
        {
          event: events.click,
          cb: () => curtain.toggleShow({ toggle: common.off }),
        },
      ],
    })

    this.titleContainer = createElementFn({
      element: elements.div,
      classes: [classNames.form.titleContainer],
    })

    this.title = createElementFn({
      element: elements.h(3),
      classes: [classNames.form.title],
      innerHTML: info.writeMessage,
    })

    this.whisper = createElementFn({
      element: elements.p,
      classes: [classNames.form.whisper],
      innerHTML: info.clickAnywhereToClose,
    })

    this.infoContainer = createElementFn({
      element: elements.div,
      classes: [classNames.form.infoContainer],
    })

    this.infoIcon = createElementFn({
      element: elements.img,
      classes: [classNames.form.infoIcon],
      src: paths.infoImg,
    })

    this.infoMessage = createElementFn({
      element: elements.p,
      classes: [classNames.form.infoMessage],
      innerHTML: info.emailSendingDelay,
    })

    this.formContainer = createElementFn({
      element: elements.div,
      classes: [classNames.form.container],
    })

    this.form = createElementFn({
      element: elements.form,
      classes: [classNames.form.main],
      noValidate: true,
      listeners: [
        { event: events.submit, cb: (e) => this.handleFormSubmit(e) },
      ],
    })

    this.formFields = this.formFieldsInfo.map((formFieldInfo) =>
      createElementFn({
        element: elements.div,
        classes: [
          classNames.form.field,
          `${classNames.form.field}-${formFieldInfo.name}`,
        ],
      })
    )

    this.formFieldsElements = this.formFieldsInfo.map((formFieldInfo) =>
      this.createFormFieldElements({ data: formFieldInfo })
    )

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
      this.formFieldsElements.map(
        (formFieldElements) =>
          formFieldElements.input.type !== common.submit &&
          textInputs.push(formFieldElements.input)
      )
      return textInputs
    })()

    this.formEmailInput = (() => {
      let emailInput
      this.formTextInputs.map((input) => {
        if (common.email === input.id) {
          emailInput = input
        }
      })
      return emailInput
    })()

    this.formSpinnerContainer = createElementFn({
      element: elements.div,
      classes: [classNames.form.spinnerContainer],
    })

    this.formSpinner = createElementFn({
      element: elements.div,
      classes: [classNames.form.spinner],
    })
  }
```

As we can see, it is a simple method, but quite extensive due to the number of elements necessary to create the form component.

Below I will try to briefly describe the most important elements of form component (all methods which are triggered by events on the following elements will be described later):

- this.deleteBtn - element responsible for removing the form component by calling the curtain.toggleShow (Curtain object method )on click,
- this.form - the main element of the form component, which, thanks to the this.handleFormSubmit method on event submit, sends the appropriate data collected through the appropriate inputs (I will describe them in a moment),
- this.formFields - an array of so-called field form (containers for this.formFieldsElements), which are created by iterating over an array of objects (this.formFieldsInfo) containing information about form field elements (this data will be explained in the next subsection),
- this.formFieldsElements - an array of objects that contain the elements of each form field which are created during the same process as above but calling the createFormFieldElements method on each iteration over an array of objects of data (this.formFieldsInfo),
- this.formSubmitInput - an input element of the submit type, which was separated on the basis of previously created form fields elements (this.formFieldsElements),
- this.formTextInputs - an array of input elements of the text type, which was separated on the basis of previously created form fields elements (this.formFieldsElements),
- this.formEmailInput - the same situation as in the above cases only for the input element of the email type,
- this.formSpinner - element that is responsible for the animation of the spinner when sending the form data to the server

<br/>

#### 3.10 Description of data/informations/formField file which consist the data passed to Form object which is closely related to the method of createMainElements (inside handleMainComponentCreate method)

Before I go over to the createFormFieldElements methods, I would like to mention a few words about the data passed to the Form object (assigned to this.formFieldsInfo variable) on the basis of which form field elements are created and form fields (containers for form field elements).

Below is an example of data regarding form fields elements that are passed to the Form object (data/informations/formFields):

```
export default [
  {
    label: 'Name',
    type: 'text',
    name: 'name',
    notifications: ['name is required 😡'],
  },
  {
    label: 'Subject',
    type: 'text',
    name: 'subject',
    notifications: ['subject is required 😡'],
  },
  {
    label: 'Email',
    type: 'email',
    name: 'email',
    notifications: ['email is required 😡', 'invalid email 😡'],
  },
  {
    label: 'Message',
    type: 'textarea',
    name: 'message',
    notifications: ['message is required 😡'],
  },
  {
    type: 'submit',
    value: 'Wyślij',
    name: 'submit',
    notifications: [
      'Please wait a moment! 🕐',
      'literally a moment! 🛩',
      'almost, almost! 🚀',
    ],
  },
]
```

As we can see above, this file contains an array with objects that contain some information, on the basis of which individual elements of form fields will be created during iteration over an array (I will describe this process in detail in a moment).

<br/>

#### 3.11 Description of createFormFieldElements method which is closely related to the method of createMainElements (inside handleMainComponentCreate method)

In this subsection I would like to move on to discuss the logic of the createFormFieldElements method which is responsible for creating individual form fields elements based on the passed data during iteration.

This method is presented below together with the this.formFieldsElements variable, in which it is called (part of createMainElements method) (scripts/objects/Form.js):

```
    this.formFieldsElements = this.formFieldsInfo.map((formFieldInfo) =>
      this.createFormFieldElements({ data: formFieldInfo })
    )

    createFormFieldElements({
        data: { label, type, name, value, notifications },
      }) {
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
                  cb: (e) => {
                    this.handleFormTextInputTyping({ input: e.target, name })
                  },
                },
                {
                  event: events.focus,
                  cb: (e) => this.handleFormTextInputFocus({ input: e.target }),
                },
              ],
            })
            break
        }

        const notificationEls = notifications.map((notificationEl) =>
          createElementFn({
            element: elements.span,
            attributes: [{ name: common.fieldname, value: name }],
            classes: [
              type === common.submit
                ? classNames.form.fieldSubmitNotification
                : classNames.form.fieldInputNotification,
            ],
            innerHTML: notificationEl,
            listeners: [
              {
                event: events.click,
                cb: (e) => {
                  type !== common.submit &&
                    this.handleFormTextInputNotificationClick({ input: e.target })
                },
              },
            ],
          })
        )

        return lab ? { lab, input, notificationEls } : { input, notificationEls }
      }
```

As we can see in the example above, an array is returned to the this.formFieldElements variable via the map method during the interaction on the this.formFieldsInfo array and calling createFormFieldElements method (to which a single object of the this.formFieldsInfo array is passed)

The called createFormFieldElements method contains switch statement constructions thanks to which we can easily refer to individual sent elements (as we can see, the object passed to the method is destructurized so that it is easier to refer to its elements).

In the case of the passed object containing the submit type, input of type submit is created, which is responsible for sending the entered data to the form to the server. Due to the fact that this type of input does not have a label element, this stage is skipped (it is not needed) and at the very end a notificationEl element is created, which is responsible for displaying appropriate notifications when submitting the form (its operation will be explained later).

Next, when another type of object is passed to the discussed method, e.g. text, email, textarea,
the following elements are created:

- an imput element which is responsible for entering data into the form,
- a label element which informs about the type of data that should be entered into the input element
- a notificationEls array which consistnotifications which are shown to the user when he fails to fill in a given field of the form or when he gives an incorrect e-mail (this notificationEl element behaves differently than for an input of type submit - description will be explained later).

It should be added that in the case of an object of the textarea type, instead of the input element, a textarea element is created, which makes it easier to enter longer messages (this element has also been assigned to the input variable to make it easier to manage the code).

(all the methods in the elements outlined above will be explained later)

<!-- Tutaj -->

#### 3.12 Description of createMainComponents method (inside handleMainComponentCreate method)

Next, in the handleMainComponentCreate method, we call the createMainComponents method, which, based on previously created elements by createMainElements method and combines them into the so-called components.

Below is an example of this method (scripts/objects/Form.js):

```
createMainComponents() {
    this.formSpinnerComponent = appendElementsToContainerFn({
      elements: [this.formSpinner],
      container: this.formSpinnerContainer,
    })

    this.formFieldComponents = this.formFields.map((field, index) => {
      const { lab, input, notificationEls } = Object.entries(
        this.formFieldsElements
      )[index][1]

      lab
        ? appendElementsToContainerFn({
            elements: [lab, input, notificationEls],
            container: field,
          })
        : appendElementsToContainerFn({
            elements: [input, ...notificationEls, this.formSpinnerComponent],
            container: field,
          })

      return field
    })

    this.formComponent = appendElementsToContainerFn({
      elements: this.formFieldComponents,
      container: this.form,
    })

    this.formMainComponent = appendElementsToContainerFn({
      elements: [this.formComponent],
      container: this.formContainer,
    })

    this.infoComponent = appendElementsToContainerFn({
      elements: [this.infoIcon, this.infoMessage],
      container: this.infoContainer,
    })

    this.titleComponent = appendElementsToContainerFn({
      elements: [this.title, this.whisper, this.infoComponent],
      container: this.titleContainer,
    })

    this.mainComponentInner = appendElementsToContainerFn({
      elements: [this.titleComponent, this.formMainComponent],
      container: this.mainContainerInner,
    })

    this.btnDeleteComponent = appendElementsToContainerFn({
      elements: [this.btnDelete],
      container: this.btnDeleteContainer,
    })

    this.mainComponent = appendElementsToContainerFn({
      elements: [this.btnDeleteComponent, this.mainComponentInner],
      container: this.mainContainer,
    })
  }
```

As we can see above, it is a simple method that combines individual previously created elements into components by appendElementsToContaierFn helper, which at the end combine into the so-called main component (this.mainComponent).

Below is an visual example of a component created:

<!-- Przykłąd stworoznego komponentu form -->

<br/>

#### 3.13 Description of toggleShow Curtain object method (the last method inside handleMainComponentCreate method)

The last method that is called in the handleMainComponentCreate method is the toggleShow method of the Curtain object, which I will not describe in detail (this was done at the stage of discussing the Curtain object),I will just show how and with what arguments it is called.

The following is an excerpt from the handleMainComponentCreate method with the called toggleShow method of the Curtain object (scripts/objects/Form.js):

```
    curtain.toggleShow({
      toggle: common.on,
      appendElements: [this.mainComponent],
      cbsToCallOnHidden: [
        () => {
          this.toggleBtnComponent({ toggle: common.on })
          this.resetFormTextInputsValue()
          this.resetDataFromUser()
        },
      ],
    })
```

As we can see in the above code example, the toggleShow method is called with:

- toggle parameter with "on" value,
- this.mainComponent element to join ,
- with a callback that calls 3 methods : toggleBtnComponent, resetFormTextInputsValue,resetDataFromUser (this methods will be explained later)

<br/>

#### 3.14 Description of the input (text, email and textarea) logic with handleFormTextInputTyping and handleFormTextInputFocus methods

Now that we have the forms component created, I would like to move on to describing the logic that is present in it.

First of all, I would like to focus on the logic of individual inputs in the form.

The first four inputs of the form with types: 2x text, email and textarea, have the same logic as shown in the fragment of the createFormFieldElements method in which these inputs are created (here we omit the input type submit) (scripts/objects/Form.js):

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
      cb: (e) => {
        this.handleFormTextInputTyping({ input: e.target, name })
      },
    },
    {
      event: events.focus,
      cb: (e) => this.handleFormTextInputFocus({ input: e.target }),
    },
  ],
})
```

As we can see above, two events are set on the input element:

- input which calls the handleFormTextInputTyping method to which we pass the given input and its name,
- focus which calls the handleFormTextInputFocus method to which we pass the given input

</br>

The handleFormTextInputTyping method that is called on event input is shown below (scripts/objects/Form.js):

```
  handleFormTextInputTyping({ input, name }) {
    this.dataFromUser[name] = input.value
    const isInputNotificationVisible = this.checkFormTextInputNotificationVisibility(
      { input }
    )
    isInputNotificationVisible &&
      this.toggleFormTextInputsNotification({
        toggle: common.off,
        inputs: [input],
      })
  }
```

As we can see above, it is a method that first dynamically adds the value entered into the input field to the this.dataFromUser object (which is assigned to the name of this input).

Next, it is checked whether input notification is visible via the checkFormTextInputNotificationVisibility method to which the given input is passed.

The following is an implementation of this method (scripts/objects/Form.js):

```
  checkFormTextInputNotificationVisibility({ input }) {
    const inputNotifications = [
      ...input.parentElement.querySelectorAll(elements.span),
    ]

    return inputNotifications.some(
      (notification) =>
        notification.style.visibility === styleProps.values.visible
    )
  }
```

As we can see above, it is a simple method which, based on the passed input, selects appropriate notifications (adjacent elements with the input) and checks the visibility style property, returning the true / false value at the end.

Returning to the handleFormTextInputTyping method, at the very end of it, when the notification is visible (isInputNotificationVisible variable has true value), the toggleFormTextInputsNotification method is called, to which we pass the input and the toggle parameter with the value "off".

The following is an implementation of this method (scripts/objects/Form.js):

```
  toggleFormTextInputsNotification({ toggle, inputs, notificationNumber }) {
    setClassesFn({
      toggle,
      objs: [
        {
          elements: inputs,
          classes: [classNames.utilities.border.danger],
        },
      ],
    })

    inputs.map((input) => {
      const notificationEls = [
        ...input.parentElement.querySelectorAll(elements.span),
      ]

      const rightNotificationEls =
        toggle === common.on
          ? [notificationEls[notificationNumber ? notificationNumber : 0]]
          : notificationEls

      setPropsFn({
        toggle,
        objs: [
          {
            elements: rightNotificationEls,
            styleProps: [
              {
                name: styleProps.names.visibility,
                values: {
                  on: styleProps.values.visible,
                  off: styleProps.values.hidden,
                },
              },
              {
                name: styleProps.names.opacity,
                values: { on: 1, off: 0 },
              },
            ],
          },
        ],
      })
    })
  }
```

As we can see above, it is a fairly simple but long method which, depending on the passed toggle parameter ("on"/"off"), input element and so-called notificationNumber (will be discussed later because now this parameter is not passed).

In this case, with the value toggle "off" helper setClassesFn removes the class responsible for the red color of the input border, and setPropsFn helper hides the notification element (the above method with passing the toggle parameter "on" will be discussed later in the form submission process).

Below is a visual example of hiding notifications using the previously mentioned methods:

<!-- Wizualny przykład chowania się notyfikacji -->

<br/>

#### 3.15 Description of the input (text, email and textarea) notifications logic with handleFormTextInputNotificationClick method

As I explained before, each input created is closely related to a set (array) of notifications, which we also saw in the previous subsection.

Each of the notifications (except for the input notification of the submit type) has a listener set to event click, which calls the handleFormTextInputNotificationClick method with passing an input element.

Below is a fragment of the createFormFieldsElements method, in which we see notifications (notificationEls) that have the x method set to event click and the implementation of this method(scripts/objects/Form.js):

```
    const notificationEls = notifications.map((notificationEl) =>
      createElementFn({
        element: elements.span,
        attributes: [{ name: common.fieldname, value: name }],
        classes: [
          type === common.submit
            ? classNames.form.fieldSubmitNotification
            : classNames.form.fieldInputNotification,
        ],
        innerHTML: notificationEl,
        listeners: [
          {
            event: events.click,
            cb: (e) => {
              type !== common.submit &&
                this.handleFormTextInputNotificationClick({
                  notification: e.target,
                })
            },
          },
        ],
      })
    )

    handleFormTextInputNotificationClick({ notification }) {
      notification.parentElement
        .querySelector(
          notification.attributes.fieldname.value === common.message
            ? elements.textarea
            : elements.input
        )
        .focus()
    }
```

As we can see above, this method is not complicated and only on the basis of the passed notification element it looks for the appropriate input element, on which it calls the focus method (which works like pressing the given input by the user - it calls the handleFormTextInputFocus method described earlier).

This solution has been introduced because sometimes the user will click on the notification instead of the input element, and thanks to this, the user will be able to write.

Below is a visual example of this solution:

<!-- Przykłąd kliknięcia w notyfikację -->

<br/>

#### 3.16. Description of the form submit logic with handleFormSubmit method

The handleFormSubmit method is responsible for handling the logic of sending data to the server and the behavior of the form component. This method is called by the event submit, which was set in the this.form element (the call is done directly by clicking the input type submit).

Below is a fragment of the createMainElements method in which the this.form element is created and the implementation of the handleFormSubmit method (scripts/objects/Form.js):

```
    this.form = createElementFn({
      element: elements.form,
      classes: [classNames.form.main],
      noValidate: true,
      listeners: [
        { event: events.submit, cb: (e) => this.handleFormSubmit(e) },
      ],
    })

    async handleFormSubmit(e) {
      e.preventDefault()
      const isEmailValidate = this.emailValidate()
      const emptyTextInputs = this.findEmptyFormTextInputs()

      this.formEmailInput.value &&
        !isEmailValidate &&
        this.toggleFormTextInputsNotification({
          toggle: common.on,
          inputs: [this.formEmailInput],
          notificationNumber: 1,
        })
      emptyTextInputs.length &&
        this.toggleFormTextInputsNotification({
          toggle: common.on,
          inputs: emptyTextInputs,
        })

      if (!isEmailValidate || emptyTextInputs.length) return

      this.disableFormInputs()
      this.toggleDeleteBtnComponent({ toggle: common.off })
      this.toggleSpinnerComponent({ toggle: common.on })
      this.toggleFormSubmitInputlNotifications({
        toggle: common.on,
        notificationDuration: 5000,
      })
      curtain.togglePreventHidden({ toggle: common.on })

      const feedback = await this.handleEmailSent()

      this.resetFormTextInputsValue()
      this.toggleSpinnerComponent({ toggle: common.off })
      this.toggleFormSubmitInputlNotifications({ toggle: common.off })
      this.hideTitleInfo()
      this.hideFormComponent()
      this.replaceTitleText({ text: feedback })
      this.reduceMainComponentHeight()
      this.moveTitleComponent()
      this.revealTitleWhisper()

      await setDelayFn(2000)
      this.setSelfDestructEventToMainComponent()
      curtain.togglePreventHidden({ toggle: common.off })
    }
```

As we can see in the example above, the handleFormSubmit is an asynchronous method because in this method we have a asynchronous method and function for which we have to wait:

- handleEmailSent method (responsible for sending the form data to the server)
- setDelayFn helper (which is used to suspend the described method for a certain period of time)

####

At the very beginning of the discussed handleFormSubmit method, we have the default event blocked by preventDefault method and then we have a method call that validates the email entered by the user (emailValidate) which is returned true/valse value to the isEmailValidate variable.

Below is an implementation of this method along with the data it uses (data/global/names.js and scripts/objects/Form.js):

```
export const emailValidationRegexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  emailValidate() {
    return emailValidationRegexp.test(
      String(this.formEmailInput.value).toLowerCase()
    )
  }
```

As we can see above, this is a simple method that uses the values assigned to the emailValidationRegexp variable to determine the correctness of the entered email (retursn true/false value).

<br/>

####

Going further in the handleFormSubmit method, we call the findEmptyFormTextInputs method, which returns true/false value to the emptyTextInputs variable.

Below is an example with implementation of this method (scripts/objects/Form.js):

```
  findEmptyFormTextInputs() {
    let emptyInputs = []

    this.formTextInputs.map((input) => {
      if (input.value === '') {
        emptyInputs.push(input)
      }
    })

    return emptyInputs
  }
```

As we can see in the above example, it is a simple method that checks the value of inputs (except for the input type submit) and depending on whether it has a value or not, it returns false/true.

<br/>

####

Next, in the handleFormSubmit method we have two conditional calls to the toggleFormTextInputsNotification method, which will be called when:

- the input this.formEmailInput has the entered incorrect e-mail value
- no values have been entered into the inputs

The following is the example with portion of the handleFormSubmit method in question, along with the implementation of toggleFormTextInputsNotification method (scripts/objects/Form.js):

```
    this.formEmailInput.value &&
      !isEmailValidate &&
      this.toggleFormTextInputsNotification({
        toggle: common.on,
        inputs: [this.formEmailInput],
        notificationNumber: 1,
      })

    emptyTextInputs.length &&
      this.toggleFormTextInputsNotification({
        toggle: common.on,
        inputs: emptyTextInputs,
      })

    toggleFormTextInputsNotification({ toggle, inputs, notificationNumber }) {
      setClassesFn({
        toggle,
        objs: [
          {
            elements: inputs,
            classes: [classNames.utilities.border.danger],
          },
        ],
      })

      inputs.map((input) => {
        const notificationEls = [
          ...input.parentElement.querySelectorAll(elements.span),
        ]

        const rightNotificationEls =
          toggle === common.on
            ? [notificationEls[notificationNumber ? notificationNumber : 0]]
            : notificationEls

        setPropsFn({
          toggle,
          objs: [
            {
              elements: rightNotificationEls,
              styleProps: [
                {
                  name: styleProps.names.visibility,
                  values: {
                    on: styleProps.values.visible,
                    off: styleProps.values.hidden,
                  },
                },
                {
                  name: styleProps.names.opacity,
                  values: { on: 1, off: 0 },
                },
              ],
            },
          ],
        })
      })
  }
```

The method we see above has already been presented when discussing the input logic (in the case of toggle value "off"). In the first case, apart from the "on" value of the toggle and the input element passed to this method, the so-called notificationNumber with the value 1 is passed (the right number of the notification to be displayed). In the second case, the notificationNumber value was not specified, so the default notification was chosen.

After selecting the appropriate notification, the helper setClassesFn sets the red border of the notification input of related notification, and the helper setProps reveals this notification.

At the very end of this part of the discussed process, we have the following piece of code (scripts/objects/Form.js):

```
  if (!isEmailValidate || emptyTextInputs.length) return
```

As we can see above, it is a simple condition, in which if the email is invalid and some of the inputs have no values entered, the entire handleFormSubmit method is returned (we will not go to the further process of this method).

Below is a visual example of the appearance of various notifications:

<!-- Pojawianie się rónych notyfikacji -->

<br/>

#### disableFormInputs

Going further in the logic of the handleFormSubmit method, when all the values have been entered correctly we have a disableFormInputs method call the implementation of which is below (scripts/objects/Form.js):

Its implementation is shown below (scripts/objects/Form.js):

```
  disableFormInputs() {
    const formInputs = [this.formSubmitInput, ...this.formTextInputs]

    formInputs.map((input) =>
      setPropsFn({
        objs: [
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
        ],
      })
    )
  }
```

As we can see above, it is a simple method which, through the setPropsFn helper, sets all the inputs of the form (also including the submit type input) to disabled (setting slightly transparent inputs by reduce opacity for a better user experience).
This solution was introduced so that the user could not enter anything when sending the data form.

A visual example of excluding inputs from use is shown below:

<!-- Wizualny przykłąd wyłączenia inputów z uzytku -->

<br/>

#### toggleDeleteBtnComponent

Then in the method handleFormSubmit we have a toggleDeleteBtnComponent method call with passing toggle value "off".
The implementation of mentioned method along with a fragment of the call of this method is below (scripts/objects/Form.js):

```
  this.toggleDeleteBtnComponent({ toggle: common.off })

  toggleDeleteBtnComponent({ toggle }) {
    setPropsFn({
      toggle,
      objs: [
        {
          elements: [this.btnDeleteComponent],
          styleProps: [
            {
              name: styleProps.names.visibility,
              values: {
                on: styleProps.values.visible,
                off: styleProps.values.hidden,
              },
            },
            {
              name: styleProps.names.opacity,
              values: {
                on: 1,
                off: 0,
              },
            },
          ],
        },
      ],
    })
  }
```

As we can see in the above example, through the setPropsFn helper, styles are set to this.btnDeleteComponent, which hide this component (toggle value "off") that is responsible for removing the form after clicking (this was entered so that the user could not remove the window of form durign the data when sending).

<br/>

#### toggleSpinnerComponent

Going further in the logic of the handleFormSubmit method we have a toggleSpinnerComponent method call with passing toggle value "on".

The implementation of mentioned method along with a fragment of the call of this method is below (scripts/objects/Form.js):

```
  this.toggleSpinnerComponent({ toggle: common.on })

  toggleSpinnerComponent({ toggle }) {
    setPropsFn({
      toggle,
      objs: [
        {
          elements: [this.formSubmitInput],
          styleProps: [
            {
              name: styleProps.names.display,
              values: {
                on: styleProps.values.none,
                off: styleProps.values.block,
              },
            },
          ],
        },
        {
          elements: [this.formSpinnerComponent],
          styleProps: [
            {
              name: styleProps.names.display,
              values: {
                on: styleProps.values.flex,
                off: styleProps.values.none,
              },
            },
          ],
        },
      ],
    })
  }
```

As we can see above, this simple method, through the setPropsFn helper, in the case of passed toggle value "on" allows to hide the input type submit and show the loading spinner (for a better user experience during sending form data to server).

Below is a visual example of this solution:

<!-- Przykład spinnera -->

<br/>

#### toggleFormSubmitInputlNotifications

Then in the method handleFormSubmit we have a toggleFormSubmitInputlNotifications method call with passing "on" value of the toggle parameter and "5000" value of the notificationDuration parameter.

The implementation of mentioned method along with a fragment of the call of this method is below (scripts/objects/Form.js):

```
    this.toggleFormSubmitInputlNotifications({
      toggle: common.on,
      notificationDuration: 5000,
    })

    toggleFormSubmitInputlNotifications({ toggle, notificationDuration = {} }) {
      const formSubmitnotificationEls = [
        ...this.formSubmitInput.parentElement.querySelectorAll(elements.span),
      ]

      switch (toggle) {
        case common.on:
          formSubmitnotificationEls.map((notificationEl, index) => {
            const lastNotification =
              formSubmitnotificationEls.length === index + 1
            const delay = index * notificationDuration

            const appearNotificationTimeout = setPropsFn({
              objs: [
                {
                  elements: [notificationEl],
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
              delay,
            })

            this.notificationTimeouts.push(appearNotificationTimeout)

            if (!lastNotification) {
              const hideNotificationTimeout = setPropsFn({
                objs: [
                  {
                    elements: [notificationEl],
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
                ],
                delay: delay + notificationDuration,
              })
              this.notificationTimeouts.push(hideNotificationTimeout)
            }
          })
          break

        case common.off:
          setPropsFn({
            objs: [
              {
                elements: formSubmitnotificationEls,
                styleProps: [
                  {
                    name: styleProps.names.display,
                    value: styleProps.values.none,
                  },
                ],
              },
            ],
          })

          this.notificationTimeouts.map((notificationTimeout) => {
            clearInterval(notificationTimeout)
          })
          break

        default:
          break
      }
  }
```

As we can see above, it is a fairly extensive method, in which all notifications about input with the submit type are searched at the beginning. Then, when the toggle parameter with the value "on" is passed to the method (as in the discussed case), two setProps helpers are called depending on the length of the notification table . The first helper sets the appropriate styles to appear after the specified time, which increases with iteration through the table with notification elements (index \* notificationDuration), and the second helper sets the removal of previously set styles after a set time (delay + notificationDuration).

In the case of the last iteration on the notification elements array, the second helper, which removes the set styles by the earlier one, is not called (so that the user can see the notification continuously until he receives a response from the server).

Each of the called helpers is returned (setTimoeuts of these functions) to a variable (appearNotificationTimeout and hideNotificationTimeout) that is added to the this.notificationTimeouts array during each iteration. Thanks to this, in the case of calling the toggleFormSubmitInputlNotifications method with toggle parameter of the value "off" (after receiving a reply from the server), we can refer to the setTimeouts and remove them (so that when the user receives a message from the server earlier, there are no setTimout functions that have not been called yet).

Thanks to this solution, we have a smooth appearance and disappearance of individual notifications regarding input of the submit type within a specified time.

<br/>

Below is an example of the discussed solution:

<!-- Przykłąd pojawiania się i znikania notyfikacji input submita -->

<br/>

####

<!-- Tutaj -->

The same process as mentioned above is the case with the next method (togglePreventHidden), this time the method called on an instance of the Curtain object, which also prevents the form from being deleted through the curtain element (this process is described in subsection 3.2.4 regarding the Curtain object).

Below is a visual example of this solution:

<!-- Przykład braku moliwosci usuniecia formularza przez kurtynę -->

<br/>

<

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

Next the mentioned component (this.mainComponent) is sent through the toggleShow method of Curtain object (last fragment of the handleMainComponentCreate method) to attach this component to curtain element (the entire logic of the toggleShow method of Curtain object is explained when discussing the Curtain object in section 3.2.5.).

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

<!-- Przyykład tworznia formularza -->

<br/>
<br/>

### 3.2.7. Possibility to go back to the home page by Back object

Table of content of this section:

1. Introdution
2. Description of creating an instance of Back object
3. Description of Back object logic

<br/>

#### 1. Introdution

The functionality that I would like to describe here concerns the possibility of going back to the home page from each subpage.

As in the case of audio handling and creating a form, this functionality is called by the button on the left side of the screen (for obvious reasons, this button is only available on subpages).

Below is a visual example of this solution on the privacy policy page (the same solution applies to subpages related to the descriptions of projects I have created):

<!-- Zdjęcie buttona cofania na private policy -->

<br/>
<br/>

#### 2. Description of creating an instance of Back object

In order to implement the logic we see above, an instance of the BackBtn object is created in the file, which constitutes the main script for the privacy policy page (the same operation as for the previous objects discussed).

The solution looks as follows (scripts/sites/privacyPolicy.js):

```
new Back({ container: idReferences.global.leftContainer })
```

As we can see in the example presented above, only the reference of the container element is passed to the created instance (elements created inside of discussed object are attached to it)
<br/>

#### 3. Description of Back object logic

After the presentation of creating an instance of a Back object, I can now move on to presenting the logic behind this object.

To make it easier to find yourself in the description below, there is a list of topics covered:

&nbsp; &nbsp; &nbsp; &nbsp; 3.1. Code example of Back object constructor <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.2. Description createElements method (constructor) <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.3. Description createComponents method (constructor) <br/>

<br/>

#### 3.1. Code example of Back object constructor

The logic of constructor of the discussed Back object is implemented as follows (is very similar to the Audio object constructor) (scripts/objects/Back.js):

```
import {
  createElementFn,
  appendElementsToContainerFn,
} from '/scripts/helpers/index.js'
import { classNames, paths, elements } from '/data/global/names.js'

class Back {
  constructor({ container }) {
    this.createElements()
    this.createComponents()

    appendElementsToContainerFn({ elements: [this.linkComponent], container })
  }

  more code here...
}

export default BackBtn
```

<br/>

#### 3.2. Description createElements method (constructor)

In the constructor, first, the createElements method is called, which uses the createElementFn helper (the implementation here is scripts/helpers/createElementFn.js) to create individual elements of Back object.

Below is an example of this method (scripts/objects/Back.js):

```
  createElements() {
    this.link = createElementFn({
      element: elements.a,
      href: '/',
      classes: [classNames.global.leftBtn],
    })
    this.arrowImg = createElementFn({
      element: elements.img,
      src: paths.arrowImg,
    })
  }
```

As we can see in the code example above, two elements this.link and this.arrowImg are created which have a very simple structure.

<br/>

#### 3.3. Description createComponents method (constructor)

Next, in the constructor of discussed object, we call the createComponents method, which, based on previously created elements (this.link and this.arrowImg):

Below is an example of this method (scripts/objects/Audio.js):

```
  createComponents() {
    this.linkComponent = appendElementsToContainerFn({
      elements: [this.arrowImg],
      container: this.link,
    })
  }
```

As we can see in code example above, this method combines previously created elements into the so-called component (this.linkComponent) via helper appendElementsToContainer (implementation is here)

This component corresponds to the button we see on the left side of the page screen. Below is a visual example of this component:

<!-- Zdjęcie komponentu buttonu Back -->

<br/>
<br/>

### 3.2.8. Create project sneak peeks by SneakPeeks object

Table of content of this section:

1. Introdution
2. Description of creating an instance of Theme object
3. Description of Theme object logic

<br/>

#### 1. Introdution

Sneak peeks of the projects that I have created appear at the bottom of the main page. It looks like this:

<!-- Przykład z zajawkami -->

<br/>

#### 2. Description of creating an instance of SneakPeeks object

Before I go to the description of the logic of this object, which is responsible for creating the sneak peeks presented above, I would like to present the process of creating its instance with the transfer of appropriate parameters.

Below is an example of creating an instance of a SneakPeeks object (alongside other instances of other objects) in sites/index.js file which is the main script for index.html (home page) (scripts/sites/index.js):

```
new SneakPeeks({
  container: idReferences.sneakPeeks.main,
  trigger: idReferences.sneakPeeks.trigger,
  wrapper: idReferences.sneakPeeks.wrapper,
  data: sneakPeeksInfo,
})
```

As we can see in the example above, the following parameters are passed to the SneakPeeks object:

- container that corresponds to idReferences.sneakPeeks.main which is a reference to the container to which the object with created snippets will be attached,
- trigger that corresponds to idReferences.sneakPeeks.trigger which is a reference to the action trigger element, which we know from the description earlier objects,
- wrapper that corresponds to idReferences.sneakPeeks.wrapper which is a reference to the element that is closely related to the trigger (will be explained later),
- data that corresponds to sneakPeeksInfo which is the data on the basis of which sneak peeks elements are created.

#### 3. Description of SneakPeeks object logic

After the presentation of creating an instance of a SneakPeeks object, I can now move on to presenting the logic behind this object.

To make it easier to find yourself in the description below, there is a list of topics covered:

&nbsp; &nbsp; &nbsp; &nbsp; 3.1. Code example of SneakPeeks object constructor <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.2. Description of variables of object constructor <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.3. Description of createElements method (constructor) <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.4. Description of createComponents method (constructor) <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.5. Description of use appendElementsToContainerFn helper (constructor)
&nbsp; &nbsp; &nbsp; &nbsp; 3.6. Code example and description of data/informations/sneakPeeks.js file <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.7. Description of use triggerActionOnWindowScrollFn helper with related handleOnEnterTriggerEl method (constructor) <br/>

<br/>

#### 3.1. Code example

Below is the constructor implementation of the discussed object (scripts/objects/SneakPeeks.js):

```
import {
  createElementFn,
  triggerActionOnWindowScrollFn,
  appendElementsToContainerFn,
  setClassesFn,
} from '/scripts/helpers/index.js'
import { classNames, info, elements } from '/data/global/names.js'

class SneakPeeks {
  constructor({ container, trigger, wrapper, data }) {
    this.sneakPeeksInfo = data

    this.createElements()
    this.createComponents()
    appendElementsToContainerFn({ elements: [this.mainComponent], container })

    if (trigger) {
      this.triggerElement = document.querySelector(trigger)
      this.wrapperElement = document.querySelector(wrapper)
      triggerActionOnWindowScrollFn({
        onWhatElement: trigger,
        cbOnEnterTriggerEl: () => this.handleOnEnterTriggerEl(),
      })
    }
  }

more code here...
}

export default SneakPeeks
```

As we can see above, the course of the logic of this object is very similar to the objects discussed earlier.

#### 3.2. Description variables of object constructor

As we can see in the code example above, in the object constructor we have following variables:

- this.sneakPeeksInfo which assign the passed data,
- this.triggerElement which conditionally (whether the trigger reference was sent or not) assign the passed reference to the trigger element
- this.wrapperElement which conditionally (whether the trigger reference was sent or not) assign the passed reference to the wrapper element

#### 3.3. Description createElements method (constructor)

After assigning data to this.sneakPeeksInfo variable, the createElements method is called, which uses the createElementFn helper (the implementation here is scripts/helpers/createElementFn.js) to create individual elements of sneak peek and container for sneak peeks.

Below is an example of this method (scripts/objects/Audio.js):

```
createElements() {
    this.mainContainer = createElementFn({
      element: elements.div,
      classes: [classNames.sneakPeeks.container],
    })

    this.elements = this.sneakPeeksInfo.map((sneakPeek) => {
      const linkWrapper = sneakPeek.duringDevelopment
        ? createElementFn({
            element: elements.a,
            classes: [classNames.sneakPeek.linkWrapper],
          })
        : createElementFn({
            element: elements.a,
            classes: [classNames.sneakPeek.linkWrapper],
            href: sneakPeek.href,
          })

      const container = createElementFn({
        element: elements.div,
        classes: [classNames.sneakPeek.container],
      })

      const thubnail = createElementFn({
        element: elements.img,
        classes: [classNames.sneakPeek.thubnail],
        src: sneakPeek.image,
        alt: sneakPeek.alt,
      })

      const prevContainer = createElementFn({
        element: elements.div,
        classes: [classNames.sneakPeek.preview],
      })

      const title = createElementFn({
        element: elements.h(6),
        classes: [classNames.sneakPeek.title],
        textContent: sneakPeek.title,
      })

      const intro = createElementFn({
        element: elements.p,
        classes: [classNames.sneakPeek.intro],
        textContent: sneakPeek.intro,
      })

      const iconsContainer = createElementFn({
        element: elements.div,
        classes: [classNames.sneakPeek.iconsContainer],
      })

      const icons = sneakPeek.icons.map((iconEl) =>
        createElementFn({
          element: elements.img,
          src: iconEl.image,
        })
      )

      const ribbonContainer = sneakPeek.duringDevelopment
        ? createElementFn({
            element: elements.div,
            classes: [classNames.sneakPeek.ribbon],
          })
        : null

      const ribbonText = sneakPeek.duringDevelopment
        ? createElementFn({
            element: elements.p,
            classes: [classNames.sneakPeek.ribbonText],
            innerHTML: info.duringDevelopment,
          })
        : null

      return {
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
      }
    })
  }
```

As we can see above, this is very simple method, in which, through the createElementFn helper, a container element (this.mainContainer) and an array (this.elements) of objects with individual sneak peek elements are created.

#### 3.4. Description of createComponents method (constructor)

Next, in the constructor of discussed object, we call the createComponents method, which, based on previously created elements (this.mainContainer, this.elements), combines them into the so-called components via helper appendElementsToContainer (implementation is here scripts/helpersappendElementsToContainer.js).

Below is an example of this method (scripts/objects/Audio.js):

```
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
        const prevComponent = appendElementsToContainerFn({
          elements: [title, intro],
          container: prevContainer,
        })

        const iconComponents = appendElementsToContainerFn({
          elements: icons,
          container: iconsContainer,
        })

        let sneakPeekComponent = appendElementsToContainerFn({
          elements: [thubnail, prevComponent, iconComponents],
          container,
        })

        if (ribbonContainer && ribbonText) {
          const ribbonComponent = appendElementsToContainerFn({
            elements: [ribbonText],
            container: ribbonContainer,
          })

          sneakPeekComponent = appendElementsToContainerFn({
            elements: [
              thubnail,
              prevComponent,
              iconComponents,
              ribbonComponent,
            ],
            container,
          })
        }

        const linkSneakPeekComponent = appendElementsToContainerFn({
          elements: [sneakPeekComponent],
          container: linkWrapper,
        })

        return linkSneakPeekComponent
      }
    )

    this.mainComponent = appendElementsToContainerFn({
      elements: this.sneakPeekComponents,
      container: this.mainContainer,
    })
  }
```

As we can see, it is a simple method which, through interactions on a previously created array with objects (this.elements), creates this.sneakPeeksComponents (a set of smaller components), which at the end of the discussed method is appended to this.mainContainer to form this.mainComponent (as I mentioned earlier, all connections of elements into components are made via the appendElementsToContainerFn helper).

<br/>

#### 3.5. Description of use appendElementsToContainerFn helper (constructor)

After the above-mentioned methods, the created this.mainComponent component is connected to the container by appendElementsToContainerFn helper (at this stage, individual sneak peeks are available on the website).

<br/>

#### 3.6. Code example and description of data/informations/sneakPeeks.js file

In order to understand well how given sneak peek elements are created, below is a file (data) with a collection of information on individual projects on the basis of which these elements were created (data/informations/sneakPeeks.js):

```
export default [
  {
    href: '/',
    image: '/images/projects/PortfolioWebsite/introDesktop.gif',
    alt: 'Potfolio Website',
    title: 'Portfolio Website (OOP)',
    intro:
      'The page You are on that contains information about me, my skills and the projects that I have done. Also You can here send an e-mail to me (support by Emails Handler app)',
    icons: [
      { image: '/images/icons/technologies/html.jpg' },
      { image: '/images/icons/technologies/css.jpg' },
      { image: '/images/icons/technologies/js.jpg' },
    ],
  },

  {
    href: '/',
    image: '/images/projects/TalkToGisapiaAndTheOthers/introDesktop.gif',
    alt: 'Talk to Gisapia and the Others',
    title: 'Talk to Gisapia and the Others (OOP)',
    intro:
      'This bilingual chat bot allows You to chat with various amazing characters who remember, understand and send information about You to Your email! (support by Emails Handler app)',
    icons: [
      { image: '/images/icons/technologies/html.jpg' },
      { image: '/images/icons/technologies/css.jpg' },
      { image: '/images/icons/technologies/js.jpg' },
      { image: '/images/icons/technologies/gsap.svg' },
    ],
  },

  {
    href: '/',
    image: '/images/projects/EmailsHandler/emailsHandlerIntro.gif',
    alt: 'Emails Handler',
    title: 'Emails Handler',
    intro:
      'A backend application that allows Talk to Gisapia and the Others app and the Porftolio Website to send emails.',
    icons: [
      { image: '/images/icons/technologies/nodejs.jpg' },
      { image: '/images/icons/technologies/sendgrid.jpg' },
      { image: '/images/icons/technologies/mailgun.jpg' },
      { image: '/images/icons/technologies/nodemailer.svg' },
    ],
  },

  {
    href: '/fluentBlog.html',
    image: '/images/projects/FluentBlog/browseArticle.gif',
    alt: 'FluentBlog',
    title: 'FluentBlog',
    intro:
      'A blog with various articles about the IT industry that uses server side rendering in Next.js technology.',
    icons: [
      { image: '/images/icons/technologies/tailwindcss.jpg' },
      { image: '/images/icons/technologies/next.jpg' },
    ],
  },

  {
    href: '/',
    image: '/images/icons/projects/uniqueChoice.jpg',
    alt: 'Unique Choice',
    title: 'Unique Choice',
    intro:
      'It is an E-Commerce fullstack project with all the functionality that allows You to make purchases.',
    icons: [
      { image: '/images/icons/technologies/bootstrap.jpg' },
      { image: '/images/icons/technologies/react.jpg' },
      { image: '/images/icons/technologies/nodejs.jpg' },
      { image: '/images/icons/technologies//mongodb.jpg' },
    ],
    duringDevelopment: true,
  },

  {
    href: '/',
    image: '/images/icons/projects/leaf.jpg',
    alt: 'Leaf',
    title: 'Leaf',
    intro:
      'It is a fullstack project that aims to recreate many functionalities, structures and styles from apple.com.',
    icons: [
      { image: '/images/icons/technologies/react.jpg' },
      { image: '/images/icons/technologies/nodejs.jpg' },
      { image: '/images/icons/technologies/mongodb.jpg' },
    ],
    duringDevelopment: true,
  },
]
```

As we can see in the above example, data is an array of objects, each of which has an appropriate information structure, thanks to which the createElements method during iteration can easly create appropriate elements with appropriate properties.

#### 3.7. Description of use triggerActionOnWindowScrollFn helper with related handleOnEnterTriggerEl method (constructor)

Finally, the triggerActionOnWindowScrollFn helper is executed in the object's constructor, which works a bit differently than the objects mentioned earlier.

The action of the mentioned helper applies to all the sneak peeks when you scroll to sections with id sneakPeeks-trigger (our trigger element).

A visual example of this process is shown below:

<!-- Wizualny przykład pokazania sneak peeks -->

In order to describe in detail the operation of the above example, I will present below the triggerActionOnWindowScrollFn helper without other constructor elements of the discussed object (scripts/objects/SneakPeeks.js):

```
    if (trigger) {
      this.triggerElement = document.querySelector(trigger)
      this.wrapperElement = document.querySelector(wrapper)
      triggerActionOnWindowScrollFn({
        onWhatElement: trigger,
        cbOnEnterTriggerEl: () => this.handleOnEnterTriggerEl(),
      })
    }
```

As we can see in the above example, the discussed helper can only be called when the reference to the trigger element is sent to the object (this was introduced because in some cases this element may not be sent).

After checking the condition, before the helper is called, the appropriate elements of the DOM structure are queried: trigger and wrapper.

Then, after queried the appropriate elements from the DOM structure, the discussed helper is called and thanks to this, the method handleOnEnterTriggerEl is called when the trigger element is scrolled (in this case we only have one call without toggle parameter).

The following is an implementation of the handleOnEnterTriggerEl method which is responsible for the appearance of the sneak peeks on the website (scripts/objects/SneakPeeks.js):

```
  handleOnEnterTriggerEl() {
    setClassesFn({
      objs: [
        {
          elements: [this.triggerElement],
          classes: [classNames.utilities.h.full],
        },
        {
          elements: [this.wrapperElement],
          classes: [classNames.utilities.animations.slideInFromTop],
        },
      ],
    })
  }
```

As we can see above, it is a simple method which, using the setClassesFn helper (the entire implementation is in scripts/helper/setClassesFn.js), sets the class associated with the full height on the this.triggerElement element and on the this.wrapperToRelease element the class with the slideInFromTop animation responsible for the effect of sliding from the top.

<br/>
<br/>

### 3.2.9. Create descriptions by DescriptionArrange object

Table of content of this section:

1. Introdution
2. Description of creating an instance of Theme object
3. Description of Theme object logic

<br/>

#### 1. Introdution

Some of the larger descriptions on the page were created using the DescriptionArrange object. This solution was introduced because creating descriptions in the html file itself is not readable.

In the case of the home page, there is a description of my person and my skills created dynamically by the DescriptionArrange object (such a dynamic description is also created on the privacy policy page and on each page with the description of the created project - a visual example of them is provided at the end of this subsection).

Below is a visual example of my person and my skills descriptions on the home page:

<!-- Przykłady opisów na stronie głównej -->

<br/>

#### 2. Description of creating an instance of DescriptionArrange object

In order to create the descriptions shown above, two instances of the DescriptionArrange object were created in the index.js file, which is the main script file for the main page (along with other object instances).

Below is an example of this solution (scripts/sites/index.js):

```
new DescriptionArrange({
  container: idReferences.about.description,
  data: aboutDescription,
})
new DescriptionArrange({
  container: idReferences.skills.description,
  data: skillsDescription,
})
```

Created instances of the DescriptionArrange object, as we can see above, take the reference to container element to which the element (container) found through this reference will be attached elements created on the basis of the data sent regarding the description (aboutDescription and skillsDescription).

#### 3. Description of DescriptionArrange object logic

To make it easier to find yourself in the description below, there is a list of topics covered:

&nbsp; &nbsp; &nbsp; &nbsp; 3.1. Code example of DescriptionArrange object constructor <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.2. Description variables of object constructor <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.3. Description createElements method (constructor) <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.4. Description of use appendElementsToContainerFn helper (constructor)
&nbsp; &nbsp; &nbsp; &nbsp; 3.5. Code example and description of data/descriptions/skills.js file <br/>
&nbsp; &nbsp; &nbsp; &nbsp; 3.6. Additional informations <br/>

<br/>

#### 3.1. Code example

The object itself, which is responsible for creating the description is presented below (scripts/objects/DescriptionArrange.js):

```
import {
  createElementFn,
  appendElementsToContainerFn,
} from '/scripts/helpers/index.js'
import { common, elementProps } from '/data/global/names.js'

class DescriptionArrange {
  constructor({ container, data }) {
    this.description = data

    this.createElements()
    appendElementsToContainerFn({ elements: this.elements, container })
  }
}
more code here...

export default DescriptionArrange
```

#### 3.2. Description variables of object constructor

As we can see in the code example above, in the constructor we only have one variable this.description that takes an array with objects associated with a given description (data)

#### 3.3. Description createElements method (constructor)

The createElements method is responsible for creating elements, as in the previous objects, which in this case looks as follows (scripts/objects/DescriptionArrange.js):

```
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
            classes: object.classes.list,
          })

          const listItems = object.content.map((listItemContent, index) =>
            object.content.length - 1 === index
              ? createElementFn({
                  element: object.elements.listItem,
                  classes: object.classes.lastListItem,
                  textContent: listItemContent,
                })
              : createElementFn({
                  element: object.elements.listItem,
                  classes: object.classes.listItem,
                  textContent: listItemContent,
                })
          )

          listItems.map((listItem) => list.appendChild(listItem))

          return list

        case common.code:
          const pre = createElementFn({
            element: object.elements.pre,
          })
          const code = createElementFn({
            element: object.elements.code,
            classes: [object.classes.code],
            textContent: object.content,
          })
          pre.appendChild(code)

          return pre

        default:
          break
      }
    })
  }
```

As we can see in above code example, the createElements method has very simple logic and depending on the passed data (this process will be explained in subsection 3.4.), an appropriate description element is created using the switch statement and the createElementFn helper (the implementation is here scripts/helpers/createElementsFn.js)

#### #### 3.4. Description of use appendElementsToContainerFn helper (constructor)

At the very end of the constructor logic created elements (this.elements) are attached to the passed container using appendElementsToContainerFn helper (after this operation, the entire description is ready and visible on the website).

<br/>

#### 3.5. Code example and description of data/descriptions/skills.js file

In order to understand well how given description elements are created, below is a file (data) describing my skills on the basis of which these elements were created (data/descriptions/skills.js):

```
import { common, classNames, elements } from '/data/global/names.js'

export default [
  {
    type: common.headline,
    element: elements.h(3),
    content: 'Skills',
    classes: [
      classNames.utilities.m.t(10),
      classNames.utilities.text.center,
      classNames.utilities.text.underline,
    ],
  },
  {
    type: common.header,
    element: elements.h(5),
    content: '1. Frontend:',
    classes: [classNames.utilities.m.t(30), classNames.utilities.text.lh(30)],
  },
  {
    type: common.list,
    elements: {
      list: elements.ul,
      listItem: elements.li,
    },
    content: [
      'HTML (semantic),',
      'CSS (RWD, SASS, BEM, TailwindCSS, Bootstrap),',
      'JavaScript (OOP, Design Patterns),',
      'React (Redux, Hooks, Styled Components, Compound Components, Atomic Design),',
      'Next (basic knowledge of the concept of server side rendering and how to use it),',
      'TypeScript (basic knowledge of types)',
    ],
    classes: {
      list: [
        classNames.utilities.m.y(10),
        classNames.utilities.position.relative,
      ],
      listItem: [
        classNames.utilities.m.b(15),
        classNames.utilities.m.l(20),
        classNames.utilities.text.lh(25),
        classNames.utilities.text.dash,
      ],
      lastListItem: [
        classNames.utilities.m.l(20),
        classNames.utilities.text.lh(25),
        classNames.utilities.text.dash,
      ],
    },
  },
  {
    type: common.header,
    element: elements.h(5),
    content: '2. Backend:',
    classes: [classNames.utilities.m.t(40), classNames.utilities.text.lh(30)],
  },
  {
    type: common.list,
    elements: {
      list: elements.ul,
      listItem: elements.li,
    },
    content: [
      `Node/Express (e-commerce REST API's),`,
      'MongoDB (basic handling with Express),',
      'PHP (basic syntax and logic)',
    ],
    classes: {
      list: [
        classNames.utilities.m.t(10),
        classNames.utilities.m.b(0),
        classNames.utilities.position.relative,
      ],
      listItem: [
        classNames.utilities.m.b(15),
        classNames.utilities.m.l(20),
        classNames.utilities.text.lh(25),
        classNames.utilities.text.dash,
      ],
      lastListItem: [
        classNames.utilities.m.l(20),
        classNames.utilities.text.lh(25),
        classNames.utilities.text.dash,
      ],
    },
  },
]
```

In the above example, we see an array that has several objects that contain the characteristics of individual parts of the description (e.g. type, element/elements, content and classes). Thanks to this arrangement of data, we can dynamically create a description that will contain appropriate elements, styles and content (based on the switch statement in the createElements method of the object).

<br/>

#### 3.6. Additional informations

Worth mentioning that in the case of the privacy policy page and pages regarding created projects, the same principle applies.

Data related to the description of the privacy policy page can be found here data/descriptions/privacyPolicy.js, and data related to the descriptions of individual projects in the data/descriptions/projects folder (due to the same operation, they are not described here).

<br/>

To illustrate the entire process below is just a visual example of the TalkToGisapiaAndTheOthers project description and the privacy policy description created dynamically through the DescriptionArrange object:

<!-- Pokazanie opisu projektu oraz private policy-->
