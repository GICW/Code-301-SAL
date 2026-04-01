import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Ensure 'root' exists before rendering
document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById('app');
  if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } else {
    console.error("Root element not found. Make sure your index.html contains <div id='root'></div>");
  }
});
