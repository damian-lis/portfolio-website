import curtain from './Curtain.js'
import {
  createElementFn,
  addPropsAfterDelay,
  triggerActionOnWindowScroll,
  appendElementsToContainer,
} from '../helpers/index.js'

class Form {
  constructor(container, trigger) {
    const containerSent = document.querySelector(container)
    const triggerElement = document.querySelector(trigger)
    const formBtnElements = this.createFormBtnElements()
    const formBtnComponent = this.joinFormBtnElements(formBtnElements)

    this.formFieldsContent = [
      { label: 'Name', type: 'text', name: 'name' },
      { label: 'Subject', type: 'text', name: 'subject' },
      { label: 'Email', type: 'email', name: 'email' },
      { label: 'Message', type: 'textarea', name: 'message' },
      { type: 'submit', value: 'Wyślij', name: 'submit' },
    ]
    this.formFieldsInput = []
    this.dataFromUser = {
      name: '',
      subject: '',
      email: '',
      message: '',
    }

    appendElementsToContainer(formBtnComponent, containerSent)
    this.handleFormBtnDuringWindowScroll(triggerElement)
  }

  createFormBtnElements() {
    this.formBtn = createElementFn({
      element: 'button',
      classes: ['global-left-btn'],
      event: 'click',
      cb: () => this.handleFormCreate(),
    })

    this.formBtnIcon = createElementFn({
      element: 'img',
      classes: ['mt-5'],
      src: '../../data/images/icons/email.svg',
    })

    return [this.formBtn, this.formBtnIcon]
  }

  joinFormBtnElements(elements) {
    const [formBtn, btnIcon] = elements
    formBtn.appendChild(btnIcon)

    return formBtn
  }

  handleFormCreate() {
    this.hideFormBtn()
    const formElements = this.createFormElements()
    const formComponent = this.joinFormElements(formElements)
    curtain.addCbsToCallOnHidden([
      () => {
        this.showFormBtn()
        this.resetFormInputsValue()
        this.resetDataFromUser()
        this.resetFormElements()
      },
    ])
    curtain.attachComponents([formComponent])
    curtain.show()
  }

