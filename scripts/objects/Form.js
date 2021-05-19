import curtain from './Curtain.js'
import {
  createElementFn,
  triggerActionOnWindowScrollFn,
  appendElementsToContainerFn,
  setPropsFn,
  setListenersFn,
  setDelayFn,
  toggleClassesFn,
} from '/scripts/helpers/index.js'
import {
  styleProps,
  elementProps,
  fetchProps,
  elements,
  events,
  classNames,
  mailEndPoint,
  paths,
  formFieldsContent,
  common,
  info,
  emailValidationRegexp,
} from '/data/global/names.js'

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
        cbOnEnterTriggerEl: () => this.toggleBtnComponent(common.on),
        cbOnExitTriggerEl: () => this.toggleBtnComponent(common.off),
      })
    }
  }

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

  createInitialComponents() {
    this.btnComponent = appendElementsToContainerFn([this.emailImg], this.btn)
  }

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
          cb: () => curtain.toggleShow(common.off),
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
      textContent: info.writeMessage,
    })

    this.titleWhisper = createElementFn({
      element: elements.p,
      classes: ['form-title-whisper'],
      innerHTML: '(click anywhere to close)',
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

    this.formFields = formFieldsContent.map((field) =>
      createElementFn({
        element: elements.div,
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
        if ('email' === input.id) {
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

  createFormFieldElements({ label, type, name, value, notifications }) {
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
                this.handleFormInputTyping(e.target, name)
              },
            },
            {
              event: events.focus,
              cb: (e) => this.handleFormInputFocus(e.target),
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
                this.handleFormInputNotificationClick(e.target)
            },
          },
        ],
      })
    )

    return lab ? { lab, input, notificationEls } : { input, notificationEls }
  }

  checkInputNotificationVisibility(input) {
    const notifications = [
      ...input.parentElement.querySelectorAll(elements.span),
    ]

    return notifications.some(
      (notification) =>
        notification.style.visibility === styleProps.values.visible
    )
  }

  createMainComponents() {
    this.formSpinnerComponent = appendElementsToContainerFn(
      [this.formSpinner],
      this.formSpinnerContainer
    )

    this.formFieldComponents = this.formFields.map((field, index) => {
      const { lab, input, notificationEls } = Object.entries(
        this.formFieldsElements
      )[index][1]

      lab
        ? appendElementsToContainerFn([lab, input, notificationEls], field)
        : appendElementsToContainerFn(
            [input, ...notificationEls, this.formSpinnerComponent],
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
      [this.title, this.titleWhisper],
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

  handleFormInputTyping(input, name) {
    this.dataFromUser[name] = input.value
    const isInputNotificationVisible = this.checkInputNotificationVisibility(
      input
    )
    isInputNotificationVisible &&
      this.toggleFormTextInputsNotification(common.off, { inputs: [input] })
  }

  handleFormInputFocus(input) {
    const isInputNotificationVisible = this.checkInputNotificationVisibility(
      input
    )
    isInputNotificationVisible &&
      this.toggleFormTextInputsNotification(common.off, { inputs: [input] })
  }

  handleFormInputNotificationClick(input) {
    input.parentElement
      .querySelector(
        input.attributes.fieldname.value === common.message
          ? elements.textarea
          : elements.input
      )
      .focus()
  }

  handleMainComponentCreate() {
    this.toggleBtnComponent(common.off)
    this.createMainElements()
    this.createMainComponents()
    curtain.toggleShow(common.on, {
      appendElements: [this.mainComponent],
      cbsToCallOnHidden: [
        () => {
          this.toggleBtnComponent(common.on)
          this.resetFormTextInputsValue()
          this.resetDataFromUser()
        },
      ],
    })
  }

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
        data.success ? info.messageSent : info.somethingWentWrong
      )
      .catch(() => info.unableToConnect)
  }

  async handleFormSubmit(e) {
    e.preventDefault()
    const isEmailValidate = this.emailValidate()
    const emptyTextInputs = this.findEmptyFormTextInputs()

    this.formEmailInput.value &&
      !isEmailValidate &&
      this.toggleFormTextInputsNotification(common.on, {
        inputs: [this.formEmailInput],
        notificationNumber: 1,
      })
    emptyTextInputs.length &&
      this.toggleFormTextInputsNotification(common.on, {
        inputs: emptyTextInputs,
      })

    if (!isEmailValidate || emptyTextInputs.length) return

    this.disableFormInputs()
    this.toggleDeleteBtnComponent(common.off)
    this.toggleSpinnerComponent(common.on)
    this.toggleFormSubmitInputlNotifications(common.on, {
      firstNotificationDelay: 2000,
      secondNotificationDelay: 8000,
      thirdNotificationDelay: 15000,
    })
    curtain.togglePreventHidden(common.on)

    const feedback = await this.handleEmailSent()
    this.resetFormTextInputsValue()
    this.toggleSpinnerComponent(common.off)
    this.toggleFormSubmitInputlNotifications(common.off, {})
    this.hideFormComponent()
    this.replaceTitleText(feedback)
    this.reduceMainComponentHeight()
    this.moveTitleComponent()
    this.revealTitleWhisper()

    await setDelayFn(2000)
    this.setSelfDestructEventToMainComponent()
    curtain.togglePreventHidden(common.off)
  }

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

  toggleFormTextInputsNotification(toggle, { inputs, notificationNumber }) {
    toggleClassesFn(toggle, {
      elements: inputs,
      classes: [classNames.utilities.border.danger],
    })

    inputs.map((input) => {
      let notificationEls = [
        ...input.parentElement.querySelectorAll(elements.span),
      ]

      setPropsFn([
        {
          elements:
            toggle === common.off
              ? notificationEls
              : [notificationEls[notificationNumber ? notificationNumber : 0]],
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
    })
  }

  toggleFormSubmitInputlNotifications(
    toggle,
    { firstNotificationDelay, secondNotificationDelay, thirdNotificationDelay }
  ) {
    const formSubmitnotification = this.formSubmitInput.parentElement.querySelector(
      elements.span
    )

    switch (toggle) {
      case common.on:
        this.showNotificationTimeout = setPropsFn([
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
            delay: firstNotificationDelay,
          },
        ])
        this.changeFirstNotificationTimout = setPropsFn([
          {
            elements: [formSubmitnotification],
            props: [
              {
                name: elementProps.names.innerHTML,
                value: info.momentLonger,
              },
            ],
            delay: secondNotificationDelay,
          },
        ])
        this.changeSecondNotificationTimout = setPropsFn([
          {
            elements: [formSubmitnotification],
            props: [
              {
                name: elementProps.names.innerHTML,
                value: info.sendingNow,
              },
            ],
            delay: thirdNotificationDelay,
          },
        ])
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

  toggleBtnComponent(toggle) {
    setPropsFn([
      {
        elements: [this.btnComponent],
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

  resetFormTextInputsValue() {
    this.formTextInputs.map((input) => (input.value = ''))
  }

  resetDataFromUser() {
    this.dataFromUser = {}
  }

  hideFormComponent() {
    setPropsFn([
      {
        elements: [this.formComponent],
        styleProps: [
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
    ])
  }

  moveTitleComponent() {
    setPropsFn([
      {
        elements: [this.titleComponent],
        styleProps: [
          {
            name: styleProps.names.top,
            value: '50%',
          },
          {
            name: styleProps.names.position,
            value: styleProps.values.relative,
          },
          {
            name: styleProps.names.transform,
            value: styleProps.values.translateY(-70),
          },
        ],
      },
    ])
  }

  replaceTitleText(message) {
    setPropsFn([
      {
        elements: [this.title],
        props: [
          {
            name: elementProps.names.innerHTML,
            value: message,
          },
        ],
      },
    ])
  }

  revealTitleWhisper() {
    setPropsFn([
      {
        elements: [this.titleWhisper],
        styleProps: [
          {
            name: styleProps.names.opacity,
            value: 1,
            delay: 1800,
          },
        ],
      },
    ])
  }

  reduceMainComponentHeight() {
    setPropsFn([
      {
        elements: [this.mainComponent],
        styleProps: [
          {
            name: styleProps.names.height,
            value: '100px',
            delay: 800,
          },
        ],
      },
    ])
  }

  findEmptyFormTextInputs() {
    let emptyInputs = []

    this.formTextInputs.map((input) => {
      if (input.value === '') {
        emptyInputs.push(input)
      }
    })

    return emptyInputs
  }

  emailValidate() {
    return emailValidationRegexp.test(
      String(this.formEmailInput.value).toLowerCase()
    )
  }

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

  setSelfDestructEventToMainComponent() {
    setListenersFn({
      elements: [this.mainComponent],
      events: [events.click],
      cb: () => curtain.toggleShow(common.off),
    })
  }
}

export default Form
