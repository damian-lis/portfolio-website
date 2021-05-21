export default [
  {
    label: 'Name',
    type: 'text',
    name: 'name',
    notifications: ['name is required 😡'],
  },
  {
    label: 'Subject',
    type: 'text',
    name: 'subject',
    notifications: ['subject is required 😡'],
  },
  {
    label: 'Email',
    type: 'email',
    name: 'email',
    notifications: ['email is required 😡', 'invalid email 😡'],
  },
  {
    label: 'Message',
    type: 'textarea',
    name: 'message',
    notifications: ['message is required 😡'],
  },
  {
    type: 'submit',
    value: 'Wyślij',
    name: 'submit',
    notifications: ['Please wait a moment! 🕐'],
  },
]
