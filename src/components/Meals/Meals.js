import MealsSummary from "./MealsSummary";

import AvailableMeals from "./AvalialeMeals";

import { Fragment } from "react";

    const Meals =(props)=>{
return(
    <Fragment>
        <MealsSummary />
        <AvailableMeals />
    </Fragment>
);
    };
    export default Meals;