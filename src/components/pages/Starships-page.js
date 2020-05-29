import React from "react";

import Row from "../row/Row";
import {StarshipList} from "../sw-components/Item-lists";
import StarshipDetails from "../sw-components/Starship-details";

class StarshipsPage extends React.Component {

    state = {
        selectedItem: null
    };

    onItemSelected = (id) => {
        this.setState({
            selectedItem: id
        })
    };

    render() {
        const {selectedItem} = this.state;
        return (
            <Row
                left={<StarshipList onItemSelected={this.onItemSelected}/>}
                right={<StarshipDetails itemId={selectedItem}/>}
            />
        );
    }
}

export default StarshipsPage;