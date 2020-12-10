import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './components/App';
import Firebase, { FirebaseContext } from './components/Firebase';

import configureStore from '../src/store/configureStore';
import rootReducer from './reducers';

import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

const preloadedState = {};
const store = configureStore(rootReducer, preloadedState);

ReactDOM.render(
  <Provider store={store}>
    <FirebaseContext.Provider value={new Firebase()}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </FirebaseContext.Provider>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
