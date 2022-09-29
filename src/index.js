import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Auth0Provider
        domain={process.env.REACT_APP_AUTH_0_DOMAIN}
        clientId={process.env.REACT_APP_AUTH_0_CLIENT_ID}
        redirectUri={process.env.REACT_APP_AUTH_0_REDIRECT_URI}
    >
        <App />
    </Auth0Provider>
);
