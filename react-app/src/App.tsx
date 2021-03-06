import React from 'react';

import Menu from './components/menu/Menu';
import Home from './components/home/Home';
import './App.scss'

class App extends React.Component {

  /**
   * Renders the default app in the window, we have assigned this to an element called root.
   * 
   * @returns JSX
   * @memberof App
  */
  render() {
    return (
      <div className="App">
        <Menu />
        <Home />
      </div>
    );
  }
}

export default App;