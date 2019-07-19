/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './Modal.css';
import OutsideClickHandler from 'react-outside-click-x';

const modal = props => props.isVisible && (
  <div className="modal">
    <OutsideClickHandler
      onOutsideClick={props.onOutsideClick}
    >
      <div className="modal-content">
        <span onClick={props.onOutsideClick} className="close" role="button" tabIndex="0">&times;</span>
        {props.children}
      </div>
    </OutsideClickHandler>
  </div>
);

export default modal;
