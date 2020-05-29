import React from "react";

import Row from "../row/Row";
import { PersonList } from "../sw-components/Item-lists";
import PersonDetails from "../sw-components/Person-details";

class PeoplePage extends React.Component {

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
                left={<PersonList />}
                right={<PersonDetails itemId={selectedItem}/>}
            />
        );
    }
}

export default PeoplePage;