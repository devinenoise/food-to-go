import React, { Fragment } from 'react';
import reactDom from 'react-dom';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = props => {
  return <div className={classes.backdrop}></div>;
};

const ModalOverlay = props => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

// helper to keep portal syntax lean
const portalElement = document.getElementById('overlays');

const Modal = props => {
  return (
    <Fragment>
      {/* second argument on createPortal() is where to place the component */}
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {reactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
