import React from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../Spinner';

import './ListItem.css';

class ListItem extends React.Component {

  swapiService = new SwapiService();

  state = {
    peopeles: null
  };

  componentDidMount() {
    this.swapiService.getAllPeople()
      .then(( peoples ) => {
        this.setState({
          peoples: peoples
        })
      });
  }

  renderItems( arr ) {
    return arr.map(( { id, name } ) => {
      return (
        <li
          key={ id }
          className="list-group-item"
          onClick={ () => this.props.onPersonSelected(id) }
        >
          { name }
        </li>
      )
    });
  };


  render() {
    const { peoples } = this.state;

    if(!peoples) {
      return <Spinner/>
    }

    const person = this.renderItems(peoples);

    return (
      <ul className="item-list list-group">
        { person }
      </ul>
    );
  }
}

export default ListItem;
