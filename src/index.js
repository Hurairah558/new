import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

ReactDOM.render(
  <BrowserRouter>
      <Provider store={store} >
        <App />
      </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
