import React from "react";

import Row from "../row/Row";
import { PlanetList } from "../sw-components/Item-lists";
import PlanetDetails from "../sw-components/Planet-details";

class PlanetsPage extends React.Component{

    state = {
        selectedItem: null
    };

    onItemSelected = (id) => {
        this.setState({
            selectedItem: id
        })
    };

    render() {
        const { selectedItem } = this.state;
        return (
            <Row
                left={<PlanetList onItemSelected={this.onItemSelected} />}
                right={<PlanetDetails itemId={selectedItem}/>}
            />
        );
    }
}

export default PlanetsPage;