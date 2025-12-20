'use client';

import { useRotatingList } from "../../hooks";
import { FoodMenu } from "./FoodMenu";

export function FoodMenuCarousel(){
    console.log('🧩 COMPONENT - FOOD MENU CAROUSEL');

    const [category, currentArray, interval] = useRotatingList(15000, 7);

    return <FoodMenu products={ currentArray } category={ category } interval={ interval }/>
}