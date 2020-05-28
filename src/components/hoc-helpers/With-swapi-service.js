import React from "react";
import {SwapiServiceConsumer} from "../swapi-service-context/Swapi-service-context";

const WithSwapiService = (Wrapped) => {
    return (props) => {
        return (
            <SwapiServiceConsumer>
                {
                    (swapiService) => {
                        return (
                            <Wrapped
                                {...props}
                                swapiService={swapiService}
                            />
                        )
                    }
                }
            </SwapiServiceConsumer>
        )
    }
};

export default WithSwapiService;
