import React from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../Spinner';
import ErrorMessage from '../ErrorMessage';

import './RandomPlanet.css';

export default class RandomPlanet extends React.Component {

  state = {
    planet: {},
    loading: true,
    error: false
  };

  swapiService = new SwapiService();

  componentDidMount() {
    this.updatePlanet();

    setInterval(this.updatePlanet, 5000);
  }

  onPlanetLoaded = ( planet ) => {
    this.setState({
      planet: planet,
      loading: false
    });
  };

  onError = () => {
    this.setState({
      loading: false,
      error: true
    });
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 17) + 2;

    this.swapiService.getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  };

  render() {
    const { loading, planet, error } = this.state;

    const hasData = !(loading || error);

    return (
      <div className="random-planet jumbotron rounded">
        { error && <ErrorMessage/> }
        { loading && <Spinner/> }
        { hasData && <PlanetView planet={ planet }/> }
      </div>
    );
  }
}


const PlanetView = ( { planet: { id, name, population, rotationPeriod, diameter } } ) => {

  return (
    <React.Fragment>
      <img className="planet-image"
           src={ `https://starwars-visualguide.com/assets/img/planets/${ id }.jpg` }
      />

      <div>
        <h4>{ name }</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{ population }</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{ rotationPeriod }</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{ diameter }</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
};
