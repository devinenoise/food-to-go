import React from 'react';
import { DUMMY_MEALS } from '../../dummy-meals';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';
import Card from '../UI/Card';

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map(meal => {
    return (
      <li>
        <MealItem
          key={meal.id}
          name={meal.name}
          description={meal.description}
          price={meal.price}
        />
      </li>
    );
  });

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
