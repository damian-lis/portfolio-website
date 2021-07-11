import { h, p, l } from '/data/descriptions/structure.js';

export default [
  p([
    `Niniejsza polityka prywatności opisuje zasady postępowania z danymi osobowymi oraz ich wykorzystywania w ramach strony internetowej damianlis.pl.`,
    `Administratorem strony jest Damian Lis (osoba prywatna), z którym można się skontaktować pod adresem e-mail damian.lis1293@gmail.com.`,
  ]),

  h('§1 Dane osobowe', { mt: 40 }),

  l(
    [
      '1. Użytkownik (każdy podmiot, który korzysta ze strony) może przekazywać swoje dane osobowe za pomocą formularzy dostępnych na stronie, takich jak formularz kontaktowy.',
      '2. Dane przekazane przez formularz (np. email użytkownika) służą Administratorowi jedynie w celach kontaktowych z użytkownikiem, który wyraził chęć kontaktu za pomocą formularza.',
      '3. Administrator gwarantuje poufność wszelkich przekazanych mu danych osobowych od użytkownika.',
      '4. Podanie danych osobowych jest zawsze dobrowolne. Istnieje możliwość kontaktu w tradycyjny sposób na maila podanego powyżej.',
      '5. Administrator nie udostępnia przekazanych mu danych jakimkolwiek podmiotom trzecim.',
      '6. Administrator nie gromadzi danych osobowych użytkowników, wykorzystuje je jedynie jako możliwość kontaktu z użytkownikiem.',
    ],
    { itemDash: false, itemMl: 0 }
  ),
];
