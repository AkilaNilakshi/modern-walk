import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import './css/custom.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Clarity from '@microsoft/clarity';
import ClarityTestPage from './components/clarityTestPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

const projectId = "s5g6h4nd0c";
Clarity.init(projectId);

root.render(
  <React.StrictMode>
    <ClarityTestPage/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
