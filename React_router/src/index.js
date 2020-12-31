import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import App from './app.jsx';




render(<React.StrictMode>
    <Router>
        <App style={{margin:"0",padding:"0"}}/>
    </Router>
        </React.StrictMode>,
    document.getElementById('app')
)

if(module.hot) module.hot.accept();