import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/tailwind.css';
import { KnockProvider } from '@knocklabs/react';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <KnockProvider apiKey={import.meta.env.VITE_KNOCK_PUBLIC_API_KEY} userId={'123'}>
      <App />
    </KnockProvider>
  </React.StrictMode>,
)
