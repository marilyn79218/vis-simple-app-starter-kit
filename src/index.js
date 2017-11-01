import React from 'react';
import ReactDOM from 'react-dom';

import 'react-dual-listbox/lib/react-dual-listbox.css';
import './index.css';
import App from './components/app/App';
import registerServiceWorker from './registerServiceWorker';

const rootEle = document.getElementById('root');

ReactDOM.render(<App />, rootEle);

if (module.hot) {
  module.hot.accept('./components/app/App', () => {
    const NextApp = require('./components/app/App').default
    ReactDOM.render(
      <NextApp />,
      rootEle
    )
  })
}

registerServiceWorker();
