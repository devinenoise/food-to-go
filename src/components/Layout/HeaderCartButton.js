import React, { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';

const HeaderCartButton = props => {
  const [btnBump, setBtnBump] = useState(false);
  const context = useContext(CartContext);
  const { items } = context;

  const numberOfCartItems = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnBump ? classes.bump : ''}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    } else {
      setBtnBump(true);
      const timer = setTimeout(() => {
        setBtnBump(false);
      }, 300);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
