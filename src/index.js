import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App'; //The whole react application
import * as serviceWorker from './serviceWorker';

//Render the react app into the index.html
ReactDOM.render(<Router basename={process.env.PUBLIC_URL}>< App />
</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
	