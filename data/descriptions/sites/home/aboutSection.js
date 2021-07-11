import { h, p } from '/data/descriptions/structure.js';
import { txtAlign } from '/data/global/names.js';

export default [
  h('About me', { mb: 20, mt: 10, underline: true, smAlign: txtAlign.center }),

  p(
    [
      'Over a year and a half of continuous self study, I have been developing as a frontend developer with a basic backend skills.',
      'I fell in love with programming because of the ability to create amazing projects and developing my problem-solving skills.',
      `Generaly I love creating e-commerce sites (React/Express) and pseudo-intelligent apps like chatbot (JS/OOP/Design patterns).`,
    ],
    { my: 20 }
  ),
];
