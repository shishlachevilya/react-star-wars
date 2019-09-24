import React, { Component } from 'react';
import Header from '../Header';
import RandomPlanet from '../RandomPlanet';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <RandomPlanet/>
      </div>
    );
  }
}

export default App;
