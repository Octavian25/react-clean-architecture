import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import services from './infrastructure/services';
import 'bootstrap/dist/css/bootstrap.min.css';
import { configureStore } from './application/store';

const app = (
  <HelmetProvider>
    <Suspense fallback={null}>
      <Provider store={configureStore(services)}>
        <Helmet>
          <title>Hello World</title>
          <link rel="canonical" href="https://www.tacobell.com/" />
        </Helmet>
        <App />
      </Provider>
    </Suspense>
  </HelmetProvider>
);

ReactDOM.hydrate(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
