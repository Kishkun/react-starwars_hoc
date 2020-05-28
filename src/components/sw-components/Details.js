import React from "react";
import ItemDetails, {Record} from "../item-details/Item-details";

import {SwapiServiceConsumer} from "../swapi-service-context/Swapi-service-context";

const PersonDetails = ({itemid}) => {
    return (
        <SwapiServiceConsumer>
            {
                ({getPerson, getPersonImage}) => {
                    return (
                        <ItemDetails
                            itemId={itemid}
                            getData={getPerson}
                            getImageUrl={getPersonImage}>
                            <Record field="gender" label="Gender"/>
                            <Record field="eyeColor" label="Eye Color"/>
                        </ItemDetails>
                    )
                }
            }
        </SwapiServiceConsumer>
    )
};
const PlanetDetails = ({itemid}) => {
    return (
        <SwapiServiceConsumer>
            {
                ({getPlanet, getPlanetImage}) => {
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
                }
            }
        </SwapiServiceConsumer>
    )
};
const StarshipDetails = ({itemid}) => {
    return (
        <SwapiServiceConsumer>
            {
                ({getStarship, getStarshipImage}) => {
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
                }
            }
        </SwapiServiceConsumer>
    )
};

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}