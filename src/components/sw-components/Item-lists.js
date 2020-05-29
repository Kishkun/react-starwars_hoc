import React from "react";
import ItemList from "../item-list/Item-list";
import WithData from "../hoc-helpers/With-data";
import WithSwapiService from "../hoc-helpers/With-swapi-service";

const WithChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
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

const PersonList = WithSwapiService(
    WithData(WithChildFunction(ItemList, renderName)),
    mapPersonMethodsToProps
);

const PlanetList = WithSwapiService(
    WithData(WithChildFunction(ItemList, renderName)),
    mapPlanetsMethodsToProps
);

const StarshipList = WithSwapiService(
    WithData(WithChildFunction(ItemList, renderName)),
    mapStarshipsMethodsToProps
);

export {
    PersonList,
    PlanetList,
    StarshipList
}