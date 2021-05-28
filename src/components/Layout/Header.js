import React, { Fragment } from 'react';
import classes from './Header.module.css';

import mealsImage from '../../assets/meals.jpg';

const Header = props => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Food To Go</h1>
        <button>Cart</button>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='food layout for header' />
      </div>
    </Fragment>
  );
};

export default Header;
