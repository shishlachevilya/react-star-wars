import React from 'react';

import './PersonDetails.css';
import SwapiService from '../../services/swapi-service';

class PersonDetails extends React.Component {

  swapiServese = new SwapiService();

  state = {
    person: null
  };

  componentDidMount() {
    this.updatePerson();
  }

  updatePerson() {
    const { personId } = this.props;

    if(!personId) {
      return;
    }

    this.swapiServese.getPerson(personId)
      .then(( person ) => {
        this.setState({
          person: person
        });
      });
  };



  render() {

    console.log(this.state.person);
    if(!this.state.person) {
      return <span>Select a person from list</span>
    }

    const { id, name, gender, birth_year, eye_color } = this.state.person;

    return (
      <div className="person-details card">
        <img className="person-image"
             src={ `https://starwars-visualguide.com/assets/img/characters/${id}.jpg` }
        />

        <div className="card-body">
          <h4>{ name }</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{ gender }</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{ birth_year }</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{ eye_color }</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default PersonDetails;
