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

    state = {
        showRandomPlanet: true,
        swapiService: new SwapiService()
    };

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    };

    onServiceChange = () => {
        this.setState((state) => {
            const Service = state.swapiService instanceof SwapiService ?
                DummySwapiService : SwapiService;
            return {
                swapiService: new Service()
            }
        })
    };

    render() {
        const {swapiService} = this.state;

        const planet = this.state.showRandomPlanet ?
            <RandomPlanet/> :
            null;

        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={swapiService}>
                    <div className="stardb-app">
                        <Header onServiceChange={this.onServiceChange}/>
                        {planet}
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
