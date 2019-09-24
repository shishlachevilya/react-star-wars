import React from 'react';

import './RandomPlanet.css';

export default class RandomPlanet extends React.Component {

  render() {
    return (
      <div className="random-planet jumbotron rounded">
        <img className="planet-image"
             src=''/>
        <div>
          <h4>name</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>100000</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>1 ear</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>1000</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
