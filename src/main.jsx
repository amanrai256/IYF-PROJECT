import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Provide the AuthContext to the entire app */}
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
