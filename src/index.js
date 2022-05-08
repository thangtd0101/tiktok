import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from '~/App';
import { store } from '~/app/store';
import GlobalStyles from '~/components/GlobalStyles/GlobalStyles';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles>
        <App />
      </GlobalStyles>
    </Provider>
  </React.StrictMode>
);