  createFormElements() {
    this.formMainContainer = createElementFn({
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

    this.formDeleteBtnContainer = createElementFn({
      element: 'div',
      classes: ['form-btn-delete-container'],
    })

    this.formDeleteBtn = createElementFn({
      element: 'button',
      classes: ['form-btn-delete'],
      textContent: 'X',
      event: 'click',
      cb: () => curtain.hidden(),
    })

    this.formTitleCol = createElementFn({
      element: 'div',
      classes: ['col-15', 'content-center-xy', 'top-0'],
    })
    this.formTitle = createElementFn({
      element: 'h3',
      classes: ['text-center'],
      textContent: 'Write to me a message',
    })
    this.formCol = createElementFn({
      element: 'div',
      classes: ['col-85'],
    })
    this.formInnerContainer = createElementFn({
      element: 'div',
      classes: ['row-y', 'h-full'],
    })
    this.form = createElementFn({
      element: 'form',
      classes: ['form'],
      event: 'submit',
      cb: (e) => this.handleFormSubmit(e),
    })
    this.formFieldsElements = this.createFormFieldsElements()

    this.formFields = this.formFieldsContent.map((field) =>
      createElementFn({
        element: 'div',
        classes: ['form-field', `form-field-${field.name}`],
      })
    )

    this.formSpinnerContainer = createElementFn({
      element: 'div',
      classes: ['form-spinner-container'],
    })

    this.formSpinner = createElementFn({
      element: 'div',
      classes: ['form-spinner'],
    })

    return [
      this.formMainContainer,
      this.formDeleteBtnContainer,
      this.formDeleteBtn,
      this.formTitleCol,
      this.formTitle,
      this.formCol,
      this.formInnerContainer,
      this.form,
      this.formFieldsElements,
      this.formFields,
      this.formSpinnerContainer,
      this.formSpinner,
    ]
  }

  createFormFieldsElements() {
    return this.formFieldsContent.map((fieldContent) =>
      this.createFormFieldElements(fieldContent)
    )
  }
  createFormFieldElements({ label, type, name, value, text }) {
    let lab, input

    if (type === 'submit') {
      input = createElementFn({
        element: 'input',
        type,
        name,
        id: name,
        value,
      })
      this.formFieldsInput.push(input)
    } else if (type === 'textarea') {
      lab = createElementFn({
        element: 'label',
        textContent: label,
        htmlFor: name,
      })
      input = createElementFn({
        element: 'textarea',
        name,
        id: name,
        event: 'input',
        cb: (e) => {
          this.handleFormInput(e, name)
          this.checkAndRemoveBorderDanger(e)
        },
      })
      this.formFieldsInput.push(input)
    } else {
      lab = createElementFn({
        element: 'label',
        textContent: label,
        htmlFor: name,
      })
      input = createElementFn({
        element: 'input',
        type,
        name,
        id: name,
        event: 'input',
        cb: (e) => {
          this.handleFormInput(e, name)
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

  handleFormBtnDuringWindowScroll(triggerElement) {
    triggerActionOnWindowScroll({
      onWhatElement: triggerElement,
      cbWhenTrue: () => this.hideFormBtn(),
      cbWhenFalse: () => this.showFormBtn(),
    })
  }

  joinFormElements(elements) {
    const [
      formMainContainer,
      formDeleteBtnContainer,
      formDeleteBtn,
      formTitleCol,
      formTitle,
      formCol,
      formContainer,
      form,
      formFieldsElements,
      formFields,
      formSpinnerContainer,
      formSpinner,
    ] = elements

    formTitleCol.appendChild(formTitle)
    formFields.map((field, index) => {
      formFieldsElements[index].map((fieldElements) =>
        field.appendChild(fieldElements)
      )
      form.appendChild(field)
    })
    formSpinnerContainer.appendChild(formSpinner)
    form.appendChild(formSpinnerContainer)
    formCol.appendChild(form)

    formContainer.appendChild(formTitleCol)
    formContainer.appendChild(formCol)
    formDeleteBtnContainer.appendChild(formDeleteBtn)
    formMainContainer.appendChild(formDeleteBtnContainer)
    formMainContainer.appendChild(formContainer)

    return formMainContainer
  }

  resetFormInputsValue() {
    this.formFieldsInput.map((input) => {
      if (input.type !== 'submit') {
        input.value = ''
      }
    })
  }

  addBorderDanger(element) {
    element.classList.add('border-danger')
  }

  resetFormElements() {
    this.formMainContainer = null
    this.formInnerContainer = null
    this.formTitleCol = null
    this.formTitle = null
    this.formCol = null
    this.form = null
    this.formFieldsElements = null
    this.formFields = null
    this.formFieldsInput = []
    this.formDeleteBtnContainer = null
    this.formDeleteBtn = null
    this.formSpinnerContainer = null
    this.formSpinner = null
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
    this.resetFormInputsValue()
    addPropsAfterDelay(
      [
        {
          element: this.formTitleCol,
          styleElements: {
            transition: '0.6s',
            position: 'relative',
            transform: 'translateY(-50%)',
            top: '50%',
          },
        },
        {
          element: this.formTitle,
          properties: {
            innerHTML: message,
          },
        },
        {
          element: this.formCol,
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

  checkIfEmptyFormInputsValue() {
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
    this.disableFormInputs()
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

  disableFormInputs() {
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
        this.formSpinnerContainer.style.display = 'flex'
        break
      case 'off':
        submitBtn.style.display = 'block'
        this.formSpinnerContainer.style.display = 'none'
        break
      default:
        break
    }
  }

  async handleFormSubmit(e) {
    e.preventDefault()
    const areEmptyFormInputsValue = this.checkIfEmptyFormInputsValue()
    if (areEmptyFormInputsValue) return

    await this.handleEmailSent()
  }

  handleFormInput(e, name) {
    this.dataFromUser[name] = e.target.value
  }

  showFormBtn() {
    this.formBtn.style.transform = 'translateX(0)'
  }

  hideFormBtn() {
    this.formBtn.style.transform = 'translateX(-100%)'
  }
}

export default Form
