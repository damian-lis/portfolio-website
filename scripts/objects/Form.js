import curtain from './Curtain.js'
import {
  createElementFn,
  addPropsAfterDelay,
  handleElOnWindowScroll,
} from '../helpers/index.js'

export default class Form {
  constructor(container, elementToBeHooked) {
    this.formFieldsContent = [
      { label: 'Name', type: 'text', name: 'name' },
      { label: 'Subject', type: 'text', name: 'subject' },
      { label: 'Email', type: 'email', name: 'email' },
      { label: 'Message', type: 'textarea', name: 'message' },
      { type: 'submit', value: 'Wyślij', name: 'submit' },
    ]
    this.dataFromUser = {
      name: '',
      subject: '',
      email: '',
      message: '',
    }

    this.formFieldsInput = []

    this.createFormBtn = createElementFn({
      element: 'button',
      classes: ['global-left-btn'],
      event: 'click',
      cb: () => this.handleFormCreate(),
    })

    this.icon = createElementFn({
      element: 'img',
      classes: ['mt-5'],
      src: '../../data/images/icons/email.svg',
    })

    this.createFormBtn.appendChild(this.icon)
    document.querySelector(container).appendChild(this.createFormBtn)

    this.handleButtonDuringWindowScroll(elementToBeHooked)
  }

  handleFormCreate() {
    this.hideButton()
    curtain.addCbsToCallOnHidden([
      () => {
        this.showButton()
        this.resetInputsValue()
        this.resetDataFromUser()
        this.resetComponents()
      },
    ])
    this.createComponents()
    this.joinComponentsTogether()
    curtain.attachComponents([this.mainComponent])
    curtain.show()
  }

  resetInputsValue() {
    this.formFieldsInput.map((input) => {
      if (input.type !== 'submit') {
        input.value = ''
      }
    })
  }

  addBorderDanger(element) {
    element.classList.add('border-danger')
  }

  resetComponents() {
    this.mainComponent = null
    this.formContainer = null
    this.titleCol = null
    this.title = null
    this.formCol = null
    this.form = null
    this.formFieldsInput = []
    this.deleteFormBtnContainer = null
    this.deleteFormBtn = null
    this.spinnerContainer = null
    this.spinner = null
  }

  resetDataFromUser() {
    this.dataFromUser = {
      name: '',
      subject: '',
      email: '',
      message: '',
    }
  }

  actionAfterSubmit(message) {
    this.resetInputsValue()
    addPropsAfterDelay(
      [
        {
          node: this.titleCol,
          styleElements: {
            transition: '0.6s',
            position: 'relative',
            transform: 'translateY(-50%)',
            top: '50%',
          },
        },
        {
          node: this.title,
          properties: {
            innerHTML: message,
          },
        },
        {
          node: this.formCol,
          styleElements: {
            transition: '0.3s',
            height: '0px',
            overflow: 'hidden',
            opacity: 0,
            visibility: 'hidden',
          },
        },
      ],
      300
    )
  }

  checkIfEmptyInputsValue() {
    let isEmptyInputValue = false
    this.formFieldsInput.map((input) => {
      if (input.value === '') {
        this.addBorderDanger(input)
        isEmptyInputValue = true
      }
    })

    return isEmptyInputValue
  }

