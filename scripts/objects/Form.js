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
        type: 'textarea',
        name: 'message',
        notification: 'message is required 😡',
      },
      {
        type: 'submit',
        value: 'Wyślij',
        name: 'submit',
        notification: 'Please wait a moment more! 🕐',
      },
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
    this.formBtn = createElementFn({
      element: 'button',
      classes: [classNames.global.leftBtn],
      event: 'click',
      listeners: [{ event: 'click', cb: () => this.handleFormCreate() }],
    })

    this.formBtnIcon = createElementFn({
      element: 'img',
      classes: [classNames.utilities.margin.t5],
      src: src.emailImg,
    })

    return [this.formBtn, this.formBtnIcon]
  }

  joinFormBtnElements(elements) {
    const [formBtn, btnIcon] = elements
    formBtn.appendChild(btnIcon)

    return formBtn
  }

  handleFormCreate() {
    this.toggleFormBtn('off')
    const formElements = this.createFormElements()
    const formComponent = this.joinFormElements(formElements)
    curtain.addCbsToCallOnHidden([
      () => {
        this.toggleFormBtn('on')
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
    })
    this.formFieldsElements = this.createFormFieldsElements()

    this.formFieldsNotifications = this.createFormFieldsMessages()

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
      this.formFieldsNotifications,
      this.formFields,
      this.formSpinnerContainer,
      this.formSpinner,
    ]
  }

  toggleFormDeleteBtnContainer(toggle) {
    this.formDeleteBtnContainer.style.visibility =
      toggle === 'on' ? 'hidden' : 'visible'
    this.formDeleteBtnContainer.style.opacity = toggle === 'on' ? 0 : 1
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
            },
          },
          {
            event: 'click',
            cb: (e) => {
              this.toggleBorderDanger({ e, toggle: 'off' })
              this.toggleAlertMessage({ e, toggle: 'off' })
            },
          },
        ],
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
            },
          },
          {
            event: 'click',
            cb: (e) => {
              this.toggleBorderDanger({ e, toggle: 'off' })
              this.toggleAlertMessage({ e, toggle: 'off' })
            },
          },
        ],
      })
      this.formFieldsInput.push(input)
    }

    return lab ? [lab, input] : [input]
  }

  createFormFieldsMessages() {
    const notifications = this.formFieldsContent.map((field) => {
      return createElementFn({
        element: 'span',
        attributes: [{ type: 'fieldname', name: field.name }],
        classes: [
          field.name === 'submit'
            ? classNames.form.fieldSubmitNotification
            : classNames.form.fieldInputNotification,
        ],
        innerHTML: field.notification,
      })
    })
    return notifications
  }

  toggleAlertMessage({ element, e, toggle }) {
    if (toggle === 'on') {
      element.style.visibility = 'visible'
      element.style.opacity = 1
    } else {
      this.formFieldsNotifications.map((notification) => {
        if (
          e.target.attributes.name.value ===
          notification.attributes.fieldname.value
        ) {
          notification.style.opacity = 0
          notification.style.visibility = 'hidden'
        }
      })
    }
  }

  handleFormBtnDuringWindowScroll(triggerElement) {
    triggerActionOnWindowScrollFn({
      onWhatElement: triggerElement,
      cbWhenTrue: () => this.toggleFormBtn('off'),
      cbWhenFalse: () => this.toggleFormBtn('on'),
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
      formFieldsAlerts,
      formFields,
      formSpinnerContainer,
      formSpinner,
    ] = elements

    formTitleContainer.appendChild(formTitle)
    formFields.map((field, index) => {
      if (index === formFields.length - 1) {
        formSpinnerContainer.appendChild(formSpinner)
        field.appendChild(formSpinnerContainer)
      }

      field.appendChild(formFieldsAlerts[index])
      formFieldsElements[index].map((fieldElements) =>
        field.appendChild(fieldElements)
      )
      form.appendChild(field)
    })
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

  toggleBorderDanger({ element, e, toggle }) {
    if (toggle === 'on') {
      element.classList.add(classNames.utilities.border.danger)
    } else {
      e.target.classList.remove(classNames.utilities.border.danger)
    }
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
    this.formFieldsInput.map((input, index) => {
      if (input.value === '') {
        this.toggleBorderDanger({ element: input, toggle: 'on' })
        if (index < this.formFieldsInput.length - 1) {
          this.toggleAlertMessage({
            element: this.formFieldsNotifications[index],
            toggle: 'on',
          })
        }

        isEmptyInputValue = true
      }
    })

    return isEmptyInputValue
  }

  toggleShowSubmitlNotifications({
    toggle,
    showNotificationDelay,
    changeNotificationDelay,
  }) {
    this.formFieldsNotifications.map((notification) => {
      if (notification.attributes.fieldname.value === 'submit') {
        if (toggle === 'on') {
          this.showNotificationTimeout = setTimeout(() => {
            notification.style.visibility = 'visible'
            notification.style.opacity = 1
          }, showNotificationDelay)
          this.changeNotificationTimout = setTimeout(() => {
            notification.innerHTML = 'literally wait a moment longer! ⚡'
          }, changeNotificationDelay)
        } else {
          clearInterval(this.showNotificationTimeout)
          clearInterval(this.changeNotificationTimout)
          notification.style.visibility = 'hidden'
          notification.style.opacity = 0
        }
      }
    })
  }

  async handleEmailSent() {
    return await fetch(mailEndPoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.dataFromUser),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          this.actionAfterSubmit(data.message)
        } else {
          this.actionAfterSubmit(data.message)
        }
      })
      .catch(() => {
        const message = 'Unable to connect to the server 😔'
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

    if (toggle === 'on') {
      submitBtn.style.display = 'none'
      this.formSpinnerContainer.style.display = 'flex'
    } else {
      submitBtn.style.display = 'block'
      this.formSpinnerContainer.style.display = 'none'
    }
  }

  async handleFormSubmit(e) {
    e.preventDefault()
    const areEmptyFormInputsValue = this.checkIfEmptyFormInputsValue()
    if (areEmptyFormInputsValue) return
    this.disableFormInputs()
    this.toggleFormDeleteBtnContainer('on')
    this.toggleSpinner('on')
    this.toggleShowSubmitlNotifications({
      toggle: 'on',
      showNotificationDelay: 1000,
      changeNotificationDelay: 8000,
    })
    curtain.toggleFreeze('on')
    await this.handleEmailSent()
    this.toggleFormDeleteBtnContainer('off')
    this.toggleSpinner('off')
    this.toggleShowSubmitlNotifications({ toggle: 'off' })
    curtain.toggleFreeze('off')
  }

  handleFormInput(e, name) {
    this.dataFromUser[name] = e.target.value
  }

  toggleFormBtn(toggle) {
    if (toggle === 'on') {
      this.formBtn.style.transform = 'translateX(0)'
    } else {
      this.formBtn.style.transform = 'translateX(-100%)'
    }
  }
}

export default Form
