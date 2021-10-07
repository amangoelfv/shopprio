import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.components';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
