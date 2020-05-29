import React from "react";

import Header from "../header/Header";
import RandomPlanet from "../random-planet/Random-planet";
import ErrorBoundry from "../error-boundry/Error-boundry";

import SwapiService from "../../services/swapi-service";
import DummySwapiService from "../../services/dummy-swapi-service";
import {SwapiServiceProvider} from "../swapi-service-context/Swapi-service-context";

import "./app.css";
import PeoplePage from "../pages/People-page";
import PlanetsPage from "../pages/Planets-page";
import StarshipsPage from "../pages/Starships-page";

class App extends React.Component {

    state = {
        swapiService: new SwapiService()
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

        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={swapiService}>
                    <div className="stardb-app">
                        <Header onServiceChange={this.onServiceChange}/>
                        <RandomPlanet/>
                        <PeoplePage/>
                        <PlanetsPage/>
                        <StarshipsPage/>
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
}

export default App;
