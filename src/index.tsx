import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import store from './store';
import { Container } from './modules/form/Container';

render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <Container />
    </I18nextProvider>
  </Provider>,
  document.body.appendChild(document.createElement('div'))
);
