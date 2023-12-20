import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Login';
import Signup from './Signup';
import Calendar from './Calendar.js';
import Navbar from './Navbar.js';
import AboutPage from './AboutPage.js';
import ContactUsPage from './Contact.js';
import Landing from './landing.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
        <Navbar />
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/Login' element={<Login />}/>
        <Route path='/App' element={<App />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Calendar' element={<Calendar />} />
        <Route path='/AboutPage' element={<AboutPage />}/>
        <Route path='/ContactUsPage' element={<ContactUsPage />}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
