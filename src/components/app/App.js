import React, { Component } from 'react';

import Header from '../header/Header';
import RandomPlanet from '../random-planet/Random-planet';
import ErrorBoundry from '../error-boundry/Error-boundry';

import Row from "../row/Row";
import ItemDetails, { Record } from "../item-details/Item-details";
import SwapiService from "../../services/swapi-service";

import ItemList from '../item-list/Item-list';

import './app.css';

class App extends Component {

  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  render() {

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet/> :
      null;

    const { getPerson,
            getStarship,
            getPersonImage,
            getStarshipImage,
            getAllPeople,
            getAllPlanets } = this.swapiService;

    const personDetails = (
      <ItemDetails
        itemId={11}
        getData={getPerson}
        getImageUrl={getPersonImage} >

        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />

      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage}>

        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="costInCredits" label="Cost" />
      </ItemDetails>
    );

    return (
      <ErrorBoundry>
        <div className="stardb-app">
          <Header />

          <ItemList
            getData={getAllPeople}
            onItemSelected={() => {}}>

            { ({name}) => <span>{name}</span> }
          </ItemList>

          <ItemList
            getData={getAllPlanets}
            onItemSelected={() => {}}>

            { ({name}) => <span>{name}</span> }
          </ItemList>

        </div>
      </ErrorBoundry>
    );
  }
}

export default App;
