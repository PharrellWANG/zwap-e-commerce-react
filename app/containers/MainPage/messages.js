/*
 * MainPage Messages
 *
 * This contains all the text for the MainPage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.containers.MainPage.header',
    defaultMessage: 'This is MainPage container !',
  },
  // message for form.js
  emailLabel: {
    id: 'app.containers.MainPage.emailLabel',
    defaultMessage: 'Email',
  },
  // messages for validate.js
  required: {
    id: 'app.containers.MainPage.require',
    defaultMessage: 'Required',
  },
});
