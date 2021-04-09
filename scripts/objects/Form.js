import curtain from './Curtain.js'
import {
  createElementFn,
  addPropsAfterDelayFn,
  triggerActionOnWindowScrollFn,
  appendElementsToContainerFn,
} from '../helpers/index.js'
import { classNames, mailEndPoint, src } from '../../data/global/names.js'

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

    appendElementsToContainerFn([formBtnComponent], containerSent)
    this.handleFormBtnDuringWindowScroll(triggerElement)
  }

  createFormBtnElements() {
    console.log(classNames.global.leftBtn)
    this.formBtn = createElementFn({
      element: 'button',
      classes: [classNames.global.leftBtn],
      event: 'click',
      listeners: [{ event: 'click', cb: () => this.handleFormCreate() }],
      // cb: () => this.handleFormCreate(),
    })

    this.formBtnIcon = createElementFn({
      element: 'img',
      classes: [classNames.utilities.margin.t5],
      src: src.form.btnImg,
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
    this.formCard = createElementFn({
      element: 'div',
      classes: [classNames.form.card],
      event: 'click',
      listeners: [{ event: 'click', cb: (e) => e.stopPropagation() }],
      // cb: (e) => e.stopPropagation(),
    })

    this.formDeleteBtnContainer = createElementFn({
      element: 'div',
      classes: [classNames.form.btnDeleteContainer],
    })

    this.formDeleteBtn = createElementFn({
      element: 'button',
      classes: [classNames.form.btnDelete],
      textContent: 'X',
      event: 'click',
      listeners: [{ event: 'click', cb: () => curtain.hidden() }],
      // cb: () => curtain.hidden(),
    })

    this.formTitleContainer = createElementFn({
      element: 'div',
      classes: [classNames.form.titleContainer],
    })
    this.formTitle = createElementFn({
      element: 'h3',
      classes: [classNames.form.title],
      textContent: 'Write to me a message',
    })
    this.formOuterContainer = createElementFn({
      element: 'div',
      classes: [classNames.form.outerContainer],
    })
    this.formInnerContainer = createElementFn({
      element: 'div',
      classes: [classNames.form.innerContainer],
    })
    this.form = createElementFn({
      element: 'form',
      classes: [classNames.form.main],
      event: 'submit',
      listeners: [{ event: 'submit', cb: (e) => this.handleFormSubmit(e) }],
      // cb: (e) => this.handleFormSubmit(e),
    })
    this.formFieldsElements = this.createFormFieldsElements()

    this.formFields = this.formFieldsContent.map((field) =>
      createElementFn({
        element: 'div',
        classes: [
          classNames.form.field,
          `${classNames.form.field}-${field.name}`,
        ],
      })
    )

    this.formSpinnerContainer = createElementFn({
      element: 'div',
      classes: [classNames.form.spinnerContainer],
    })

    this.formSpinner = createElementFn({
      element: 'div',
      classes: [classNames.form.spinner],
    })

    return [
      this.formCard,
      this.formDeleteBtnContainer,
      this.formDeleteBtn,
      this.formTitleContainer,
      this.formTitle,
      this.formOuterContainer,
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
  createFormFieldElements({ label, type, name, value }) {
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
        listeners: [
          {
            event: 'input',
            cb: (e) => {
              this.handleFormInput(e, name)
              this.checkAndRemoveBorderDanger(e)
            },
          },
        ],
        // cb: (e) => {
        //   this.handleFormInput(e, name)
        //   this.checkAndRemoveBorderDanger(e)
        // },
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
        listeners: [
          {
            event: 'input',
            cb: (e) => {
              this.handleFormInput(e, name)
              this.checkAndRemoveBorderDanger(e)
            },
          },
        ],
        // cb: (e) => {
        //   this.handleFormInput(e, name)
        //   this.checkAndRemoveBorderDanger(e)
        // },
      })
      this.formFieldsInput.push(input)
    }

    return lab ? [lab, input] : [input]
  }

  checkAndRemoveBorderDanger(e) {
    if (e.target.classList.contains(classNames.utilities.border.danger)) {
      e.target.classList.remove(classNames.utilities.border.danger)
    }
  }

  handleFormBtnDuringWindowScroll(triggerElement) {
    triggerActionOnWindowScrollFn({
      onWhatElement: triggerElement,
      cbWhenTrue: () => this.hideFormBtn(),
      cbWhenFalse: () => this.showFormBtn(),
    })
  }

  joinFormElements(elements) {
    const [
      formCard,
      formDeleteBtnContainer,
      formDeleteBtn,
      formTitleContainer,
      formTitle,
      formOuterContainer,
      formInnerContainer,
      form,
      formFieldsElements,
      formFields,
      formSpinnerContainer,
      formSpinner,
    ] = elements

    formTitleContainer.appendChild(formTitle)
    formFields.map((field, index) => {
      formFieldsElements[index].map((fieldElements) =>
        field.appendChild(fieldElements)
      )
      form.appendChild(field)
    })
    formSpinnerContainer.appendChild(formSpinner)
    form.appendChild(formSpinnerContainer)
    formOuterContainer.appendChild(form)

    formInnerContainer.appendChild(formTitleContainer)
    formInnerContainer.appendChild(formOuterContainer)
    formDeleteBtnContainer.appendChild(formDeleteBtn)
    formCard.appendChild(formDeleteBtnContainer)
    formCard.appendChild(formInnerContainer)

    return formCard
  }

  resetFormInputsValue() {
    this.formFieldsInput.map((input) => {
      if (input.type !== 'submit') {
        input.value = ''
      }
    })
  }

  addBorderDanger(element) {
    element.classList.add(classNames.utilities.border.danger)
  }

  resetFormElements() {
    this.formCard = null
    this.formInnerContainer = null
    this.formTitleContainer = null
    this.formTitle = null
    this.formOuterContainer = null
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
    addPropsAfterDelayFn(
      [
        {
          element: this.formTitleContainer,
          styleElements: {
            transition: '0.9s',
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
          element: this.formOuterContainer,
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
    return await fetch(mailEndPoint, {
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
        const message = 'Unable to connect to the server 😔'
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
