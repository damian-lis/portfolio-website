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

    this.formFieldsInputs = []

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
    this.formFieldsInputs.map((input) => {
      input.value = ''
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
    this.formFieldsInputs = []
    this.deleteFormBtnContainer = null
    this.deleteFormBtn = null
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
            transition: '1s',
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
            transition: '1s',
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
    this.formFieldsInputs.map((input) => {
      if (input.value === '') {
        this.addBorderDanger(input)
        isEmptyInputValue = true
      }
    })

    return isEmptyInputValue
  }

  async handleEmailSent() {
    this.showLoading()
    return await fetch('http://localhost:5000/api/mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(this.dataFromUser),
    })
      .then((response) => response.json())
      .then((data) => {
        this.hideLoading()
        return data
      })
  }

  hideLoading() {
    this.spinnerContainer.style.backgroundColor = 'var(--buttonColor)'
    this.spinner.remove()
  }

  disableInputs() {
    this.formFieldsInputs.map((input) => {
      input.disabled = true
      input.style.opacity = 0.4
    })
  }

  showLoading() {
    this.disableInputs()
    const submitBtn = this.formFieldsInputs[this.formFieldsInputs.length - 1]
    submitBtn.parentNode.replaceChild(this.spinnerContainer, submitBtn)
  }

  async handleSubmit(e) {
    e.preventDefault()

    // const areEmptyInputsValue = this.checkIfEmptyInputsValue()
    // if (areEmptyInputsValue) return

    const response = await this.handleEmailSent()

    if (response.success) {
      this.actionAfterSubmit(response.message)
    } else {
      this.actionAfterSubmit(response.message)
    }
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
    this.formCol.appendChild(this.form)
    this.spinnerContainer.appendChild(this.spinner)
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
      this.formFieldsInputs.push(input)
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
      this.formFieldsInputs.push(input)
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
      this.formFieldsInputs.push(input)
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
