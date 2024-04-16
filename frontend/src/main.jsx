import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/tailwind.css';
import { KnockProvider } from '@knocklabs/react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/ErrorFallback.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <KnockProvider apiKey={import.meta.env.VITE_KNOCK_PUBLIC_API_KEY} userId={'123'}>
        <App />
      </KnockProvider>
    </ErrorBoundary>
  </React.StrictMode>,
)
