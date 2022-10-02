import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import store from "./Redux/store/reduxStore";
import './index.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId='977262636816-c88dg0gnbhpleu9innv53r31nc4n2u7v.apps.googleusercontent.com'>
      <App />
    </GoogleOAuthProvider>
  </Provider>
);