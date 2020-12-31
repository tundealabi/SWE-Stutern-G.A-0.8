import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/rootReducer';
import App from './app.jsx';


const store = createStore(rootReducer,devToolsEnhancer());

render(<React.StrictMode>
        <Provider store={store}>
        <Router>
        <App style={{margin:"0",padding:"0"}}/>
    </Router>
    </Provider>
        </React.StrictMode>,
    document.getElementById('app')
)

if(module.hot) module.hot.accept();