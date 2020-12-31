import React from 'react';
import { render } from 'react-dom';
import App from './app.jsx';



render(<React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('app')
)

if(module.hot) module.hot.accept();