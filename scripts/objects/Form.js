import curtain from './Curtain.js'
import {
  createElementFn,
  triggerActionOnWindowScrollFn,
  appendElementsToContainerFn,
  setPropsFn,
  toggleClassesFn,
} from '../helpers/index.js'
import {
  classNames,
  mailEndPoint,
  src,
  formFieldsContent,
} from '../../data/global/names.js'

class Form {
  constructor(container, trigger) {
    const containerSent = document.querySelector(container)
    const triggerElement = document.querySelector(trigger)
    this.dataFromUser = {}

    this.createInitialElements()
    this.createInitialComponents()
    appendElementsToContainerFn([this.btnComponent], containerSent)

    triggerActionOnWindowScrollFn({
      onWhatElement: triggerElement,
      cbOnEnterTriggerEl: () => this.toggleBtnComponent('off'),
      cbOnExitTriggerEl: () => this.toggleBtnComponent('on'),
    })
  }

  createInitialElements() {
    this.btn = createElementFn({
      element: 'button',
      classes: [classNames.global.leftBtn],
      event: 'click',
      listeners: [{ event: 'click', cb: () => this.handleFormCreate() }],
    })

    this.emailImg = createElementFn({
      element: 'img',
      classes: [classNames.utilities.margin.t5],
      src: src.emailImg,
    })
  }

  createInitialComponents() {
    this.btnComponent = appendElementsToContainerFn([this.emailImg], this.btn)
  }

  createMainElements() {
    this.card = createElementFn({
      element: 'div',
      classes: [classNames.form.card],
      event: 'click',
      listeners: [{ event: 'click', cb: (e) => e.stopPropagation() }],
    })

    this.cardInnerContainer = createElementFn({
      element: 'div',
      classes: [classNames.form.cardInnerContainer],
    })

    this.btnDeleteContainer = createElementFn({
      element: 'div',
      classes: [classNames.form.btnDeleteContainer],
    })

    this.btnDelete = createElementFn({
      element: 'button',
      classes: [classNames.form.btnDelete],
      textContent: 'X',
      event: 'click',
      listeners: [{ event: 'click', cb: () => curtain.toggleShow('off') }],
    })

    this.titleContainer = createElementFn({
      element: 'div',
      classes: [classNames.form.titleContainer],
    })

    this.title = createElementFn({
      element: 'h3',
      classes: [classNames.form.title],
      textContent: 'Write to me a message',
    })

    this.formContainer = createElementFn({
      element: 'div',
      classes: [classNames.form.container],
    })

    this.form = createElementFn({
      element: 'form',
      classes: [classNames.form.main],
      event: 'submit',
      listeners: [{ event: 'submit', cb: (e) => this.handleFormSubmit(e) }],
    })

    this.formFields = formFieldsContent.map((field) =>
      createElementFn({
        element: 'div',
        classes: [
          classNames.form.field,
          `${classNames.form.field}-${field.name}`,
        ],
      })
    )

    this.formFieldsElements = formFieldsContent.map((fieldContent) =>
      this.createFormFieldElements(fieldContent)
    )

    this.formSubmitInput = (() => {
      let submitInput
      this.formFieldsElements.map((formFieldElements) => {
        if (formFieldElements.input.type === 'submit')
          submitInput = formFieldElements.input
      })
      return submitInput
    })()

    this.formTextInputs = (() => {
      let textInputs = []
      this.formFieldsElements.map((formFieldElements) => {
        if (formFieldElements.input.type !== 'submit')
          textInputs.push(formFieldElements.input)
      })

      return textInputs
    })()

    this.formSpinnerContainer = createElementFn({
      element: 'div',
      classes: [classNames.form.spinnerContainer],
    })

    this.formSpinner = createElementFn({
      element: 'div',
      classes: [classNames.form.spinner],
    })
  }

