import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Routes from './routes';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux'
import store from './redux/store';

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store} >
    <MuiThemeProvider>
      {Routes}
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