  async handleEmailSent() {
    this.disableInputs()
    this.toggleSpinner('on')
    return await fetch('http://localhost:5000/api/mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(this.dataFromUser),
    })
      .then((response) => response.json())
      .then((data) => {
        this.toggleSpinner('off')
        if (data.success) {
          this.actionAfterSubmit(data.message)
        } else {
          this.actionAfterSubmit(data.message)
        }
      })
      .catch(() => {
        const message = 'Unable to connect to the server &#128128;'
        this.toggleSpinner('off')
        this.actionAfterSubmit(message)
      })
  }

  disableInputs() {
    this.formFieldsInput.map((input) => {
      input.disabled = true
      input.style.opacity = 0.4
    })
  }

  toggleSpinner(toggle) {
    const submitBtn = this.formFieldsInput[this.formFieldsInput.length - 1]

    switch (toggle) {
      case 'on':
        submitBtn.style.display = 'none'
        this.spinnerContainer.style.display = 'flex'
        break
      case 'off':
        submitBtn.style.display = 'block'
        this.spinnerContainer.style.display = 'none'
        break
      default:
        break
    }
  }

  async handleSubmit(e) {
    e.preventDefault()
    const areEmptyInputsValue = this.checkIfEmptyInputsValue()
    if (areEmptyInputsValue) return

    await this.handleEmailSent()
  }

  handleInput(e, name) {
    this.dataFromUser[name] = e.target.value
  }

  showButton() {
    this.createFormBtn.style.transform = 'translateX(0)'
  }

  hideButton() {
    this.createFormBtn.style.transform = 'translateX(-100%)'
  }

  createComponents() {
    this.mainComponent = createElementFn({
      element: 'div',
      classes: [
        'card',
        'w-full',
        'wrap-x-500',
        'h-full',
        'wrap-y-600',
        'slideInFromRight',
      ],
      event: 'click',
      cb: (e) => e.stopPropagation(),
    })

    this.deleteFormBtnContainer = createElementFn({
      element: 'div',
      classes: ['form-btn-delete-container'],
    })

    this.deleteFormBtn = createElementFn({
      element: 'button',
      classes: ['form-btn-delete'],
      text: 'X',
      event: 'click',
      cb: () => curtain.hidden(),
    })

    this.titleCol = createElementFn({
      element: 'div',
      classes: ['col-15', 'content-center-xy', 'top-0'],
    })
    this.title = createElementFn({
      element: 'h3',
      classes: ['text-center'],
      text: 'Write to me a message',
    })
    this.formCol = createElementFn({
      element: 'div',
      classes: ['col-85'],
    })
    this.formContainer = createElementFn({
      element: 'div',
      classes: ['row-y', 'h-full'],
    })
    this.form = createElementFn({
      element: 'form',
      classes: ['form'],
      event: 'submit',
      cb: (e) => this.handleSubmit(e),
    })
    this.formFields = this.createFormFieldsWithElements()

    this.spinnerContainer = createElementFn({
      element: 'div',
      classes: ['form-spinner-container'],
    })

    this.spinner = createElementFn({
      element: 'div',
      classes: ['form-spinner'],
    })
  }

  joinComponentsTogether() {
    this.titleCol.appendChild(this.title)
    this.formFields.map((formField) => {
      this.form.appendChild(formField)
    })
    this.spinnerContainer.appendChild(this.spinner)
    this.form.appendChild(this.spinnerContainer)
    this.formCol.appendChild(this.form)

    this.formContainer.appendChild(this.titleCol)
    this.formContainer.appendChild(this.formCol)
    this.deleteFormBtnContainer.appendChild(this.deleteFormBtn)
    this.mainComponent.appendChild(this.deleteFormBtnContainer)
    this.mainComponent.appendChild(this.formContainer)
  }

  createFormFieldElements({ label, type, name, value, text }) {
    let lab, input

    if (type === 'submit') {
      input = createElementFn({
        element: 'input',
        text,
        type,
        name,
        id: name,
        value,
      })
      this.formFieldsInput.push(input)
    } else if (type === 'textarea') {
      lab = createElementFn({
        element: 'label',
        text: label,
        htmlFor: name,
      })
      input = createElementFn({
        element: 'textarea',
        name,
        id: name,
        event: 'input',
        cb: (e) => {
          this.handleInput(e, name)
          this.checkAndRemoveBorderDanger(e)
        },
      })
      this.formFieldsInput.push(input)
    } else {
      lab = createElementFn({
        element: 'label',
        text: label,
        htmlFor: name,
      })
      input = createElementFn({
        element: 'input',
        text,
        type,
        name,
        id: name,
        event: 'input',
        cb: (e) => {
          this.handleInput(e, name)
          this.checkAndRemoveBorderDanger(e)
        },
      })
      this.formFieldsInput.push(input)
    }

    return lab ? [lab, input] : [input]
  }

  checkAndRemoveBorderDanger(e) {
    if (e.target.classList.contains('border-danger')) {
      e.target.classList.remove('border-danger')
    }
  }

  createFormFieldWithElements(content) {
    const formField = createElementFn({
      element: 'div',
      classes: ['form-field', `form-field-${content.name}`],
    })

    const formFieldElements = this.createFormFieldElements(content)
    formFieldElements.map((formFieldElement) => {
      formField.appendChild(formFieldElement)
    })
    return formField
  }

  createFormFieldsWithElements() {
    const formFields = this.formFieldsContent.map((content) =>
      this.createFormFieldWithElements(content)
    )

    return formFields
  }

  handleButtonDuringWindowScroll(elementToBeHooked) {
    handleElOnWindowScroll({
      onWhatElement: elementToBeHooked,
      cbWhenTrue: () => this.hideButton(),
      cbWhenFalse: () => this.showButton(),
    })
  }
}
