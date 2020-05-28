import React, {Component} from "react";

import Header from "../header/Header";
import RandomPlanet from "../random-planet/Random-planet";
import ErrorBoundry from "../error-boundry/Error-boundry";

import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";
import {SwapiServiceProvider} from "../swapi-service-context/Swapi-service-context";

import {
    PersonList,
    PlanetList,
    StarshipList
} from "../sw-components/Item-lists";

import {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
} from "../sw-components/Details"

import "./app.css";

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

        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.swapiService}>
                    <div className="stardb-app">
                        <Header/>
                        <PersonList/>
                        <PlanetList/>
                        <StarshipList/>
                        <PersonDetails itemid={11}/>
                        <PlanetDetails itemid={5}/>
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
}

export default App;
