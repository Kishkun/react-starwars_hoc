import React from "react";
import ItemList from "../item-list/Item-list";
import WithData from "../hoc-helpers/with-data";
import WithSwapiService from "../hoc-helpers/with-swapi-service";
import WithChildFunction from "../hoc-helpers/with-child-function";
import Compose from "../hoc-helpers/compose";

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

const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    }
};

const mapPlanetsMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    }
};

const mapStarshipsMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    }
};

const PersonList = Compose(
    WithSwapiService(mapPersonMethodsToProps),
    WithData,
    WithChildFunction(renderName)
)(ItemList);

const PlanetList = Compose(
    WithSwapiService(mapPlanetsMethodsToProps),
    WithData,
    WithChildFunction(renderName)
)(ItemList);

const StarshipList = Compose(
    WithSwapiService(mapStarshipsMethodsToProps),
    WithData,
    WithChildFunction(renderName)
)(ItemList);

export {
    PersonList,
    PlanetList,
    StarshipList
}