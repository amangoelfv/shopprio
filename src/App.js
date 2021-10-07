import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.components';

function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
    </div>
  );
}

export default App;
