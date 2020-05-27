import React from "react";
import ItemDetails, { Record } from "../item-details/Item-details";
import WithData from "../hoc-helpers/With-data";
import SwapiService from "../../services/swapi-service";

const swapiService = new SwapiService();

const {
    getPerson,
    getPlanet,
    getStarship,
    getPersonImage,
    getPlanetImage,
    getStarshipImage
} = swapiService;

const PersonDetails = ({ itemid }) => {
    return (
        <ItemDetails
            itemId={itemid}
            getData={getPerson}
            getImageUrl={getPersonImage}>

            <Record field="gender" label="Gender"/>
            <Record field="eyeColor" label="Eye Color"/>
        </ItemDetails>
    )
};
const PlanetDetails = ({ itemid }) => {
    return (
        <ItemDetails
            itemId={itemid}
            getData={getPlanet}
            getImageUrl={getPlanetImage}>

            <Record field="population" label="Population"/>
            <Record field="rotationPeriod" label="Rotation Period"/>
            <Record field="diameter" label="Diameter"/>
        </ItemDetails>
    )
};
const StarshipDetails = ({ itemid }) => {
    return (
        <ItemDetails
            itemId={itemid}
            getData={getStarship}
            getImageUrl={getStarshipImage}>
            <Record field="model" label="Model"/>
            <Record field="length" label="Length"/>
            <Record field="costInCredits" label="Cost"/>
        </ItemDetails>
    )
};

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}