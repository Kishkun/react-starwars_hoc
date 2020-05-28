import React from "react";

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

import PersonDetails from "../sw-components/Person-details";
import PlanetDetails from "../sw-components/Planet-details";
import StarshipDetails from "../sw-components/Starship-details";

import "./app.css";

class App extends React.Component {

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
                        <PersonDetails itemId={11}/>
                        <PlanetDetails itemId={5}/>
                        <StarshipDetails itemId={10}/>
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
}

export default App;
