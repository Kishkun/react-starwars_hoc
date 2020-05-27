import React from "react";
import ItemList from "../item-list/Item-list";
import WithData from "../hoc-helpers/With-data";
import SwapiService from "../../services/swapi-service";

const swapiService = new SwapiService();

const {
    getAllPeople,
    getAllPlanets,
    getAllStarships
} =swapiService;

const WithChildFunction = (Wrapped, fn) => {
    return (props) => {
        return(
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
};

const renderName = ({name}) => {
    return (
        <span>{name}</span>
    )
};
const renderModelAndName = ({name, model}) => {
    return (
        <span>{name} ({model})</span>
    )
};

const PersonList = WithData(
    WithChildFunction(ItemList, renderName), getAllPeople);

const PlanetList = WithData(
    WithChildFunction(ItemList, renderName), getAllPlanets);

const StarshipList = WithData(
    WithChildFunction(ItemList, renderModelAndName), getAllStarships);

export {
    PersonList,
    PlanetList,
    StarshipList
}