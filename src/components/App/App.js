import React from 'react';
import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import PeoplePage from '../PeoplePage';
import SwapiService from '../../services/swapi-service';

import './App.css';
import ListItem from '../ListItem';
import PersonDetails from '../PersonDetails';

class App extends React.Component {

  swapiService = new SwapiService();

  state = {};

  render() {
    return (
      <div className="container">
        <Header/>

        <RandomPlanet/>

        <PeoplePage/>
      </div>
    );
  }
}

export default App;
