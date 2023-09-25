import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './providers/AppRouter';
import './styles/index.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
