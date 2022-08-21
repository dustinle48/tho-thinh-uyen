import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import App from './App'

const env = process.env.NODE_ENV !== "production";
axios.defaults.baseURL = env ? "http://localhost:5000/" : "https://tho-thinh-uyen-backend.herokuapp.com/";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