  createFormFieldElements({ label, type, name, value, notification }) {
    let lab, input

    switch (type) {
      case 'submit':
        input = createElementFn({
          element: 'input',
          type,
          name,
          id: name,
          value,
        })
        break

      default:
        lab = createElementFn({
          element: 'label',
          textContent: label,
          htmlFor: name,
        })
        input = createElementFn({
          element: type === 'textarea' ? 'textarea' : 'input',
          type,
          name,
          id: name,
          listeners: [
            {
              event: 'input',
              cb: (e) => {
                this.handleFormInput(e, name)
              },
            },
            {
              event: 'focus',
              cb: (e) => {
                this.toggleBorderDanger('off', { element: e.target })
                this.toggleAlertMessage('off', {
                  element: e.target.parentElement.querySelector('span'),
                })
              },
            },
          ],
        })
        break
    }
    const notificationEl = createElementFn({
      element: 'span',
      attributes: [{ type: 'fieldname', name }],
      classes: [
        type === 'submit'
          ? classNames.form.fieldSubmitNotification
          : classNames.form.fieldInputNotification,
      ],
      innerHTML: notification,
    })

    return lab ? { lab, input, notificationEl } : { input, notificationEl }
  }

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
      this.cardInnerContainer
    )

    this.btnDeleteComponent = appendElementsToContainerFn(
      [this.btnDelete],
      this.btnDeleteContainer
    )

    this.cardComponent = appendElementsToContainerFn(
      [this.btnDeleteComponent, this.cardInnerComponent],
      this.card
    )
  }

  handleFormCreate() {
    this.toggleBtnComponent('off')
    this.createMainElements()
    this.createMainComponents()
    curtain.toggleShow('on', {
      appendElements: [this.cardComponent],
      cbsToCallOnHidden: [
        () => {
          this.toggleBtnComponent('on')
          this.resetFormInputsValue()
          this.resetDataFromUser()
        },
      ],
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
          this.showMessageAfterSubmit(data.message)
        } else {
          this.showMessageAfterSubmit(data.message)
        }
      })
      .catch(() => {
        const message = 'Unable to connect to the server 😔'
        this.showMessageAfterSubmit(message)
      })
  }

  async handleFormSubmit(e) {
    e.preventDefault()
    const areEmptyFormInputsValue = this.checkIfEmptyFormInputsValue()
    if (areEmptyFormInputsValue) return

    this.disableFormInputs()
    this.toggleDeleteBtnComponent('on')
    this.toggleSpinnerComponent('on')
    this.toggleSubmitlNotifications('on', {
      firstNotificationDelay: 1000,
      secondNotificationDelay: 8000,
    })

    await this.handleEmailSent()
    this.toggleDeleteBtnComponent('off')
    this.toggleSpinnerComponent('off')
    this.toggleSubmitlNotifications('off', {})
  }

  handleFormInput(e, name) {
    this.dataFromUser[name] = e.target.value
  }

  toggleDeleteBtnComponent(toggle) {
    setPropsFn([
      {
        elements: [this.btnDeleteComponent],
        styleProps: [
          {
            name: 'visibility',
            value: toggle === 'on' ? 'hidden' : 'visible',
          },
          {
            name: 'opacity',
            value: toggle === 'on' ? 0 : 1,
          },
        ],
      },
    ])
  }

  toggleSubmitlNotifications(
    toggle,
    { firstNotificationDelay, secondNotificationDelay }
  ) {
    const formSubmitnotification = this.formSubmitInput.parentElement.querySelector(
      'span'
    )

    switch (toggle) {
      case 'on':
        this.showNotificationTimeout = setPropsFn(
          [
            {
              elements: [formSubmitnotification],
              styleProps: [
                {
                  name: 'visibility',
                  value: 'visible',
                },
                {
                  name: 'opacity',
                  value: 1,
                },
              ],
            },
          ],
          firstNotificationDelay
        )
        this.changeNotificationTimout = setPropsFn(
          [
            {
              elements: [formSubmitnotification],
              rops: [
                {
                  name: 'innerHTML',
                  value: 'literally wait a moment longer! ⚡',
                },
              ],
            },
          ],
          secondNotificationDelay
        )
        break

      case 'off':
        clearInterval(this.showNotificationTimeout)
        clearInterval(this.changeNotificationTimout)
        setPropsFn([
          {
            elements: [formSubmitnotification],
            styleProps: [
              {
                name: 'visibility',
                value: 'hidden',
              },
              {
                name: 'opacity',
                value: 0,
              },
            ],
          },
        ])

      default:
        break
    }
  }

  toggleAlertMessage(toggle, { element }) {
    setPropsFn([
      {
        elements: [element],
        styleProps: [
          {
            name: 'visibility',
            value: toggle === 'on' ? 'visible' : 'hidden',
          },
          {
            name: 'opacity',
            value: toggle === 'on' ? 1 : 0,
          },
        ],
      },
    ])
  }

  toggleBorderDanger(toggle, { element }) {
    toggleClassesFn(toggle, {
      elements: [element],
      classes: [classNames.utilities.border.danger],
    })
  }

  toggleBtnComponent(toggle) {
    setPropsFn([
      {
        elements: [this.btnComponent],
        styleProps: [
          {
            name: 'transform',
            value: toggle === 'on' ? 'translateX(0)' : 'translateX(-100%)',
          },
        ],
      },
    ])
  }

  toggleSpinnerComponent(toggle) {
    setPropsFn([
      {
        elements: [this.formSubmitInput],
        styleProps: [
          {
            name: 'display',
            value: toggle === 'on' ? 'none' : 'block',
          },
        ],
      },
      {
        elements: [this.formSpinnerComponent],
        styleProps: [
          {
            name: 'display',
            value: toggle === 'on' ? 'flex' : 'none',
          },
        ],
      },
    ])
  }

  resetFormInputsValue() {
    this.formTextInputs.map((input) => {
      input.value = ''
    })
  }

  resetDataFromUser() {
    this.dataFromUser = {}
  }

  showMessageAfterSubmit(message) {
    this.resetFormInputsValue()
    setPropsFn(
      [
        {
          elements: [this.titleComponent],
          styleProps: [
            {
              name: 'transition',
              value: '0.9s',
            },
            {
              name: 'position',
              value: 'relative',
            },
            {
              name: 'transform',
              value: 'translateY(-50%)',
            },
            {
              name: 'top',
              value: '50%',
            },
          ],
        },

        {
          elements: [this.formContainerComponent],
          styleProps: [
            {
              name: 'transition',
              value: '0.3s',
            },
            {
              name: 'height',
              value: '0px',
            },
            {
              name: 'overflow',
              value: 'hidden',
            },
            {
              name: 'opacity',
              value: 0,
            },
            {
              name: 'visibility',
              value: 'hidden',
            },
          ],
        },
        {
          elements: [this.title],
          props: [
            {
              name: 'innerHTML',
              value: message,
            },
          ],
        },
      ],
      300
    )
  }

  checkIfEmptyFormInputsValue() {
    let isEmptyInputValue = false
    this.formTextInputs.map((input) => {
      if (input.value === '') {
        this.toggleBorderDanger('on', { element: input })
        this.toggleAlertMessage('on', {
          element: input.parentElement.querySelector('span'),
        })
        isEmptyInputValue = true
      }
    })

    return isEmptyInputValue
  }

  disableFormInputs() {
    const formInputs = [this.formSubmitInput, ...this.formTextInputs]

    formInputs.map((input) => {
      setPropsFn([
        {
          elements: [input],
          props: [
            {
              name: 'disabled',
              value: true,
            },
          ],
          styleProps: [
            {
              name: 'opacity',
              value: 0.4,
            },
          ],
        },
      ])
    })
  }
}

export default Form
