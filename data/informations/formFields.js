import { common } from '/data/global/names.js';

export default [
  {
    label: common.Name,
    type: common.text,
    name: common.name,
    notifications: ['name is required 😡'],
  },
  {
    label: common.Subject,
    type: common.text,
    name: common.subject,
    notifications: ['subject is required 😡'],
  },
  {
    label: common.Email,
    type: common.email,
    name: common.email,
    notifications: ['email is required 😡', 'invalid email 😡'],
  },
  {
    label: common.Message,
    type: common.textarea,
    name: common.message,
    notifications: ['message is required 😡'],
  },
  {
    type: common.submit,
    value: common.Send,
    name: common.submit,
    notifications: [
      'Please wait a moment! 🕐',
      'literally a moment! 🛩',
      'almost, almost! 🚀',
    ],
  },
];
