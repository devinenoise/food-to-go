import React from 'react';
import { DUMMY_MEALS } from '../../dummy-meals';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem';

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map(meal => {
    return (
      <li>
        <MealItem
          name={meal.name}
          description={meal.description}
          price={meal.price}
        />
      </li>
    );
  });

  return (
    <section className={classes.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
};

export default AvailableMeals;
