import React from 'react';
import ReactDOM, {createRoot} from 'react-dom/client';
import App from './components/app/App';
import './style/style.scss';


ReactDOM
  .createRoot(document.getElementById('root'))
  .render( 
    <App />
  );

