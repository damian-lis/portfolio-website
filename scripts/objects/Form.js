import curtain from './Curtain.js';
import {
  createElementFn,
  triggerActionOnWindowScrollFn,
  appendElementsToContainerFn,
  setPropsFn,
  setDelayFn,
  setClassesFn,
} from '/scripts/helpers/index.js';
import {
  styleProps,
  elementProps,
  fetchProps,
  elements,
  events,
  classNames,
  mailEndPoint,
  paths,
  common,
  info,
  emailValidationRegexp,
  toggleValue,
} from '/data/global/names.js';

class Form {
  constructor({ container, trigger, data }) {
    this.formFieldsInfo = data;
    this.notificationTimeouts = [];
    this.dataFromUser = {};

    this.createInitialElements();
    this.createInitialComponents();
    appendElementsToContainerFn({ elements: [this.btnComponent], container });

    trigger &&
      triggerActionOnWindowScrollFn({
        onWhatElement: trigger,
        cbOnEnterTriggerEl: () =>
          this.toggleBtnComponent({ toggle: toggleValue.off }),
        cbOnExitTriggerEl: () =>
          this.toggleBtnComponent({ toggle: toggleValue.on }),
      });
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
    });

    this.emailImg = createElementFn({
      element: elements.img,
      classes: [classNames.utilities.m.t(5)],
      src: paths.emailImg,
    });
  }

  createInitialComponents() {
    this.btnComponent = appendElementsToContainerFn({
      elements: [this.emailImg],
      container: this.btn,
    });
  }

  createMainElements() {
    this.mainContainer = createElementFn({
      element: elements.div,
      classes: [classNames.form.mainContainer],
      listeners: [{ event: events.click, cb: (e) => e.stopPropagation() }],
    });

    this.mainContainerInner = createElementFn({
      element: elements.div,
      classes: [classNames.form.mainContainerInner],
    });

    this.btnDeleteContainer = createElementFn({
      element: elements.div,
      classes: [classNames.form.btnDeleteContainer],
    });

    this.btnDelete = createElementFn({
      element: elements.button,
      classes: [classNames.form.btnDelete],
      textContent: 'X',
      listeners: [
        {
          event: events.click,
          cb: () => curtain.toggleShow({ toggle: toggleValue.off }),
        },
      ],
    });

    this.titleContainer = createElementFn({
      element: elements.div,
      classes: [classNames.form.titleContainer],
    });

    this.title = createElementFn({
      element: elements.h(3),
      classes: [classNames.form.title],
      innerHTML: info.writeMessage,
    });

    this.whisper = createElementFn({
      element: elements.p,
      classes: [classNames.form.whisper],
      innerHTML: info.clickAnywhereToClose,
    });

    this.infoContainer = createElementFn({
      element: elements.div,
      classes: [classNames.form.infoContainer],
    });

    this.infoIcon = createElementFn({
      element: elements.img,
      classes: [classNames.form.infoIcon],
      src: paths.infoImg,
    });

    this.infoMessage = createElementFn({
      element: elements.p,
      classes: [classNames.form.infoMessage],
      innerHTML: info.emailSendingDelay,
    });

    this.formContainer = createElementFn({
      element: elements.div,
      classes: [classNames.form.container],
    });

    this.form = createElementFn({
      element: elements.form,
      classes: [classNames.form.main],
      noValidate: true,
      listeners: [
        { event: events.submit, cb: (e) => this.handleFormSubmit(e) },
      ],
    });

    this.formFields = this.formFieldsInfo.map((formFieldInfo) =>
      createElementFn({
        element: elements.div,
        classes: [
          classNames.form.field,
          `${classNames.form.field}-${formFieldInfo.name}`,
        ],
      })
    );

    this.formFieldsElements = this.formFieldsInfo.map((formFieldInfo) =>
      this.createFormFieldElements({ data: formFieldInfo })
    );

    this.formSubmitInput = (() => {
      let submitInput;
      this.formFieldsElements.map((formFieldElements) => {
        if (formFieldElements.input.type === common.submit)
          submitInput = formFieldElements.input;
      });
      return submitInput;
    })();

    this.formTextInputs = (() => {
      let textInputs = [];
      this.formFieldsElements.map(
        (formFieldElements) =>
          formFieldElements.input.type !== common.submit &&
          textInputs.push(formFieldElements.input)
      );
      return textInputs;
    })();

    this.formEmailInput = (() => {
      let emailInput;
      this.formTextInputs.map((input) => {
        if (common.email === input.id) {
          emailInput = input;
        }
      });
      return emailInput;
    })();

    this.formSpinnerContainer = createElementFn({
      element: elements.div,
      classes: [classNames.form.spinnerContainer],
    });

    this.formSpinner = createElementFn({
      element: elements.div,
      classes: [classNames.form.spinner],
    });
  }

  createFormFieldElements({
    data: { label, type, name, value, notifications },
  }) {
    let lab, input;

    switch (type) {
      case common.submit:
        input = createElementFn({
          element: elements.input,
          type,
          name,
          id: name,
          value,
        });
        break;

      default:
        lab = createElementFn({
          element: elements.label,
          textContent: label,
          htmlFor: name,
        });
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
                this.handleFormTextInputTyping({ input: e.target, name });
              },
            },
            {
              event: events.focus,
              cb: (e) => this.handleFormTextInputFocus({ input: e.target }),
            },
          ],
        });
        break;
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
                this.handleFormTextInputNotificationClick({
                  notification: e.target,
                });
            },
          },
        ],
      })
    );

    return lab ? { lab, input, notificationEls } : { input, notificationEls };
  }

  createMainComponents() {
    this.formSpinnerComponent = appendElementsToContainerFn({
      elements: [this.formSpinner],
      container: this.formSpinnerContainer,
    });

    this.formFieldComponents = this.formFields.map((field, index) => {
      const { lab, input, notificationEls } = Object.entries(
        this.formFieldsElements
      )[index][1];

      lab
        ? appendElementsToContainerFn({
            elements: [lab, input, notificationEls],
            container: field,
          })
        : appendElementsToContainerFn({
            elements: [input, ...notificationEls, this.formSpinnerComponent],
            container: field,
          });

      return field;
    });

    this.formComponent = appendElementsToContainerFn({
      elements: this.formFieldComponents,
      container: this.form,
    });

    this.formMainComponent = appendElementsToContainerFn({
      elements: [this.formComponent],
      container: this.formContainer,
    });

    this.infoComponent = appendElementsToContainerFn({
      elements: [this.infoIcon, this.infoMessage],
      container: this.infoContainer,
    });

    this.titleComponent = appendElementsToContainerFn({
      elements: [this.title, this.whisper, this.infoComponent],
      container: this.titleContainer,
    });

    this.mainComponentInner = appendElementsToContainerFn({
      elements: [this.titleComponent, this.formMainComponent],
      container: this.mainContainerInner,
    });

    this.btnDeleteComponent = appendElementsToContainerFn({
      elements: [this.btnDelete],
      container: this.btnDeleteContainer,
    });

    this.mainComponent = appendElementsToContainerFn({
      elements: [this.btnDeleteComponent, this.mainComponentInner],
      container: this.mainContainer,
    });
  }

  handleFormTextInputTyping({ input, name }) {
    this.dataFromUser[name] = input.value;
    const isInputNotificationVisible = this.checkFormTextInputNotificationVisibility(
      { input }
    );
    isInputNotificationVisible &&
      this.toggleFormTextInputsNotification({
        toggle: toggleValue.off,
        inputs: [input],
      });
  }

  handleFormTextInputFocus({ input }) {
    const isInputNotificationVisible = this.checkFormTextInputNotificationVisibility(
      { input }
    );
    isInputNotificationVisible &&
      this.toggleFormTextInputsNotification({
        toggle: toggleValue.off,
        inputs: [input],
      });
  }

  handleFormTextInputNotificationClick({ notification }) {
    notification.parentElement
      .querySelector(
        notification.attributes.fieldname.value === common.message
          ? elements.textarea
          : elements.input
      )
      .focus();
  }

  handleMainComponentCreate() {
    this.toggleBtnComponent({ toggle: toggleValue.off });
    this.createMainElements();
    this.createMainComponents();
    curtain.toggleShow({
      toggle: toggleValue.on,
      appendElements: [this.mainComponent],
      cbsToCallOnHidden: [
        () => {
          this.toggleBtnComponent({ toggle: toggleValue.on });
          this.resetFormTextInputsValue();
          this.resetDataFromUser();
        },
      ],
    });
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
      .catch(() => info.unableToConnect);
  }

  async handleFormSubmit(e) {
    e.preventDefault();
    const isEmailValidate = this.emailValidate();
    const emptyTextInputs = this.findEmptyFormTextInputs();

    this.formEmailInput.value &&
      !isEmailValidate &&
      this.toggleFormTextInputsNotification({
        toggle: toggleValue.on,
        inputs: [this.formEmailInput],
        notificationNumber: 1,
      });
    emptyTextInputs.length &&
      this.toggleFormTextInputsNotification({
        toggle: toggleValue.on,
        inputs: emptyTextInputs,
      });

    if (!isEmailValidate || emptyTextInputs.length) return;

    this.disableFormInputs();
    this.toggleDeleteBtnComponent({ toggle: toggleValue.off });
    this.toggleSpinnerComponent({ toggle: toggleValue.on });
    this.toggleFormSubmitInputlNotifications({
      toggle: toggleValue.on,
      notificationDuration: 5000,
    });
    curtain.togglePreventHidden({ toggle: toggleValue.on });

    const feedback = await this.handleEmailSent();

    this.resetFormTextInputsValue();
    this.toggleSpinnerComponent({ toggle: toggleValue.off });
    this.toggleFormSubmitInputlNotifications({ toggle: toggleValue.off });
    this.hideTitleInfo();
    this.hideFormComponent();
    this.replaceTitleText({ text: feedback });
    this.reduceMainComponentHeight({ delay: 800 });
    this.moveTitleComponent();
    this.revealTitleWhisper({ delay: 1800 });

    await setDelayFn(2000);
    this.setSelfDestructEventToMainComponent();
    curtain.togglePreventHidden({ toggle: toggleValue.off });
  }

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
    });
  }

  toggleFormTextInputsNotification({ toggle, inputs, notificationNumber }) {
    setClassesFn({
      toggle,
      objs: [
        {
          elements: inputs,
          classes: [classNames.utilities.border.danger],
        },
      ],
    });

    inputs.map((input) => {
      const notificationEls = [
        ...input.parentElement.querySelectorAll(elements.span),
      ];

      const rightNotificationEls =
        toggle === toggleValue.on
          ? [notificationEls[notificationNumber ? notificationNumber : 0]]
          : notificationEls;

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
      });
    });
  }

  toggleFormSubmitInputlNotifications({ toggle, notificationDuration = {} }) {
    const formSubmitnotificationEls = [
      ...this.formSubmitInput.parentElement.querySelectorAll(elements.span),
    ];

    switch (toggle) {
      case toggleValue.on:
        formSubmitnotificationEls.map((notificationEl, index) => {
          const lastNotification =
            formSubmitnotificationEls.length === index + 1;
          const delay = index * notificationDuration;

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
          });

          this.notificationTimeouts.push(appearNotificationTimeout);

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
            });
            this.notificationTimeouts.push(hideNotificationTimeout);
          }
        });
        break;

      case toggleValue.off:
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
        });

        this.notificationTimeouts.map((notificationTimeout) => {
          clearInterval(notificationTimeout);
        });
        break;

      default:
        break;
    }
  }

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
    });
  }

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
    });
  }

  checkFormTextInputNotificationVisibility({ input }) {
    const inputNotifications = [
      ...input.parentElement.querySelectorAll(elements.span),
    ];

    return inputNotifications.some(
      (notification) =>
        notification.style.visibility === styleProps.values.visible
    );
  }

  resetFormTextInputsValue() {
    this.formTextInputs.map((input) => (input.value = ''));
  }

  resetDataFromUser() {
    this.dataFromUser = {};
  }

  hideTitleInfo() {
    setPropsFn({
      objs: [
        {
          elements: [this.infoComponent],
          styleProps: [
            {
              name: styleProps.names.display,
              value: styleProps.values.none,
            },
          ],
        },
      ],
    });
  }

  hideFormComponent() {
    setPropsFn({
      objs: [
        {
          elements: [this.formMainComponent],
          styleProps: [
            {
              name: styleProps.names.overflow,
              value: styleProps.values.hidden,
            },
            {
              name: styleProps.names.opacity,
              value: 0,
            },
          ],
        },
      ],
    });
  }

  moveTitleComponent() {
    setPropsFn({
      objs: [
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
      ],
    });
  }

  replaceTitleText({ text }) {
    setPropsFn({
      objs: [
        {
          elements: [this.title],
          props: [
            {
              name: elementProps.names.innerHTML,
              value: text,
            },
          ],
        },
      ],
    });
  }

  revealTitleWhisper({ delay }) {
    setPropsFn({
      objs: [
        {
          elements: [this.whisper],
          styleProps: [
            {
              name: styleProps.names.opacity,
              value: 1,
            },
          ],
        },
      ],
      delay,
    });
  }

  reduceMainComponentHeight({ delay }) {
    setPropsFn({
      objs: [
        {
          elements: [this.mainComponent],
          styleProps: [
            {
              name: styleProps.names.height,
              value: '100px',
            },
          ],
        },
      ],
      delay,
    });
  }

  findEmptyFormTextInputs() {
    let emptyInputs = [];

    this.formTextInputs.map((input) => {
      if (input.value === '') {
        emptyInputs.push(input);
      }
    });

    return emptyInputs;
  }

  emailValidate() {
    return emailValidationRegexp.test(
      String(this.formEmailInput.value).toLowerCase()
    );
  }

  disableFormInputs() {
    const formInputs = [this.formSubmitInput, ...this.formTextInputs];

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
    );
  }

  setSelfDestructEventToMainComponent() {
    setPropsFn({
      objs: [
        {
          elements: [this.mainComponent],
          listeners: [
            {
              event: events.click,
              cb: () => curtain.toggleShow({ toggle: toggleValue.off }),
            },
          ],
        },
      ],
    });
  }
}

export default Form;
