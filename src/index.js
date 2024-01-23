import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider, theme } from 'antd';
import { GlobalContextProvider } from './contexts/globalcontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
        }}
      >
        <GlobalContextProvider>
          <App />
        </GlobalContextProvider>
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
);