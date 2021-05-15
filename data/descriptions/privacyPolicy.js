import { classNames, common, elements } from '/data/global/names.js'
export default [
  {
    type: common.paragraph,
    element: elements.p,
    content: [
      'Niniejsza polityka prywatności opisuje zasady postępowania z danymi osobowymi oraz ich wykorzystywania w ramach strony internetowej damianlis.tech. Administratorem strony jest Damian Lis (osoba prywatna) zameldowana we Wrocławiu przy ulicy Estońska 42/24.Kontakt z administratorem możliwy jest pod adresem e-mail damian.lis1293@gmail.com.',
    ],
    classes: [
      classNames.utilities.margin('y', 10),
      classNames.utilities.text.justify,
      classNames.utilities.text.smLeft,
      classNames.utilities.text.lh(25),
    ],
  },

  {
    type: common.header,
    element: elements.h(3),
    content: '§1 Dane osobowe',
    classes: [
      classNames.utilities.margin('t', 40),
      classNames.utilities.margin('b', 20),
    ],
  },

  {
    type: common.paragraph,
    element: elements.p,
    content: [
      '1. Użytkownik (każdy podmiot, który korzysta ze strony) może przekazywać swoje dane osobowe za pomocą formularzy dostępnych na stronie, takich jak formularz kontaktowy.',
      '2. Dane przekazane przez formularz (np. email użytkownika) służą Administratorowi jedynie w celach kontaktowych z użytkownikiem, który wyraził chęć kontaktu za pomocą formularza.',
      '3. Administrator gwarantuje poufność wszelkich przekazanych mu danych osobowych od użytkownika.',
      '4. Podanie danych osobowych jest zawsze dobrowolne. Istnieje możliwość kontaktu w tradycyjny sposób na maila podanego powyżej.',
      '5. Administrator nie udostępnia przekazanych mu danych jakimkolwiek podmiotom trzecim.',
      '6. Administrator nie gromadzi danych osobowych użytkowników, wykorzystuje je jedynie jako możliwość kontaktu z użytkownikiem.',
    ],
    classes: [
      classNames.utilities.margin('y', 10),
      classNames.utilities.text.justify,
      classNames.utilities.text.smLeft,
      classNames.utilities.text.lh(25),
    ],
  },
]
