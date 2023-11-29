import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './components/App/App';
import {AppContext} from "./context/app-context";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppContext>
      <App />

    </AppContext>
);

