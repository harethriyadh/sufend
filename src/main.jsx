import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import LoginPage from './auth/login';
import RegisterPage from "./auth/register";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IndexPage from "../public/index"; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/index" element={<IndexPage />} /> 
      </Routes>
    </BrowserRouter>
  </StrictMode>
);