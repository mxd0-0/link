import React from 'react';
import { createRoot } from 'react-dom/client'; // ✅ correct import
import App from './App';
import './index.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement); // ✅ using createRoot from the right place

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
