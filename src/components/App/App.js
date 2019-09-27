import React from 'react';
import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ListItem from '../ListItem';
import PersonDetails from '../PersonDetails'

import './App.css';

class App extends React.Component {

  state = {
    selectedPerson: 4
  };

  onPersonSelected = ( id ) => {
    this.setState({
      selectedPerson: id
    });
  };

  render() {
    return (
      <div className="container">
        <Header/>
        <RandomPlanet/>

        <div className="row mb2">
          <div className="col-md-6">
            <ListItem onPersonSelected={ this.onPersonSelected }/>
          </div>
          <div className="col-md-6">
            <PersonDetails personId={ this.state.selectedPerson }/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
