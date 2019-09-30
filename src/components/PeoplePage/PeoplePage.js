import React, {Component} from 'react';
import PersonDetails from '../PersonDetails';
import ListItem from '../ListItem';
import SwapiService from '../../services/swapi-service';
import ErrorMessage from '../ErrorMessage';

import './PeoplePage.css';


const Row = ({left, rigth}) => {
  return (
    <div className="row mb2">
      <div className="col-md-6">
        {left}
      </div>
      <div className="col-md-6">
        {rigth}
      </div>
    </div>
  );
};

class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: 1,
    hasError: false
  };

  onItemSelected = (id) => {
    this.setState({
      selectedPerson: id
    });
  };

  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }

  render() {
    if(this.state.hasError) {
      return <ErrorMessage/>
    }

    const listItem = (
      <ListItem
        getData={this.swapiService.getAllPeople}
        onItemSelected={this.onItemSelected}
        renderItem={({name, birthYear}) => `${name} - ( ${birthYear} )`}
      />
    );

    const personDetails = (
      <PersonDetails personId={this.state.selectedPerson}/>
    );

    return (
      <Row
        left={listItem}
        rigth={personDetails}
      />
    );
  }
}

export default PeoplePage;
