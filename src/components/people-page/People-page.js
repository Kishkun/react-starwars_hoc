import React, { Component } from 'react';

import ItemList from '../item-list/Item-list';
import ItemDetails from '../item-details/Item-details';
import SwapiService from '../../services/swapi-service';
import Row from '../row/Row';
import ErrorBoundry from '../error-boundry/Error-boundry';

import './people-page.css';

class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: 11
  };

  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  };

  render() {

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}>

        {(i) => (
          `${i.name} (${i.birthYear})`
        )}

      </ItemList>
    );

    const personDetails = (
      <ErrorBoundry>
        <ItemDetails itemId={this.state.selectedPerson} />
      </ErrorBoundry>
    );

    return (
      <Row left={itemList} right={personDetails} />
    );
  }
}

export default PeoplePage;