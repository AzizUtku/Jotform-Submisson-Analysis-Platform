/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

const Card = (props) => {
  const { title, content, children } = props;
  return (
    <div className="Card">
      <h2>{title}</h2>
      <p>{content}</p>
      {children}
    </div>
  );
};

Card.propTypes = propTypes;
export default Card;
