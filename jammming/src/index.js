import React from 'react';
import { createRoot } from "react-dom/client";
import App from './Components/App/App'; "/jammming/src/Components/App/";
import "./index.css";
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
