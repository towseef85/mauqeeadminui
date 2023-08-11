import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import './assets/styles/vendors/index.css'
import configureStore from './utility/redux/store';
import AppContextProvider from './utility/AppContextProvider';
import AppThemeProvider from './utility/AppContextProvider/AppThemeProvider';
import AppLocaleProvider from './utility/AppContextProvider/AppLocaleProvider';
import AuthContextProvider from './utility/AppContextProvider/AuthContextProvider';
import { Provider } from 'react-redux';
import AuthRoute from './components/AuthRoute';
import AuthLayout from './components/AuthLayout';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore() 
root.render(
    <AppContextProvider>
      <Provider store={store}>
      <AppThemeProvider>
        <AppLocaleProvider>
        <BrowserRouter>
        <AuthContextProvider>
          <AuthLayout>
            <AuthRoute/>
          </AuthLayout>
        </AuthContextProvider>
        </BrowserRouter>
        </AppLocaleProvider>
      </AppThemeProvider>
      </Provider>
    </AppContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
