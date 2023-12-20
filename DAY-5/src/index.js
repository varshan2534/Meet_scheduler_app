import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Landing from './Landing.js';
import Login from './Login';
import Signup from './Signup';
import Calendar from './Calendar.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/Login' element={<Login />}/>
        <Route path='/App' element={<App />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Calendar' element={<Calendar />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
