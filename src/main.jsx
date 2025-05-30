import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import emailjs from '@emailjs/browser';
import './styles/index.css'
import App from './App.jsx'
import { emailConfig } from './config/email-config';

// Initialize EmailJS
emailjs.init(emailConfig.publicKey);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
