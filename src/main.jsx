import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { AppTest } from './AppTest.jsx';
import { NavigationProvider } from './context/navigation.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavigationProvider>
      <AppTest />
    </NavigationProvider>
  </React.StrictMode>
);
