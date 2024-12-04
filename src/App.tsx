import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppRoutes } from './routes';

function App() {
  return (
    <Router>
      <AppRoutes />
      <Toaster position="bottom-right" />
    </Router>
  );
}

export default App;