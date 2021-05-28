import React from 'react';
import classes from './MealItem.module.css';
import Card from '../UI/Card';

const MealItem = props => {
  return (
    <Card>
      <ul className={classes.meal}>
        <h3>{props.name}</h3>
        <li className={classes.description}>{props.description}</li>
        <li className={classes.price}>{props.price}</li>
      </ul>
    </Card>
  );
};

export default MealItem;
