// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <Router>
        <Routes>
            {/* <Route path="/" element={<App />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    </Router>
);
