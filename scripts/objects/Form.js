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
  common,
  info,
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
      cbOnEnterTriggerEl: () => this.toggleBtnComponent(common.toggle.off),
      cbOnExitTriggerEl: () => this.toggleBtnComponent(common.toggle.on),
    })
  }

  createInitialElements() {
    this.btn = createElementFn({
      element: common.elements.button,
      classes: [classNames.global.leftBtn],
      listeners: [
        {
          event: common.events.click,
          cb: () => this.handleCardComponentCreate(),
        },
      ],
    })

    this.emailImg = createElementFn({
      element: common.elements.img,
      classes: [classNames.utilities.margin.t5],
      src: src.emailImg,
    })
  }

  createInitialComponents() {
    this.btnComponent = appendElementsToContainerFn([this.emailImg], this.btn)
  }

  createMainElements() {
    this.card = createElementFn({
      element: common.elements.div,
      classes: [classNames.form.card],
      listeners: [
        { event: common.events.click, cb: (e) => e.stopPropagation() },
      ],
    })

    this.cardInnerContainer = createElementFn({
      element: common.elements.div,
      classes: [classNames.form.cardInnerContainer],
    })

    this.btnDeleteContainer = createElementFn({
      element: common.elements.div,
      classes: [classNames.form.btnDeleteContainer],
    })

    this.btnDelete = createElementFn({
      element: common.elements.button,
      classes: [classNames.form.btnDelete],
      textContent: 'X',
      listeners: [
        {
          event: common.events.click,
          cb: () => curtain.toggleShow(common.toggle.off),
        },
      ],
    })

    this.titleContainer = createElementFn({
      element: common.elements.div,
      classes: [classNames.form.titleContainer],
    })

    this.title = createElementFn({
      element: common.elements.h(3),
      classes: [classNames.form.title],
      textContent: info.writeMessage,
    })

    this.formContainer = createElementFn({
      element: common.elements.div,
      classes: [classNames.form.container],
    })

    this.form = createElementFn({
      element: common.elements.form,
      classes: [classNames.form.main],
      listeners: [
        { event: common.events.submit, cb: (e) => this.handleFormSubmit(e) },
      ],
    })

    this.formFields = formFieldsContent.map((field) =>
      createElementFn({
        element: common.elements.div,
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

    this.formSpinnerContainer = createElementFn({
      element: common.elements.div,
      classes: [classNames.form.spinnerContainer],
    })

    this.formSpinner = createElementFn({
      element: common.elements.div,
      classes: [classNames.form.spinner],
    })
  }

  createFormFieldElements({ label, type, name, value, notification }) {
    let lab, input

    switch (type) {
      case common.submit:
        input = createElementFn({
          element: common.elements.input,
          type,
          name,
          id: name,
          value,
        })
        break

      default:
        lab = createElementFn({
          element: common.elements.label,
          textContent: label,
          htmlFor: name,
        })
        input = createElementFn({
          element:
            type === common.elements.textarea
              ? common.elements.textarea
              : common.elements.input,
          type,
          name,
          id: name,
          listeners: [
            {
              event: common.events.input,
              cb: (e) => this.handleFormInputTyping(e, name),
            },
            {
              event: common.events.focus,
              cb: (e) => this.handleFormInputFocus(e),
            },
          ],
        })
        break
    }
    const notificationEl = createElementFn({
      element: common.elements.span,
      attributes: [{ name: common.fieldname, value: name }],
      classes: [
        type === common.submit
          ? classNames.form.fieldSubmitNotification
          : classNames.form.fieldInputNotification,
      ],
      innerHTML: notification,
      listeners: [
        {
          event: common.events.click,
          cb: (e) => this.handleFormNotificationClick(e),
        },
      ],
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

    return this.cardComponent
  }

  handleFormInputTyping(e, name) {
    this.dataFromUser[name] = e.target.value
  }

  handleFormInputFocus(e) {
    this.toggleBorderDanger(common.toggle.off, {
      element: e.target,
    })
    this.toggleAlertMessage(common.toggle.off, {
      element: e.target.parentElement.querySelector(common.elements.span),
    })
  }

  handleFormNotificationClick(e) {
    e.target.parentElement
      .querySelector(
        e.target.attributes.fieldname.value === common.message
          ? common.elements.textarea
          : common.elements.input
      )
      .focus()
  }

  handleCardComponentCreate() {
    this.toggleBtnComponent(common.toggle.off)
    this.createMainElements()
    this.createMainComponents()
    curtain.toggleShow(common.toggle.on, {
      appendElements: [this.cardComponent],
      cbsToCallOnHidden: [
        () => {
          this.toggleBtnComponent(common.toggle.on)
          this.resetFormInputsValue()
          this.resetDataFromUser()
        },
      ],
    })
  }

  async handleEmailSent() {
    return await fetch(mailEndPoint, {
      method: common.fetch.methods.POST,
      headers: {
        [common.fetch.headers.props.ContentType]:
          common.fetch.headers.values.applicationJson,
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
    this.toggleDeleteBtnComponent(common.toggle.on)
    this.toggleSpinnerComponent(common.toggle.on)
    this.toggleSubmitlNotifications(common.toggle.on, {
      firstNotificationDelay: 2000,
      secondNotificationDelay: 8000,
      thirdNotificationDelay: 15000,
    })

    await this.handleEmailSent()
    this.toggleDeleteBtnComponent(common.toggle.off)
    this.toggleSpinnerComponent(common.toggle.off)
    this.toggleSubmitlNotifications(common.toggle.off, {})
  }

  toggleDeleteBtnComponent(toggle) {
    setPropsFn([
      {
        elements: [this.btnDeleteComponent],
        styleProps: [
          {
            name: common.styleProps.names.visibility,
            value:
              toggle === common.toggle.on
                ? common.styleProps.values.hidden
                : common.styleProps.values.visible,
          },
          {
            name: common.styleProps.names.opacity,
            value: toggle === common.toggle.on ? 0 : 1,
          },
        ],
      },
    ])
  }

  toggleSubmitlNotifications(
    toggle,
    { firstNotificationDelay, secondNotificationDelay, thirdNotificationDelay }
  ) {
    const formSubmitnotification = this.formSubmitInput.parentElement.querySelector(
      common.elements.span
    )

    switch (toggle) {
      case common.toggle.on:
        this.showNotificationTimeout = setPropsFn(
          [
            {
              elements: [formSubmitnotification],
              styleProps: [
                {
                  name: common.styleProps.names.visibility,
                  value: common.styleProps.values.visible,
                },
                {
                  name: common.styleProps.names.opacity,
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
                  name: common.props.names.innerHTML,
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
                  name: common.props.names.innerHTML,
                  value: info.sendingNow,
                },
              ],
            },
          ],
          thirdNotificationDelay
        )
        break

      case common.toggle.off:
        clearInterval(this.showNotificationTimeout)
        clearInterval(this.changeFirstNotificationTimout)
        clearInterval(this.changeSecondNotificationTimout)
        setPropsFn([
          {
            elements: [formSubmitnotification],
            styleProps: [
              {
                name: common.styleProps.names.visibility,
                value: common.styleProps.values.hidden,
              },
              {
                name: common.styleProps.names.opacity,
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
            name: common.styleProps.names.visibility,
            value:
              toggle === common.toggle.on
                ? common.styleProps.values.visible
                : common.styleProps.values.hidden,
          },
          {
            name: common.styleProps.names.opacity,
            value: toggle === common.toggle.on ? 1 : 0,
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
            name: common.styleProps.names.transform,
            value:
              toggle === common.toggle.on
                ? common.styleProps.values.translateX(0)
                : common.styleProps.values.translateX(-100),
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
            name: common.styleProps.names.display,
            value:
              toggle === common.toggle.on
                ? common.styleProps.values.none
                : common.styleProps.values.block,
          },
        ],
      },
      {
        elements: [this.formSpinnerComponent],
        styleProps: [
          {
            name: common.styleProps.names.display,
            value:
              toggle === common.toggle.on
                ? common.styleProps.values.flex
                : common.styleProps.values.none,
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
              name: common.styleProps.names.top,
              value: '50%',
            },
            {
              name: common.styleProps.names.transition,
              value: '0.9s',
            },
            {
              name: common.styleProps.names.position,
              value: common.styleProps.values.relative,
            },
            {
              name: common.styleProps.names.transform,
              value: common.styleProps.values.translateY(-50),
            },
          ],
        },

        {
          elements: [this.formComponent],
          styleProps: [
            {
              name: common.styleProps.names.transition,
              value: '0.3s',
            },
            {
              name: common.styleProps.names.height,
              value: '0px',
            },
            {
              name: common.styleProps.names.overflow,
              value: common.styleProps.values.hidden,
            },
            {
              name: common.styleProps.names.opacity,
              value: 0,
            },
            {
              name: common.styleProps.names.visibility,
              value: common.styleProps.values.hidden,
            },
          ],
        },
        {
          elements: [this.title],
          props: [
            {
              name: common.props.names.innerHTML,
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
        this.toggleBorderDanger(common.toggle.on, { element: input })
        this.toggleAlertMessage(common.toggle.on, {
          element: input.parentElement.querySelector(common.elements.span),
        })
        isEmptyInputValue = true
      }
    })

    return isEmptyInputValue
  }

  disableFormInputs() {
    const formInputs = [this.formSubmitInput, ...this.formTextInputs]

    formInputs.map((input) =>
      setPropsFn([
        {
          elements: [input],
          props: [
            {
              name: common.props.names.disabled,
              value: true,
            },
          ],
          styleProps: [
            {
              name: common.styleProps.names.opacity,
              value: 0.4,
            },
          ],
        },
      ])
    )
  }
}

export default Form
