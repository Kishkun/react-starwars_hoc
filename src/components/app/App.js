import React, {Component} from "react";

import Header from "../header/Header";
import RandomPlanet from "../random-planet/Random-planet";
import ErrorBoundry from "../error-boundry/Error-boundry";

import Row from "../row/Row";

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
                <div className="stardb-app">
                    <Header/>

                    <PersonList />
                    <PlanetList />
                    <StarshipList />

                    <PersonDetails itemid={11}/>
                </div>
            </ErrorBoundry>
        );
    }
}

export default App;
