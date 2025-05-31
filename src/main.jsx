import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import emailjs from '@emailjs/browser';
import './styles/index.css'
import App from './App.jsx'
import { emailConfig } from './config/email-config';
import ErrorBoundary from './components/ErrorBoundary';

// Initialize EmailJS
emailjs.init(emailConfig.publicKey);

const root = document.getElementById('root');
if (!root) {
    throw new Error('Root element not found');
}

const app = (
    <StrictMode>
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    </StrictMode>
);

try {
    createRoot(root).render(app);
} catch (error) {
    console.error('Failed to render app:', error);
    document.body.innerHTML = '<div style="color: red;">Failed to load application</div>';
}
