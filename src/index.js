import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import seedData from './seedData.json';

ReactDOM.render(<App arr={seedData}/>, document.getElementById('root'));

serviceWorker.unregister();
