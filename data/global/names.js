export const common = {
  headline: 'headline',
  header: 'header',
  title: 'title',
  image: 'image',
  paragraph: 'paragraph',
  link: 'link',
  list: 'list',
  break: 'break',
  code: 'code',
  theme: 'theme',
  fieldname: 'fieldname',
  listeners: 'listeners',
  attributes: 'attributes',
  classes: 'classes',
  styles: 'styles',
  type: 'type',
  object: 'object',
  language: 'language',
  Name: 'Name',
  name: 'name',
  Subject: 'Subject',
  subject: 'subject',
  Email: 'Email',
  email: 'email',
  Message: 'Message',
  message: 'message',
  TEXTAREA: 'TEXTAREA',
  textarea: 'textarea',
  text: 'text',
  submit: 'submit',
  Send: 'Send',
};

export const programmingLngs = {
  js: 'js',
  html: 'html',
};

export const elPosition = {
  relative: 'relative',
};

export const txtAlign = {
  center: 'center',
  left: 'left',
  justify: 'justify',
};

export const types = {
  string: 'string',
};

export const toggleValue = {
  on: 'on',
  off: 'off',
};

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
  br: 'br',
};

export const elementProps = {
  names: {
    textContent: 'textContent',
    disabled: 'disabled',
    innerHTML: 'innerHTML',
  },
  values: {
    blank: '_blank',
  },
};

export const styleProps = {
  names: {
    display: 'display',
    pointerEvents: 'pointerEvents',
    visibility: 'visibility',
    opacity: 'opacity',
    overflow: 'overflow',
    transform: 'transform',
    transition: 'transition',
    position: 'position',
    top: 'top',
    height: 'height',
  },
  values: {
    none: 'none',
    block: 'block',
    visible: 'visible',
    hidden: 'hidden',
    auto: 'auto',
    flex: 'flex',
    hidden: 'hidden',
    relative: 'relative',
    translateX: (value) => `translateX(${value}%)`,
    translateY: (value) => `translateY(${value}%)`,
  },
};

export const events = {
  click: 'click',
  keypress: 'keypress',
  resize: 'resize',
  DOMContentLoaded: 'DOMContentLoaded',
  submit: 'submit',
  focus: 'focus',
  input: 'input',
  scroll: 'scroll',
};

export const fetchProps = {
  methods: {
    POST: 'POST',
  },
  headers: {
    props: {
      ContentType: 'Content-Type',
    },
    values: {
      applicationJson: 'application/json',
    },
  },
};

export const info = {
  clickAnywhereToClose: '(click anywhere to close)',
  emailSendingDelay:
    'The first time the form is sent quite a long time. Please be patient 🙂 (this is due to the e-mail service)',
  themeNote: '*Theme settings will be saved for Your next visit',
  personalizeTheme: 'Personalize Theme',
  duringDevelopment: 'During dev...',
  momentLonger: 'literally a moment! 🛩',
  sendingNow: 'almost, almost! 🚀',
  writeMessage: 'Write a message',
  messageSent: `Message sent! 😎`,
  somethingWentWrong: 'Error, try again! 😬',
  unableToConnect: 'No connection 😔',
};

export const idNames = {
  global: {
    mainContainer: 'global-main-container',
    leftContainer: 'global-left-container',
  },

  sneakPeeks: {
    hook: 'posts-hook',
    wrapper: 'posts-wrapper',
  },

  preview: {
    cornerTl: 'preview-corner-tl',
    cornerTr: 'preview-corner-tr',
    cornerBr: 'preview-corner-br',
    cornerBl: 'preview-corner-bl',
  },

  theme: {
    canvas: 'theme-canvas',
  },
};

