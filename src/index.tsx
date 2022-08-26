import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './components/App';
import './assets/style/global.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <App/>
);
