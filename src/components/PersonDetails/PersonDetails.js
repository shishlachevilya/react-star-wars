import React, { Fragment } from 'react';
import Spinner from '../Spinner';
import ErrorMessage from '../ErrorMessage';
import SwapiService from '../../services/swapi-service';

import './PersonDetails.css';

export default class PersonDetails extends React.Component {

  swapiServese = new SwapiService();

  state = {
    person: null,
    loading: true,
    error: false
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if(this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  onPersonLoaded = (person) => {
    this.setState({
      person: person,
      loading: false
    });
  };

  onError = () => {
    this.setState({
      loading: false,
      error: true
    });
  };

  updatePerson() {
    const { personId } = this.props;

    if(!personId) {
      return;
    }

    this.swapiServese.getPerson(personId)
      .then(this.onPersonLoaded)
      .catch(this.onError);
  };

  render() {
    if(!this.state.person) {
      return <span>Select a person from list</span>
    }

    const { person, loading, error } = this.state;

    const hasData = !(loading || error);

    return (
      <div className="person-details card">
        { error && <ErrorMessage/> }
        { loading && <Spinner/> }
        { hasData && <PersonView person={ person }/> }
      </div>
    );
  }
}

const PersonView = ({ person: { id, name, gender, birthYear, eyeColor } }) => {
  return (
    <Fragment>
      <img className="person-image"
           src={ `https://starwars-visualguide.com/assets/img/characters/${ id }.jpg` }
           alt={ name }
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
            <span>{ birthYear }</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>{ eyeColor }</span>
          </li>
        </ul>
      </div>
    </Fragment>
  )
};
