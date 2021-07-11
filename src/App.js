import React from 'react';

import './App.css';
import Menu from './components/Menu';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';

function App() {
  return (
    <React.Fragment>
      <Menu />
      <Home />
      <About />
      <Services />
    </React.Fragment>
  );
}

export default App;