export const classNames = {
  curtain: {
    main: 'curtain',
    active: 'curtain-active',
  },
  form: {
    mainContainer: 'form-main-container',
    mainContainerInner: 'form-main-container-inner',
    titleContainer: 'form-title-container',
    title: 'form-title',
    whisper: 'form-whisper',
    infoContainer: 'form-info-container',
    infoIcon: 'form-info-icon',
    infoMessage: 'form-info-message',
    container: 'form-container',
    main: 'form',
    field: 'form-field',
    fieldMessage: 'form-field-message',
    btnDeleteContainer: 'form-btn-delete-container',
    btnDelete: 'form-btn-delete',
    spinnerContainer: 'form-spinner-container',
    spinner: 'form-spinner',
    fieldSubmitNotification: 'form-field-submit-notification',
    fieldInputNotification: 'form-field-input-notification',
  },
  global: {
    leftBtn: 'global-left-btn',
  },

  sneakPeeks: {
    hook: 'sneakPeeks-hook',
    wrapper: 'sneakPeeks-wrapper',
    container: 'sneakPeeks-container',
  },

  sneakPeek: {
    linkWrapper: 'sneakPeek-link-wrapper',
    container: 'sneakPeek-container',
    thubnail: 'sneakPeek-thubnail',
    preview: 'sneakPeek-preview',
    title: 'sneakPeek-title',
    intro: 'sneakPeek-intro',
    iconsContainer: 'sneakPeek-icons-container',
    ribbon: 'sneakPeek-ribbon',
    ribbonText: 'sneakPeek-ribbon-text',
  },

  preview: {
    container: 'preview-container',
    shadow: 'preview-shadow',
    corner: 'preview-corner',
  },

  skills: {
    container: 'skills-container',
    headline: 'skills-headline',
    header: 'skills-header',
    listItem: 'skills-list-item',
  },

  theme: {
    container: 'theme-container',
    optionsContainer: 'theme-options-container',
    optionsDot: 'theme-options-dot',
    note: 'theme-note',
    optionsDotActive: 'theme-options-dot-active',
  },

  animations: {
    slideInFromLeft: ' slideInFromLeft',
    slideInFromRight: 'slideInFromRight',
    slideInFromTop: 'slideInFromTop',
    showObject: 'showObject',
  },

  utilities: {
    animations: {
      slideInFromTop: 'slideInFromTop',
    },

    position: {
      relative: 'relative',
    },

    border: {
      rounded: 'rounded',
      danger: 'border-danger',
    },

    text: {
      underline: 'text-underline',
      left: 'text-left',
      justify: 'text-justify',
      dash: 'text-dash',
      center: 'text-center',
      lh: (value) => `text-lh-${value}`,
      size: (value) => `text-size-${value}`,
      letterSpacing: (value) => `letter-spacing-${value}`,

      sm: {
        left: 'sm-text-left',
        center: 'sm-text-center',
      },
    },

    h: {
      full: 'h-full',
    },

    w: {
      full: 'w-full',
      max: (value) => `w-max-${value}`,
    },

    m: {
      t: (value) => `mt-${value}`,
      r: (value) => `mr-${value}`,
      b: (value) => `mb-${value}`,
      l: (value) => `ml-${value}`,
      y: (value) => `my-${value}`,
      x: (value) => `mx-${value}`,

      sm: {
        t: (value) => `sm-mt-${value}`,
        r: (value) => `sm-mr-${value}`,
        b: (value) => `sm-mb-${value}`,
        l: (value) => `sm-ml-${value}`,
        y: (value) => `sm-my-${value}`,
        x: (value) => `sm-mx-${value}`,
      },
    },
  },

  prism: {
    languageJS: 'language-js',
  },
};

export const idReferences = {
  global: {
    mainContainer: '#global-main-container',
    leftContainer: '#global-left-container',
  },
  sneakPeeks: {
    main: '#sneakPeeks',
    trigger: '#sneakPeeks-trigger',
    wrapper: '#sneakPeeks-wrapper',
  },
  theme: {
    main: '#theme',
  },
  project: {
    description: '#project-description',
  },
  about: {
    description: '#about-description',
  },
  skills: {
    description: '#skills-description',
  },
  privacyPolicy: {
    description: '#privacyPolicy-description',
  },
};

export const paths = {
  playImg: '/images/icons/stopMusic.svg',
  pauseImg: '/images/icons/playMusic.svg',
  emailImg: '/images/icons/email.svg',
  infoImg: '/images/icons/formInfo.svg',
  arrowImg: '/images/icons/arrow.svg',
  mainPageIntroduction: '/audio/mainPageIntroduction.mp3',
  privacyPolicyIntroduction: '/audio/privacyPolicyIntroduction.mp3',
  fluentBlogIntroduction: '/audio/fluentBlogIntroduction.mp3',
  emailsHandlerIntroduction: '/audio/emailsHandlerIntroduction.mp3',
  portfolioWebsiteIntroduction: '/audio/portfolioWebsiteIntroduction.mp3',
  talkToGisapiaAndTheOthersIntroduction:
    '/audio/talkToGisapiaAndTheOthersIntroduction.mp3',
  leafiIntroduction: '/audio/leafiIntroduction.mp3',
  smallerAppsIntroduction: '/audio/appsForPracticeIntroduction.mp3',
};

export const emailValidationRegexp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const mailEndPoint =
  'https://dirt-ten-risk.glitch.me/api/mail/portfolio';
