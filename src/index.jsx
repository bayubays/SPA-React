import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/styles.css';
import AuthProvider from './contexts/AuthProvider';
import ThemeProvider from './contexts/ThemeProvider';
import LocaleContextProvider from './contexts/LocaleContextProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LocaleContextProvider>
      <AuthProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </AuthProvider>
    </LocaleContextProvider>
  </React.StrictMode>
);
