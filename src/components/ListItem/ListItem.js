import React from 'react';
import Spinner from '../Spinner';
import SwapiService from '../../services/swapi-service';

import './ListItem.css';

class ListItem extends React.Component {
  state = {
    listItem: null
  };

  componentDidMount() {
    const { getData } = this.props;

    getData()
      .then(( listItem ) => {
        this.setState({
          listItem: listItem
        })
      });
  }

  renderItems( arr ) {
    return arr.map((item) => {
      const { id } = item;
      const label = this.props.renderItem(item);

      return (
        <li
          key={ id }
          className="list-group-item"
          onClick={ () => this.props.onItemSelected(id) }
        >
          { label }
        </li>
      )
    });
  };


  render() {
    const { listItem } = this.state;

    if(!listItem) {
      return <Spinner/>
    }

    const items = this.renderItems(listItem);

    return (
      <ul className="item-list list-group">
        { items }
      </ul>
    );
  }
}

export default ListItem;
