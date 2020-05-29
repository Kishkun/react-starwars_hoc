import React from "react";
import {SwapiServiceConsumer} from "../swapi-service-context/Swapi-service-context";

const WithSwapiService = (mapMethodsToProps) => (Wrapped) => {
    return (props) => {
        return (
            <SwapiServiceConsumer>
                {
                    (swapiService) => {
                        const serviceProps = mapMethodsToProps(swapiService);
                        return (
                            <Wrapped
                                {...props}
                                {...serviceProps}
                            />
                        )
                    }
                }
            </SwapiServiceConsumer>
        )
    }
};

export default WithSwapiService;
